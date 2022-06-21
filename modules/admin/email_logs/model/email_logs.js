const paginate 		= 	require('express-paginate'); 
const {ObjectId} 	= 	require('mongodb');
const  brdObj		=	require(WEBSITE_ADMIN_MODULES_PATH+"/email_logs/breadcrumbs");


function EmailLog() {

	/**
	 * Listing URL
	 */
	const LISTING_URL	=	WEBSITE_ADMIN_URL+"email_logs";
	
	
	
	/**
	 * Function for get list of email logs pages
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getEmailLogList = (req, res)=>{

		let limit			= (req.body.length) 		? parseInt(req.body.length) 		: ADMIN_LISTING_LIMIT;
		let skip			=  req.skip
		
		let to			= 	(req.query.to) ? req.query.to : "";
		let subject		= 	(req.query.subject) ? req.query.subject : "";
		let fromDate	= 	(req.query.from_date) ? req.query.from_date : "";
		let toDate		= 	(req.query.to_date) ? req.query.to_date : "";
		
		/** Set conditions **/
		var commonConditions = {};
		
		if (to != "") {
			commonConditions.to	=	new RegExp(to, 'i');
		}
		
		if (subject != "") {
			commonConditions.subject	=	new RegExp(subject, 'i');
		}
		
		if (fromDate != "" && toDate != "") {
			commonConditions.created = {
				$gte 	: newDate(fromDate),
				$lte 	: newDate(toDate),
			};
		}
		
		const emailLogColl	= db.collection(EMAIL_LOG_COLLECTION);
		
		emailLogColl.find(commonConditions).skip(skip).limit(limit).sort( { title: SORT_ASC } ).toArray(function(err, results) {
			if (err) throw err;
			
			emailLogColl.find(commonConditions).count(function(errCount, itemCount) {
				if (errCount) throw errCount;
				
				let pageCount = 	Math.ceil(itemCount / limit);
				
				req.breadcrumbs(brdObj.list);
				
				res.render('list', {results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
				}); 
			});
		});
	};//End getEmailLogList()
	
	
	
	/**
	 * Function for view  email log's Detail
	 *
	 * @param req 	As 	Request Data
     * @param res 	As 	Response Data
     * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render
	 */
	this.viewEmailLogDetails = (req,res,next)=>{
		/** Get  email log details **/
		getEmailLogDetails(req,res,next).then(response=>{
			if(response.status != STATUS_SUCCESS){
				/** Send error response **/
				req.flash(STATUS_ERROR,response.message);
				res.redirect(LISTING_URL);
				return;
			}
			
			/** Render view page **/
			req.breadcrumbs(brdObj.view);
			res.render('view',{ result : response.result });
		}).catch(next);	
	};//End viewEmailLogDetails()	
	
	
	
	/**
	 * Function to get email log's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getEmailLogDetails = (req,res,next)=>{
		return new Promise(resolve=>{
			let emailLogId = (req.params.id) ? req.params.id : "";
			
			const emailLogColl	= db.collection(EMAIL_LOG_COLLECTION);
			emailLogColl.findOne(
				{_id : ObjectId(emailLogId)},
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
	};// End getEmailLogDetails().
 
}
module.exports = new EmailLog();
