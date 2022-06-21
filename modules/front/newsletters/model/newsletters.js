
function NewsLetter() {
	
	/**
	 * Function for contact
	 *
	 * @param req 	As 	Request Data
     * @param res 	As 	Response Data
     * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.newsLetterSave = (req, res,next, validationErrors)=>{
	
		return new Promise(resolve=>{
		if(isPost(req) && !validationErrors){		

			/** Sanitize Data **/
			req.body 			=	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);			
			let email		  	= 	(req.body.email) 			? 	req.body.email 			:"";			
			
			if(!email){
				/** Send error response **/
				resolve({
					status	: STATUS_ERROR,
					message	: res.__("admin.system.something_going_wrong_please_try_again")
				});
			}

			const newsletters = db.collection(NEWSLETTER_COLLECTION);


			newsletters.findOne({
				email		: email,				
			},async (err,result)=>{
				if(err) return next(err);

				if(result){
					/** Send error response **/
					resolve({
						status	: STATUS_ERROR,
						message : res.__("newsletter.global.this_email_is_already_exist"),
					});
				}
				else{

					/** Save contact data **/
					newsletters.insertOne({			
						email 		: 	email,				
						modified 	: 	getUtcDate(),
						created 	: 	getUtcDate()
					},async(err,result)=>{
						if(err) return next(err);

						resolve({
							status	: STATUS_SUCCESS,
							message : res.__("newsletter.global.newsletters_has_been_saved_successfully"),
						});

					});
				}

			}
		);

		}
		else{
			resolve({
				status	: STATUS_ERROR,
				message : validationErrors.email.msg,
			});
		}
	});
	
		
	};//End NewsLetter()
	
	
}
module.exports = new NewsLetter();
