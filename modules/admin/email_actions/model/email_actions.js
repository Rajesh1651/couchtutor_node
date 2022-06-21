const paginate 		= 	require('express-paginate'); 
const {ObjectId} 	= 	require('mongodb');
const  brdObj		=	require(WEBSITE_ADMIN_MODULES_PATH+"/email_actions/breadcrumbs");


function EmailActions() {


	/**
	 * Function for get list of email actions
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getEmailActionsList = (req, res)=>{

		let limit			= (req.body.length) 		? parseInt(req.body.length) 		: ADMIN_LISTING_LIMIT;
		let skip			=  req.skip
		
		let action			= (req.query.action) ? req.query.action : "";
		let options			= (req.query.options) ? parseInt(req.query.options) : "";
		
		/** Set conditions **/
		var commonConditions = {};
		
		if (action != "") {
			commonConditions.action	=	new RegExp(action, 'i');
		}
		
		if (options != "") {
			commonConditions.options	=	new RegExp(options, 'i');
		}
		
		const emailActionCollection	=	db.collection(EMAIL_ACTION_COLLECTION);
		
		emailActionCollection.find(commonConditions).skip(skip).limit(limit).sort( { action: SORT_ASC } ).toArray(function(err, results) {
			if (err) throw err;
			
			emailActionCollection.find(commonConditions).count(function(errCount, itemCount) {
				if (errCount) throw errCount;
				
				let pageCount = 	Math.ceil(itemCount / limit);
				
				req.breadcrumbs(brdObj.list);
				
				res.render('list', {results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
				}); 
			});
		});
	};//End getEmailActionsList()
	
	
	
	/**
	 * Function for add Email Action
	 *
	 * @param req 	As	Request Data
	 * @param res 	As	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.addEmailAction = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data */
			req.body = 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);

			let allData		= 	req.body;
			let action	= 	(req.body.action)			?	req.body.action	:"";
			let options	= 	(req.body.options)	?	req.body.options	:"";
			  
			/** Save Email Action details */
			const emailActionCollection	=	db.collection(EMAIL_ACTION_COLLECTION);
			emailActionCollection.insertOne({
				action		:	action,
				options		: 	options,
				created 	:	getUtcDate(),
				modified	:	getUtcDate()
			},(err,result)=>{
				if(err) return next(err);
				req.flash(STATUS_SUCCESS, res.__("admin.email_actions.record_added_successfully"));
				return res.redirect(WEBSITE_ADMIN_URL+'email_actions'); 
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
	};//End addEmailAction()
	
	
	
	/**
	 * Function to get Email Action's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getEmailActionDetails = (req,res,next)=>{
		return new Promise(resolve=>{
			let emailActionId = (req.params.id) ? req.params.id : "";
			/** Get Email Action's detail details **/
			const emailActionCollection	=	db.collection(EMAIL_ACTION_COLLECTION);
			emailActionCollection.findOne(
				{_id : ObjectId(emailActionId)},
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
	};// End getEmailActionDetails().

	
	
	/**
	 * Function to update Email Action's detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editEmailAction = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data **/
			req.body	= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
			let id		= (req.params.id) ? req.params.id :"";

			let allData		= 	req.body;
			let action	= 	(req.body.action)			?	req.body.action	:"";
			let options	= 	(req.body.options)	?	req.body.options	:"";
			   
			/** update Email Action's detail **/
			const emailActionCollection	=	db.collection(EMAIL_ACTION_COLLECTION);
			emailActionCollection.updateOne(
				{ _id : ObjectId(id)},
				{$set: {
					action		:	action,
					options		: 	options,
					modified	:	getUtcDate()
				}},
				(err,result)=>{
					if(err) return next(err);

					/** Send success response **/
					req.flash(STATUS_SUCCESS, res.__("admin.email_actions.record_updated_successfully"));
					res.redirect(WEBSITE_ADMIN_URL+'email_actions');
				}
			);
			 
		}
		else{
			/** Get email action details **/
			getEmailActionDetails(req,res,next).then(response=>{
				if(response.status != STATUS_SUCCESS){
					/** Send error response **/
					req.flash(STATUS_ERROR,response.message);
					res.redirect(WEBSITE_ADMIN_URL+'email_actions');
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
	};//End editEmailAction()

	
	
	/**
	 * Function for Email Action
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.deleteEmailAction = (req,res,next)=>{
		let id		= (req.params.id) ? req.params.id :"";
		 
		if(!id){
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(WEBSITE_ADMIN_URL+"email_actions");
		}
 
		/** Delete Email Action status*/
		const emailActionCollection	=	db.collection(EMAIL_ACTION_COLLECTION);
		emailActionCollection.deleteOne({_id : ObjectId(id)},(err,result)=>{
			if(err) return next(err);

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.email_actions.record_deleted_successfully"));
			res.redirect(WEBSITE_ADMIN_URL+"email_actions");
		});
	};//End deleteEmailAction()
	
}

module.exports = new EmailActions();
