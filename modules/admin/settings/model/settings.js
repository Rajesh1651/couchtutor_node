const paginate 		= 	require('express-paginate'); 
const {ObjectId} 	= 	require('mongodb');
const fsWriteFile	= 	require("fs").writeFile;
const  brdObj		=	require(WEBSITE_ADMIN_MODULES_PATH+"/settings/breadcrumbs");


function Settings() {


	/**
	 * Function for get list of Settings
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getSettingList = (req, res)=>{

		let limit	= (req.body.length)	? parseInt(req.body.length)	: ADMIN_LISTING_LIMIT;
		let skip	=  req.skip
		let title	= (req.query.title) ? req.query.title : "";
		
		/** Set conditions **/
		var commonConditions = {};
		
		if (title != "") {
			commonConditions.title	=	new RegExp(title, 'i');
		}
		
		const settingCollection	= db.collection(SETTING_COLLECTION);
		
		settingCollection.find(commonConditions).skip(skip).limit(limit).toArray(function(err, results) {
			if (err) throw err;
			
			settingCollection.find(commonConditions).count(function(errCount, itemCount) {
				if (errCount) throw errCount;
				
				let pageCount = 	Math.ceil(itemCount / limit);
				
				req.breadcrumbs(brdObj.list);
				
				res.render('list', {results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
				}); 
			});
		});
	};//End getSettingList()

	
	
	/**
	 * Function for add Setting
	 *
	 * @param req 	As	Request Data
	 * @param res 	As	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.addSetting = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data */
			req.body = 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);

			let title 		= 	(req.body.title)			? 	req.body.title			:"";
			let value 		= 	(req.body.value)			?	req.body.value			:"";
			let keyValue 	= 	(req.body.key_value)		? 	req.body.key_value		:"";
			let inputType 	= 	(req.body.input_type)		? 	req.body.input_type		:"";
			let validatType = 	(req.body.validate_type)	? 	req.body.validate_type	:"";
			let order 		= 	(req.body.order)			? 	parseInt(req.body.order) : 0;
			let editable 	= 	(req.body.editable)			? 	req.body.editable		:0;
			let required 	= 	(req.body.required)			? 	req.body.required		:0;
			let validRegx	= 	/^[0-9]+$/;
 
			/** Save Setting details */
			
			let typeArray 	=	keyValue.split('.');
			let type		=	(typeArray[0]) ? typeArray[0] : "";
			
			const settingCollection	= db.collection(SETTING_COLLECTION);
			settingCollection.insertOne({
				type 			: type,
				title 			: title,
				key_value		: keyValue,
				input_type 		: inputType,
				validate_type 	: validatType,
				value 			: value,
				order		 	: parseInt(order),
				editable		: parseInt(editable),
				required		: parseInt(required),
				created			: getUtcDate(),
				modified 		: getUtcDate(),
			},(err,result)=>{
				if(err){
					req.session.formData 	=	req.body;
					req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
					return res.redirect(WEBSITE_ADMIN_URL+'settings/add'); 
				};
				
				/** Write setting in file **/
				writeSettingDetails(req, res).then(response=>{
					/** Send success response **/
					req.flash(STATUS_SUCCESS, "Setting has been added successfully.");
					return res.redirect(WEBSITE_ADMIN_URL+'settings'); 
				});
			});
		}
		else{
			
			formData = false;
			if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
				formData = req.session.formData;
				req.session.formData = null;
			}
			
			req.breadcrumbs(brdObj.add);
			res.render("add",{ 'error': validationErrors, 'formData': formData});
		}
	};//End addSetting()
	
	 
	
	/**
	 * Function to update detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editSetting = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data **/
			req.body	= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
			let id		= (req.params.id) ? req.params.id :"";

			let title 		= 	(req.body.title)		?	req.body.title			:"";
			let value 		= 	(req.body.value)		?	req.body.value			:"";
			let keyValue 	= 	(req.body.key_value)	?	req.body.key_value		:"";
			let inputType 	= 	(req.body.input_type)	? 	req.body.input_type		:"";
			let validatType	= 	(req.body.validate_type)? 	req.body.validate_type	:"";
			let order 		= 	(req.body.order)		? 	req.body.order			:"";
			let editable 	= 	(req.body.editable)		? 	req.body.editable		:0;
			let required 	= 	(req.body.required)		? 	req.body.required		:0;
			let validRegx 	= 	/^[0-9]+$/;
			
			let typeArray 	=	keyValue.split('.');
			let type		=	(typeArray[0]) ? typeArray[0] : "";
			
			/** Update details **/
			const settingCollection	= db.collection(SETTING_COLLECTION);
			settingCollection.updateOne(
				{ _id : ObjectId(id)},
				{$set: {
					type 			: type,
					title 			: title,
					key_value		: keyValue,
					input_type 		: inputType,
					validate_type 	: validatType,
					value 			: value,
					order		 	: parseInt(order),
					editable		: parseInt(editable),
					required		: parseInt(required),
					modified 		: getUtcDate()
				}},
				(err,result)=>{
					if(err){
						req.session.formData 	=	req.body;
						req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
						return res.redirect(WEBSITE_ADMIN_URL+'settings/edit/'+id); 
					};
					
					writeSettingDetails(req, res).then(response=>{
						/** Send success response **/
						req.flash(STATUS_SUCCESS, "Setting has been updated successfully.");
						return res.redirect(WEBSITE_ADMIN_URL+'settings');
					});
				}
			);
			 
		}
		else{
			/** Get Setting details **/
			getSettingDetails(req,res,next).then(response=>{
				if(response.status != STATUS_SUCCESS){
					/** Send error response **/
					req.flash(STATUS_ERROR,response.message);
					res.redirect(WEBSITE_ADMIN_URL+'settings');
					return;
				}
				
				formData = false;
				if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
					formData = req.session.formData;
					req.session.formData = null;
				}
				
				/** Render edit page **/
				req.breadcrumbs(brdObj.edit);
				res.render('edit',{
					result : response.result,
					'error' : validationErrors, 
					'formData' : formData 
				});
			}).catch(next);	 
		}
	};//End editSetting()

	
	
	/**
	 * Function for delete Setting
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.deleteSetting = (req,res,next)=>{
		let id	= (req.params.id) ? req.params.id : '';
		 
		if(!id){
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(WEBSITE_ADMIN_URL+"settings");
		}
  
		const settingCollection	= db.collection(SETTING_COLLECTION);
		settingCollection.deleteOne({_id : ObjectId(id)}, (err,result)=>{
			if(err){
				/** Send error response **/
				req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(WEBSITE_ADMIN_URL+"settings");
			};
			
			writeSettingDetails(req, res).then(response=>{
				/** Send success response **/
				req.flash(STATUS_SUCCESS, "Setting has been deleted successfully.");
				return res.redirect(WEBSITE_ADMIN_URL+"settings");
			});
		});
	};//End deleteSetting()
	
	
	 
	/**
	 *  Function to get settings list and update settings
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	this.prefix = (req, res)=>{
		let type		=	(req.params.type) ? req.params.type	:"";
		let displayType	= 	type.replace(RegExp("_","g")," ");
		if(isPost(req)){
			/** Sanitize Data **/
			req.body 	= 	sanitizeData(req.body,[/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi]);
			let errors 	= 	[];
			if(typeof req.body.settings !== typeof undefined && req.body.settings.length >0){
				let startDate	=	"";
				let endDate		=	"";
				req.body.settings.forEach((records, index)=>{
					
					let settingId		= 	(records.id)					?	records.id		:"";
					let value 			=	(records.value)					?	records.value				:"";
					let title 			= 	(records.title)					?	records.title.toLowerCase()	:"";
					let uppercasetitle 	= 	(records.title)					?	records.title				:"";
					let required 		= 	(records.required)				?	records.required			:"";
					let inputType 		= 	(records.input_type)			?	records.input_type			:"";
					let validateType 	= 	(records.validate_type)			?	records.validate_type		:"";
					startDate			=	((validateType == "start_time") || (validateType == "start_date"))	?	value	:startDate;
					endDate				=	((validateType == "end_time") || (validateType == "end_date"))		?	value	:endDate;
					
					 
					if(value =="" && required == ACTIVE && inputType !="checkbox"){
						errors.push({"param":"setting_"+index+"_value","msg": "admin.setting.please_enter_value"});
					}
					else if(validateType == "number"){
						let validRegx 	= 	/^[0-9]+$/;
						if(!validRegx.test(value)){
							errors.push({"param":"setting_"+index+"_value","msg": "admin.setting.please_enter_valid_value"});
						}
					}
					else if(validateType == "float"){
						let validRegx 	= 	/^[0-9]+([.][0-9]+)?$/;
						if(!validRegx.test(value)){
							errors.push({"param":"setting_"+index+"_value","msg": "admin.setting.please_enter_valid_value"});
						}
					}
					else if(validateType == "percentage"){
						let validRegx 	= 	/^[0-9]+([.][0-9]+)?$/;
						if(!validRegx.test(value)){
							errors.push({"param":"setting_"+index+"_value","msg": "admin.setting.please_enter_valid_value"});
						}
						else if(value < 0 || value >100){
							errors.push({"param":"setting_"+index+"_value","msg": "admin.setting.please_enter_valid_value"});
						}
					}

					if(required == ACTIVE && (validateType == "number" || validateType == "float")){
						if(value <= 0){
							errors.push({"param":"setting_"+index+"_value","msg": "admin.setting.value_should_be_greater_than"});
						}
					}

					if((startDate !="" && endDate !="") && (validateType == "end_time" || validateType == "end_date")){
						if(startDate >= endDate){
							message = (validateType == "end_time")	?	"admin.setting.end_time_should_be_greater_than_start_time":	"admin.setting.end_date_should_be_greater_than_start_date";
							errors.push({"param":"setting_"+index+"_value","msg":message});
						}
					} 
				});
				
				
				
				if(errors.length > 0){
					req.session.validError	=	errors;
					req.session.formData 	=	req.body;
					return res.redirect(WEBSITE_ADMIN_URL+"settings/prefix/"+type);
				}
				

				
				req.body.settings.forEach((records, index)=>{	  
					
					let settingId		= 	(records.id)					?	records.id		:"";
					let value 			=	(records.value)					?	records.value				:"";
					let title 			= 	(records.title)					?	records.title.toLowerCase()	:"";
					let uppercasetitle 	= 	(records.title)					?	records.title				:"";
					let required 		= 	(records.required)				?	records.required			:"";
					let inputType 		= 	(records.input_type)			?	records.input_type			:"";
					let validateType 	= 	(records.validate_type)			?	records.validate_type		:"";
					startDate			=	((validateType == "start_time") || (validateType == "start_date"))	?	value	:startDate;
					endDate				=	((validateType == "end_time") || (validateType == "end_date"))		?	value	:endDate;
					
					if(settingId && settingId!=""){
						try{
							/** Update settings details **/
							const settingCollection	= db.collection(SETTING_COLLECTION);
							settingCollection.updateOne({
									"_id" : ObjectId(settingId),
								},
								{$set:{
									"value" 	: 	value,
									"modified"	: 	getUtcDate()
								}},(err,result)=>{
									if(!err){
										if(req.body.settings.length-1 == index){
											/** Write setting in file **/
											writeSettingDetails(req, res).then(response=>{
												/** Send success response **/
												req.flash(STATUS_SUCCESS, "admin.setting.setting_details_has_been_updated_successfully");
												return res.redirect(WEBSITE_ADMIN_URL+"settings/prefix/"+type);
											});
										}
									}
									else{
										/** Send error response **/
										req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
										return res.redirect(WEBSITE_ADMIN_URL+"settings/prefix/"+type);
									}
								}
							);
						}catch(e){
							/** Send error response **/
							req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
							return res.redirect(WEBSITE_ADMIN_URL+"settings/prefix/"+type);
						}
					}
				});
			}
			else{
				/** Send error response **/
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(WEBSITE_ADMIN_URL+"settings/prefix/"+type);
			}
		}
		else{
			/** Get settings details **/
			getPrefixSettingDetails(req, res).then(response=>{	
				if(response.status == STATUS_SUCCESS){
					
					formData = false;
					if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
						formData = req.session.formData;
						req.session.formData = null;
					}
					
					
					validError = [];
					if((typeof req.session.validError !== typeof undefined) && (req.session.validError != null)){
						validError = req.session.validError;
						req.session.validError = null;
					}
					
					
					
					/**Render edit page*/
					req.breadcrumbs(BREADCRUMBS["admin/setting/prefix"]);
					res.render("prefix",{
						result				: response.result,
						type 				: type,
						dynamic_variable 	: displayType+" Settings",
						dynamic_url			: type,
						displayType			: displayType,
						validError			: validError,
						formData			: formData
					});
				}
				else{
					req.flash("error",response.message);
					res.redirect(WEBSITE_ADMIN_URL+"dashboard");
				}
			});
		}
	};//End prefix()
	
	
	
	/**
	 * Function to get detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getSettingDetails = (req,res,next)=>{
		return new Promise(resolve=>{
			let settingId = (req.params.id) ? req.params.id : "";
			/** Get setting details **/
			const settingCollection	= db.collection(SETTING_COLLECTION);
			settingCollection.findOne(
				{_id : ObjectId(settingId)},
				(err, result)=>{
					if(err) return next(err);

					if(!result){
						/** Send error response **/
						let response = {
							status	: STATUS_ERROR,
							message	: res.__("admin.system.invalid_access")
						};
						return resolve(response);
					}
					 
					let response = {
						status	: STATUS_SUCCESS,
						result	: result
					};
					resolve(response);
				}
			);
		});
	};// End getSettingDetails()
	
	
	
	/**
	 *  Function to write setting details
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return json
	 */
	let writeSettingDetails = (req,res)=>{
		return new Promise(resolve=>{
			const settingCollection	= db.collection(SETTING_COLLECTION);
			settingCollection.find({},{projection: {_id:1,key_value:1,value:1}}).toArray((err, result)=>{
				if(!err){
					let settingsObj = {};
					result.map(record=>{
						let settingKey 		=	(record.key_value)	?	record.key_value	:"";
						let settingValue	= 	(record.value)		?	record.value		:"";

						settingKey 		= 	settingKey.replace(/"/g,'\\"');
						settingKey 		=	settingKey.replace(/'/g,"\\'");
						settingValue 	= 	settingValue.replace(/"/g,'\\"');
						settingValue 	= 	settingValue.replace(/'/g,"\\'");

						settingsObj[settingKey] = settingValue;
					});
					fsWriteFile(WEBSITE_ROOT_PATH+"config/settings.json", JSON.stringify(settingsObj), "utf8",function(err){});
				}
			});

			setTimeout(function(){
				myCache.del( "settings" );
			},5000);

			/** Send success response */
			let response = {
				status	: STATUS_SUCCESS,
			};
			resolve(response);
		});
	};//End writeSettingDetails()
	
	
	
	/**
	 *  Function to get detail of a setting
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return json
	 */
	let getPrefixSettingDetails = (req,res)=>{
		return new Promise(resolve=>{
			let type	=	(req.params.type) ? req.params.type	:"";
			if(!type || type ==""){
				let response = {
					status	: STATUS_ERROR,
					message	: res.__("admin.system.invalid_access")
				};
				resolve(response);
			}
			else{
				try{
					/**Get settings details*/
					const settingCollection	= db.collection(SETTING_COLLECTION);
					settingCollection.find({
						"type" 		: new RegExp(type, 'i'),
						"editable"	: {$ne:0}
					}).sort({order : 1}).toArray((err, result)=>{
						if(typeof result != typeof undefined && result && result.length > 0){
							/** Send success response */
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
								message	: res.__("admin.system.invalid_access")
							};
							resolve(response);
						}
					});
				}
				catch(e){
					/** Send error response */
					let response = {
						status	: STATUS_ERROR,
						message	: res.__("admin.system.something_going_wrong_please_try_again")
					};
					resolve(response);
				}
			}
		});
	};//End getPrefixSettingDetails()
}
module.exports = new Settings();
