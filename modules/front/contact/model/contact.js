function Contact() {

	
	/**
	 * Function for contact
	 *
	 * @param req 	As 	Request Data
     * @param res 	As 	Response Data
     * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.contact = (req, res,next, validationErrors)=>{	
		if(isPost(req) && !validationErrors){
			/** Sanitize Data **/
			req.body 			=	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
			let firstName 		= 	(req.body.first_name) 		? 	toTitleCase(req.body.first_name) 	:"";
			let lastName 		= 	(req.body.last_name) 		? 	toTitleCase(req.body.last_name)		:"";
			let email		  	= 	(req.body.email) 			? 	req.body.email 			:"";
			let phoneNumber  	= 	(req.body.phone_number) 	? 	req.body.phone_number 	:"";
			let dialCode 		= 	(req.body.dial_code) 		? 	req.body.dial_code 		:"";
			let subject 		= 	(req.body.subject) 			? 	req.body.subject 	:"";
			let message 		= 	(req.body.message) 			? 	req.body.message 	:"";

			const contactColl = db.collection(CONTACTS_COLLECTION);

			/** Save contact data **/
			contactColl.insertOne({
				first_name	 : 	firstName,
				last_name	 : 	lastName,
				email 		: 	email,
				phone_number : 	phoneNumber,
				dial_code	: 	dialCode,
				subject	 	: 	subject,
				message	 	: 	message,
				modified 	: 	getUtcDate(),
				created 	: 	getUtcDate()
			},(err,result)=>{
				if(err) return next(err);		

				req.flash(STATUS_SUCCESS, "Thank-you for submitting enquiry, We will contact you shortly.");
				return res.redirect(WEBSITE_URL+'contact');
			});
		}
		else{

			formData = false;
			if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
				formData = req.session.formData;
				req.session.formData = null;
			}			
			res.render("contact",{
				'error': validationErrors, 
				'formData': formData 
			});
		}
	};//End contact()
	
	
}
module.exports = new Contact();
