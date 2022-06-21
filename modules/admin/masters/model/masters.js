const paginate 		= 	require('express-paginate'); 
const {ObjectId} 	= 	require('mongodb');
const  brdObj		=	require(WEBSITE_ADMIN_MODULES_PATH+"/masters/breadcrumbs");


function Masters() {

	/**
	 * Listing URL
	 */
	const LISTING_URL	=	WEBSITE_ADMIN_URL+"masters/";
	
	
	
	/**
	 * Function for get list of master data
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getMasterDataList = (req, res)=>{
		let masterType		=	(req.params.type)	?	req.params.type	: "";
		let displayType		= 	toTitleCase(masterType.replace(RegExp("_","g")," "));
		
		if(masterType && MASTER_TYPES_NAME[masterType]){
			let limit			= (req.body.length) 		? parseInt(req.body.length) 		: ADMIN_LISTING_LIMIT;
			let skip			=  req.skip
			
			let title			= (req.query.title) ? req.query.title : "";
			let statusSearch	= (req.query.status) ? parseInt(req.query.status) : "";
			
			/** Set conditions **/
			var commonConditions = {dropdown_type : masterType};
			
			if (title != "") {
				commonConditions.title	=	new RegExp(title, 'i');
			}
			 
			if (statusSearch != "") {
				switch(statusSearch){
					case SEARCHING_ACTIVE:
						commonConditions.active 		= ACTIVE;
					break;

					case SEARCHING_DEACTIVE:
						commonConditions.active 		= DEACTIVE;
					break;
				}
			}
			
			const mastersCollection	= db.collection(MASTERS_COLLECTION);
			
			mastersCollection.find(commonConditions).skip(skip).limit(limit).sort( { title: SORT_ASC } ).toArray(function(err, results) {
				if (err) throw err;
				
				mastersCollection.find(commonConditions).count(function(errCount, itemCount) {
					if (errCount) throw errCount;
					
					let pageCount = 	Math.ceil(itemCount / limit);
					
					req.breadcrumbs(brdObj.list);
					
					res.render('list', {results, pageCount, itemCount, type : masterType, dynamic_variable: displayType,
						dynamic_url : masterType, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
					}); 
				});
			});
		}
		else{
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL+DEFAULT_MASTER_TYPE);
		}
	};//End getMasterDataList()
	
	
	
	/**
	 * Function for add master data
	 *
	 * @param req 	As	Request Data
	 * @param res 	As	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.addMasterData = (req, res, next, validationErrors)=>{
		
		let masterType		=	(req.params.type)	?	req.params.type	: "";
		let displayType		= 	toTitleCase(masterType.replace(RegExp("_","g")," "));
		
		if(masterType && MASTER_TYPES_NAME[masterType]){
			if(isPost(req) && !validationErrors){
				/** Sanitize Data */
				req.body = 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);

				let allData		= 	req.body;
				let title				= 	(req.body.title)			?	req.body.title	:"";
				let image			= 	(req.files && req.files.image)	?	req.files.image	:"";
				let imgaeOptions	=	{
					'image' 	:	image,
					'filePath' 	: 	MASTERS_FILE_PATH
				};

				/** Upload  image **/
				moveUploadedFile(req, res,imgaeOptions).then(imgaeResponse=>{
					if(imgaeResponse.status == STATUS_ERROR){
						req.session.formData	=	req.body;
						req.flash(STATUS_ERROR, imgaeResponse.message);
						return res.redirect(LISTING_URL+masterType+"/add");
					}
				 
					/** Set options **/
					let options = {
						title 		:	title,
						table_name 	: 	MASTERS_COLLECTION,
						slug_field 	: 	"slug"
					};
		 
					/** Make Slug */
					getDatabaseSlug(options).then(response=>{
						/** Save Cms details */
						const mastersCollection	= db.collection(MASTERS_COLLECTION);
						mastersCollection.insertOne({
							title				:	title,
							image 				: 	(imgaeResponse.fileName) ? 	imgaeResponse.fileName 	:"",
							slug				: 	(response && response.title)	?	response.title	:"",
							dropdown_type 		: 	masterType,
							active				:	ACTIVE,
							created 			:	getUtcDate(),
							modified 			:	getUtcDate()
						},(err,result)=>{
							if(err){
								/** Send error response **/
								req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
								return res.redirect(LISTING_URL+masterType);
							}

							req.flash(STATUS_SUCCESS, res.__("admin.masters.record_added_successfully"));
							return res.redirect(LISTING_URL+masterType); 
						});
					},error=>{
						req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
						return res.redirect(LISTING_URL+masterType); 
					});
				}).catch(next); 	
			}
			else{
				
				formData = false;
				if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
					formData = req.session.formData;
					req.session.formData = null;
				}
				
				req.breadcrumbs(brdObj.add);
				res.render("add_edit",{type : masterType, dynamic_variable: displayType, dynamic_url : masterType, 'error': validationErrors, 'formData': formData});
			}
		}
		else{
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access") );
			return res.redirect(LISTING_URL+DEFAULT_MASTER_TYPE);
		}
	};//End addMasterData()
	
	
	
	/**
	 * Function for update Master's status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateMasterStatus = (req,res,next)=>{
		let masterId		= 	(req.params.id)		? 	req.params.id	: "";
		let masterStatus	= 	(req.params.status)	? 	req.params.status	: "";
		let masterType		=	(req.params.type)	?	req.params.type	: "";
		
		if(masterType && MASTER_TYPES_NAME[masterType]){
			if(!masterId){
				/** Send error response **/
				req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
				return res.redirect(LISTING_URL+DEFAULT_MASTER_TYPE);
			}

			/** Set update data **/
			let updateData = {modified  : getUtcDate()};
			updateData.active = (masterStatus==ACTIVE) ? DEACTIVE :ACTIVE;

			/** Update status*/
			const mastersCollection	= db.collection(MASTERS_COLLECTION);
			mastersCollection.updateOne({_id : ObjectId(masterId)},{$set :updateData},(err,result)=>{
				if(err){
					/** Send error response **/
					req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
					return res.redirect(LISTING_URL+masterType); 
				}

				/** Send success response **/
				req.flash(STATUS_SUCCESS, res.__("admin.masters.record_updated_successfully"));
				return res.redirect(LISTING_URL+masterType); 
			});
		}
		else{
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL+DEFAULT_MASTER_TYPE);
		}
	};//End updateMasterStatus()
	
	
	
	/**
	 * Function to update Master's detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editMaster = (req, res, next, validationErrors)=>{
		let masterType		=	(req.params.type)	?	req.params.type	: "";
		let displayType		= 	toTitleCase(masterType.replace(RegExp("_","g")," "));
		
		if(masterType && MASTER_TYPES_NAME[masterType]){
		
			if(isPost(req) && !validationErrors){
				/** Sanitize Data **/
				req.body	= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
				let id		= (req.params.id) ? req.params.id :"";

				let allData			= 	req.body;
				let title			= 	(req.body.title)			?	req.body.title	:"";
				let oldimage		= 	(req.body.old_image) ? req.body.old_image :"";
				let image			= 	(req.files && req.files.image)	?	req.files.image	:"";
				let imgaeOptions	=	{
					'image' 	:	image,
					'filePath' 	: 	MASTERS_FILE_PATH,
					'oldPath' 	: 	oldimage
				}; 
				
				moveUploadedFile(req, res, imgaeOptions).then(imgaeResponse=>{
					if(imgaeResponse.status == STATUS_ERROR){											
						/** Send error imgaeResponse **/
						req.session.formData	=	req.body;
						req.flash(STATUS_ERROR, imgaeResponse.message);
						return res.redirect(LISTING_URL+masterType+"/edit/"+id);
					}
					
					
					/** Update master details **/
					const mastersCollection	= db.collection(MASTERS_COLLECTION);
					mastersCollection.updateOne(
						{ _id : ObjectId(id)},
						{$set: {
							title				:	title,
							image 				: 	(imgaeResponse.fileName) ? 	imgaeResponse.fileName 	:"",
							modified 			:	getUtcDate()
						}},
						(err,result)=>{
							if(err){
								/** Send error response **/
								req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
								return res.redirect(LISTING_URL+masterType);
							}

							/** Send success response **/
							req.flash(STATUS_SUCCESS, res.__("admin.masters.record_updated_successfully"));
							res.redirect(LISTING_URL+masterType);
						}
					);
				}).catch(next);	 
			}
			else{
				/** Get cms details **/
				getMasterDetails(req,res,next).then(response=>{
					if(response.status != STATUS_SUCCESS){
						/** Send error response **/
						req.flash(STATUS_ERROR,response.message);
						return res.redirect(LISTING_URL+masterType);
					}
					
					formData = false;
					if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
						formData = req.session.formData;
						req.session.formData = null;
					}
					
					/** Render edit page **/
					req.breadcrumbs(brdObj.edit);
					res.render('add_edit',{
						type : masterType,
						dynamic_variable: displayType, 
						dynamic_url : masterType,
						result : response.result,
						'error' : validationErrors, 
						'formData' : formData 
					});
				}).catch(next);	 
			}
		}
		else{
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL+DEFAULT_MASTER_TYPE);
		}
	};//End editMaster()
	
	
	
	/**
	 * Function to get Master's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getMasterDetails = (req,res,next)=>{
		return new Promise(resolve=>{
			let masterId		= 	(req.params.id)		? 	req.params.id	: "";
			/** Get Master details **/
			const mastersCollection	= db.collection(MASTERS_COLLECTION);
			mastersCollection.findOne(
				{_id : ObjectId(masterId)},
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
					
					/** Set options for append image full path **/
					let options = {
						"file_url" 			: 	MASTERS_URL,
						"file_path" 		: 	MASTERS_FILE_PATH,
						"result" 			: 	[result],
						"database_field" 	: 	"image"
					};

					/** Append image with full path **/
					appendFileExistData(options).then(fileResponse=>{
						let response = {
							status	: STATUS_SUCCESS,
							result	: (fileResponse && fileResponse.result && fileResponse.result[0])	?	fileResponse.result[0]	:{}
						};
						resolve(response);
					});
				}
			);
		});
	};// End getMasterDetails().	
	
}
module.exports = new Masters();
