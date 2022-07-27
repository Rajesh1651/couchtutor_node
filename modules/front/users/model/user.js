const asyncParallel = require("async/parallel");
const bcrypt = require('bcrypt');
const crypto = require("crypto");
const { ObjectId } = require('mongodb');
const url = require('url');

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
	this.login = (req, res, validationErrors) => {

		return new Promise(resolve => {

			//if(isPost(req) && !(validationErrors)){
			/** Sanitize Data **/
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
			let email = (req.body.email) ? req.body.email : "";
			let simplePassword = (req.body.password) ? req.body.password : "";
			let user_role_id = (req.body.user_role_id) ? req.body.user_role_id : "";
			let return_url = (req.body.return_url) ? req.body.return_url : "";

			/** Set login options **/
			let loginOptions = {
				email: email,
				password: simplePassword,
				user_role_id: user_role_id
			};
			/** call login function **/
			userLoginFunction(req, res, loginOptions).then(responseData => {

				if (responseData.status != STATUS_SUCCESS) {
					var errorMsg = (responseData.errors) ? responseData.errors : [];
					req.session.formData = req.body;

					resolve({
						status: STATUS_ERROR,
						errors: errorMsg[0].msg,
					});

				}
				else {

					req.flash(STATUS_SUCCESS, 'Hi, you have successfully logged in.');


					if (return_url != "") {
						redirect_url = return_url;
					}
					else {
						if (user_role_id == TUTOR_ROLE_ID) {

							redirect_url = WEBSITE_URL + "tutor/dashboard";
						}
						else if (user_role_id == STUDENT_ROLE_ID) {

							redirect_url = WEBSITE_URL + "student/dashboard";
						}
					}

					/** Send success response **/
					resolve({
						status: STATUS_SUCCESS,
						url: redirect_url,
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
	let userLoginFunction = (req, res, options) => {
		return new Promise(resolve => {
			let email = (options.email) ? options.email : "";
			let simplePassword = (options.password) ? options.password : "";
			let rememberMe = (req.body.remember_me) ? req.body.remember_me : false;
			let user_role_id = (options.user_role_id) ? parseInt(options.user_role_id) : "";

			/** Get user Details **/
			const users = db.collection(USERS_COLLECTION);
			users.findOne({
				"is_deleted": DEACTIVE,
				"email": { $regex: "^" + email + "$", $options: "i" }, /** check user name with case insensitive */
				"user_role_id": user_role_id,
			}, {
				projection: {
					user_role_id: 1, first_name: 1, last_name: 1, full_name: 1, slug: 1, email: 1, active: 1, is_verified: 1, approval_status: 1, created: 1, password: 1, image: 1
				}
			}, (err, resultData) => {
				if (err) return '';

				if (!resultData) {
					/** Send error response **/
					let response = {
						status: STATUS_ERROR,
						errors: [{ "param": "password", "msg": "Please enter correct email or password." }],
						options: options
					};
					return resolve(response);
				}

				/**Compare password */
				let password = (resultData.password) ? resultData.password : "";
				bcrypt.compare(simplePassword, password).then(passwordMatch => {
					if (!passwordMatch) {
						/** Send error response **/
						let response = {
							status: STATUS_ERROR,
							errors: [{ "param": "password", "msg": "Please enter correct email or password." }],
							options: options
						};
						return resolve(response);
					}

					if (resultData.active != ACTIVE) {
						/** Send error response **/
						let response = {
							status: STATUS_ERROR,
							errors: [{ "param": "password", "msg": "Your account has been temporarily disabled. Please contact administrator to unlock." }],
							options: options
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


					if (resultData.approval_status == USER_STATUS_REJECTED) {
						/** Send error response **/
						let response = {
							status: STATUS_ERROR,
							errors: [{ "param": "email", "msg": "Your profile has been rejected. Please contact administrator to approve." }],
							options: options
						};
						return resolve(response);
					}


					/** If user check stay sign in check box*/
					if (rememberMe == true) {
						let cookie = req.cookies.adminLoggedIn;
						if (cookie === undefined) {
							let userCipher = crypto.createCipher("aes256", "username");
							let encryptedUserName = userCipher.update(username, "utf8", "hex") + userCipher.final("hex");
							let passwordCipher = crypto.createCipher("aes256", "password");
							let encryptedPassword = passwordCipher.update(simplePassword, "utf8", "hex") + passwordCipher.final("hex");

							/**set a new cookie*/
							res.cookie("userLoggedIn", { username: encryptedUserName, password: encryptedPassword }, { maxAge: ADMIN_LOGGED_IN_COOKIE_EXPIRE_TIME, httpOnly: true });
						}
					}

					req.session.user = resultData;

					/** Send success response **/
					let response = {
						status: STATUS_SUCCESS,
						options: options
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

		var user_full_name = req.session.user.full_name;

		delete req.session.user;
		res.header("Cache-Control", "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0");
		res.clearCookie("frontLoggedIn");

		req.flash(STATUS_SUCCESS, 'Hi ' + user_full_name + ', you have successfully logged out.');
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
	this.forgotPassword = (req, res, validationErrors) => {

		return new Promise(resolve => {
			/** Sanitize Data **/
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
			let email = (req.body.email) ? req.body.email : "";
			//let user_type_slug	 	= (req.body.user_type_slug) ? req.body.user_type_slug :"";


			const users = db.collection(USERS_COLLECTION);
			users.findOne({
				"email": email,
				//"user_type_slug" : 	user_type_slug
			}, { projection: { _id: 1, full_name: 1 } }, (err, result) => {
				if (result) {
					let currentTime = currentTimeStamp();
					let validateString = crypto.createHash("md5").update(currentTime + req.body.email).digest("hex");

					users.updateOne({
						_id: ObjectId(result._id)
					},
						{
							$set: {
								forgot_password_validate_string: validateString,
								modified: new Date()
							}
						}, (err, updateResult) => {
							if (updateResult) {
								/******** Send Mail for reset password link *******/
								let link = WEBSITE_URL + 'reset-password?validate_string=' + validateString;

								console.log(link);
								/*sendMail(req,res,{
									to 			:	email,
									action 		:	"Forgot Password",
									user_id 	:	result._id,
									rep_array 	:	[result.full_name,link]
								});*/
								/******** Send Mail for reset password link *******/

								/** Send success response **/
								req.flash(STATUS_SUCCESS, "If there is an account associated with " + email + ". You will receive an email with a link to reset password.");

								let response = {
									status: STATUS_SUCCESS,
								};
								return resolve(response);


								/*	res.redirect(WEBSITE_URL+"forgot-password");*/
							}
							else {
								/** Send error response **/
								req.session.formData = req.body;
								//	req.flash(STATUS_ERROR, "Something went wrong, Please try again.");

								let response = {
									status: STATUS_ERROR,
									message: "Something went wrong, Please try again."
								};
								return resolve(response);


								//res.redirect(WEBSITE_URL+"forgot-password");
							}
						});
				}
				else {
					/** Send success response **/
					req.session.formData = req.body;
					/*req.flash(STATUS_SUCCESS, "If there is an account associated with "+email+". You will receive an email with a link to reset password.");*/

					let response = {
						status: STATUS_ERROR,
						message: "If there is not an account associated with " + email + ". Please enter registred email id."
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
	this.tutorSignup = (req, res, next, validationErrors) => {

		return new Promise(resolve => {
			if (isPost(req) && !(validationErrors)) {

				/** Sanitize Data **/
				req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
				let password = (req.body.password) ? req.body.password : "";
				let email = (req.body.email) ? req.body.email : "";
				let phoneNumber = (req.body.phone_number) ? req.body.phone_number : "";
				let firstName = (req.body.first_name) ? toTitleCase(req.body.first_name) : "";
				let lastName = (req.body.last_name) ? toTitleCase(req.body.last_name) : "";
				let dialCode = (req.body.dial_code) ? req.body.dial_code : "";
				let fullName = firstName + ' ' + lastName;

				let currentTime = currentTimeStamp();
				let validateString = crypto.createHash("md5").update(currentTime + req.body.email).digest("hex");

				/** Configure user unique conditions **/
				const users = db.collection(USERS_COLLECTION);

				/** Set options for get user slug **/
				let slugOptions = {
					title: fullName,
					table_name: "users",
					slug_field: "slug"
				};


				/** Get slug **/
				getDatabaseSlug(slugOptions).then(slugResponse => {

					// 	/**Genrate password hash */
					bcrypt.hash(password, BCRYPT_PASSWORD_SALT_ROUNDS).then(newPassword => {

						/** Save user data **/

						users.insertOne({
							first_name: firstName,
							last_name: lastName,
							full_name: fullName,
							email: email,
							username: email,
							phone_number: phoneNumber,
							dial_code: dialCode,
							active: ACTIVE,
							user_role_id: TUTOR_ROLE_ID,
							user_role_slug: TUTOR_ROLE_SLUG,
							password: newPassword,
							is_verified: NOT_VERIFIED,
							approval_status: USER_STATUS_PENDING,
							email_validate_string: validateString,
							is_deleted: NOT_DELETED,
							block: UNBLOCK,
							created_by: INACTIVE,
							slug: (slugResponse && slugResponse.title) ? slugResponse.title : "",
							modified: getUtcDate(),
							created: getUtcDate()
						}, (err, result) => {
							if (err) return next(err);
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
								status: STATUS_SUCCESS,
								url: WEBSITE_URL,
							});

						});
					});
				}).catch(next);
			}
			else {
				resolve({
					status: STATUS_ERROR,
					errors: validationErrors
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
	this.tutorDashboard = (req, res, next) => {


		/**Render edit profile page*/
		formData = false;
		if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
			formData = req.session.formData;
			req.session.formData = null;
		}


		res.render("tutor/dashboard", { 'formData': formData });

	};//End tutorDashboard()




	/**
		 * Function for edit admin' s profile details
		 *
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return render/json
		 */
	this.tutorEeditProfile = (req, res, next, validationErrors) => {
		if (isPost(req) && !(validationErrors)) {
			/** Sanitize Data **/
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
			let password = (req.body.password) ? req.body.password : "";
			let confirmPassword = (req.body.confirm_password) ? req.body.confirm_password : "";
			let id = (req.session.user) ? req.session.user._id : "";


			if (id) {

				let passChanged = 0;
				if (password != "" || confirmPassword != "") {
					passChanged = 1;
				}
				let firstName = (req.body.first_name) ? toTitleCase(req.body.first_name) : "";
				let lastName = (req.body.last_name) ? toTitleCase(req.body.last_name) : "";
				let fullName = firstName + ' ' + lastName;

				let country_id = (req.body.country_id) ? req.body.country_id : "";
				let state_id = (req.body.state_id) ? req.body.state_id : "";
				let city_id = (req.body.city_id) ? req.body.city_id : "";

				let gender = (req.body.gender) ? req.body.gender : "";
				let dateofbirth = (req.body.dateofbirth) ? req.body.dateofbirth : "";


				const users = db.collection(USERS_COLLECTION);
				try {
					if (passChanged) {
						try {
							/** update users's profile details **/
							bcrypt.hash(password, BCRYPT_PASSWORD_SALT_ROUNDS).then(newPassword => {
								let insertData = {
									first_name: firstName,
									last_name: lastName,
									full_name: fullName,
									country_id: ObjectId(country_id),
									state_id: ObjectId(state_id),
									city_id: ObjectId(city_id),
									gender: gender,
									dateofbirth: dateofbirth,
									password: newPassword,
									modified: getUtcDate()
								};
								updateUserProfile(insertData, req, res);
							});
						}
						catch (e) {
							/** Send error response **/
							req.session.formData = req.body;
							req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
							res.redirect(WEBSITE_URL + "tutor/edit_profile");
						}
					}
					else {
						/** update admin 's profile details **/
						let insertData = {
							first_name: firstName,
							last_name: lastName,
							full_name: fullName,
							country_id: ObjectId(country_id),
							state_id: ObjectId(state_id),
							city_id: ObjectId(city_id),
							gender: gender,
							dateofbirth: dateofbirth,
							modified: getUtcDate()
						};
						updateUserProfile(insertData, req, res);
					}
				}
				catch (e) {
					/** Send error response **/
					req.session.formData = req.body;
					req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
					res.redirect(WEBSITE_URL + "tutor/edit_profile");
				}
			}
			else {
				/** Send error response **/
				req.session.formData = req.body;
				req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
				res.redirect(WEBSITE_URL + "tutor/edit_profile");
			}
		}
		else {
			const users = db.collection(USERS_COLLECTION);
			let userId = (req.session.user) ? req.session.user._id : "";
			let email = (req.session.user) ? req.session.user.email : "";


			users.findOne({ "_id": ObjectId(userId), "user_role_id": TUTOR_ROLE_ID }, { projection: { _id: 1, first_name: 1, last_name: 1, email: 1, phone_number: 1, city_id: 1, state_id: 1, country_id: 1, dateofbirth: 1, gender: 1 } }, (err, result) => {
				if (!err) {

					if (result != null) {
						var selectedCountryId = (result.country_id) ? result.country_id : '';
						var selectedStateId = (result.state_id) ? result.state_id : '';
						var selectedCityId = (result.city_id) ? result.city_id : '';
					}
					formData = false;
					if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
						formData = req.session.formData;
						req.session.formData = null;

						var selectedCountryId = (formData.country_id) ? ObjectId(formData.country_id) : '';
						var selectedStateId = (formData.state_id) ? ObjectId(formData.state_id) : '';
						var selectedCityId = (formData.city_id) ? ObjectId(formData.city_id) : '';
					}

					if (!formData) {
						formData = result;
					}

					let options = {
						collections: [
							{
								collection: COUNTRIES_COLLECTION,
								columns: ["_id", "title"],
								conditions: { is_deleted: NOT_DELETED, active: ACTIVE },
								selected: [selectedCountryId]
							},
							{
								collection: STATES_COLLECTION,
								columns: ["_id", "title"],
								conditions: { is_deleted: NOT_DELETED, active: ACTIVE, country_id: selectedCountryId },
								selected: [selectedStateId]
							},
							{
								collection: CITIES_COLLECTION,
								columns: ["_id", "title"],
								conditions: { is_deleted: NOT_DELETED, active: ACTIVE, state_id: selectedStateId },
								selected: [selectedCityId]
							},

						]
					};
					getDropdownList(req, res, next, options).then(dropdownResponse => {

						res.render("tutor/edit_profile", {
							result: result,
							'error': validationErrors,
							'formData': formData,
							country_list: (dropdownResponse && dropdownResponse.final_html_data && dropdownResponse.final_html_data["0"]) ? dropdownResponse.final_html_data["0"] : "",
							state_list: (dropdownResponse && dropdownResponse.final_html_data && dropdownResponse.final_html_data["1"]) ? dropdownResponse.final_html_data["1"] : "",
							city_list: (dropdownResponse && dropdownResponse.final_html_data && dropdownResponse.final_html_data["2"]) ? dropdownResponse.final_html_data["2"] : "",
						});

					});
				}
				else {
					/** Send error response **/
					req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
					res.redirect(WEBSITE_URL + "tutor/dashboard");
				}
			});
		}
	};//End editProfile()



	/**
		 * Function for edit tutor Advance Profile
		 *
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return render/json
		 */
	this.tutorAdvanceProfile = (req, res, next, validationErrors) => {

		const users = db.collection(USERS_COLLECTION);
		const tutorBasicDetails = db.collection(TUTOR_BASIC_DETAILS_COLLECTION);

		let userId = (req.session.user) ? req.session.user._id : "";



		if (isPost(req) && !(validationErrors)) {
			/** Sanitize Data **/
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);

			let brief_intro = (req.body.brief_intro) ? req.body.brief_intro : "";
			let tutoring_benefits = (req.body.tutoring_benefits) ? req.body.tutoring_benefits : "";
			let hobbies = (req.body.hobbies) ? req.body.hobbies : "";


			let tutor_languages = (req.body.tutor_languages) ? req.body.tutor_languages : [];
			let tutor_expertise = (req.body.tutor_expertise) ? req.body.tutor_expertise : [];
			let tutor_grades = (req.body.tutor_grades) ? req.body.tutor_grades : [];

			if (userId) {

				tutorBasicDetails.findOne({ "user_id": ObjectId(userId) }, (err, result) => {

					if (result) {

						let insertData = {
							brief_intro: brief_intro,
							tutoring_benefits: tutoring_benefits,
							hobbies: hobbies,
							modified: getUtcDate()
						}

						tutorBasicDetails.updateOne({
							user_id: ObjectId(userId)
						},
							{ $set: insertData }
						);

					}
					else {

						tutorBasicDetails.insertOne({
							user_id: ObjectId(userId),
							brief_intro: brief_intro,
							tutoring_benefits: tutoring_benefits,
							hobbies: hobbies,
							modified: getUtcDate(),
							created: getUtcDate()
						})
					}
				});

				/**save tutor references details */

				const tutorReferences = db.collection(TUTOR_REFERANCE_COLLECTION);
				tutorReferences.deleteMany({ user_id: ObjectId(userId) });
				let i = 1;

				while (i <= TUTOR_REFERENCES_COUNT) {
					let reference_name = (req.body['reference_name_' + i]) ? req.body['reference_name_' + i] : '';
					let designation = (req.body['designation_' + i]) ? req.body['designation_' + i] : '';
					let organisation = (req.body['organisation_' + i]) ? req.body['organisation_' + i] : '';
					let contact_number = (req.body['contact_number_' + i]) ? req.body['contact_number_' + i] : '';

					tutorReferences.insertOne({
						user_id: ObjectId(userId),
						reference_name: reference_name,
						designation: designation,
						organisation: organisation,
						contact_number: contact_number,
						deleted_at: NOT_DELETED,
						modified: getUtcDate(),
						created: getUtcDate()
					});

					i++;
				}
				/**save tutor references details */


				/**save tutor languages */


				const tutorLanguages = db.collection(TUTOR_LANGUAGE_COLLECTION);
				tutorLanguages.deleteMany({ user_id: ObjectId(userId) });

				tutor_languages.forEach(dropdown_id => {
					tutorLanguages.insertOne({
						user_id: ObjectId(userId),
						dropdown_id: ObjectId(dropdown_id),
						deleted_at: NOT_DELETED,
						modified: getUtcDate(),
						created: getUtcDate()
					})
				});


				/**save tutor languages */



				/**save tutor are of expertise */
				const tutorAreaOfExpertise = db.collection(TUTOR_AREA_OF_EXPERTISE_COLLECTION);
				tutorAreaOfExpertise.deleteMany({ user_id: ObjectId(userId) });

				tutor_expertise.forEach(dropdown_id => {
					tutorAreaOfExpertise.insertOne({
						user_id: ObjectId(userId),
						dropdown_id: ObjectId(dropdown_id),
						deleted_at: NOT_DELETED,
						modified: getUtcDate(),
						created: getUtcDate()
					})
				});
				/**save tutor are of expertise */



				/**save tutor Grades */
				const tutorGrades = db.collection(TUTOR_GRADES_COLLECTION);
				tutorGrades.deleteMany({ user_id: ObjectId(userId) });

				tutor_grades.forEach(dropdown_id => {
					tutorGrades.insertOne({
						user_id: ObjectId(userId),
						dropdown_id: ObjectId(dropdown_id),
						deleted_at: NOT_DELETED,
						modified: getUtcDate(),
						created: getUtcDate()
					})
				});


				/**save tutor Grades */
				req.flash(STATUS_SUCCESS, "Your advance profile has been updated successfully.");
				res.redirect(WEBSITE_URL + "tutor/edit-advance-profile");
			}
			else {
				/** Send error response **/
				req.session.formData = req.body;
				req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
				res.redirect(WEBSITE_URL + "tutor/edit-advance-profile");
			}
		}
		else {

			let commonConditions = { _id: ObjectId(userId) };

			users.aggregate([
				{ $match: commonConditions },
				// {$sort  : dataTableConfig.sort_conditions},
				// {$skip 	: skip},
				// {$limit : limit},
				{
					$lookup: {
						from: TUTOR_BASIC_DETAILS_COLLECTION,
						localField: "_id",
						foreignField: "user_id",
						as: "tutorBasicDetail",
					}
				},
				{
					$lookup: {
						from: TUTOR_LANGUAGE_COLLECTION,
						localField: "_id",
						foreignField: "user_id",
						as: "tutorLanguages",
					}
				},
				{
					$lookup: {
						from: TUTOR_AREA_OF_EXPERTISE_COLLECTION,
						localField: "_id",
						foreignField: "user_id",
						as: "tutorExpertiseAreas",
					}
				},
				{
					$lookup: {
						from: TUTOR_GRADES_COLLECTION,
						localField: "_id",
						foreignField: "user_id",
						as: "tutorGrades",
					}
				},
				{
					$lookup: {
						from: TUTOR_REFERANCE_COLLECTION,
						localField: "_id",
						foreignField: "user_id",
						as: "tutorReferencesDetail",
					}
				},
				{
					$lookup: {
						from: TUTOR_PROFILE_STATUS_COLLECTION,
						localField: "_id",
						foreignField: "user_id",
						as: "tutorProfileStatus",
					}
				},
				{ $project: { _id: 1, first_name: 1, last_name: 1, full_name: 1, email: 1, username: 1, phone_number: 1, dial_code: 1, gender: 1, profile_image: 1, dateofbirth: 1, active: 1, user_role_id: 1, user_role_slug: 1, is_verified: 1, tutorBasicDetail: "$tutorBasicDetail", tutorLanguages: "$tutorLanguages", tutorExpertiseAreas: "$tutorExpertiseAreas", tutorGrades: "$tutorGrades", tutorReferencesDetail: "$tutorReferencesDetail", tutorProfileStatus: "$tutorProfileStatus" } },
			]).toArray((err, result) => {

				if (!err) {

					/**Render edit profile page*/
					formData = false;
					if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
						formData = req.session.formData;
						req.session.formData = null;
					}

					if (!formData) {
						formData = result[0];
					}

					asyncParallel({

						language: (callback) => {

							const subjects = db.collection(MASTERS_COLLECTION);
							subjects.find({ dropdown_type: "language", active: ACTIVE }).sort({ title: SORT_ASC }).toArray(function (err, result) {
								callback(err, result);
							});
						},

						areaOfExpertise: (callback) => {

							const area_of_expertise = db.collection(MASTERS_COLLECTION);
							area_of_expertise.find({ dropdown_type: "area_of_expertise", active: ACTIVE }).sort({ title: SORT_ASC }).toArray(function (err, result) {
								callback(err, result);
							});
						},
						grades: (callback) => {

							const grades = db.collection(MASTERS_COLLECTION);
							grades.find({ dropdown_type: "grades", active: ACTIVE }).sort({ title: SORT_ASC }).toArray(function (err, result) {
								callback(err, result);
							});
						},


					}, (err, response) => {

						/** Render to index page **/
						let responseData = {
							languageList: response.language,
							areaOfExpertise: response.areaOfExpertise,
							grades: response.grades,
						};

						res.render("tutor/edit_advance_profile", { 'error': validationErrors, 'formData': formData, 'responseData': responseData });
					});

				}

				else {
					/** Send error response **/
					req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
					res.redirect(WEBSITE_URL + "tutor/dashboard");
				}
			})
		}
	};//End tutorAdvanceProfile()



	/**
		 * Function for edit tutor Advance Profile
		 *
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return render/json
		 */
	this.addFrontForeignContractorForm = (req, res, next, validationErrors) => {

		const tutorW8Form = db.collection(TUTOR_W8_CONTRACTOR_FORM_COLLECTION);

		let userId = (req.session.user) ? req.session.user._id : "";



		if (isPost(req) && !(validationErrors)) {
			/** Sanitize Data **/
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);

			let name = (req.body.name) ? req.body.name : "";
			let citizenship = (req.body.citizenship) ? req.body.citizenship : "";
			let address = (req.body.address) ? req.body.address : "";

			let country_id = (req.body.country_id) ? req.body.country_id : "";
			let state_id = (req.body.state_id) ? req.body.state_id : "";
			let city_id = (req.body.city_id) ? req.body.city_id : "";
			let tin_number = (req.body.tin_number) ? req.body.tin_number : "";
			let foreign_tax_identification_number = (req.body.foreign_tax_identification_number) ? req.body.foreign_tax_identification_number : "";


			if (userId) {

				tutorW8Form.findOne({ "user_id": ObjectId(userId) }, (err, result) => {

					if (result) {

						let insertData = {
							name: name,
							citizenship: citizenship,
							address: address,
							country_id: ObjectId(country_id),
							state_id: ObjectId(state_id),
							city_id: ObjectId(city_id),
							tin_number: tin_number,
							foreign_tax_identification_number: foreign_tax_identification_number,
							modified: getUtcDate()
						}

						tutorW8Form.updateOne({
							user_id: ObjectId(userId)
						},
							{ $set: insertData }
						);

					}
					else {

						tutorW8Form.insertOne({
							user_id: ObjectId(userId),
							name: name,
							citizenship: citizenship,
							address: address,
							country_id: ObjectId(country_id),
							state_id: ObjectId(state_id),
							city_id: ObjectId(city_id),
							tin_number: tin_number,
							foreign_tax_identification_number: foreign_tax_identification_number,
							modified: getUtcDate(),
							created: getUtcDate()
						})
					}
				});

				/**save tutor Grades */
				req.flash(STATUS_SUCCESS, "Your W8 contractor form has been updated successfully.");
				res.redirect(WEBSITE_URL + "tutor/edit-foreign-contractor-form");
			}
			else {
				/** Send error response **/
				req.session.formData = req.body;
				req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
				res.redirect(WEBSITE_URL + "tutor/edit-foreign-contractor-form");
			}
		}
		else {
			let userId = (req.session.user) ? req.session.user._id : "";
			const stateList = [];
			const cityList = [];


			tutorW8Form.findOne({ "user_id": ObjectId(userId) }, (err, result) => {
				if (!err) {
					if (result != null) {
						var selectedCountryId = (result.country_id) ? result.country_id : '';
						var selectedStateId = (result.state_id) ? result.state_id : '';
						var selectedCityId = (result.city_id) ? result.city_id : '';
					}
					formData = false;
					if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
						formData = req.session.formData;
						req.session.formData = null;

						var selectedCountryId = (formData.country_id) ? ObjectId(formData.country_id) : '';
						var selectedStateId = (formData.state_id) ? ObjectId(formData.state_id) : '';
						var selectedCityId = (formData.city_id) ? ObjectId(formData.city_id) : '';
					}

					if (!formData) {
						formData = (result) ? result : {};
					}


					let options = {
						collections: [
							{
								collection: COUNTRIES_COLLECTION,
								columns: ["_id", "title"],
								conditions: { is_deleted: NOT_DELETED, active: ACTIVE },
								selected: [selectedCountryId]
							},
							{
								collection: STATES_COLLECTION,
								columns: ["_id", "title"],
								conditions: { is_deleted: NOT_DELETED, active: ACTIVE, country_id: selectedCountryId },
								selected: [selectedStateId]
							},
							{
								collection: CITIES_COLLECTION,
								columns: ["_id", "title"],
								conditions: { is_deleted: NOT_DELETED, active: ACTIVE, state_id: selectedStateId },
								selected: [selectedCityId]
							},

						]
					};
					getDropdownList(req, res, next, options).then(dropdownResponse => {

						res.render("tutor/edit_foreign_contractor_details", {
							result: (result) ? result : {},
							'error': validationErrors,
							'formData': formData, country_list: (dropdownResponse && dropdownResponse.final_html_data && dropdownResponse.final_html_data["0"]) ? dropdownResponse.final_html_data["0"] : "",
							state_list: (dropdownResponse && dropdownResponse.final_html_data && dropdownResponse.final_html_data["1"]) ? dropdownResponse.final_html_data["1"] : "",
							city_list: (dropdownResponse && dropdownResponse.final_html_data && dropdownResponse.final_html_data["2"]) ? dropdownResponse.final_html_data["2"] : "",
						});

					})
				}
				else {
					/** Send error response **/
					req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
					res.redirect(WEBSITE_URL + "tutor/dashboard");
				}
			});

		}
	};//End tutorAdvanceProfile()



	/**
		 * Function for get states dropdown from country
		 *
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return render/json
		 */
	this.getStatesDropdownFromCountry = (req, res, next) => {
		/** Get Country details **/
		getCountryDetails(req, res, next).then(response => {
			if (response.status != STATUS_SUCCESS) {
				res.render('state_dropdown', { results: [] })
			}
			else {
				let countryId = (req.params.country_id) ? req.params.country_id : "0";
				if (countryId) {
					/** Set conditions **/
					var commonConditions = { is_deleted: NOT_DELETED, active: ACTIVE, country_id: ObjectId(countryId) };

					const states = db.collection(STATES_COLLECTION);

					states.find(commonConditions).sort({ title: SORT_ASC }).toArray(function (err, results) {
						if (err) {
							res.render('state_dropdown', { results: [] });
						}
						else {
							res.render('state_dropdown', { results, countryId })
						}
					});
				}
				else {
					res.render('state_dropdown', { results: [] });
				}
			}
		});
	};//End getStatesDropdownFromCountry()

	/**
	 * Function for get cities dropdown from state
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	this.getCitiesDropdownFromState = (req, res, next) => {

		/** Get Country details **/
		getStateDetails(req, res, next).then(response => {
			if (response.status != STATUS_SUCCESS) {
				res.render('city_dropdown', { results: [] });
			}

			let stateId = (req.params.state_id) ? req.params.state_id : "";

			if (stateId) {
				/** Set conditions **/
				var commonConditions = { is_deleted: NOT_DELETED, active: ACTIVE, state_id: ObjectId(stateId) };

				const cities = db.collection(CITIES_COLLECTION);

				cities.find(commonConditions).sort({ title: SORT_ASC }).toArray(function (err, results) {

					if (err) {
						res.render('city_dropdown', { results: [] });
					}
					else {
						res.render('city_dropdown', { results, stateId });
					}
				});
			}
			else {
				//res.render('city_dropdown', {results : []});
			}
		});
	};//End getCitiesDropdownFromState()






	/**
		 * Function to get Country's detail
		 *
		 * @param req	As	Request Data
		 * @param res	As	Response Data
		 * @param next	As 	Callback argument to the middleware function
		 *
		 * @return json
		 */
	let getCountryDetails = (req, res, next) => {
		return new Promise(resolve => {
			let countryId = (req.params.country_id) ? req.params.country_id : "";
			/** Get country details **/
			const countries = db.collection(COUNTRIES_COLLECTION);

			if (countryId) {
				countries.findOne(
					{ _id: ObjectId(countryId) },
					(err, result) => {
						if (err) return next(err);

						if (!result) {
							/** Send error response **/
							let response = {
								status: STATUS_ERROR,
								message: res.__("admin.system.invalid_access")
							};
							return resolve(response);
						}

						if (result && result.is_deleted == DELETED) {
							/** Send error response **/
							let response = {
								status: STATUS_ERROR,
								message: res.__("admin.cms.record_not_exists")
							};
							return resolve(response);
						}

						let response = {
							status: STATUS_SUCCESS,
							result: result
						};
						resolve(response);
					}
				);
			}
			else {
				let response = {
					status: STATUS_ERROR,
					message: res.__("admin.cms.record_not_exists")
				};
				return resolve(response);
			}
		});
	};// End getCountryDetails().

	/**
	 * Function to get State's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getStateDetails = (req, res, next) => {
		return new Promise(resolve => {
			let stateId = (req.params.state_id) ? req.params.state_id : "";

			if (stateId) {
				/** Get country details **/
				const states = db.collection(STATES_COLLECTION);
				states.findOne(
					{ _id: ObjectId(stateId) },
					(err, result) => {
						if (err) return next(err);

						if (!result) {
							/** Send error response **/
							let response = {
								status: STATUS_ERROR,
								message: res.__("admin.system.invalid_access")
							};
							return resolve(response);
						}

						if (result && result.is_deleted == DELETED) {
							/** Send error response **/
							let response = {
								status: STATUS_ERROR,
								message: res.__("admin.cms.record_not_exists")
							};
							return resolve(response);
						}

						let response = {
							status: STATUS_SUCCESS,
							result: result
						};
						resolve(response);
					}
				);
			}
			else {
				let response = {
					status: STATUS_ERROR,
					message: res.__("admin.cms.record_not_exists")
				};
				return resolve(response);
			}
		});
	};// End getStateDetails().



	/**
	 * Function to get update Profile Image
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	this.updateProfileImage = (req, res, next, validationErrors) => {

		return new Promise(resolve => {

			if (!validationErrors) {
				/** Sanitize Data */
				let userId = (req.session.user) ? req.session.user._id : "";
				req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);

				let allData = req.body;

				let image = (req.files && req.files.image) ? req.files.image : "";
				let imgaeOptions = {
					'image': image,
					'filePath': USERS_FILE_PATH,
					'allowedExtensions': ALLOWED_IMAGE_EXTENSIONS,
					'allowedImageError': ALLOWED_IMAGE_ERROR_MESSAGE
				};


				moveUploadedFile(req, res, imgaeOptions).then(imgaeResponse => {
					if (imgaeResponse.status == STATUS_ERROR) {
						/** Send error imgaeResponse **/
						req.session.formData = req.body;
						req.flash(STATUS_ERROR, imgaeResponse.message);
						return res.redirect(LISTING_URL + "/edit/" + id);
					}

					/** Upload user  image **/
					const pages = db.collection(USERS_COLLECTION);
					pages.updateOne(
						{ _id: ObjectId(userId) },
						{
							$set: {
								image: (imgaeResponse.fileName) ? imgaeResponse.fileName : "",
								modified: getUtcDate()
							}
						},
						(err, result) => {
							if (err) {
								/** Send error response **/
								resolve({
									error: 1,
									msg: res.__("admin.system.something_going_wrong_please_try_again"),
								});
							}
							/** Send success response **/

							resolve({
								error: 0,
								msg: res.__("admin.users.image_updated_successfully"),
								img: (imgaeResponse.fileName) ? imgaeResponse.fileName : "",
							});

							req.session.user.image = (imgaeResponse.fileName) ? imgaeResponse.fileName : "";

						}
					);

				}).catch(next);

			}
			else {

				resolve({
					error: 1,
					msgs: validationErrors,
				});
			}
		});
	};//End updateProfileImage()




	/**
		 * Function for tutorEducation
		 *
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return render/json
		 */
	this.tutorEducation = (req, res, next) => {

		let user_id = (req.session.user) ? req.session.user._id : "";

		if (user_id) {
			/** Set conditions **/
			var commonConditions = { is_deleted: NOT_DELETED, active: ACTIVE, user_id: ObjectId(user_id) };

			const tutorEducation = db.collection(TUTOR_EDUCATION_COLLECTION);

			tutorEducation.find(commonConditions).sort({ _id: SORT_ASC }).toArray(function (err, results) {

				if (err) {
					res.render('tutor/education/education', { results: [] });
				}
				else {
					res.render('tutor/education/education', { results: results });
				}
			});
		}
		else {
			res.render("tutor/education/education", { 'results': [] });
		}




	};//End tutorEducation()




	/**
		 * Function for openTutorEducationModel
		 *
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return render/json
		 */
	this.openTutorEducationModel = (req, res, next) => {

		return new Promise(resolve => {

			let type = (req.body.type) ? req.body.type : "";
			let educationId = (req.body.modelId) ? req.body.modelId : "";


			if (type == "edu_edit") {

				if (educationId) {
					const tutorEducation = db.collection(TUTOR_EDUCATION_COLLECTION);
					tutorEducation.find(
						{ _id: ObjectId(educationId) }).toArray(function (err, result) {
							if (err) return next(err);

							let response = {
								status: STATUS_SUCCESS,
								result: result[0]
							};
							resolve(response);
						});

				}
				else {

					let response = {
						status: STATUS_SUCCESS,
						result: {}
					};

					resolve(response);
				}

			}
			else {

				let response = {
					status: STATUS_SUCCESS,
					result: {}
				};

				resolve(response);
			}


			//res.render("tutor/education/education_pop_up", { 'formData': formData });

		});
	};//End openTutorEducationModel()





	/**
			 * Function for save Tutor Education
			 *
			 * @param req 	As 	Request Data
			 * @param res 	As 	Response Data
			 * @param next 	As 	Callback argument to the middleware function
			 *
			 * @return render/json
			 */
	this.saveTutorEducation = (req, res, next, validationErrors) => {


		return new Promise(resolve => {

			if (isPost(req) && !(validationErrors)) {

				let user_id = (req.session.user) ? req.session.user._id : "";

				/** Sanitize Data **/
				req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);

				let edu_type = (req.body.type) ? req.body.type : "edu_add";
				let educationId = (req.body.modelId) ? req.body.modelId : "";
				let university_name = (req.body.university_name) ? req.body.university_name : "";
				let major = (req.body.major) ? req.body.major : "";
				let cumulative_gpa = (req.body.cumulative_gpa) ? req.body.cumulative_gpa : "";
				let degree = (req.body.degree) ? req.body.degree : "";

				let is_current = (req.body.is_current) ? req.body.is_current : "";
				let start_date = (req.body.start_date) ? req.body.start_date : "";
				let end_date = (req.body.end_date) ? req.body.end_date : "";

				if (is_current == "on") {
					endDate = "";
				}
				else {
					endDate = end_date;
				}

				/** Configure user unique conditions **/
				const tutorEducation = db.collection(TUTOR_EDUCATION_COLLECTION);

				if (edu_type == "edu_edit") {


					tutorEducation.updateOne({
						_id: ObjectId(educationId)
					},
						{
							$set: {
								university_name: university_name,
								major: major,
								cumulative_gpa: cumulative_gpa,
								degree: degree,
								is_current: is_current,
								start_date: start_date,
								end_date: end_date,
								modified: getUtcDate(),
							},
						},
						(err, result) => {
							if (err) return next(err);

							req.flash(STATUS_SUCCESS, "Your education has been updated successfully.");

							resolve({
								status: STATUS_SUCCESS,
							});

						});
				} else {
					tutorEducation.insertOne({
						user_id: ObjectId(user_id),
						university_name: university_name,
						major: major,
						cumulative_gpa: cumulative_gpa,
						degree: degree,
						is_current: is_current,
						start_date: start_date,
						end_date: end_date,
						active: ACTIVE,
						is_deleted: NOT_DELETED,
						modified: getUtcDate(),
						created: getUtcDate()
					}, (err, result) => {
						if (err) return next(err);

						req.flash(STATUS_SUCCESS, "Your education has been added successfully.");

						resolve({
							status: STATUS_SUCCESS,
						});

					});
				}




			}
			else {
				resolve({
					status: STATUS_ERROR,
					errors: validationErrors
				});
			}
		});
	};//End saveTutorEducation()



	/**
	 * Function for update user 's profile details
	 *
	 * @param insertData As Data to be insert in database
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return json
	 */
	this.deleteTutorEducation = (req, res) => {
		try {
			let id = (req.session.user) ? req.session.user._id : "";
			let educationId = (req.params.educationId) ? req.params.educationId : "";

			/** Update admin detail*/
			const users = db.collection(TUTOR_EDUCATION_COLLECTION);
			users.updateOne({
				_id: ObjectId(educationId), user_id: ObjectId(id)
			},
				{
					$set: {
						is_deleted: DELETED,
					},
				},
				(err, result) => {
					if (!err) {
						/** Send success response **/
						req.flash(STATUS_SUCCESS, "Your education has been deleted successfully.")
						return res.redirect(WEBSITE_URL + "tutor/education");
					}
					else {
						req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
						return res.redirect(WEBSITE_URL + "tutor/education");
					}
				}
			);
		}
		catch (e) {
			/** Send error response **/
			req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
			return res.redirect(WEBSITE_URL + "tutor/education");
		}
	}//End updateUserProfile()






	/**
		 * Function for TutorEducationDetail
		 *
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return render/json
		 */
	this.TutorEducationDetail = (req, res, next) => {

		return new Promise(resolve => {

			let educationId = (req.body.educationId) ? req.body.educationId : "";


			if (educationId) {
				const tutorEducation = db.collection(TUTOR_EDUCATION_COLLECTION);
				tutorEducation.find(
					{ _id: ObjectId(educationId) }).toArray(function (err, result) {
						if (err) return next(err);

						let response = {
							status: STATUS_SUCCESS,
							result: result[0]
						};
						resolve(response);
					});
			}
			else {
				let response = {
					status: STATUS_ERROR,
					result: {}
				};
				resolve(response);
			}

		});
	};//End TutorEducationDetail()




	/**
			 * Function for tutorAvailability
			 *
			 * @param req As Request Data
			 * @param res As Response Data
			 *
			 * @return render/json
			 */
	this.tutorAvailability = (req, res, next) => {

		// let user_id = (req.session.user) ? req.session.user._id : "";

		let week_days = WEEK_DAYS;


		// if (user_id) {
		// 	/** Set conditions **/
		// 	var commonConditions = { is_deleted: NOT_DELETED, active: ACTIVE, user_id: ObjectId(user_id) };

		// 	const tutorEducation = db.collection(TUTOR_EDUCATION_COLLECTION);

		// 	tutorEducation.find(commonConditions).sort({ _id: SORT_ASC }).toArray(function (err, results) {

		// 		if (err) {
		// 			res.render('tutor/education/education', { results: [] });
		// 		}
		// 		else {
		// 			res.render('tutor/education/education', { results: results });
		// 		}
		// 	});
		// }
		// else {
		res.render("tutor/availability/availability", { week_days: week_days, 'results': [] });
		//}




	};//End tutorAvailability()



	/**
		 * Function for get availability Form Element
		 *
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return render/json
		 */
	this.availabilityFormElement = (req, res, next) => {
		
		/** Sanitize Data **/
		req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
		let day_id = (req.body.day_id) ? req.body.day_id : "";
		let next_counter_value = (req.body.next_counter_value) ? req.body.next_counter_value : "";
		if (day_id) {
			res.render("tutor/availability/availability_form_element", { day_id: day_id,next_counter_value:next_counter_value });
		}

};//End availabilityFormElement()



/**
		 * Function for get availability Form slot
		 *
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return render/json
		 */
 this.availabilityTimeSlots = (req, res, next) => {
		
	/** Sanitize Data **/
	req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
	let startTime = (req.body.startTime) ? req.body.startTime : "";
	
	if (startTime) {

		slopt = getServiceScheduleSlots(60, startTime, '11:45PM');


//console.log(getServiceScheduleSlots);

		//pront_r(slopt);
		//die;

		//res.render("tutor/availability/availability_form_element", { day_id: day_id,next_counter_value:next_counter_value });
	}

};//End availabilityTimeSlots()







/**
 * Function for user Update Email
 *
 * @param req 	As 	Request Data
 * @param res 	As 	Response Data
 * @param next 	As 	Callback argument to the middleware function
 *
 * @return render/json
 */
this.userUpdateEmail = (req, res, next, validationErrors) => {


	return new Promise(resolve => {

		if (isPost(req) && !(validationErrors)) {

			let user_id = (req.session.user) ? req.session.user._id : "";

			/** Sanitize Data **/
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);

			let email = (req.body.email) ? req.body.email : "";

			/** Configure user unique conditions **/
			const users = db.collection(USERS_COLLECTION);



			users.findOne({
				email: email, _id: ObjectId(user_id)
			}, (err, result) => {
				if (result) {

					let response = {
						status: STATUS_ERROR,
						message: "This email address is already registered with your account.",
					};
					resolve(response);
				}
				else {
					users.updateOne({
						_id: ObjectId(user_id)
					},
						{
							$set: {
								email: email

							},
						}, {
						projection: {
							user_role_id: 1, first_name: 1, last_name: 1, full_name: 1, slug: 1, email: 1, active: 1, is_verified: 1, approval_status: 1, created: 1, password: 1, image: 1
						}
					},
						(err, resultData) => {
							if (err) return next(err);

							req.session.user.email = email;

							req.flash(STATUS_SUCCESS, "Your email has been updated successfully.");

							/** Send success response **/
							let response = {
								status: STATUS_SUCCESS,
							};
							resolve(response);

						});
				}
			});


		}
		else {
			let response = {
				status: STATUS_ERROR,
				message: "Something went wrong, Please try again."
			};
			resolve(response);

		}
	});
};//End userUpdateEmail()


/**
		 * Function for edit tutor list
		 *
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return render/json
		 */
this.tutorList = (req, res) => {

	let commonConditions = { is_deleted: NOT_DELETED, user_role_id: TUTOR_ROLE_ID, active: ACTIVE };

	const current_url = new URL('http://usefulangle.com/preview?id=123&type=article');
	const search_params = current_url.searchParams;

	let subject = '';
	let grade = [];

	if (req.query.subject) {
		subject = req.query.subject;
		console.log(subject);
	}

	if (req.query.grade) {
		let grade = req.query.grade;
		console.log(grade);
	}







	const users = db.collection(USERS_COLLECTION);

	users.aggregate([
		{ $match: commonConditions },
		// {$sort  : dataTableConfig.sort_conditions},
		// {$skip 	: skip},
		// {$limit : limit},
		{
			$lookup: {
				from: TUTOR_BASIC_DETAILS_COLLECTION,
				localField: "_id",
				foreignField: "user_id",
				as: "tutorBasicDetail",
			}
		},
		{
			$lookup: {
				from: TUTOR_LANGUAGE_COLLECTION,
				localField: "_id",
				foreignField: "user_id",
				as: "tutorLanguages",
			}
		},
		{
			$lookup: {
				from: TUTOR_AREA_OF_EXPERTISE_COLLECTION,
				localField: "_id",
				foreignField: "user_id",
				as: "tutorExpertiseAreas",
			}
		},
		{
			$lookup: {
				from: TUTOR_GRADES_COLLECTION,
				localField: "_id",
				foreignField: "user_id",
				/*pipeline: [
					{ $match: { _id: { $in: []  }} }
				 ],*/
				as: "tutorGrades",
			}
		},
		{
			$lookup: {
				from: TUTOR_REFERANCE_COLLECTION,
				localField: "_id",
				foreignField: "user_id",
				as: "tutorReferencesDetail",
			}
		},
		{
			$lookup: {
				from: TUTOR_PROFILE_STATUS_COLLECTION,
				localField: "_id",
				foreignField: "user_id",
				as: "tutorProfileStatus",
			}
		},
		{ $project: { _id: 1, first_name: 1, last_name: 1, full_name: 1, email: 1, username: 1, phone_number: 1, dial_code: 1, gender: 1, profile_image: 1, dateofbirth: 1, active: 1, user_role_id: 1, user_role_slug: 1, slug: 1, is_verified: 1, tutorBasicDetail: "$tutorBasicDetail", tutorLanguages: "$tutorLanguages", tutorExpertiseAreas: "$tutorExpertiseAreas", tutorGrades: "$tutorGrades", tutorReferencesDetail: "$tutorReferencesDetail", tutorProfileStatus: "$tutorProfileStatus" } },
	]).toArray((err, result) => {
		if (!err) {

			/**Render edit profile page*/
			formData = false;
			if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
				formData = req.session.formData;
				req.session.formData = null;
			}

			if (!formData) {
				formData = result[0];
			}

			asyncParallel({


				grades: (callback) => {

					const grades = db.collection(MASTERS_COLLECTION);
					grades.find({ dropdown_type: "grades", active: ACTIVE }).sort({ title: SORT_ASC }).toArray(function (err, result) {
						callback(err, result);
					});
				},
				subjects: (callback) => {

					const subjects = db.collection(SUBJECT_COLLECTION);
					subjects.find({ is_deleted: NOT_DELETED, parent_id: INACTIVE, active: ACTIVE }).sort({ subject_name: SORT_ASC }).toArray(function (err, result) {
						callback(err, result);
					});
				},


			}, (err, response) => {

				/** Render to index page **/
				let responseData = {
					subjects: response.subjects,
					grades: response.grades,
				};
				res.render("tutor/list", { 'formData': formData, 'responseData': responseData });
			});

		}

		else {
			/** Send error response **/
			req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
			res.redirect(WEBSITE_URL);
		}
	})

};//End tutorAdvanceProfile()












































































































/**
 * Function for update user 's profile details
 *
 * @param insertData As Data to be insert in database
 * @param req As Request Data
 * @param res As Response Data
 *
 * @return json
 */
let updateUserProfile = (insertData, req, res) => {
	try {
		let id = (req.session.user) ? req.session.user._id : "";
		let fullName = (req.body.full_name) ? req.body.full_name : "";
		let firstName = (req.body.first_name) ? toTitleCase(req.body.first_name) : "";
		let lastName = (req.body.last_name) ? toTitleCase(req.body.last_name) : "";
		let user_role_id = (req.session.user.user_role_id) ? req.session.user.user_role_id : "";

		/** Update admin detail*/
		const users = db.collection(USERS_COLLECTION);
		users.updateOne({
			_id: ObjectId(id)
		},
			{ $set: insertData },
			(err, result) => {
				if (!err) {
					req.session.user.full_name = fullName;
					req.session.user.first_name = firstName;
					req.session.user.last_name = lastName;
					/** Send success response **/

					if (user_role_id == STUDENT_ROLE_ID) {
						req.flash(STATUS_SUCCESS, "Your profile has been updated successfully.")
						return res.redirect(WEBSITE_URL + "student/edit_profile");
					}
					else {
						req.flash(STATUS_SUCCESS, "Your profile has been updated successfully.")
						return res.redirect(WEBSITE_URL + "tutor/edit_profile");
					}

				}
				else {
					/** Send error response **/
					req.session.formData = req.body;

					if (user_role_id == STUDENT_ROLE_ID) {
						req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
						return res.redirect(WEBSITE_URL + "student/edit_profile");
					}
					else {
						req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
						return res.redirect(WEBSITE_URL + "tutor/edit_profile");
					}
				}
			}
		);
	}
	catch (e) {
		/** Send error response **/
		req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
		return res.redirect(WEBSITE_URL + "tutor/edit_profile");
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
this.studentSignup = (req, res, next, validationErrors) => {


	return new Promise(resolve => {
		if (isPost(req) && !(validationErrors)) {

			/** Sanitize Data **/
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
			let password = (req.body.password) ? req.body.password : "";
			let email = (req.body.email) ? req.body.email : "";
			let phoneNumber = (req.body.phone_number) ? req.body.phone_number : "";
			let firstName = (req.body.first_name) ? toTitleCase(req.body.first_name) : "";
			let lastName = (req.body.last_name) ? toTitleCase(req.body.last_name) : "";
			let dialCode = (req.body.dial_code) ? req.body.dial_code : "";
			let fullName = firstName + ' ' + lastName;

			let currentTime = currentTimeStamp();
			let validateString = crypto.createHash("md5").update(currentTime + req.body.email).digest("hex");

			/** Configure user unique conditions **/
			const users = db.collection(USERS_COLLECTION);

			/** Set options for get user slug **/
			let slugOptions = {
				title: fullName,
				table_name: "users",
				slug_field: "slug"
			};


			/** Get slug **/
			getDatabaseSlug(slugOptions).then(slugResponse => {

				// 	/**Genrate password hash */
				bcrypt.hash(password, BCRYPT_PASSWORD_SALT_ROUNDS).then(newPassword => {

					/** Save user data **/

					users.insertOne({
						first_name: firstName,
						last_name: lastName,
						full_name: fullName,
						email: email,
						username: email,
						phone_number: phoneNumber,
						dial_code: dialCode,
						active: ACTIVE,
						user_role_id: STUDENT_ROLE_ID,
						user_role_slug: STUDENT_ROLE_SLUG,
						password: newPassword,
						is_verified: NOT_VERIFIED,
						approval_status: USER_STATUS_APPROVED,
						email_validate_string: validateString,
						is_deleted: NOT_DELETED,
						block: UNBLOCK,
						created_by: INACTIVE,
						slug: (slugResponse && slugResponse.title) ? slugResponse.title : "",
						modified: getUtcDate(),
						created: getUtcDate()
					}, (err, result) => {
						if (err) return next(err);
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
							status: STATUS_SUCCESS,
							url: WEBSITE_URL,
						});

					});
				});
			}).catch(next);
		}
		else {
			resolve({
				status: STATUS_ERROR,
				errors: validationErrors
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
this.studentDashboard = (req, res, next) => {


	/**Render edit profile page*/
	formData = false;
	if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
		formData = req.session.formData;
		req.session.formData = null;
	}


	res.render("student/dashboard", { 'formData': formData });

};//End studentDashboard()




/**
	 * Function for edit admin' s profile details
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
this.studentEeditProfile = (req, res, next, validationErrors) => {
	if (isPost(req) && !(validationErrors)) {
		/** Sanitize Data **/
		req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
		let password = (req.body.password) ? req.body.password : "";
		let confirmPassword = (req.body.confirm_password) ? req.body.confirm_password : "";
		let id = (req.session.user) ? req.session.user._id : "";


		if (id) {

			let passChanged = 0;
			if (password != "" || confirmPassword != "") {
				passChanged = 1;
			}
			let firstName = (req.body.first_name) ? toTitleCase(req.body.first_name) : "";
			let lastName = (req.body.last_name) ? toTitleCase(req.body.last_name) : "";
			let fullName = firstName + ' ' + lastName;

			let country_id = (req.body.country_id) ? req.body.country_id : "";
			let state_id = (req.body.state_id) ? req.body.state_id : "";
			let city_id = (req.body.city_id) ? req.body.city_id : "";

			let gender = (req.body.gender) ? req.body.gender : "";
			let dateofbirth = (req.body.dateofbirth) ? req.body.dateofbirth : "";


			const users = db.collection(USERS_COLLECTION);
			try {
				if (passChanged) {
					try {
						/** update users's profile details **/
						bcrypt.hash(password, BCRYPT_PASSWORD_SALT_ROUNDS).then(newPassword => {
							let insertData = {
								first_name: firstName,
								last_name: lastName,
								full_name: fullName,
								country_id: ObjectId(country_id),
								state_id: ObjectId(state_id),
								city_id: ObjectId(city_id),
								gender: gender,
								dateofbirth: dateofbirth,
								password: newPassword,
								modified: getUtcDate()
							};
							updateUserProfile(insertData, req, res);
						});
					}
					catch (e) {
						/** Send error response **/
						req.session.formData = req.body;
						req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
						res.redirect(WEBSITE_URL + "tutor/edit_profile");
					}
				}
				else {
					/** update admin 's profile details **/
					let insertData = {
						first_name: firstName,
						last_name: lastName,
						full_name: fullName,
						country_id: ObjectId(country_id),
						state_id: ObjectId(state_id),
						city_id: ObjectId(city_id),
						gender: gender,
						dateofbirth: dateofbirth,
						modified: getUtcDate()
					};
					updateUserProfile(insertData, req, res);
				}
			}
			catch (e) {
				/** Send error response **/
				req.session.formData = req.body;
				req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
				res.redirect(WEBSITE_URL + "student/edit_profile");
			}
		}
		else {
			/** Send error response **/
			req.session.formData = req.body;
			req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
			res.redirect(WEBSITE_URL + "student/edit_profile");
		}
	}
	else {
		const users = db.collection(USERS_COLLECTION);
		let userId = (req.session.user) ? req.session.user._id : "";
		let email = (req.session.user) ? req.session.user.email : "";


		users.findOne({ "_id": ObjectId(userId), "user_role_id": STUDENT_ROLE_ID }, { projection: { _id: 1, first_name: 1, last_name: 1, email: 1, phone_number: 1, city_id: 1, state_id: 1, country_id: 1, dateofbirth: 1, gender: 1 } }, (err, result) => {
			if (!err) {

				if (result != null) {
					var selectedCountryId = (result.country_id) ? result.country_id : '';
					var selectedStateId = (result.state_id) ? result.state_id : '';
					var selectedCityId = (result.city_id) ? result.city_id : '';
				}
				formData = false;
				if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
					formData = req.session.formData;
					req.session.formData = null;

					var selectedCountryId = (formData.country_id) ? ObjectId(formData.country_id) : '';
					var selectedStateId = (formData.state_id) ? ObjectId(formData.state_id) : '';
					var selectedCityId = (formData.city_id) ? ObjectId(formData.city_id) : '';
				}

				if (!formData) {
					formData = result;
				}

				let options = {
					collections: [
						{
							collection: COUNTRIES_COLLECTION,
							columns: ["_id", "title"],
							conditions: { is_deleted: NOT_DELETED, active: ACTIVE },
							selected: [selectedCountryId]
						},
						{
							collection: STATES_COLLECTION,
							columns: ["_id", "title"],
							conditions: { is_deleted: NOT_DELETED, active: ACTIVE, country_id: selectedCountryId },
							selected: [selectedStateId]
						},
						{
							collection: CITIES_COLLECTION,
							columns: ["_id", "title"],
							conditions: { is_deleted: NOT_DELETED, active: ACTIVE, state_id: selectedStateId },
							selected: [selectedCityId]
						},

					]
				};
				getDropdownList(req, res, next, options).then(dropdownResponse => {

					res.render("student/edit_profile", {
						result: result,
						'error': validationErrors,
						'formData': formData,
						country_list: (dropdownResponse && dropdownResponse.final_html_data && dropdownResponse.final_html_data["0"]) ? dropdownResponse.final_html_data["0"] : "",
						state_list: (dropdownResponse && dropdownResponse.final_html_data && dropdownResponse.final_html_data["1"]) ? dropdownResponse.final_html_data["1"] : "",
						city_list: (dropdownResponse && dropdownResponse.final_html_data && dropdownResponse.final_html_data["2"]) ? dropdownResponse.final_html_data["2"] : "",
					});

				});
			}
			else {
				/** Send error response **/
				req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
				res.redirect(WEBSITE_URL + "student/dashboard");
			}
		});
	}
};//End editProfile()














































































/**
 * Function for reset password
 *
 * @param req As Request Data
 * @param res As Response Data
 *
 * @return render/json
 */
this.resetPassword = (req, res, validationErrors) => {
	if (req.query && typeof req.query.validate_string !== typeof undefined && req.query.validate_string != "") {
		if (isPost(req) && !(validationErrors)) {
			let validateString = (req.body.validate_string) ? req.body.validate_string : "";
			if (validateString != "") {
				/** Check validation **/



				let password = (req.body.password) ? req.body.password : "";
				/*** Store hash password **/
				bcrypt.hash(password, BCRYPT_PASSWORD_SALT_ROUNDS).then(newPassword => {

					try {
						const users = db.collection(USERS_COLLECTION);
						users.findOne({
							forgot_password_validate_string: validateString, "user_role_id": FRONT_USER_ROLE_ID
						}, { projection: { _id: 1, full_name: 1 } }, (err, result) => {
							if (result) {
								try {
									/** update password*/
									users.updateOne({
										_id: result._id
									},
										{
											$set: {
												password: newPassword,
												modified: new Date()
											},
											$unset: {
												forgot_password_validate_string: 1,
											}
										}, (err, updateResult) => {

											if (updateResult) {
												/******** Send Mail for reset password *******/
												sendMail(req, res, {
													to: result.email,
													action: "Reset Password",
													user_id: result._id,
													rep_array: [result.full_name]
												});
												/******** Send Mail for reset password *******/

												/** send Success response **/
												req.flash(STATUS_SUCCESS, "Your password has been reset successfully.");
												return res.redirect(WEBSITE_URL + "login");
											}
											else {
												/** Send error response **/
												req.session.formData = req.body;
												req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
												res.redirect(WEBSITE_URL + 'reset-password?validate_string=' + validateString);
											}

											/** send Success response **/

										});
								}
								catch (e) {
									req.session.formData = req.body;
									req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
									return res.redirect(WEBSITE_URL + 'reset-password?validate_string=' + validateString);
								}
							}
							else {
								req.session.formData = req.body;
								req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.SSSSSSSSSSSSSS");
								return res.redirect(WEBSITE_URL + 'reset-password?validate_string=' + validateString);
							}
						});
					}
					catch (e) {
						req.session.formData = req.body;
						req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
						return res.redirect(WEBSITE_URL + 'reset-password?validate_string=' + validateString);
					}
				});
			}
			else {
				req.session.formData = req.body;
				req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link CCCCCCCCCCC.");
				return res.redirect(WEBSITE_URL + 'reset-password?validate_string=' + validateString);
			}
		}
		else {
			try {

				formData = false;
				if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
					formData = req.session.formData;
					req.session.formData = null;
				}

				/** Get user details **/
				let validateString = (req.query.validate_string) ? req.query.validate_string : "";
				const users = db.collection(USERS_COLLECTION);
				users.findOne({
					forgot_password_validate_string: validateString,
				}, { projection: { _id: 1, full_name: 1 } }, (err, result) => {
					if (result) {
						/** Render reset password page **/
						res.render("reset_password", { validate_string: validateString, 'error': validationErrors, 'formData': formData });
					}
					else {
						/** Send error response **/
						req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
						return res.redirect(WEBSITE_URL + "login");
					}
				});
			}
			catch (e) {
				/** Send error response **/
				req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
				return res.redirect(WEBSITE_URL + "login");
			}
		}
	}
	else {
		/** Send error response **/
		req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.xxxxxxxxxxx");
		return res.redirect(WEBSITE_URL + "login");
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
this.signup = (req, res, next, validationErrors) => {

	if (isPost(req) && !(validationErrors)) {
		/** Sanitize Data **/
		req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
		let password = (req.body.password) ? req.body.password : "";
		let email = (req.body.email) ? req.body.email : "";
		let phoneNumber = (req.body.phone_number) ? req.body.phone_number : "";
		let firstName = (req.body.first_name) ? toTitleCase(req.body.first_name) : "";
		let lastName = (req.body.last_name) ? toTitleCase(req.body.last_name) : "";
		let dialCode = (req.body.dial_code) ? req.body.dial_code : "";
		let fullName = firstName + ' ' + lastName;

		let currentTime = currentTimeStamp();
		let validateString = crypto.createHash("md5").update(currentTime + req.body.email).digest("hex");

		/** Configure user unique conditions **/
		const users = db.collection(USERS_COLLECTION);

		/** Set options for get user slug **/
		let slugOptions = {
			title: fullName,
			table_name: "users",
			slug_field: "slug"
		};

		/** Get slug **/
		getDatabaseSlug(slugOptions).then(slugResponse => {

			/**Genrate password hash */
			bcrypt.hash(password, BCRYPT_PASSWORD_SALT_ROUNDS).then(newPassword => {

				/** Save user data **/
				users.insertOne({
					first_name: firstName,
					last_name: lastName,
					full_name: fullName,
					email: email,
					username: email,
					phone_number: phoneNumber,
					dial_code: dialCode,
					active: ACTIVE,
					user_role_id: FRONT_USER_ROLE_ID,
					user_type: USER_TYPE_CUSTOMER,
					password: newPassword,
					is_verified: NOT_VERIFIED,
					approval_status: USER_STATUS_PENDING,
					email_validate_string: validateString,
					is_deleted: NOT_DELETED,
					created_by: INACTIVE,
					slug: (slugResponse && slugResponse.title) ? slugResponse.title : "",
					modified: getUtcDate(),
					created: getUtcDate()
				}, (err, result) => {
					if (err) return next(err);
					/******* Send mail to user *******/
					let verifyLink = WEBSITE_URL + "verify_email/" + validateString;

					let emailOptions = {
						to: email,
						action: "Email Verification",
						rep_array: [fullName, verifyLink]
					};
					sendMail(req, res, emailOptions);
					/******* Send mail to user *******/

					req.flash(STATUS_SUCCESS, "Your registration has been done successfully. Please verify your account, we have sent an email verification link on your registered email id to verify your email address.");
					return res.redirect(WEBSITE_URL + 'signup');
				});
			});
		}).catch(next);
	}
	else {

		formData = false;
		if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
			formData = req.session.formData;
			req.session.formData = null;
		}

		res.render("signup", {
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
this.verifyEmail = (req, res, next) => {
	if (req.params && typeof req.params.validate_string !== typeof undefined && req.params.validate_string != "") {

		let validateString = req.params.validate_string;
		if (validateString != "") {
			try {
				const users = db.collection(USERS_COLLECTION);
				users.findOne({
					email_validate_string: validateString, "user_role_id": FRONT_USER_ROLE_ID
				}, { projection: { _id: 1, full_name: 1 } }, (err, result) => {
					if (result) {
						try {
							/** update password*/
							users.updateOne({
								_id: result._id
							},
								{
									$set: {
										is_verified: VERIFIED,
										modified: new Date()
									},
									$unset: {
										email_validate_string: 1,
									}
								}, (err, updateResult) => {
									/** send Success response **/
									req.flash(STATUS_SUCCESS, "Your account has been verified successfully.");
									return res.redirect(WEBSITE_URL + "login");
								});
						}
						catch (e) {
							req.session.formData = req.body;
							req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
							return res.redirect(WEBSITE_URL + "login");
						}
					}
					else {
						req.session.formData = req.body;
						req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
						return res.redirect(WEBSITE_URL + "login");
					}
				});
			}
			catch (e) {
				req.session.formData = req.body;
				req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
				return res.redirect(WEBSITE_URL + "login");
			}
		}
		else {
			req.session.formData = req.body;
			req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
			return res.redirect(WEBSITE_URL + "login");
		}
	}
	else {
		/** Send error response **/
		req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
		return res.redirect(WEBSITE_URL + "login");
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
this.resendVerificationEmail = (req, res, next) => {
	if (req.params && typeof req.params.validate_string !== typeof undefined && req.params.validate_string != "") {

		let validateString = req.params.validate_string;
		if (validateString != "") {
			try {
				const users = db.collection(USERS_COLLECTION);
				users.findOne({
					email_validate_string: validateString, "user_role_id": FRONT_USER_ROLE_ID
				}, { projection: { _id: 1, email: 1, full_name: 1 } }, (err, result) => {
					if (result) {
						try {

							if (result.is_verified == VERIFIED) {
								/** update password*/
								users.updateOne({
									_id: result._id
								},
									{
										$set: {
											modified: new Date()
										},
										$unset: {
											email_validate_string: 1,
										}
									}, (err, updateResult) => {
										/** send Success response **/
										req.flash(STATUS_SUCCESS, "Your account is already verified.");
										return res.redirect(WEBSITE_URL + "login");
									});
							}

							let currentTime = currentTimeStamp();
							let email = result.email;
							let newValidateString = crypto.createHash("md5").update(currentTime + email).digest("hex");


							/** update password*/
							users.updateOne({
								_id: result._id
							},
								{
									$set: {
										email_validate_string: newValidateString,
										modified: new Date()
									}
								}, (err, updateResult) => {

									if (updateResult) {
										/******* Send mail to user *******/
										let verifyLink = WEBSITE_URL + "verify_email/" + newValidateString;

										let emailOptions = {
											to: email,
											action: "Email Verification",
											rep_array: [result.full_name, verifyLink]
										};
										sendMail(req, res, emailOptions);
										/******* Send mail to user *******/

										/** send Success response **/
										req.flash(STATUS_SUCCESS, "Verification email has been sent again.");
										return res.redirect(WEBSITE_URL + "login");
									}
									else {
										/** Send error response **/
										req.session.formData = req.body;
										req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
										res.redirect(WEBSITE_URL);
									}
								});
						}
						catch (e) {
							req.session.formData = req.body;
							req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
							return res.redirect(WEBSITE_URL + "login");
						}
					}
					else {
						req.session.formData = req.body;
						req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
						return res.redirect(WEBSITE_URL + "login");
					}
				});
			}
			catch (e) {
				req.session.formData = req.body;
				req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
				return res.redirect(WEBSITE_URL + "login");
			}
		}
		else {
			req.session.formData = req.body;
			req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
			return res.redirect(WEBSITE_URL + "login");
		}
	}
	else {
		/** Send error response **/
		req.flash(STATUS_ERROR, "Your link has been expired or you are using wrong link.");
		return res.redirect(WEBSITE_URL + "login");
	}
};//End resendVerificationEmail()






}
module.exports = new User();
