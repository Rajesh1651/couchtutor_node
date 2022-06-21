const paginate 		= 	require('express-paginate'); 
const {ObjectId} 	= 	require('mongodb');
const  brdObj		=	require(WEBSITE_ADMIN_MODULES_PATH+"/faq/breadcrumbs");


function Faq() {

	/**
	 * Listing URL
	 */
	const LISTING_URL	=	WEBSITE_ADMIN_URL+"faq";
	
	
	
	/**
	 * Function for get list of faq pages
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getFaqList = (req, res)=>{

		let limit			= (req.body.length) 		? parseInt(req.body.length) 		: ADMIN_LISTING_LIMIT;
		let skip			=  req.skip
		
		let question			= (req.query.question) ? req.query.question : "";
		let statusSearch	= (req.query.status) ? parseInt(req.query.status) : "";
		
		/** Set conditions **/
		var commonConditions = { is_deleted : NOT_DELETED };
		
		if (question != "") {
			commonConditions.question	=	new RegExp(question, 'i');
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
		
		const pages	= db.collection(FAQ_COLLECTION);
		
		pages.find(commonConditions).skip(skip).limit(limit).sort( { question: SORT_ASC } ).toArray(function(err, results) {
			if (err) throw err;
			
			pages.find(commonConditions).count(function(errCount, itemCount) {
				if (errCount) throw errCount;
				
				let pageCount = 	Math.ceil(itemCount / limit);
				
				req.breadcrumbs(brdObj.list);
				
				res.render('list', {results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
				}); 
			});
		});
	};//End getFaqList()
	
	
	
	/**
	 * Function for view faq's Detail
	 *
	 * @param req 	As 	Request Data
     * @param res 	As 	Response Data
     * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render
	 */
	this.viewFaqDetails = (req,res,next)=>{
		/** Get faq details **/
		getFaqDetails(req,res,next).then(response=>{
			if(response.status != STATUS_SUCCESS){
				/** Send error response **/
				req.flash(STATUS_ERROR,response.message);
				res.redirect(LISTING_URL);
				return;
			}
			
			/** Render edit page **/
			req.breadcrumbs(brdObj.view);
			res.render('view',{ result : response.result });
		}).catch(next);	
	};//End viewFaqDetails()	
	
	
	
	/**
	 * Function to get faq's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getFaqDetails = (req,res,next)=>{
		return new Promise(resolve=>{
			let faqId = (req.params.id) ? req.params.id : "";
			/** Get faq details **/
			const pages = db.collection(FAQ_COLLECTION);
			pages.findOne(
				{_id : ObjectId(faqId)},
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
							message	: res.__("admin.faq.record_not_exists")
						};
						return resolve(response);
					}
					
					/** Set options for append image full path **/
					let options = {				
						"result" 			: 	[result]					
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
	};// End getFaqDetails().

	
	
	/**
	 * Function to update faq's detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editFaq = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data **/
			req.body	= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
			let id		= (req.params.id) ? req.params.id :"";

			let allData		= 	req.body;
			let question	= 	(req.body.question)			?	req.body.question	:"";
			let answer  	= 	(req.body.answer)	?	req.body.answer	:"";			
				
				
				/** Update faq details **/
				const pages = db.collection(FAQ_COLLECTION);
				pages.updateOne(
					{ _id : ObjectId(id)},
					{$set: {
						question			:	question,
						answer	            : 	answer,						
						modified 			:	getUtcDate()
					}},
					(err,result)=>{
						if(err){
							/** Send error response **/
							req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
							return res.redirect(LISTING_URL);
						}

						/** Send success response **/
						req.flash(STATUS_SUCCESS, res.__("admin.faq.record_updated_successfully"));
						res.redirect(LISTING_URL);
					}
				);
		 
		}
		else{
			/** Get faq details **/
			getFaqDetails(req,res,next).then(response=>{
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
	};//End editFaq()

	
	
	/**
	 * Function for add faq
	 *
	 * @param req 	As	Request Data
	 * @param res 	As	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.addFaq = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data */
			req.body = 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);

			let allData		= 	req.body;
			let question	= 	(req.body.question)	?	req.body.question	:"";
			let answer   	= 	(req.body.answer)	?	req.body.answer	:"";
								
			 
				/** Set options **/
				let options = {
					question 		:	question,
					table_name 	: 	FAQ_COLLECTION,
					slug_field 	: 	"slug"
				};
	 
				/** Make Slug */
				getDatabaseSlug(options).then(response=>{
					/** Save faq details */
					const pages = db.collection(FAQ_COLLECTION);
					pages.insertOne({
						question			:	question,
						answer          	: 	answer,						
						slug				: 	(response && response.question)	?	response.question	:"",
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

						req.flash(STATUS_SUCCESS, res.__("admin.faq.record_added_successfully"));
						return res.redirect(LISTING_URL); 
					});
				},error=>{
					req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
					return res.redirect(LISTING_URL); 
				});
			
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
	};//End addFaq()
	
	 
	 
	/**
	 * Function for update faq's status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateFaqStatus = (req,res,next)=>{
		let faqId		= (req.params.id) 			? req.params.id 		: "";
		let faqStatus	= (req.params.status) 		? req.params.status	 	: "";
		 
		if(!faqId){
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL);
		}

		/** Set update data **/
		let updateData = {modified  : getUtcDate()};
		updateData.active = (faqStatus==ACTIVE) ? DEACTIVE :ACTIVE;

		/** Update user status*/
		const pages = db.collection(FAQ_COLLECTION);
		pages.updateOne({_id : ObjectId(faqId)},{$set :updateData},(err,result)=>{
			if(err){
				/** Send error response **/
				req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.faq.record_updated_successfully"));
			return res.redirect(LISTING_URL);
		});
	};//End updateUserStatus()
	
	
	
	/**
	 * Function for delete faq
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.deleteFaq = (req,res,next)=>{
		let faqId		= (req.params.id) 			? req.params.id 		: "";
		 
		if(!faqId){
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL);
		}

		/** Set update data **/
		let updateData	= {modified : getUtcDate(), is_deleted : DELETED};

		/** Update user status*/
		const pages = db.collection(FAQ_COLLECTION);
		pages.updateOne({_id : ObjectId(faqId)},{$set :updateData},(err,result)=>{
			if(err){
				/** Send error response **/
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.faq.record_deleted_successfully"));
			return res.redirect(LISTING_URL);
		});
	};//End deleteFaq()
	
}
module.exports = new Faq();
