const paginate 		= 	require('express-paginate'); 
const {ObjectId} 	= 	require('mongodb');
const  brdObj		=	require(WEBSITE_ADMIN_MODULES_PATH+"/admin_modules/breadcrumbs");
const asyncEach		= 	require("async/each");
const clone 		= 	require("clone");

function adminModules() {


	/**
	 * Function for get list of admin modules
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.list = (req, res)=>{

		let limit			= (req.body.length) 		? parseInt(req.body.length) 		: ADMIN_LISTING_LIMIT;
		let skip			=  req.skip
		let sort_conditions = {parent_order : SORT_ASC,parent_id:SORT_ASC,order:SORT_ASC};
		
		let title			= (req.query.title) ? req.query.title : "";
		let statusSearch	= (req.query.status) ? parseInt(req.query.status) : "";
		
		/** Set conditions **/
		var commonConditions = {};
		
		if (title != "") {
			commonConditions.title	=	new RegExp(title, 'i');
		}
		 
		if (statusSearch != "") {
			switch(statusSearch){
				case SEARCHING_ACTIVE:
					commonConditions.is_active 		= ACTIVE;
				break;

				case SEARCHING_DEACTIVE:
					commonConditions.is_active 		= DEACTIVE;
				break;
			}
		}
		
		const amCollection	= db.collection(ADMIN_MODULES_COLLECTION);
		
		amCollection.aggregate([
			{$match	 : commonConditions},
			{$lookup : {
				"from" 			: ADMIN_MODULES_COLLECTION,
				"localField"	: "parent_id",
				"foreignField"	: "_id",
				"as" 			: "parent_detail"
			}},
			{$project :	{
				id:1,title:1,parent_id:1,is_active:1,order:1,modified:1,parent_name:{$arrayElemAt : ["$parent_detail.title",0]},
				parent_order: {$cond: {if: {$eq: ["$parent_id", 0]}, then: '$order', else: {$arrayElemAt:["$parent_detail.order",0]}}},
			}},
			{$sort  : sort_conditions},
			{$skip 	: skip},
			{$limit : limit},
		]).toArray(function(err, results) {

			if (err) throw err;
			
			amCollection.find(commonConditions).count(function(errCount, itemCount) {
				if (errCount) throw errCount;
				
				let pageCount = 	Math.ceil(itemCount / limit);
				
				req.breadcrumbs(brdObj.list);
				
				res.render('list', {results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
				}); 
			});
		});
	};//End list()
	
	
	
	/**
	 * Function for add admin module
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
   	this.add = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data **/
			req.body = sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
 
			try{
				let title		= (req.body.title)		? req.body.title			: "";
				let path 		= (req.body.path)		? req.body.path				: "";
				let groupPath	= (req.body.group_path)	? req.body.group_path		: "";
				let icon		= (req.body.icon)		? req.body.icon	 			: "";
				let order		= (req.body.order)		? req.body.order	 		: "";
				let parentId	= (req.body.parent_id)	? ObjectId(req.body.parent_id)	: 0;

				/** Configure order unique condition*/
				const amCollection	= db.collection(ADMIN_MODULES_COLLECTION);
				amCollection.findOne({
						parent_id	: parentId,
						order 		: parseInt(order),
					},
					{projection: {order:1}},(err, result)=>{
						if(!result){
							amCollection.insertOne({
								title 		: title,
								path 		: path,
								group_path	: groupPath,
								icon 		: icon,
								parent_id	: parentId,
								order 		: parseInt(order),
								is_active	: ACTIVE,
								created		: getUtcDate(),
								modified	: getUtcDate(),
								},(error,qryResult)=>{
									if(!error){
										/** Delete Modules list **/
										myCache.del( "admin_modules_list" );
										

										/** Send success response **/
										req.flash(STATUS_SUCCESS, res.__("admin.admin_module.admin_module_has_been_added_successfully"));
										return res.redirect(WEBSITE_ADMIN_URL+'admin_modules'); 
 
									}
									else{
										/** Send error response **/
										req.session.formData 	=	req.body;
										req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
										return res.redirect(WEBSITE_ADMIN_URL+'admin_modules/add'); 
									}
								}
							);
						}
						else{
							/** Send error message*/
							req.session.formData 	=	req.body;
							req.flash(STATUS_ERROR, res.__("admin.admin_module.order_is_already_exist"));
							return res.redirect(WEBSITE_ADMIN_URL+'admin_modules/add'); 
						}
					}
				);
			}
			catch(e){
				/** Send error response **/
				res.send({
					status	: STATUS_ERROR,
					message	: [{param:ADMIN_GLOBAL_ERROR,msg:res.__("admin.system.something_going_wrong_please_try_again")}]
				});
			}
		}
		else{
			getParentAdminModulesList(req, res).then((parentAdminModuleResponse)=>{
				if(parentAdminModuleResponse.status == STATUS_SUCCESS){
					
					formData = false;
					if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
						formData = req.session.formData;
						req.session.formData = null;
					}
					
					/** Render add page  **/
					req.breadcrumbs(brdObj.add);
					res.render('add_edit',{ 
						parentAdminModules	: parentAdminModuleResponse.result,
						error				: validationErrors, 
						formData			: formData
					});
				}
				else{
					/** Send error response **/
					req.flash(STATUS_ERROR,parentAdminModuleResponse.result.message);
					return res.redirect(WEBSITE_ADMIN_URL+'admin_modules');
				}
			});
		}
	};//End add()
	
	
	
	/**
	 * Function to update  detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.edit = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data **/
			req.body	= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
			let id		= (req.params.id) ? req.params.id :"";

			let title 		= (req.body.title)		? req.body.title			: "";
			let path 		= (req.body.path)		? req.body.path				: "";
			let groupPath 	= (req.body.group_path)	? req.body.group_path		: "";
			let icon		= (req.body.icon)		? req.body.icon	 			: "";
			let order		= (req.body.order)		? req.body.order	 		: "";
			let parentId	= (req.body.parent_id)	? ObjectId(req.body.parent_id)	: 0;
 
			/** Update cms details **/
			const amCollection	= db.collection(ADMIN_MODULES_COLLECTION);	
			amCollection.findOne({
				_id			: {$ne :ObjectId(id)},
				parent_id	: parentId,
				order		: parseInt(order)
			},
			{projection: { _id:1,order:1}},
			(err, result)=>{
				if(!result){
					amCollection.updateOne({
						_id : ObjectId(id)
					},
					{$set: {
						title 		: title,
						path		: path,
						group_path 	: groupPath,
						icon 		: icon,
						parent_id 	: parentId,
						order 		: parseInt(order),
						modified 	: getUtcDate()
					}},(updateErr,updateResult)=>{
						if(!updateErr){
							/** Delete Modules list **/
							myCache.del( "admin_modules_list" );
							

							/** Send success response **/
							req.flash(STATUS_SUCCESS, res.__("admin.admin_module.admin_modules_details_updated_successfully"));
							return res.redirect(WEBSITE_ADMIN_URL+'admin_modules');
						}
						else{
							req.session.formData	=	req.body;
							req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
							return res.redirect(WEBSITE_ADMIN_URL+"admin_modules/edit/"+id);
						}
					});
				}
				else{
					/** Send error response **/
					req.session.formData	=	req.body;
					req.flash(STATUS_ERROR, res.__("admin.admin_module.order_is_already_exist"));
					return res.redirect(WEBSITE_ADMIN_URL+"admin_modules/edit/"+id);
				}
			});	 
		}
		else{
			/** Get details **/
			getAdminModuleDetails(req, res, next).then(detailResponse=>{
				if(detailResponse.status != STATUS_SUCCESS){
					/** Send error response **/
					req.flash(STATUS_ERROR,detailResponse.message);
					res.redirect(WEBSITE_ADMIN_URL+'cms');
					return;
				}
				
				getParentAdminModulesList(req, res).then((parentAdminModuleResponse)=>{
					if(parentAdminModuleResponse.status == STATUS_SUCCESS){
						
						formData = false;
						if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
							formData = req.session.formData;
							req.session.formData = null;
						}
						
						/** Render add page  **/
						req.breadcrumbs(brdObj.edit);
						res.render('add_edit',{
							parentAdminModules	: 	parentAdminModuleResponse.result,
							result 				: 	detailResponse.result,
							error				: 	validationErrors, 
							formData			: 	formData
						});
					}
					else{
						/** Send error response **/
						req.flash(STATUS_ERROR,parentAdminModuleResponse.message);
						return res.redirect(WEBSITE_ADMIN_URL+'admin_modules');
					}
				});
			}).catch(next);	 
		}
	};//End edit()
	
	
	
	/**
	 * Function for get Admin Module Details
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return json
	 */
	let getAdminModuleDetails = (req,res)=>{
		return new Promise(resolve=>{
			let id	= (req.params.id)	? req.params.id	: "";
			if(!id || id ==''){
				let response = {
					status	: STATUS_ERROR,
					message	: res.__("admin.system.invalid_access")
				};
				resolve(response);
			}
			else{
				try{
					/** Get admin module details **/
					const amCollection	= db.collection(ADMIN_MODULES_COLLECTION);
					amCollection.findOne({
							_id : ObjectId(id)
						},
						(err, result)=>{
							if(result){
								let response = {
									status	: STATUS_SUCCESS,
									result	: result,
								};
								resolve(response);
							}	
							else{
								/** Send error response **/
								let response = {
									status	: STATUS_ERROR,
									message	: res.__("admin.system.something_going_wrong_please_try_again")
								};
								resolve(response);
							}
						}
					);
				}catch(e){
					/** Send error response **/
					let response = {
						status	: STATUS_ERROR,
						message	: res.__("admin.system.something_going_wrong_please_try_again")
					};
					resolve(response);
				}
			}
		});
	};//End getAdminModuleDetails();
	
	
	
	/**
	 * Function for update order value
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return null
	 */
	this.changeOrderValue = (req,res)=>{
		/** Sanitize Data **/
		req.body 		= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
		let moduleId	= (req.body.id) 		? (req.body.id)	 		:"";
		let order		= (req.body.new_order) 	? (req.body.new_order)	:"";
		let parentId	= (req.body.parent_id && req.body.parent_id!=0)	? ObjectId(req.body.parent_id)	: 0;
		if(moduleId){
			 
				try{
					const amCollection	= db.collection(ADMIN_MODULES_COLLECTION);
					amCollection.findOne({
							_id   		: 	{$ne :ObjectId(moduleId)},
							parent_id	:	parentId,
							order 		:	parseInt(order),
						},
						{projection: {
							_id:1,order:1,
						}},(err, result)=>{
							if(!result){
								amCollection.updateOne({
										_id : ObjectId(moduleId)
									},
									{$set : {
										order		: parseInt(order),
										modified 	: getUtcDate()
									}},(uppdateErr,updateResult)=>{
										if(!uppdateErr){

											/** Delete Modules list **/
											myCache.del( "admin_modules_list" ); 
											

											/** Send success response **/
											res.send({
												status	: STATUS_SUCCESS,
												message	: res.__("admin.admin_module.order_updated_successfully"),
											});
										}
										else{
											/** Send Error response **/
											res.send({
												status	: STATUS_ERROR,
												message	: res.__("admin.system.something_going_wrong_please_try_again")
											});
										}
									}
								);
							}
							else{
								/** Send error response **/
								res.send({
									status : STATUS_ERROR,
									message: res.__("admin.admin_module.order_is_already_exist")
								});
							}
						}
					);
				}
				catch(e){
					/** Send error response **/
					res.send({
						status	: STATUS_ERROR,
						message	: res.__("admin.system.something_going_wrong_please_try_again")
					});
				}
			 
		}else{
			/** Send error response **/
			res.send({
				status	: STATUS_ERROR,
				message	: res.__("admin.system.invalid_access")
			});
		};
	};//End changeOrderValue()
	
	
	
	/**
	 * Function to get Admin Module list
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return json
	 */
	let	getParentAdminModulesList = (req,res)=>{
		return new Promise(resolve=>{
		 	try{
				/** Get admin modules details **/
				const amCollection	= db.collection(ADMIN_MODULES_COLLECTION);
				amCollection.find({parent_id : 0},{projection: {_id:1,title:1,}}).collation(COLLATION_VALUE).sort({"order":1}).toArray((err,result)=>{
					if(result){
						/** Send success response **/
						let response = {
							status	: STATUS_SUCCESS,
							result	: result
						};
						resolve(response);
					}
					else{
						/** Send error response */
						let response = {
							status	: STATUS_ERROR,
							result	: [],
							message	: res.__("admin.system.something_going_wrong_please_try_again")
						};
						resolve(response);
					}
				});
			}
			catch(e){
				/** Send error response */
				let response = {
					status	: STATUS_ERROR,
					result	: [],
					message	: res.__("admin.system.something_going_wrong_please_try_again")
				};
				resolve(response);
			}
		});
	};//End getAdminModulesList()
	
	
	
	/**
	 * Function for update status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateStatus = (req,res,next)=>{
		let moduleId	= (req.params.id) 			? req.params.id 		: "";
		let modStatus	= (req.params.status) 		? req.params.status	 	: "";
		 
		if(!moduleId){
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(WEBSITE_ADMIN_URL+"admin_modules");
		}

		/** Set update data **/
		let updateData = {modified  : getUtcDate()};
		updateData.is_active = (modStatus==ACTIVE) ? DEACTIVE :ACTIVE;

		/** Update user status*/
		const amCollection	= db.collection(ADMIN_MODULES_COLLECTION);
		amCollection.updateOne({_id : ObjectId(moduleId)},{$set :updateData},(err,result)=>{
			if(err) return next(err);
			
			/** Delete Modules list **/
			myCache.del( "admin_modules_list" );
			
			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.admin_module.admin_module_has_been_updated_successfully"));
			res.redirect(WEBSITE_ADMIN_URL+"admin_modules");
		});
	};//End updateStatus()
	
	
	
	/**
	 * Function for delete cms
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.deleteAdminModule = (req,res,next)=>{
		let moduleId	= (req.params.id) 			? req.params.id 		: "";
		 
		if(!moduleId){
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(WEBSITE_ADMIN_URL+"admin_modules");
		}
 
		const amCollection	= db.collection(ADMIN_MODULES_COLLECTION);
		amCollection.deleteOne({_id : ObjectId(moduleId)},(err,result)=>{
			if(err) return next(err);
			
			/** Delete Modules list **/
			myCache.del( "admin_modules_list" );
			
			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.admin_module.admin_module_has_been_deleted_successfully"));
			res.redirect(WEBSITE_ADMIN_URL+"admin_modules");
		});
	};//End deleteAdminModule()
	
	
	
	this.getAdminModulesListing = (req, res)=>{
		return new Promise(resolve=>{
			try{
				let userId	= (req.session.user._id) 	? req.session.user._id : "";
				const users	= db.collection(USERS_COLLECTION);
				users.findOne({
					_id 		: ObjectId(userId),
					is_deleted 	: NOT_DELETED
				},{projection: {
					user_role_id:1,module_ids:1
				}},(userErr,userResult)=>{
					if(!userErr && userResult){
						let userRoleId	= (userResult.user_role_id) ? userResult.user_role_id : "";
						let moduleLists	= (userResult.module_ids) 	? userResult.module_ids : [];
						let moduleIds	= moduleLists.map(moduleList=>{
							let moduleId = (moduleList._id) ? String(moduleList._id) : "";
							return moduleId;
						});

						const amCollection	= db.collection(ADMIN_MODULES_COLLECTION);
						amCollection.aggregate([
							{$match	 : {is_active : ACTIVE}},
							{$lookup : {
								"from" 			: ADMIN_MODULES_COLLECTION,
								"localField"	: "parent_id",
								"foreignField"	: "_id",
								"as" 			: "parent_detail"
							}},
							{$project 	: { parent_order: { $cond: { if: { $eq: [ "$parent_id", 0 ] }, then: '$order', else: {"$arrayElemAt" : ["$parent_detail.order",0]} } },order:1,parent_id:1,title:1,path:1,group_path:1,icon:1 } },
							{$sort  	: { /*parent_order : 1,*/ parent_id : 1, order : 1}}
						]).toArray((err, result)=>{
							if(!err && result){
								if(result.length > 0){
									let moduleArray = {};
									asyncEach(result,(module, parentCallback)=>{
										let moduleId	= (module._id) 			? module._id 		:"";
										let parentId	= (module.parent_id) 	? module.parent_id 	:0;
										if(moduleIds.indexOf(String(moduleId)) !== -1 || userRoleId == SUPER_ADMIN_ROLE_ID){
											let detail 				= clone(module);

											/** Remove order and parent order and parent id field from array **/
											delete detail['order'];
											delete detail['parent_order'];
											delete detail['parent_id'];

											if(parentId == 0){
												let childs		= [];
												if(moduleArray[moduleId] && moduleArray[moduleId]['childs']){
													childs = moduleArray[moduleId]['childs'];
												}
												detail["childs"] 		= childs;
												moduleArray[moduleId] 	= detail;
											}else{
												if(!moduleArray[parentId]){
													moduleArray[parentId] = {};
												}
												if(!moduleArray[parentId]["childs"]){
													moduleArray[parentId]["childs"] = [];
												}
												moduleArray[parentId]["childs"].push(detail);
											}
											parentCallback(null);
										}else{
											parentCallback(null);
										}
									},(parentErr)=>{
										let response = {
											status : STATUS_SUCCESS,
											result : (moduleArray) ? Object.values(moduleArray) : []
										};
										resolve(response);
									});
								}else{
									let response = {
										status  : STATUS_SUCCESS,
										result  : []
									};
									resolve(response);
								}
							}else{
								let response = {
									status  : STATUS_ERROR,
									result  : [],
									message : res.__("admin.system.something_going_wrong_please_try_again2")
								};
								resolve(response);
							}
						});
					}else{
						let response = {
							status  : STATUS_SUCCESS,
							result  : []
						};
						resolve(response);
					}
				});
			}catch(e){
				let response = {
					status  : STATUS_ERROR,
					result  : [],
					message : res.__("admin.system.something_going_wrong_please_try_again1")
				};
				resolve(response);
			}
		});
	};//End getAdminModulesListing()
	
}

module.exports = new adminModules();