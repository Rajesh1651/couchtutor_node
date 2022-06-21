const paginate 		= 	require('express-paginate'); 
const {ObjectId} 	= 	require('mongodb');
const  brdObj		=	require(WEBSITE_ADMIN_MODULES_PATH+"/slider/breadcrumbs");


function Slider() {

	/**
	 * Listing URL
	 */
	const LISTING_URL	=	WEBSITE_ADMIN_URL+"slider";
	
	
	
	/**
	 * Function for get list of slider pages
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getSliderList = (req, res)=>{

		let limit			= (req.body.length) 		? parseInt(req.body.length) 		: ADMIN_LISTING_LIMIT;
		let skip			=  req.skip
		
		let title			= (req.query.title) ? req.query.title : "";
		let statusSearch	= (req.query.status) ? parseInt(req.query.status) : "";
		
		/** Set conditions **/
		var commonConditions = { is_deleted : NOT_DELETED };
		
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
		
		const pages	= db.collection(SLIDER_COLLECTION);
		
		pages.find(commonConditions).skip(skip).limit(limit).sort( { title: SORT_ASC } ).toArray(function(err, results) {
			if (err) throw err;
			
			pages.find(commonConditions).count(function(errCount, itemCount) {
				if (errCount) throw errCount;
				
				let pageCount = 	Math.ceil(itemCount / limit);
				
				req.breadcrumbs(brdObj.list);		


				res.render('list', {results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
				}); 
			});
		});
	};//End getSliderList()
	
	

	
	/**
	 * Function to get slider's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getSliderDetails = (req,res,next)=>{
		return new Promise(resolve=>{
			let sliderId = (req.params.id) ? req.params.id : "";
			/** Get slider details **/
			const pages = db.collection(SLIDER_COLLECTION);
			pages.findOne(
				{_id : ObjectId(sliderId)},
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
							message	: res.__("admin.slider.record_not_exists")
						};
						return resolve(response);
					}
					
					/** Set options for append image full path **/
					let options = {
						"file_url" 			: 	SLIDER_URL,
						"file_path" 		: 	SLIDER_FILE_PATH,
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
	};// End getSliderDetails().

	
	
	/**
	 * Function to update slider's detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editSlider = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data **/
			req.body	= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
			let id		= (req.params.id) ? req.params.id :"";

			let allData		= 	req.body;
			let title				= 	(req.body.title)			?	req.body.title	:"";
			let slider_text				= 	(req.body.slider_text)			?	req.body.slider_text	:"";
			let oldimage		= 	(req.body.old_image) ? req.body.old_image :"";
			let image			= 	(req.files && req.files.image)	?	req.files.image	:"";
			let imgaeOptions	=	{
				'image' 	:	image,
				'filePath' 	: 	SLIDER_FILE_PATH,
				'oldPath' 	: 	oldimage
			};

			
			moveUploadedFile(req, res, imgaeOptions).then(imgaeResponse=>{
				if(imgaeResponse.status == STATUS_ERROR){											
					/** Send error imgaeResponse **/
					req.session.formData	=	req.body;
					req.flash(STATUS_ERROR, imgaeResponse.message);
					return res.redirect(LISTING_URL+"/edit/"+id);
				}
				
				
				/** Update slider details **/
				const pages = db.collection(SLIDER_COLLECTION);
				pages.updateOne(
					{ _id : ObjectId(id)},
					{$set: {
						title				:	title,	
						slider_text			:	slider_text,	
						image 				: 	(imgaeResponse.fileName) ? 	imgaeResponse.fileName 	:"",
						modified 			:	getUtcDate()
					}},
					(err,result)=>{
						if(err){
							/** Send error response **/
							req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
							return res.redirect(LISTING_URL);
						}

						/** Send success response **/
						req.flash(STATUS_SUCCESS, res.__("admin.slider.record_updated_successfully"));
						res.redirect(LISTING_URL);
					}
				);
			}).catch(next);	 
		}
		else{
			/** Get slider details **/
			getSliderDetails(req,res,next).then(response=>{
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
	};//End editSlider()

	
	
	/**
	 * Function for add slider
	 *
	 * @param req 	As	Request Data
	 * @param res 	As	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.addSlider = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data */
			req.body = 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);

			let allData		= 	req.body;
			let title				= 	(req.body.title)			?	req.body.title	:"";
			let slider_text			= 	(req.body.slider_text)			?	req.body.slider_text	:"";
						
			let image			= 	(req.files && req.files.image)	?	req.files.image	:"";
			let imgaeOptions	=	{
				'image' 	:	image,
				'filePath' 	: 	SLIDER_FILE_PATH
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
					title 		:	title,					
					table_name 	: 	SLIDER_COLLECTION,
					slug_field 	: 	"slug"
				};
	 
				/** Make Slug */
				getDatabaseSlug(options).then(response=>{
					/** Save slider details */
					const pages = db.collection(SLIDER_COLLECTION);
					pages.insertOne({
						title				:	title,	
						slider_text         : slider_text,
						image 				: 	(imgaeResponse.fileName) ? 	imgaeResponse.fileName 	:"",
						slug				: 	(response && response.title)	?	response.title	:"",
						active				:	ACTIVE,
						is_deleted			: 	NOT_DELETED,
						created 			:	getUtcDate(),
						modified 			:	getUtcDate()
					},(err,result)=>{
						if(err){
							/** Send error response **/
							req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
							return res.redirect(LISTING_URL);
						}

						req.flash(STATUS_SUCCESS, res.__("admin.slider.record_added_successfully"));
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
	};//End addSlider()
	
	 
	 
	/**
	 * Function for update slider's status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateSliderStatus = (req,res,next)=>{
		let sliderId		= (req.params.id) 			? req.params.id 		: "";
		let sliderStatus	= (req.params.status) 		? req.params.status	 	: "";
		 
		if(!sliderId){
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL);
		}

		/** Set update data **/
		let updateData = {modified  : getUtcDate()};
		updateData.active = (sliderStatus==ACTIVE) ? DEACTIVE :ACTIVE;

		/** Update user status*/
		const pages = db.collection(SLIDER_COLLECTION);
		pages.updateOne({_id : ObjectId(sliderId)},{$set :updateData},(err,result)=>{
			if(err){
				/** Send error response **/
				req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.slider.record_updated_successfully"));
			return res.redirect(LISTING_URL);
		});
	};//End updateSliderStatus()
	
	
	
	/**
	 * Function for delete slider
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.deleteSlider = (req,res,next)=>{
		let sliderId		= (req.params.id) 			? req.params.id 		: "";
		 
		if(!sliderId){
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL);
		}

		/** Set update data **/
		let updateData	= {modified : getUtcDate(), is_deleted : DELETED};

		/** Update user status*/
		const pages = db.collection(SLIDER_COLLECTION);
		pages.updateOne({_id : ObjectId(sliderId)},{$set :updateData},(err,result)=>{
			if(err){
				/** Send error response **/
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.slider.record_deleted_successfully"));
			return res.redirect(LISTING_URL);
		});
	};//End deleteSlider()
	
}
module.exports = new Slider();
