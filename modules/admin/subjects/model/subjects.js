const paginate 		= 	require('express-paginate'); 
const {ObjectId} 	= 	require('mongodb');
const  brdObj		=	require(WEBSITE_ADMIN_MODULES_PATH+"/subjects/breadcrumbs");


function Subjects() {

	/**
	 * Listing URL
	 */
	const LISTING_URL	=	WEBSITE_ADMIN_URL+"subjects";
	const TOPIC_LISTING_URL	=	WEBSITE_ADMIN_URL+"topicIndex/";
	
	
	
	
	/**
	 * Function for get list of Subjects pages
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getSubjectList = (req, res)=>{

		let limit			= (req.body.length) 		? parseInt(req.body.length) 		: ADMIN_LISTING_LIMIT;
		let skip			=  req.skip
		
		let subject_name			= (req.query.subject_name) ? req.query.subject_name : "";
		let statusSearch	= (req.query.status) ? parseInt(req.query.status) : "";
		
		/** Set conditions **/
		var commonConditions = { is_deleted : NOT_DELETED , parent_id: INACTIVE};
		
		if (subject_name != "") {
			commonConditions.subject_name	=	new RegExp(subject_name, 'i');
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
		
		const pages	= db.collection(SUBJECT_COLLECTION);
		
		pages.find(commonConditions).skip(skip).limit(limit).sort( { subject_name: SORT_ASC } ).toArray(function(err, results) {
			if (err) throw err;
			
			pages.find(commonConditions).count(function(errCount, itemCount) {
				if (errCount) throw errCount;
				
				let pageCount = 	Math.ceil(itemCount / limit);			
				req.breadcrumbs(brdObj.list);			
				
				res.render('list', {results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
				}); 
			});
		});
	};//End getSubjectList()
	
	

	/**
	 * Function to get Subject's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getSubjectDetails = (req,res,next)=>{
		return new Promise(resolve=>{
			let subjectId = (req.params.id) ? req.params.id : "";
			/** Get Subject details **/
			const pages = db.collection(SUBJECT_COLLECTION);
			pages.findOne(
				{_id : ObjectId(subjectId)},
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
					
					if(result && result.is_deleted == DELETED){
						/** Send error response **/
						let response = {
							status	: STATUS_ERROR,
							message	: res.__("admin.subject.record_not_exists")
						};
						return resolve(response);
					}
					
					/** Set options for append image full path **/
					let options = {
						"file_url" 			: 	SUBJECT_URL,
						"file_path" 		: 	SUBJECT_FILE_PATH,
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
	};// End getSubjectDetails().

	
	
	/**
	 * Function to update Subject's detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editSubject = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data **/
			req.body	= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
			let id		= (req.params.id) ? req.params.id :"";

			let allData		= 	req.body;		
			let subject_name		= 	(req.body.subject_name)	?req.body.subject_name	:"";
			let color_code       	= 	(req.body.color_code) ?	req.body.color_code	:"";
			let color_code_hover	= 	(req.body.color_code_hover)	? req.body.color_code_hover	:"";
			let color_code_icon		= 	(req.body.color_code_icon)	? req.body.color_code_icon	:"";
			
			let description		    = 	(req.body.description) 	? req.body.description 	:"";
			
			if(typeof req.body.show_at_home != "undefined"){
				var show_at_home		= 1;
			} 
			else{
				var show_at_home		= 0;
			}

			let oldimage		= 	(req.body.old_image) ? req.body.old_image :"";
			let image			= 	(req.files && req.files.image)	?	req.files.image	:"";
			let imgaeOptions	=	{			
				'image' 	        :	image,
				'filePath'       	: 	SUBJECT_FILE_PATH,
				'oldPath'       	: 	oldimage,
				'allowedExtensions' :	SUBJECT_IMAGE_EXTENSION,
				'allowedImageError' : SUBJECT_IMAGE_ERROR_MESSAGE
			};

			


			moveUploadedFile(req, res, imgaeOptions).then(imgaeResponse=>{
				if(imgaeResponse.status == STATUS_ERROR){											
					/** Send error imgaeResponse **/
					req.session.formData	=	req.body;
					req.flash(STATUS_ERROR, imgaeResponse.message);
					return res.redirect(LISTING_URL+"/edit/"+id);
				}
				
				
				/** Update Subject details **/
				const pages = db.collection(SUBJECT_COLLECTION);
				pages.updateOne(
					{ _id : ObjectId(id)},
					{$set: {
						subject_name		:	subject_name,
						color_code	        : 	color_code,
						color_code_hover	: 	color_code_hover,
						color_code_icon		: 	color_code_icon,					
						show_at_home		: 	show_at_home,
						description	     	: 	description,
						image 				: 	(imgaeResponse.fileName) ? 	imgaeResponse.fileName 	:"",
						modified 			:	getUtcDate()
					}},
					(err,result)=>{
						console.log(result);
						if(err){
							/** Send error response **/
							req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
							return res.redirect(LISTING_URL);
						}

						/** Send success response **/
						req.flash(STATUS_SUCCESS, res.__("admin.subject.record_updated_successfully"));
						res.redirect(LISTING_URL);
					}
				);
			}).catch(next);	

		}
		else{
			/** Get Subject details **/
			getSubjectDetails(req,res,next).then(response=>{
				if(response.status != STATUS_SUCCESS){
					/** Send error response **/
					req.flash(STATUS_ERROR,response.message);
					res.redirect(LISTING_URL);
					return;
				}
				
				formData = false;
				if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
					formData = req.session.formData;
					req.session.formData = null;
				}
				
				/** Render edit page **/
				req.breadcrumbs(brdObj.edit);
				res.render('add_edit',{
					result : response.result,
					'error' : validationErrors, 
					'formData' : formData 
				});
			}).catch(next);	 
		}
	};//End editSubject()

	
	
	/**
	 * Function for add Subject
	 *
	 * @param req 	As	Request Data
	 * @param res 	As	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.addSubject = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data */		

			req.body = 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);

			let allData	 	= 	req.body;
			
			let subject_name		= 	(req.body.subject_name)	?req.body.subject_name	:"";
			let color_code       	= 	(req.body.color_code) ?	req.body.color_code	:"";
			let color_code_hover	= 	(req.body.color_code_hover)	? req.body.color_code_hover	:"";
			let color_code_icon		= 	(req.body.color_code_icon)	? req.body.color_code_icon	:"";			
			let description		    = 	(req.body.description) 	? req.body.description 	:"";

			if(typeof req.body.show_at_home != "undefined"){
				var show_at_home		= 1;
			} 
			else{
				var show_at_home		= 0;
			}


   
			let image			= 	(req.files && req.files.image)	?	req.files.image	:"";
			let imgaeOptions	=	{	
				'image'         	:	image,
				'filePath'      	: 	SUBJECT_FILE_PATH,
				'allowedExtensions' :	SUBJECT_IMAGE_EXTENSION,
				'allowedImageError' : SUBJECT_IMAGE_ERROR_MESSAGE
			};
			/** Upload user  image **/
			moveUploadedFile(req, res,imgaeOptions).then(imgaeResponse=>{
				if(imgaeResponse.status == STATUS_ERROR){
					req.session.formData	=	req.body;
					req.flash(STATUS_ERROR, imgaeResponse.message);
					return res.redirect(LISTING_URL+"/add");
				}
			 
				/** Set options **/
				let options = {
					title 		:	subject_name,
					table_name 	: 	SUBJECT_COLLECTION,
					slug_field 	: 	"slug"
				};
	 
				/** Make Slug */
				getDatabaseSlug(options).then(response=>{
					/** Save Subject details */
					const pages = db.collection(SUBJECT_COLLECTION);
					pages.insertOne({
						subject_name		:	subject_name,
						color_code	        : 	color_code,
						color_code_hover	: 	color_code_hover,
						color_code_icon		: 	color_code_icon,
						show_at_home		: 	show_at_home,
						description	     	: 	description,
						image 				: 	(imgaeResponse.fileName) ? 	imgaeResponse.fileName 	:"",
						slug				: 	(response && response.title)	?	response.title	:"",
						active				:	ACTIVE,
						parent_id		    : 	INACTIVE,
						is_deleted			: 	NOT_DELETED,
						created 			:	getUtcDate(),
						modified 			:	getUtcDate()
					},(err,result)=>{
						if(err){
							/** Send error response **/
							req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
							return res.redirect(LISTING_URL);
						}

						req.flash(STATUS_SUCCESS, res.__("admin.subject.record_added_successfully"));
						return res.redirect(LISTING_URL); 
					});
				},error=>{
					req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
					return res.redirect(LISTING_URL); 
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
			res.render("add_edit",{ 'error': validationErrors, 'formData': formData});
		}
	};//End addSubject()
	
	 
	 
	/**
	 * Function for update Subject's status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateSubjectStatus = (req,res,next)=>{
		let subjectId		= (req.params.id) 			? req.params.id 		: "";
		let subjectStatus	= (req.params.status) 		? req.params.status	 	: "";
		 
		if(!subjectId){
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL);
		}

		/** Set update data **/
		let updateData = {modified  : getUtcDate()};
		updateData.active = (subjectStatus==ACTIVE) ? DEACTIVE :ACTIVE;

		/** Update user status*/
		const pages = db.collection(SUBJECT_COLLECTION);
		pages.updateOne({_id : ObjectId(subjectId)},{$set :updateData},(err,result)=>{
			if(err){
				/** Send error response **/
				req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.subject.record_updated_successfully"));
			return res.redirect(LISTING_URL);
		});
	};//End updateUserStatus()
	
	














/**
	 * Function for get list of Subjects pages
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
 this.getSubjectTopicList = (req, res)=>{

	let limit			= (req.body.length) 		? parseInt(req.body.length) 		: ADMIN_LISTING_LIMIT;

	let subjectId			= (req.params.subjectId) 		? req.params.subjectId		: "";

	let skip			=  req.skip
	
	let topic_name			= (req.query.topic_name) ? req.query.topic_name : "";
	let statusSearch	= (req.query.status) ? parseInt(req.query.status) : "";
	
	/** Set conditions **/
	var commonConditions = { is_deleted : NOT_DELETED, parent_id: ObjectId(subjectId)};
	
	if (topic_name != "") {
		commonConditions.subject_name	=	new RegExp(topic_name, 'i');
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
	
	const pages	= db.collection(SUBJECT_COLLECTION);
	
	pages.find(commonConditions).skip(skip).limit(limit).sort( { subject_name: SORT_ASC } ).toArray(function(err, results) {
		if (err) throw err;
		
		pages.find(commonConditions).count(function(errCount, itemCount) {
			if (errCount) throw errCount;
			
			let pageCount = 	Math.ceil(itemCount / limit);			
			req.breadcrumbs(brdObj.topic_list);

			  res.render('topic_list', {results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page),subjectId:subjectId
			 }); 
		});
	});
};//End getSubjectTopicList()




	/**
	 * Function for add Subject Topic
	 *
	 * @param req 	As	Request Data
	 * @param res 	As	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	 this.addSubjectTopic = (req, res, next, validationErrors)=>{

		let subjectId			= (req.params.subjectId) 		? req.params.subjectId		: "";

		if(isPost(req) && !validationErrors){
			/** Sanitize Data */		

			req.body = 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);

			let allData	 	= 	req.body;
			
			let subject_name		= 	(req.body.subject_name)	?req.body.subject_name	:"";
			let color_code       	= 	(req.body.color_code) ?	req.body.color_code	:"";
			let color_code_hover	= 	(req.body.color_code_hover)	? req.body.color_code_hover	:"";
			let color_code_icon		= 	(req.body.color_code_icon)	? req.body.color_code_icon	:"";			
			let description		    = 	(req.body.description) 	? req.body.description 	:"";

			if(typeof req.body.show_at_home != "undefined"){
				var show_at_home		= 1;
			} 
			else{
				var show_at_home		= 0;
			}


			
				/** Set options **/
				let options = {
					title 		:	subject_name,
					table_name 	: 	SUBJECT_COLLECTION,
					slug_field 	: 	"slug"
				};
	 
				/** Make Slug */
				getDatabaseSlug(options).then(response=>{
					/** Save Subject details */
					const pages = db.collection(SUBJECT_COLLECTION);
					pages.insertOne({
						subject_name		:	subject_name,
						color_code	        : 	color_code,
						color_code_hover	: 	color_code_hover,
						color_code_icon		: 	color_code_icon,
						show_at_home		: 	show_at_home,
						description	     	: 	description,
						image 				: 	"",
						slug				: 	(response && response.title)	?	response.title	:"",
						active				:	ACTIVE,
						parent_id		    : 	ObjectId(subjectId),
						is_deleted			: 	NOT_DELETED,
						created 			:	getUtcDate(),
						modified 			:	getUtcDate()
					},(err,result)=>{
						if(err){
							/** Send error response **/
							req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
							return res.redirect(TOPIC_LISTING_URL+subjectId);
						}

						req.flash(STATUS_SUCCESS, res.__("admin.topic.record_added_successfully"));
						return res.redirect(TOPIC_LISTING_URL+subjectId); 
					});
				},error=>{
					req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
					return res.redirect(TOPIC_LISTING_URL+subjectId); 
				});
			
		}
		else{
			
			formData = false;
			if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
				formData = req.session.formData;
				req.session.formData = null;
			}
			
			req.breadcrumbs(brdObj.topic_add);
			res.render("topic_add_edit",{ 'error': validationErrors, 'formData': formData,'subjectId':subjectId});
		}
	};//End addSubject()
	

/**
	 * Function to update Subject's topic detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
 this.editSubjectTopic = (req, res, next, validationErrors)=>{
	let subjectId			= (req.params.subjectId) 		? req.params.subjectId		: "";
	if(isPost(req) && !validationErrors){
		/** Sanitize Data **/
		req.body	= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
		let id		= (req.params.id) ? req.params.id :"";

		let allData		= 	req.body;		
		let subject_name		= 	(req.body.subject_name)	?req.body.subject_name	:"";			
		let description		    = 	(req.body.description) 	? req.body.description 	:"";			
			
			/** Update Subject details **/
			const pages = db.collection(SUBJECT_COLLECTION);
			pages.updateOne(
				{ _id : ObjectId(id)},
				{$set: {
					subject_name		:	subject_name,				
					description	     	: 	description,									
					modified 			:	getUtcDate()
				}},
				(err,result)=>{
					if(err){
						/** Send error response **/
						req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
						return res.redirect(TOPIC_LISTING_URL+subjectId);
					}

					/** Send success response **/
					req.flash(STATUS_SUCCESS, res.__("admin.subject.record_updated_successfully"));
					res.redirect(TOPIC_LISTING_URL+subjectId);
				}
			);
		
	}
	else{
		/** Get Subject details **/
		getSubjectDetails(req,res,next).then(response=>{
			if(response.status != STATUS_SUCCESS){
				/** Send error response **/
				req.flash(STATUS_ERROR,response.message);
				res.redirect(TOPIC_LISTING_URL+subjectId);
				return;
			}
			
			formData = false;
			if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
				formData = req.session.formData;
				req.session.formData = null;
			}
			
			/** Render edit page **/
			req.breadcrumbs(brdObj.topic_edit);
			res.render('topic_add_edit',{
				result : response.result,
				'error' : validationErrors, 
				'formData' : formData,
				'subjectId':subjectId 
			});
		}).catch(next);	 
	}
};//End editSubject()



/**
	 * Function for update Subject's topic status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
 this.updateSubjectTopicStatus = (req,res,next)=>{
	let subjectId		= (req.params.subjectId) 			? req.params.subjectId 		: "";
	let topicId		= (req.params.id) 			? req.params.id 		: "";
	let subjectStatus	= (req.params.status) 		? req.params.status	 	: "";

	if(!topicId){
		/** Send error response **/
		req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
		return res.redirect(TOPIC_LISTING_URL+subjectId);
	}

	/** Set update data **/
	let updateData = {modified  : getUtcDate()};
	updateData.active = (subjectStatus==ACTIVE) ? DEACTIVE :ACTIVE;

	/** Update user status*/
	const pages = db.collection(SUBJECT_COLLECTION);

	pages.updateOne({_id : ObjectId(topicId)},{$set :updateData},(err,result)=>{
		if(err){
			/** Send error response **/
			req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
			return res.redirect(TOPIC_LISTING_URL+subjectId);
		}

		/** Send success response **/
		req.flash(STATUS_SUCCESS, res.__("admin.topic.record_updated_successfully"));
		return res.redirect(TOPIC_LISTING_URL+subjectId);
	});
};//End updateUserStatus()










}
module.exports = new Subjects();
