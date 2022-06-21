const paginate 		= 	require('express-paginate'); 
const {ObjectId} 	= 	require('mongodb');
const  brdObj		=	require(WEBSITE_ADMIN_MODULES_PATH+"/email_template/breadcrumbs");


function Cms() {


	/**
	 * Function for get list of email template
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getTemplateList = (req, res)=>{

		let limit			= (req.body.length) 		? parseInt(req.body.length) 		: ADMIN_LISTING_LIMIT;
		let skip			=  req.skip
		
		let name	= 	(req.query.name) ? req.query.name : "";
		let subject	= 	(req.query.subject) ? parseInt(req.query.subject) : "";
		
		/** Set conditions **/
		var commonConditions = {};
		
		if (name != "") {
			commonConditions.name	=	new RegExp(name, 'i');
		}
		
		if (subject != "") {
			commonConditions.subject	=	new RegExp(subject, 'i');
		}
		
		
		const eTempColl	=	db.collection(EMAIL_TEMPLATE_COLLECTION);
		
		eTempColl.find(commonConditions).skip(skip).limit(limit).sort( { name: SORT_ASC } ).toArray(function(err, results) {
			if (err) throw err;
			
			eTempColl.find(commonConditions).count(function(errCount, itemCount) {
				if (errCount) throw errCount;
				
				let pageCount = 	Math.ceil(itemCount / limit);
				
				req.breadcrumbs(brdObj.list);
				
				res.render('list', {results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
				}); 
			});
		});
	};//End getTemplateList()
	
	
	
	/**
	 * Function to get email template's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getTemplateDetails = (req,res,next)=>{
		return new Promise(resolve=>{
			let id = (req.params.id) ? req.params.id : "";
			/** Get Email template details **/
			const eTempColl	=	db.collection(EMAIL_TEMPLATE_COLLECTION);
			eTempColl.findOne(
				{_id : ObjectId(id)},
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
	};// End getCmsDetails().

	
	
	/**
	 * Function to update email template's detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editEmailTemplate = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data **/
			req.body	= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
			let id		= (req.params.id) ? req.params.id :"";

			let allData	= 	req.body;
			let name	= 	(req.body.name)		?	req.body.name	:"";
			let subject	= 	(req.body.subject)	?	req.body.subject	:"";
			let body	= 	(req.body.body)		?	req.body.body	:"";
			let action	= 	(req.body.action)	?	req.body.action	:"";
			 
			/** Update Email template details **/
			const eTempColl	=	db.collection(EMAIL_TEMPLATE_COLLECTION);
			eTempColl.updateOne(
				{ _id : ObjectId(id)},
				{$set: {
					name		:	name,
					subject		: 	subject,
					body		: 	body,
					action		: 	action,
					modified 	:	getUtcDate()
				}},
				(err,result)=>{
					if(err) return next(err);

					/** Send success response **/
					req.flash(STATUS_SUCCESS, res.__("admin.email_template.record_updated_successfully"));
					res.redirect(WEBSITE_ADMIN_URL+'email_template');
				}
			);
			 
		}
		else{
			/** Get Email template details **/
			getTemplateDetails(req,res,next).then(response=>{
				if(response.status != STATUS_SUCCESS){
					/** Send error response **/
					req.flash(STATUS_ERROR,response.message);
					res.redirect(WEBSITE_ADMIN_URL+'email_template');
					return;
				}
				
				formData = false;
				if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
					formData = req.session.formData;
					req.session.formData = null;
				}
				
				var selectedAction = (formData.action) ?  formData.action : response.result.action
				
				/** Set options for get email action list **/
				let optionsForActions = {
					collections : [{
						collection 	: 	EMAIL_ACTION_COLLECTION,
						columns 	: 	["action","action"],
						conditions 	: 	{},
						selected 	: 	[selectedAction],
					}]
				};
				
				getDropdownList(req, res, next, optionsForActions).then(actionResponse=>{
					
					if(actionResponse.status != STATUS_SUCCESS){
						req.flash(STATUS_ERROR, actionResponse.message);
						return res.redirect(WEBSITE_ADMIN_URL+'email_template'); 
					}
					
					let actionList = (actionResponse && actionResponse.final_html_data && actionResponse.final_html_data["0"])	?	actionResponse.final_html_data["0"]:"";
					
					
					
					/** Render edit page **/
					req.breadcrumbs(brdObj.edit);
					res.render('edit',{ result : response.result, 'email_action_list': actionList, 'error' : validationErrors,  'formData' : formData  });

				}).catch(next);	
				
			}).catch(next);	 
		}
	};//End editEmailTemplate()

	
	
	/**
	 * Function for add Email template
	 *
	 * @param req 	As	Request Data
	 * @param res 	As	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.addEmailTemplate = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data */
			req.body = 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);

			let allData	= 	req.body;
			let name	= 	(req.body.name)		?	req.body.name	:"";
			let subject	= 	(req.body.subject)	?	req.body.subject	:"";
			let body	= 	(req.body.body)		?	req.body.body	:"";
			let action	= 	(req.body.action)	?	req.body.action	:"";
  
			/** Save Email template details */
			const eTempColl	=	db.collection(EMAIL_TEMPLATE_COLLECTION);
			eTempColl.insertOne({
				name		:	name,
				subject		: 	subject,
				body		: 	body,
				action		: 	action,
				created 	:	getUtcDate(),
				modified 	:	getUtcDate()
			},(err,result)=>{
				if(err) return next(err);

				req.flash(STATUS_SUCCESS, res.__("admin.email_template.record_added_successfully"));
				return res.redirect(WEBSITE_ADMIN_URL+'email_template'); 
			});
		}
		else{
			
			formData = false;
			if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
				formData = req.session.formData;
				req.session.formData = null;
			}
			
			/** Set options for get email action list **/
			let optionsForActions = {
				collections : [{
					collection 	: 	EMAIL_ACTION_COLLECTION,
					columns 	: 	["action","action"],
					conditions 	: 	{},
					selected 	: 	[formData.action],
				}]
			};
			
			getDropdownList(req, res, next, optionsForActions).then(actionResponse=>{
				
				if(actionResponse.status != STATUS_SUCCESS){
					req.flash(STATUS_ERROR, actionResponse.message);
					return res.redirect(WEBSITE_ADMIN_URL+'email_template'); 
				}
				
				let actionList = (actionResponse && actionResponse.final_html_data && actionResponse.final_html_data["0"])	?	actionResponse.final_html_data["0"]:"";
				 
				req.breadcrumbs(brdObj.add);
				res.render("edit",{ 'error': validationErrors, 'formData': formData, 'email_action_list': actionList});
				
			
			}).catch(next);	
			
			
		}
	};//End addEmailTemplate()
	
	
	
	/**
	 * Function for get email action options
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.getEmailActionOptions = (req,res,next)=>{
		let emailAction = (req.body.action) ? req.body.action:"";

		if(!emailAction){
			/** Send error response **/
			return res.send({
				status	: STATUS_ERROR,
				message	: res.__("admin.system.something_going_wrong_please_try_again")
			});
		}

		/** Get email template details **/
		const emailActions = db.collection(EMAIL_ACTION_COLLECTION);
		emailActions.findOne(
			{action : emailAction},
			{projection: {_id:1,options:1}},
			(err, result)=>{
				if(err) return next(err);

				/** Send Success response */
				res.send({
					status	: STATUS_SUCCESS,
					result	: (result.options) ? result.options.split(",") : []
				});
			}
		);
	};// end getEmailActionOptions()
	
	
}
module.exports = new Cms();
