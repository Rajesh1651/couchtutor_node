const bcrypt    	= 	require('bcrypt');
const crypto		= 	require("crypto");
const {ObjectId} 	= 	require('mongodb');

function User() {



/**
	 * Function for login
	 *
	 * @param req 	As	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
 this.login = (req, res, validationErrors)=>{

	return new Promise(resolve=>{

	//if(isPost(req) && !(validationErrors)){
		/** Sanitize Data **/
		req.body 			= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
		let email	 	= (req.body.email) 	? req.body.email	: "";
		let simplePassword 	= (req.body.password)	? req.body.password : "";
		let user_role_id 	= (req.body.user_role_id)	? req.body.user_role_id : "";
		 let return_url 	= (req.body.return_url)	? req.body.return_url : ""; 

		/** Set login options **/
		let loginOptions = {
			email 	:	email,
			password	: 	simplePassword,
			user_role_id : user_role_id
		};
		/** call login function **/
		userLoginFunction(req,res,loginOptions).then(responseData=>{

			if(responseData.status	!= STATUS_SUCCESS){
				var errorMsg			=	(responseData.errors)	?	responseData.errors	:[];
				req.session.formData	=	req.body;
			
				resolve({
					status	: STATUS_ERROR,
					errors :  errorMsg[0].msg,							
				});
				
			}
			else {

				req.flash(STATUS_SUCCESS, 'Hi, you have successfully logged in.');


				if(return_url!=""){
					redirect_url = return_url;
				}
				else{
					if(user_role_id == TUTOR_ROLE_ID){

						redirect_url = WEBSITE_URL+"tutor/dashboard";
				}
				else if(user_role_id == STUDENT_ROLE_ID){

					redirect_url = WEBSITE_URL+"student/dashboard";
				}
				}				
				
				 /** Send success response **/
				resolve({						
					status	: STATUS_SUCCESS,
					url : redirect_url,				
				});				
				
			}
			
		}).catch();
	//}
	// else{

		
	// 	resolve({
	// 		status	: STATUS_ERROR,
	// 		errors : [{"param":"password","msg": "Please enter email or password." }],
	// 	});
	// }
 });
	
};//End login()



/**
 * Function for login
 *
 * @param req 		As	Request Data
 * @param res 		As 	Response Data
 * @param next 		As 	Callback argument to the middleware function
 * @param options	As 	Object that have user name and password
 *
 * @return json
 */
let userLoginFunction = (req,res,options)=>{
	return new Promise(resolve=>{
		let email		= (options.email)		? options.email		: "";
		let simplePassword	= (options.password)		? options.password		: "";
		let rememberMe		= (req.body.remember_me) 	? req.body.remember_me	: false;
		let user_role_id	= (options.user_role_id)		? parseInt(options.user_role_id	): "";

		/** Get user Details **/
		const users = db.collection(USERS_COLLECTION);
		users.findOne({
			"is_deleted"	: DEACTIVE,
			"email"			: {$regex : "^"+email+"$",$options : "i"}, /** check user name with case insensitive */
			"user_role_id"	: user_role_id,
		},{projection: {
			user_role_id:1,first_name: 1,last_name:1,full_name:1,slug:1,email:1,active:1,is_verified:1,approval_status:1,created:1,password:1
		}},(err, resultData)=>{
			if(err) return '';

			if(!resultData){
				/** Send error response **/
				let response = {
					status	: 	STATUS_ERROR,
					errors	: 	[{"param":"password","msg": "Please enter correct email or password." }],
					options	: 	options
				};
				return resolve(response);
			}

			/**Compare password */
			let password =  (resultData.password) ? resultData.password : "";
			bcrypt.compare(simplePassword, password).then(passwordMatch=> {
				if(!passwordMatch){
					/** Send error response **/
					let response = {
						status	: 	STATUS_ERROR,
						errors	: 	[{"param":"password","msg": "Please enter correct email or password."}],
						options	: 	options
					};
					return resolve(response);
				}

				if(resultData.active != ACTIVE) {
					/** Send error response **/
					let response = {
						status	: 	STATUS_ERROR,
						errors	: 	[{"param":"password","msg":"Your account has been temporarily disabled. Please contact administrator to unlock."}],
						options	: 	options
					};
					return resolve(response);
				}
				
				
				// if(resultData.is_verified != ACTIVE) {
				// 	/** Send error response **/
				// 	let response = {
				// 		status	: 	STATUS_ERROR,
				// 		errors	: 	[{"param":"email","msg":"Your email address is not verified yet."}],
				// 		options	: 	options
				// 	};
				// 	return resolve(response);
				// }
				
				
				// if(resultData.approval_status == USER_STATUS_PENDING) {
				// 	/** Send error response **/
				// 	let response = {
				// 		status	: 	STATUS_ERROR,
				// 		errors	: 	[{"param":"email","msg":"Your profile is not approved yet. Please contact administrator to approve."}],
				// 		options	: 	options
				// 	};
				// 	return resolve(response);
				// }
				
				
				if(resultData.approval_status == USER_STATUS_REJECTED) {
					/** Send error response **/
					let response = {
						status	: 	STATUS_ERROR,
						errors	: 	[{"param":"email","msg":"Your profile has been rejected. Please contact administrator to approve."}],
						options	: 	options
					};
					return resolve(response);
				}
				

				/** If user check stay sign in check box*/
				if(rememberMe  == true){
					let cookie = req.cookies.adminLoggedIn;
					if (cookie === undefined){
						let userCipher			= crypto.createCipher("aes256", "username");
						let encryptedUserName	= userCipher.update(username, "utf8", "hex") + userCipher.final("hex");
						let passwordCipher		= crypto.createCipher("aes256", "password");
						let encryptedPassword	= passwordCipher.update(simplePassword, "utf8", "hex") + passwordCipher.final("hex");

						/**set a new cookie*/
						res.cookie("userLoggedIn",{username:encryptedUserName,password:encryptedPassword}, { maxAge: ADMIN_LOGGED_IN_COOKIE_EXPIRE_TIME, httpOnly: true });
					}
				}
				
				req.session.user = resultData;
				
				/** Send success response **/
				let response = {
					status	:	STATUS_SUCCESS,
					options	: 	options
				};
				resolve(response);
			});
		});
	});
};//End userLoginFunction()




	/**
	 * Function for logout
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	 this.logout = (req, res, next) => {
		let userId = (req.session.user && req.session.user._id) ? req.session.user._id : "";
		if (!userId) {
			/** Send error response */
			req.flash(STATUS_ERROR, res.__("system.something_going_wrong_please_try_again"));
			return res.redirect(WEBSITE_URL);	
		}
		
		var user_full_name	=	req.session.user.full_name;

		delete req.session.user;
		res.header("Cache-Control", "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0");
		res.clearCookie("frontLoggedIn");
		
		req.flash(STATUS_SUCCESS, 'Hi '+user_full_name+', you have successfully logged out.');
		return res.redirect(WEBSITE_URL);	
	};//End logout()



	/**
	 * Function for recover forgot password
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	 this.forgotPassword = (req, res, validationErrors)=>{
		
		return new Promise(resolve=>{
				/** Sanitize Data **/
				req.body 		= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
				let email	 	= (req.body.email) ? req.body.email :"";
				//let user_type_slug	 	= (req.body.user_type_slug) ? req.body.user_type_slug :"";
				 				

				const users = db.collection(USERS_COLLECTION);
				users.findOne({
					"email"			: 	email,
					//"user_type_slug" : 	user_type_slug
				},{projection: {_id:1,full_name:1}},(err, result)=>{
					if (result) {
						let currentTime			= 	currentTimeStamp();
						let validateString   	=	crypto.createHash("md5").update(currentTime+req.body.email).digest("hex");

						users.updateOne({
							_id : ObjectId(result._id)
						},
						{$set: {
							forgot_password_validate_string	: 	validateString,
							modified 						:	new Date()
						}},(err,updateResult)=>{
							if (updateResult) {
								/******** Send Mail for reset password link *******/
									let link	=	WEBSITE_URL+'reset-password?validate_string='+validateString;
									
									console.log(link);
									/*sendMail(req,res,{
										to 			:	email,
										action 		:	"Forgot Password",
										user_id 	:	result._id,
										rep_array 	:	[result.full_name,link]
									});*/
									/******** Send Mail for reset password link *******/

								/** Send success response **/
								req.flash(STATUS_SUCCESS, "If there is an account associated with "+email+". You will receive an email with a link to reset password.");

								let response = {
									status	: 	STATUS_SUCCESS,							
								};
								return resolve(response);


							/*	res.redirect(WEBSITE_URL+"forgot-password");*/
							}
							else{
								/** Send error response **/
								req.session.formData	=	req.body;
							//	req.flash(STATUS_ERROR, "Something went wrong, Please try again.");

								let response = {
									status	: 	STATUS_ERROR,
									message : "Something went wrong, Please try again."							
								};
								return resolve(response);


								//res.redirect(WEBSITE_URL+"forgot-password");
							}
						});
					}
					else{
						/** Send success response **/
						req.session.formData	=	req.body;
						/*req.flash(STATUS_SUCCESS, "If there is an account associated with "+email+". You will receive an email with a link to reset password.");*/

						let response = {
							status	: 	STATUS_ERROR,
							message : 	"If there is not an account associated with "+email+". Please enter registred email id."						
						};
						return resolve(response);

						/*res.redirect(WEBSITE_URL+"forgot-password");*/
					}
				}); 
			
			});
		
	
    };// end forgotPassword()	
	





/**
	 * Function for signup
	 *
	 * @param req 	As 	Request Data
     * @param res 	As 	Response Data
     * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
 this.tutorSignup = (req, res, next, validationErrors)=>{
	
	return new Promise(resolve=>{
	if(isPost(req) && !(validationErrors)){     

		/** Sanitize Data **/
		req.body 		=	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
		let password		=	(req.body.password)			? 	req.body.password		:"";
		let email		  	= 	(req.body.email) 			? 	req.body.email 			:"";
		let phoneNumber  	= 	(req.body.phone_number) 	? 	req.body.phone_number 	:"";
		let firstName 		= 	(req.body.first_name) 		? 	toTitleCase(req.body.first_name) 	:"";
		let lastName 		= 	(req.body.last_name) 		? 	toTitleCase(req.body.last_name)		:"";
		let dialCode 		= 	(req.body.dial_code) 		? 	req.body.dial_code 		:"";
		let fullName 		= 	firstName+' '+lastName;
		
		let currentTime			= 	currentTimeStamp();
		let validateString   	=	crypto.createHash("md5").update(currentTime+req.body.email).digest("hex");
					
		/** Configure user unique conditions **/
		const users = db.collection(USERS_COLLECTION);
		 
		/** Set options for get user slug **/
		let slugOptions = {
			title 	: fullName,
			table_name 	: "users",
			slug_field 	: "slug"
		};


		/** Get slug **/
		 getDatabaseSlug(slugOptions).then(slugResponse=>{

		// 	/**Genrate password hash */
			bcrypt.hash(password, BCRYPT_PASSWORD_SALT_ROUNDS).then(newPassword=>{

				/** Save user data **/
				
				users.insertOne({
					first_name	 			: 	firstName,
					last_name	 			: 	lastName,
					full_name	 			: 	fullName,
					email 					: 	email,
					username 				:	email,
					phone_number 			: 	phoneNumber,
					dial_code	 			: 	dialCode,
					active 					:	ACTIVE,
					user_role_id 			:	TUTOR_ROLE_ID,
					user_role_slug 			:	TUTOR_ROLE_SLUG,
					password 				:	newPassword,
					is_verified 			: 	NOT_VERIFIED,
					approval_status			: 	USER_STATUS_PENDING,
					email_validate_string	: 	validateString,
					is_deleted 				: 	NOT_DELETED,
					block 				    : 	UNBLOCK,
					created_by 				: 	INACTIVE,
					slug 					: 	(slugResponse && slugResponse.title) ? slugResponse.title :"",
					modified 				: 	getUtcDate(),
					created 				: 	getUtcDate()
				},(err,result)=>{
					if(err) return next(err);
					/******* Send mail to user *******/
					/*
					let verifyLink = WEBSITE_URL + "verify_email/" + validateString;
					
					let emailOptions = {
						to 			: email,
						action 		: "Email Verification",
						rep_array 	:[fullName, verifyLink]
					};

					
					sendMail(req,res,emailOptions);
					*/
					/******* Send mail to user *******/
						
					req.flash(STATUS_SUCCESS, "Your registration has been done successfully. Please verify your account, we have sent an email verification link on your registered email id to verify your email address.");				

					resolve({
						status	: STATUS_SUCCESS,
						url : WEBSITE_URL,
					});
					
				});
			});
		 }).catch(next); 
	}
	else{
		resolve({
			status	: STATUS_ERROR,
			errors : validationErrors
		});
	}
	});
};//End signup()


	

	
	


	
/**
	 * Function for tutorDashboard
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
 this.tutorDashboard = (req, res, next)=>{
		
				
		/**Render edit profile page*/
		formData = false;
		if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
			formData = req.session.formData;
			req.session.formData = null;
		}
		

		res.render("tutor/dashboard",{ 'formData': formData });
	
};//End tutorDashboard()




/**
	 * Function for edit admin' s profile details
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
 this.tutorEeditProfile = (req, res, next, validationErrors)=>{
	if(isPost(req) && !(validationErrors)){
		/** Sanitize Data **/
		req.body 			= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
		let password		= (req.body.password)			? req.body.password			: "";
		let confirmPassword	= (req.body.confirm_password)	? req.body.confirm_password	: "";
		let id 				= (req.session.user)			? req.session.user._id		: "";

		if(id){

			let passChanged = 0;
			if(password != "" || confirmPassword != ""){
				passChanged = 1;	 
			} 
			let firstName 	= 	(req.body.first_name) 		? 	toTitleCase(req.body.first_name) 	:"";
			let lastName 	= 	(req.body.last_name) 		? 	toTitleCase(req.body.last_name)		:"";
			let fullName 	= 	firstName+' '+lastName;
			const users		= 	db.collection(USERS_COLLECTION);
			try{
				if(passChanged){
					try{
						/** update users's profile details **/
						bcrypt.hash(password, BCRYPT_PASSWORD_SALT_ROUNDS).then(newPassword=>{
							let insertData = {
								first_name	: 	firstName,
								last_name	: 	lastName,
								full_name	: 	fullName,
								password  : newPassword,
								modified  : getUtcDate()
							};
							updateUserProfile(insertData,req,res);
						});
					}
					catch(e){
						/** Send error response **/
						req.session.formData	=	req.body;
						req.flash(STATUS_ERROR,"Something went wrong, Please try again.");
						res.redirect(WEBSITE_URL+"tutor/edit_profile");
					}
				}
				else{
					/** update admin 's profile details **/
					let insertData 	=  {
						first_name	: 	firstName,
						last_name	: 	lastName,
						full_name	: 	fullName,
						modified 	:	getUtcDate()
					};
					updateUserProfile(insertData,req,res);
				}
			}
			catch(e){
				/** Send error response **/
				req.session.formData	=	req.body;
				req.flash(STATUS_ERROR,"Something went wrong, Please try again.");
				res.redirect(WEBSITE_URL+"tutor/edit_profile");
			}
		}
		else{
			/** Send error response **/
			req.session.formData	=	req.body;
			req.flash(STATUS_ERROR,"Something went wrong, Please try again.");
			res.redirect(WEBSITE_URL+"tutor/edit_profile");
		}
	}
	else{
		const users		= 	db.collection(USERS_COLLECTION);
		let userId		= 	(req.session.user) ? req.session.user._id	: "";
		let email		= 	(req.session.user) ? req.session.user.email	: "";
		
		users.findOne({"_id" : ObjectId(userId),  "user_role_id" : TUTOR_ROLE_ID},{projection: {_id:1,first_name:1,last_name:1,email:1,phone_number:1}},(err, result)=>{
			if(!err){
				
				/**Render edit profile page*/
				formData = false;
				if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
					formData = req.session.formData;
					req.session.formData = null;
				}
				
				if(!formData){
					formData = result;
				}

				res.render("tutor/edit_profile",{ result : result, 'error': validationErrors, 'formData': formData });
			}
			else{
				/** Send error response **/
				req.flash(STATUS_ERROR,"Something went wrong, Please try again.");
				res.redirect(WEBSITE_URL+"tutor/dashboard");
			}
		});
	}
};//End editProfile()



/**
 * Function for update user 's profile details
 *
 * @param insertData As Data to be insert in database
 * @param req As Request Data
 * @param res As Response Data
 *
 * @return json
 */
let updateUserProfile = (insertData,req,res)=>{
	try{
		let id 			= 	(req.session.user) 		?	req.session.user._id 	:"";
		let fullName 	= 	(req.body.full_name)	? 	req.body.full_name     	:"";
		let firstName 	= 	(req.body.first_name) 	? 	toTitleCase(req.body.first_name) 	:"";
		let lastName 	= 	(req.body.last_name) 	? 	toTitleCase(req.body.last_name)		:"";

		/** Update admin detail*/
		const users			= 	db.collection(USERS_COLLECTION);
		users.updateOne({
				_id : ObjectId(id)
			},
			{$set: insertData},
			(err,result)=>{
				if(!err){
					req.session.user.full_name		=	fullName;
					req.session.user.first_name		=	firstName;
					req.session.user.last_name		=	lastName;
					/** Send success response **/
					req.flash(STATUS_SUCCESS,"Your profile has been updated successfully.")
					return res.redirect(WEBSITE_URL+"tutor/edit_profile");
				}
				else{
					/** Send error response **/
					req.session.formData	=	req.body;
					req.flash(STATUS_ERROR,"Something went wrong, Please try again.");
					return res.redirect(WEBSITE_URL+"tutor/edit_profile");
				}
			}
		);
	}
	catch(e){
		/** Send error response **/
		req.flash(STATUS_ERROR,"Something went wrong, Please try again.");
		return res.redirect(WEBSITE_URL+"tutor/edit_profile");
	}
}//End updateUserProfile()




/**
	 * Function for signup
	 *
	 * @param req 	As 	Request Data
     * @param res 	As 	Response Data
     * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
 this.studentSignup = (req, res, next, validationErrors)=>{
	

	return new Promise(resolve=>{
	if(isPost(req) && !(validationErrors)){     

		/** Sanitize Data **/
		req.body 		=	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
		let password		=	(req.body.password)			? 	req.body.password		:"";
		let email		  	= 	(req.body.email) 			? 	req.body.email 			:"";
		let phoneNumber  	= 	(req.body.phone_number) 	? 	req.body.phone_number 	:"";
		let firstName 		= 	(req.body.first_name) 		? 	toTitleCase(req.body.first_name) 	:"";
		let lastName 		= 	(req.body.last_name) 		? 	toTitleCase(req.body.last_name)		:"";
		let dialCode 		= 	(req.body.dial_code) 		? 	req.body.dial_code 		:"";
		let fullName 		= 	firstName+' '+lastName;
		
		let currentTime			= 	currentTimeStamp();
		let validateString   	=	crypto.createHash("md5").update(currentTime+req.body.email).digest("hex");
					
		/** Configure user unique conditions **/
		const users = db.collection(USERS_COLLECTION);
		 
		/** Set options for get user slug **/
		let slugOptions = {
			title 	: fullName,
			table_name 	: "users",
			slug_field 	: "slug"
		};


		/** Get slug **/
		 getDatabaseSlug(slugOptions).then(slugResponse=>{

		// 	/**Genrate password hash */
			bcrypt.hash(password, BCRYPT_PASSWORD_SALT_ROUNDS).then(newPassword=>{

				/** Save user data **/
				
				users.insertOne({
					first_name	 			: 	firstName,
					last_name	 			: 	lastName,
					full_name	 			: 	fullName,
					email 					: 	email,
					username 				:	email,
					phone_number 			: 	phoneNumber,
					dial_code	 			: 	dialCode,
					active 					:	ACTIVE,
					user_role_id 			:	STUDENT_ROLE_ID,
					user_role_slug 			:	STUDENT_ROLE_SLUG,
					password 				:	newPassword,
					is_verified 			: 	NOT_VERIFIED,
					approval_status			: 	USER_STATUS_APPROVED,
					email_validate_string	: 	validateString,
					is_deleted 				: 	NOT_DELETED,
					block 				    : 	UNBLOCK,
					created_by 				: 	INACTIVE,
					slug 					: 	(slugResponse && slugResponse.title) ? slugResponse.title :"",
					modified 				: 	getUtcDate(),
					created 				: 	getUtcDate()
				},(err,result)=>{
					if(err) return next(err);
					/******* Send mail to user *******/
					/*
					let verifyLink = WEBSITE_URL + "verify_email/" + validateString;
					
					let emailOptions = {
						to 			: email,
						action 		: "Email Verification",
						rep_array 	:[fullName, verifyLink]
					};

					
					sendMail(req,res,emailOptions);
					*/
					/******* Send mail to user *******/
					
					req.flash(STATUS_SUCCESS, "Your registration has been done successfully. Please verify your account, we have sent an email verification link on your registered email id to verify your email address.");				

					resolve({
						status	: STATUS_SUCCESS,
						url : WEBSITE_URL,
					});
					
				});
			});
		 }).catch(next); 
	}
	else{
		resolve({
			status	: STATUS_ERROR,
			errors : validationErrors
		});
	}
	});
};//End signup()





/**
	 * Function for studentDashboard
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
 this.studentDashboard = (req, res, next)=>{
		
				
	/**Render edit profile page*/
	formData = false;
	if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
		formData = req.session.formData;
		req.session.formData = null;
	}
	

	res.render("student/dashboard",{ 'formData': formData });

};//End studentDashboard()


























































	
	

	

	
	
	/**
	 * Function for reset password
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	this.resetPassword = (req, res, validationErrors)=>{
		if(req.query &&  typeof req.query.validate_string !== typeof undefined  && req.query.validate_string !=""){
			if(isPost(req) && !(validationErrors)){
				let validateString	= (req.body.validate_string) ? req.body.validate_string : "";
				if (validateString != "") {
					/** Check validation **/
					 
					 
					 
					let password	=	(req.body.password)	? req.body.password	:"";
					/*** Store hash password **/
					bcrypt.hash(password, BCRYPT_PASSWORD_SALT_ROUNDS).then(newPassword=>{
						
						try{
							const users = db.collection(USERS_COLLECTION);
							users.findOne({
								forgot_password_validate_string	: validateString, "user_role_id" : FRONT_USER_ROLE_ID
							},{projection: {_id:1,full_name:1}},(err, result)=>{
								if (result) {	
									try{
										/** update password*/
										users.updateOne({
											_id :	result._id
										},
										{
											$set: {
												password 	: 	newPassword,
												modified	: 	new Date()
											},
											$unset : {
												forgot_password_validate_string	: 1,
											}
										},(err,updateResult)=>{
											
											if (updateResult) {
												/******** Send Mail for reset password *******/
												sendMail(req,res,{
													to 			:	result.email,
													action 		:	"Reset Password",
													user_id 	:	result._id,
													rep_array 	:	[result.full_name]
												});
												/******** Send Mail for reset password *******/
												
												/** send Success response **/
												req.flash(STATUS_SUCCESS, "Your password has been reset successfully.");
												return res.redirect(WEBSITE_URL+"login");
											}
											else{
												/** Send error response **/
												req.session.formData	=	req.body;
												req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
												res.redirect(WEBSITE_URL+'reset-password?validate_string='+validateString);
											}
											
											/** send Success response **/
											
										});
									}
									catch(e){
										req.session.formData	=	req.body;
										req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
										return res.redirect(WEBSITE_URL+'reset-password?validate_string='+validateString);
									}
								}
								else{
									req.session.formData	=	req.body;
									req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.SSSSSSSSSSSSSS");
									return res.redirect(WEBSITE_URL+'reset-password?validate_string='+validateString);
								}
							});
						}
						catch(e){
							req.session.formData	=	req.body;
							req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
							return res.redirect(WEBSITE_URL+'reset-password?validate_string='+validateString);
						}
					}); 
				}
				else{
					req.session.formData	=	req.body;
					req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link CCCCCCCCCCC.");
					return res.redirect(WEBSITE_URL+'reset-password?validate_string='+validateString);
				}
			}
			else{
				try{
				
					formData = false;
					if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
						formData = req.session.formData;
						req.session.formData = null;
					}
				
					/** Get user details **/
					let validateString	= (req.query.validate_string) ? req.query.validate_string : "";
					const users 		= db.collection(USERS_COLLECTION);
					users.findOne({
						forgot_password_validate_string : validateString,
					},{projection: {_id:1,full_name:1}},(err, result)=>{
						if(result) {
							/** Render reset password page **/
							res.render("reset_password",{ validate_string : validateString, 'error': validationErrors, 'formData': formData });
						}
						else{
							/** Send error response **/
							req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
							return res.redirect(WEBSITE_URL+"login");
						}
					});
				}
				catch(e){
					/** Send error response **/
					req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
					return res.redirect(WEBSITE_URL+"login");
				}
			}
		}
		else{
			/** Send error response **/
			req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.xxxxxxxxxxx");
			return res.redirect(WEBSITE_URL+"login");
		}
	};//End resetPassword()
	
	
	
	/**
	 * Function for signup
	 *
	 * @param req 	As 	Request Data
     * @param res 	As 	Response Data
     * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.signup = (req, res, next, validationErrors)=>{

		if(isPost(req) && !(validationErrors)){
			/** Sanitize Data **/
			req.body 		=	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
			let password		=	(req.body.password)			? 	req.body.password		:"";
			let email		  	= 	(req.body.email) 			? 	req.body.email 			:"";
			let phoneNumber  	= 	(req.body.phone_number) 	? 	req.body.phone_number 	:"";
			let firstName 		= 	(req.body.first_name) 		? 	toTitleCase(req.body.first_name) 	:"";
			let lastName 		= 	(req.body.last_name) 		? 	toTitleCase(req.body.last_name)		:"";
			let dialCode 		= 	(req.body.dial_code) 		? 	req.body.dial_code 		:"";
			let fullName 		= 	firstName+' '+lastName;
			
			let currentTime			= 	currentTimeStamp();
			let validateString   	=	crypto.createHash("md5").update(currentTime+req.body.email).digest("hex");
						
			/** Configure user unique conditions **/
			const users = db.collection(USERS_COLLECTION);
			 
			/** Set options for get user slug **/
			let slugOptions = {
				title 		: fullName,
				table_name 	: "users",
				slug_field 	: "slug"
			};

			/** Get slug **/
			getDatabaseSlug(slugOptions).then(slugResponse=>{

				/**Genrate password hash */
				bcrypt.hash(password, BCRYPT_PASSWORD_SALT_ROUNDS).then(newPassword=>{

					/** Save user data **/
					users.insertOne({
						first_name	 			: 	firstName,
						last_name	 			: 	lastName,
						full_name	 			: 	fullName,
						email 					: 	email,
						username 				:	email,
						phone_number 			: 	phoneNumber,
						dial_code	 			: 	dialCode,
						active 					:	ACTIVE,
						user_role_id 			:	FRONT_USER_ROLE_ID,
						user_type 				:	USER_TYPE_CUSTOMER,
						password 				:	newPassword,
						is_verified 			: 	NOT_VERIFIED,
						approval_status			: 	USER_STATUS_PENDING,
						email_validate_string	: 	validateString,
						is_deleted 				: 	NOT_DELETED,
						created_by 				: 	INACTIVE,
						slug 					: 	(slugResponse && slugResponse.title) ? slugResponse.title :"",
						modified 				: 	getUtcDate(),
						created 				: 	getUtcDate()
					},(err,result)=>{
						if(err) return next(err);
						/******* Send mail to user *******/
						let verifyLink = WEBSITE_URL + "verify_email/" + validateString;
						
						let emailOptions = {
							to 			: email,
							action 		: "Email Verification",
							rep_array 	:[fullName, verifyLink]
						};
						sendMail(req,res,emailOptions);
						/******* Send mail to user *******/
							
						req.flash(STATUS_SUCCESS, "Your registration has been done successfully. Please verify your account, we have sent an email verification link on your registered email id to verify your email address.");
						return res.redirect(WEBSITE_URL+'signup');
					});
				});
			}).catch(next); 
		}
		else{

			formData = false;
			if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
				formData = req.session.formData;
				req.session.formData = null;
			}
			
			res.render("signup",{
				'error': validationErrors, 
				'formData': formData 
			});
		}
	};//End signup()
	
	
	
	/**
	 * Function for verify Email
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	this.verifyEmail = (req, res, next)=>{
		if(req.params &&  typeof req.params.validate_string !== typeof undefined  && req.params.validate_string !=""){
			 
			let validateString	= req.params.validate_string;
			if (validateString != "") {	
				try{
					const users = db.collection(USERS_COLLECTION);
					users.findOne({
						email_validate_string	: validateString, "user_role_id" : FRONT_USER_ROLE_ID
					},{projection: {_id:1,full_name:1}},(err, result)=>{
						if (result) {	
							try{
								/** update password*/
								users.updateOne({
									_id :	result._id
								},
								{
									$set: {
										is_verified :	VERIFIED,
										modified	: 	new Date()
									},
									$unset : {
										email_validate_string	: 1,
									}
								},(err,updateResult)=>{
									/** send Success response **/
									req.flash(STATUS_SUCCESS, "Your account has been verified successfully.");
									return res.redirect(WEBSITE_URL+"login");
								});
							}
							catch(e){
								req.session.formData	=	req.body;
								req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
								return res.redirect(WEBSITE_URL+"login");
							}
						}
						else{
							req.session.formData	=	req.body;
							req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
							return res.redirect(WEBSITE_URL+"login");
						}
					});
				}
				catch(e){
					req.session.formData	=	req.body;
					req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
					return res.redirect(WEBSITE_URL+"login");
				}
			}
			else{
				req.session.formData	=	req.body;
				req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
				return res.redirect(WEBSITE_URL+"login");
			}
		}
		else{
			/** Send error response **/
			req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
			return res.redirect(WEBSITE_URL+"login");
		}
	};//End verifyEmail()
	
	
	
	/**
	 * Function for resend Verification Email
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	this.resendVerificationEmail = (req, res, next)=>{
		if(req.params &&  typeof req.params.validate_string !== typeof undefined  && req.params.validate_string !=""){
			 
			let validateString	= req.params.validate_string;
			if (validateString != "") {	
				try{
					const users = db.collection(USERS_COLLECTION);
					users.findOne({
						email_validate_string	: validateString, "user_role_id" : FRONT_USER_ROLE_ID
					},{projection: {_id:1,email:1,full_name:1}},(err, result)=>{
						if (result) {	
							try{
								
								if(result.is_verified == VERIFIED){
									/** update password*/
									users.updateOne({
										_id :	result._id
									},
									{
										$set: {
											modified	: 	new Date()
										},
										$unset : {
											email_validate_string	: 1,
										}
									},(err,updateResult)=>{
										/** send Success response **/
										req.flash(STATUS_SUCCESS, "Your account is already verified.");
										return res.redirect(WEBSITE_URL+"login");
									});
								}
								
								let currentTime			= 	currentTimeStamp();
								let email				=	result.email;
								let newValidateString   =	crypto.createHash("md5").update(currentTime+email).digest("hex");
								
								
								/** update password*/
								users.updateOne({
									_id :	result._id
								},
								{
									$set: {
										email_validate_string :	newValidateString,
										modified	: 	new Date()
									}
								},(err,updateResult)=>{
									
									if(updateResult){
										/******* Send mail to user *******/
										let verifyLink = WEBSITE_URL + "verify_email/" + newValidateString;
										
										let emailOptions = {
											to 			: email,
											action 		: "Email Verification",
											rep_array 	:[result.full_name, verifyLink]
										};
										sendMail(req,res,emailOptions);
										/******* Send mail to user *******/
										
										/** send Success response **/
										req.flash(STATUS_SUCCESS, "Verification email has been sent again.");
										return res.redirect(WEBSITE_URL+"login");
									}
									else{
										/** Send error response **/
										req.session.formData	=	req.body;
										req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
										res.redirect(WEBSITE_URL);
									}
								});
							}
							catch(e){
								req.session.formData	=	req.body;
								req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
								return res.redirect(WEBSITE_URL+"login");
							}
						}
						else{
							req.session.formData	=	req.body;
							req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
							return res.redirect(WEBSITE_URL+"login");
						}
					});
				}
				catch(e){
					req.session.formData	=	req.body;
					req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
					return res.redirect(WEBSITE_URL+"login");
				}
			}
			else{
				req.session.formData	=	req.body;
				req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
				return res.redirect(WEBSITE_URL+"login");
			}
		}
		else{
			/** Send error response **/
			req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
			return res.redirect(WEBSITE_URL+"login");
		}
	};//End resendVerificationEmail()
	
	
	
	
	
	
}
module.exports = new User();
