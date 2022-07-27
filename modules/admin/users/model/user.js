const bcrypt = require('bcrypt');
const asyncParallel = require("async/parallel");
const crypto = require("crypto");
const { ObjectId } = require('mongodb');
const paginate = require('express-paginate');

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
		if (isPost(req) && !(validationErrors)) {
			/** Sanitize Data **/
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
			let username = (req.body.username) ? req.body.username : "";
			let simplePassword = (req.body.password) ? req.body.password : "";

			/** Set login options **/
			let loginOptions = {
				user_name: username,
				password: simplePassword
			};

			/** call login function **/
			adminLoginFunction(req, res, loginOptions).then(responseData => {
				if (responseData.status != STATUS_SUCCESS) {
					var errorMsg = (responseData.errors) ? responseData.errors : [];
					req.session.formData = req.body;
					req.flash(STATUS_ERROR, errorMsg[0].msg);
					return res.redirect(WEBSITE_ADMIN_URL + "login");
				}
				else {
					/** Send success response **/
					return res.redirect(WEBSITE_ADMIN_URL + "edit_profile");
				}

			}).catch();
		}
		else {

			formData = false;
			if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
				formData = req.session.formData;
				req.session.formData = null;
			}

			if (ALLOWED_ADMIN_TO_SET_COOKIE != ACTIVE) {
				res.render("login", { 'error': validationErrors, 'formData': formData });
				return;
			}

			/** Login user using cookie*/
			let cookie = req.cookies.adminLoggedIn;
			if (!cookie) {
				res.render("login", { 'error': validationErrors, 'formData': formData });
				return;
			}

			let username = (cookie.username) ? cookie.username : "";
			let password = (cookie.password) ? cookie.password : "";
			let decipherUser = crypto.createDecipher("aes256", "username");
			let decryptedUsername = decipherUser.update(username, "hex", "utf8") + decipherUser.final("utf8");
			let decipherPassword = crypto.createDecipher("aes256", "password");
			let decryptedPassword = decipherPassword.update(password, "hex", "utf8") + decipherPassword.final("utf8");

			/** Set login options **/
			let loginOptions = {
				user_name: decryptedUsername,
				password: decryptedPassword
			};

			/** call login function **/
			adminLoginFunction(req, res, loginOptions).then(responseData => {
				if (responseData.status != STATUS_SUCCESS) {
					/** Delete cookie*/
					res.clearCookie("adminLoggedIn");
					res.render("login", { error: validationErrors, formData: formData });
					return;
				}

				/** Redirect to edit_profile*/
				return res.redirect(WEBSITE_ADMIN_URL + "edit_profile");
			}).catch();
		}
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
	let adminLoginFunction = (req, res, options) => {
		return new Promise(resolve => {
			let username = (options.user_name) ? options.user_name : "";
			let simplePassword = (options.password) ? options.password : "";
			let rememberMe = (req.body.remember_me) ? req.body.remember_me : false;

			/** Get user Details **/
			const users = db.collection(USERS_COLLECTION);
			users.findOne({
				"is_deleted": DEACTIVE,
				"email": { $regex: "^" + username + "$", $options: "i" },
				"user_role_id": { $nin: [FRONT_USER_ROLE_ID] }
			}, {
				projection: {
					user_role_id: 1, first_name: 1, last_name: 1, full_name: 1, slug: 1, email: 1, active: 1, created: 1, password: 1
				}
			}, (err, resultData) => {
				if (err) return '';

				if (!resultData) {
					/** Send error response **/
					let response = {
						status: STATUS_ERROR,
						errors: [{ "param": "password", "msg": res.__("admin.user.enter_correct_email_and_password") }],
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
							errors: [{ "param": "password", "msg": res.__("admin.user.enter_correct_email_and_password") }],
							options: options
						};
						return resolve(response);
					}

					if (resultData.active != ACTIVE) {
						/** Send error response **/
						let response = {
							status: STATUS_ERROR,
							errors: [{ "param": "password", "msg": res.__("admin.user.your_account_has_bben_deactivated") }],
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
							res.cookie("adminLoggedIn", { username: encryptedUserName, password: encryptedPassword }, { maxAge: ADMIN_LOGGED_IN_COOKIE_EXPIRE_TIME, httpOnly: true });
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
	};//End adminLoginFunction()

	/**
		 * Function for edit admin' s profile details
		 *
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return render/json
		 */
	this.editProfile = (req, res, validationErrors) => {
		if (isPost(req) && !(validationErrors)) {
			/** Sanitize Data **/
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
			let password = (req.body.password) ? req.body.password : "";
			let confirmPassword = (req.body.confirm_password) ? req.body.confirm_password : "";
			let oldPassword = (req.body.old_password) ? req.body.old_password : "";
			let id = (req.session.user) ? req.session.user._id : "";
			if (id) {

				let passChanged = 0;
				if (password != "" || confirmPassword != "" || oldPassword != "") {
					passChanged = 1;
				}

				let fullName = (req.body.full_name) ? req.body.full_name : "";
				let email = (req.body.email) ? req.body.email : "";
				const users = db.collection(USERS_COLLECTION);
				try {
					users.findOne({
						is_deleted: NOT_DELETED,
						_id: { $ne: ObjectId(id) },
						email: { $regex: "^" + email + "$", $options: "i" },
					},
						{ projection: { _id: 1, email: 1 } },
						(errs, emailResult) => {
							if (!emailResult) {
								if (passChanged) {
									try {
										users.findOne(
											{ _id: ObjectId(id) },
											{ projection: { password: 1 } }, (error, userResult) => {
												if (error || !userResult) {
													/** Send error response **/
													req.session.formData = req.body;
													req.flash(STATUS_ERROR, res.__("admin.user.old_password_not_matched"));
													res.redirect(WEBSITE_ADMIN_URL + "edit_profile");
												}
												else {
													bcrypt.compare(oldPassword, userResult.password).then(passwordMatched => {
														if (!passwordMatched) {
															/** Send error response **/
															req.session.formData = req.body;
															req.flash(STATUS_ERROR, res.__("admin.user.old_password_not_matched"));
															res.redirect(WEBSITE_ADMIN_URL + "edit_profile");
														}
														else {
															/** update admin's profile details **/
															bcrypt.hash(password, BCRYPT_PASSWORD_SALT_ROUNDS).then(newPassword => {
																let insertData = {
																	full_name: fullName,
																	password: newPassword,
																	modified: getUtcDate()
																};
																updateAdminProfile(insertData, req, res);
															});
														}
													});
												}
											}
										)
									} catch (e) {
										/** Send error response **/
										req.session.formData = req.body;
										req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
										res.redirect(WEBSITE_ADMIN_URL + "edit_profile");
									}
								}
								else {
									/** update admin 's profile details **/
									let insertData = {
										full_name: fullName,
										email: email,
										modified: getUtcDate()
									};
									updateAdminProfile(insertData, req, res);
								}
							}
							else {
								/** Send error response **/
								req.session.formData = req.body;
								req.flash(STATUS_ERROR, res.__("admin.user.email_is_already_in_used"));
								res.redirect(WEBSITE_ADMIN_URL + "edit_profile");
							}
						}
					);
				} catch (e) {
					/** Send error response **/
					req.session.formData = req.body;
					req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
					res.redirect(WEBSITE_ADMIN_URL + "edit_profile");
				}
			}
			else {
				/** Send error response **/
				req.session.formData = req.body;
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				res.redirect(WEBSITE_ADMIN_URL + "edit_profile");
			}
		}
		else {
			const users = db.collection(USERS_COLLECTION);
			let userId = (req.session.user) ? req.session.user._id : "";
			let email = (req.session.user) ? req.session.user.email : "";

			users.findOne({ "_id": ObjectId(userId), "user_role_id": { $nin: [FRONT_USER_ROLE_ID] } }, { projection: { _id: 1, full_name: 1, email: 1, mobile_number: 1 } }, (err, result) => {
				if (!err) {
					req.breadcrumbs(BREADCRUMBS["admin/user_profile/edit"]);

					/**Render edit profile page*/
					formData = false;
					if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
						formData = req.session.formData;
						req.session.formData = null;
					}

					res.render("edit_profile", { result: result, 'error': validationErrors, 'formData': formData });
				}
				else {
					/** Send error response **/
					req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
					res.redirect(WEBSITE_ADMIN_URL + "dashboard");
				}
			});
		}
	};//End editProfile()


	/**
		 * Function for update admin 's profile details
		 *
		 * @param insertData As Data to be insert in database
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return json
		 */
	let updateAdminProfile = (insertData, req, res) => {
		try {
			let id = (req.session.user) ? req.session.user._id : "";
			let fullName = (req.body.full_name) ? req.body.full_name : "";
			let mobileNumber = (req.body.mobile_number) ? req.body.mobile_number : "";

			/** Update admin detail*/
			const users = db.collection(USERS_COLLECTION);
			users.updateOne({
				_id: ObjectId(id)
			},
				{ $set: insertData },
				(err, result) => {
					if (!err) {
						req.session.user.full_name = fullName;
						req.session.user.mobile_number = mobileNumber;
						/** Send success response **/
						req.flash(STATUS_SUCCESS, res.__("admin.user.user_has_been_updated"))
						res.redirect(WEBSITE_ADMIN_URL + "edit_profile");
					}
					else {
						/** Send error response **/
						req.session.formData = req.body;
						req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
						res.redirect(WEBSITE_ADMIN_URL + "edit_profile");
					}
				}
			);
		}
		catch (e) {
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
			res.redirect(WEBSITE_ADMIN_URL + "edit_profile");
		}
	}//End updateAdminProfile()


	/**
	 * Function for recover forgot password
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	this.forgotPassword = (req, res, validationErrors) => {
		if (isPost(req) && !(validationErrors)) {
			try {
				/** Sanitize Data **/
				req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
				let email = (req.body.email) ? req.body.email : "";

				const users = db.collection(USERS_COLLECTION);
				users.findOne({
					"email": email,
					"user_role_id": { $nin: [FRONT_USER_ROLE_ID] }
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
									let link = WEBSITE_ADMIN_URL + 'reset-password?validate_string=' + validateString;

									sendMail(req, res, {
										to: email,
										action: "forgot_password",
										user_id: result._id,
										rep_array: [result.full_name, link]
									});
									/******** Send Mail for reset password link *******/

									/** Send success response **/
									req.flash(STATUS_SUCCESS, res.__("admin.user.receive_email_with_link").replace(RegExp("{EMAIL}", "g"), email));
									res.redirect(WEBSITE_ADMIN_URL + "forgot-password");
								}
								else {
									/** Send error response **/
									req.session.formData = req.body;
									req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
									res.redirect(WEBSITE_ADMIN_URL + "forgot-password");
								}
							});
					}
					else {
						/** Send success response **/
						req.session.formData = req.body;
						req.flash(STATUS_SUCCESS, res.__("admin.user.receive_email_with_link").replace(RegExp("{EMAIL}", "g"), email));
						res.redirect(WEBSITE_ADMIN_URL + "forgot-password");
					}
				});
			}
			catch (e) {
				/** Send error response **/
				req.session.formData = req.body;
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				res.redirect(WEBSITE_ADMIN_URL + "forgot-password");
			}
		}
		else {
			formData = false;
			if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
				formData = req.session.formData;
				req.session.formData = null;
			}

			/** Render forgot password page*/
			res.render("forgot_password", { 'error': validationErrors, 'formData': formData });
		}
	};// end forgotPassword()	


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
								forgot_password_validate_string: validateString, "user_role_id": { $nin: [FRONT_USER_ROLE_ID] }
							}, { projection: { _id: 1, full_name: 1, email: 1 } }, (err, result) => {
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
														action: "reset_password",
														user_id: result._id,
														rep_array: [result.full_name]
													});
													/******** Send Mail for reset password *******/

													/** send Success response **/
													req.flash(STATUS_SUCCESS, res.__("admin.user.password_has_reset_successfully"));
													res.redirect(WEBSITE_ADMIN_URL + "login");
												}
												else {
													/** Send error response **/
													req.session.formData = req.body;
													req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
													res.redirect(WEBSITE_ADMIN_URL + 'reset-password?validate_string=' + validateString);
												}
											});
									}
									catch (e) {
										req.session.formData = req.body;
										req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
										res.redirect(WEBSITE_ADMIN_URL + 'reset-password?validate_string=' + validateString);
									}
								}
								else {
									req.session.formData = req.body;
									req.flash(STATUS_ERROR, res.__("admin.user.link_expired_or_wrong"));
									res.redirect(WEBSITE_ADMIN_URL + 'reset-password?validate_string=' + validateString);
								}
							});
						}
						catch (e) {
							req.session.formData = req.body;
							req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
							res.redirect(WEBSITE_ADMIN_URL + 'reset-password?validate_string=' + validateString);
						}
					});
				}
				else {
					req.session.formData = req.body;
					req.flash(STATUS_ERROR, res.__("admin.user.link_expired_or_wrong"));
					res.redirect(WEBSITE_ADMIN_URL + 'reset-password?validate_string=' + validateString);
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
							req.flash(STATUS_ERROR, res.__("admin.user.link_expired_or_wrong"));
							res.redirect(WEBSITE_ADMIN_URL + "login");
						}
					});
				}
				catch (e) {
					/** Send error response **/
					req.flash(STATUS_ERROR, res.__("admin.user.link_expired_or_wrong"));
					res.redirect(WEBSITE_ADMIN_URL + "login");
				}
			}
		}
		else {
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.user.link_expired_or_wrong"));
			res.redirect(WEBSITE_ADMIN_URL + "login");
		}
	};//End resetPassword()


	/**
	 * Function for show dashboard
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render
	 */
	this.dashboard = (req, res, next) => {
		const users = db.collection(USERS_COLLECTION);
		// asyncParallel([
		// 	(callback)=>{
		// 		/** Set conditions **/
		// 		let conditions	=	{
		// 			"is_deleted"	: 	NOT_DELETED,
		// 			"user_role_id" 	:	{$in:[FRONT_USER_ROLE_ID]},
		// 			$or 			:	[
		// 				{ngo 		: true},
		// 				{volunteer 	: true},
		// 				{company 	: true},
		// 			]
		// 		};

		// 		/** Get list of user month wise **/
		// 		users.aggregate([
		// 			{$match	: conditions},
		// 			{$group	: {
		// 				_id	: {
		// 					"year"	: { "$substr"	: 	["$created", 0, 4 ]},
		// 					"month"	: { "$substr"	:	["$created", 5, 2 ]}
		// 				},
		// 				total_volunteer : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{ $eq : ["$user_role_id",FRONT_USER_ROLE_ID] },
		// 							{$eq : ["$volunteer",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				},
		// 				total_ngo : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{$eq : ["$user_role_id",FRONT_USER_ROLE_ID]},
		// 							{$eq : ["$ngo",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				},
		// 				total_company : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{$eq : ["$user_role_id",FRONT_USER_ROLE_ID]},
		// 							{$eq : ["$company",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				}
		// 			}},
		// 			{$sort: {_id : SORT_DESC}}
		// 		]).toArray((err, result)=>{
		// 			callback(null, result);
		// 		});
		// 	},
		// 	(callback)=>{
		// 		/** Set conditions **/
		// 		let conditions	=	{
		// 			"is_deleted"	: 	NOT_DELETED,
		// 			"user_role_id" 	:	{$in:[FRONT_USER_ROLE_ID]},
		// 			$or :[
		// 				{ngo: true},
		// 				{volunteer 	: true},
		// 				{company 	: true},
		// 			]
		// 		};

		// 		users.aggregate([
		// 			{$match	: conditions},
		// 			{$group	: {
		// 				_id	: null,

		// 				total_ngo : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{ $eq : ["$user_role_id",FRONT_USER_ROLE_ID] },
		// 							{$eq : ["$ngo",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				},
		// 				active_ngo : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{ $eq : ["$user_role_id",FRONT_USER_ROLE_ID] },
		// 							{ $eq : ["$active",ACTIVE] },
		// 							{$eq : ["$ngo",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				},
		// 				deactive_ngo : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{ $eq : ["$user_role_id",FRONT_USER_ROLE_ID] },
		// 							{ $eq : ["$active",DEACTIVE] },
		// 							{$eq : ["$ngo",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				},
		// 				total_volunteer : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{$eq : ["$user_role_id",FRONT_USER_ROLE_ID] },
		// 							{$eq : ["$volunteer",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				},
		// 				active_volunteer : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{ $eq : ["$user_role_id",FRONT_USER_ROLE_ID] },
		// 							{ $eq : ["$active",ACTIVE] },
		// 							{$eq : ["$volunteer",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				},
		// 				deactive_volunteer : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{ $eq : ["$user_role_id",FRONT_USER_ROLE_ID] },
		// 							{ $eq : ["$active",DEACTIVE] },
		// 							{ $eq : ["$volunteer",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				},
		// 				total_company : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{$eq : ["$user_role_id",FRONT_USER_ROLE_ID] },
		// 							{$eq : ["$company",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				},
		// 				active_company : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{ $eq : ["$user_role_id",FRONT_USER_ROLE_ID] },
		// 							{ $eq : ["$active",ACTIVE] },
		// 							{ $eq : ["$company",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				},
		// 				deactive_company : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{ $eq : ["$user_role_id",FRONT_USER_ROLE_ID] },
		// 							{ $eq : ["$active",DEACTIVE] },
		// 							{ $eq : ["$company",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				}
		// 			}}
		// 		]).toArray((err, result)=>{
		// 			callback(null, result);
		// 		});
		// 	},
		// 	(callback)=>{

		// 		let startDate 	= newDate("",CURRENTDATE_START_DATE_FORMAT);
		// 		let endDate 	= newDate("",CURRENTDATE_END_DATE_FORMAT);
		// 		/** Set conditions **/
		// 		let conditions	=	{
		// 			"is_deleted"	: 	NOT_DELETED,
		// 			"user_role_id" 	:	{$in:[FRONT_USER_ROLE_ID]},
		// 			$or 			:	[
		// 				{ngo 		: true},
		// 				{volunteer 	: true},
		// 				{company 	: true},
		// 			],
		// 			created:{
		// 				$gte: newDate(startDate),
		// 			 	$lte: newDate(endDate)
		// 		 	}
		// 		};
		// 		/** Get list of user month wise **/
		// 		users.aggregate([
		// 			{$match	: conditions},
		// 			{$group	: {
		// 				_id	: null,
		// 				today_register_total_volunteer : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{ $eq : ["$volunteer",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				},
		// 				today_register_total_ngo : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{$eq : ["$ngo",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				},
		// 				today_register_total_company : {$sum : {
		// 					$cond: [
		// 						{$and: [
		// 							{$eq : ["$company",true] },
		// 						]},
		// 						1,0
		// 					]}
		// 				}
		// 			}},
		// 			{$sort: {_id : SORT_DESC}}
		// 		]).toArray((err, result)=>{
		// 			callback(null, result);
		// 		});
		// 	},
		// ],(err, response)=>{

		// 	/**Render dashboard page*/
		// 	req.breadcrumbs(BREADCRUMBS["admin/dashboard"]);
		// 	res.render("dashboard", {
		// 		result 			: (response[0]) ? response[0] : [],
		// 		stats 			: (response[1] && response[1][0]) ? response[1][0] : {},
		// 		todayRegister 	: (response[2] && response[2]) ? response[2][0] : {},
		// 	});
		//	});

		res.render("dashboard");

	};//End dashboard()



	/**
	 * Function for get list of users
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	this.getUserListing = (req, res) => {

		let userType = (req.params.user_type) ? req.params.user_type : "";
		let statusType = (req.params.status_type) ? req.params.status_type : "all";

		let dateType = (req.query.date) ? req.query.date : "";


		let limit = (req.body.length) ? parseInt(req.body.length) : ADMIN_LISTING_LIMIT;
		let skip = req.skip

		let name = (req.query.name) ? req.query.name : "";
		let email = (req.query.email) ? req.query.email : "";
		let statusSearch = (req.query.status) ? parseInt(req.query.status) : "";
		let fromDate = (req.query.from_date) ? req.query.from_date : "";
		let toDate = (req.query.to_date) ? req.query.to_date : "";

		let dateTypeField = (req.body.date_type) ? req.body.date_type : "";
		let dynamicVariable = FRONTEND_USERS_TYPE[userType] + " Management";

		/** Set conditions **/
		var commonConditions = {
			is_deleted: NOT_DELETED,
			//user_role_id	: STUDENT_ROLE_ID,
			user_role_slug: userType,
		};

		if (name != "") {
			commonConditions.full_name = new RegExp(name, 'i');
		}

		if (email != "") {
			commonConditions.email = new RegExp(email, 'i');
		}

		if (statusSearch != "") {
			switch (statusSearch) {
				case SEARCHING_ACTIVE:
					commonConditions.active = ACTIVE;
					break;

				case SEARCHING_DEACTIVE:
					commonConditions.active = DEACTIVE;
					break;

				case SEARCHING_VERIFIED:
					commonConditions.is_verified = VERIFIED;
					break;

				case SEARCHING_NOT_VERIFIED:
					commonConditions.is_verified = NOT_VERIFIED;
					break;
			}
		}

		/** Conditions for date */
		if (fromDate != "" && toDate != "") {
			commonConditions.created = {
				$gte: newDate(fromDate),
				$lte: newDate(toDate),
			};
		}

		/*
		if(statusType=="pending"){
			commonConditions.is_approved==PROFILE_PENDING;
		}
		else if(statusType=="approved"){
			commonConditions.is_approved==PROFILE_APPROVED;
		}
		else if(statusType=="rejected"){
			commonConditions.is_approved==PROFILE_REJECTED;
		}
		*/



		const users = db.collection(USERS_COLLECTION);

		users.find(commonConditions).skip(skip).limit(limit).toArray(function (err, results) {
			if (err) throw err;

			users.find(commonConditions).count(function (errCount, itemCount) {
				if (errCount) throw errCount;

				let pageCount = Math.ceil(itemCount / limit);

				req.breadcrumbs(BREADCRUMBS["admin/users/list"]);

				res.render('list', {
					status_type: statusType,
					user_type: userType,
					dynamic_variable: dynamicVariable,
					dynamic_url: userType,
					date_type: dateType,
					users: results,
					pageCount,
					itemCount,
					queryParms: req.query,
					pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
				});
			});
		});
	};//End getUserListing()



	/**
	 * Function for update user's Detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.addUser = (req, res, next, validationErrors) => {
		let userType = (req.params.user_type) ? req.params.user_type : "";

		if (isPost(req) && !(validationErrors)) {
			/** Sanitize Data **/
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
			let password = (req.body.password) ? req.body.password : "";
			let email = (req.body.email) ? req.body.email : "";
			let firstName = (req.body.first_name) ? toTitleCase(req.body.first_name) : "";
			let lastName = (req.body.last_name) ? toTitleCase(req.body.last_name) : "";
			let dialCode = (req.body.dial_code) ? req.body.dial_code : "";
			let fullName = firstName + ' ' + lastName;
			let country_id = (req.body.country_id) ? req.body.country_id : "";
			let state_id = (req.body.state_id) ? req.body.state_id : "";
			let city_id = (req.body.city_id) ? req.body.city_id : "";
			let countryCode = (req.body.country_code) ? req.body.country_code : "";
			let phoneNumber = (req.body.phone_number) ? req.body.phone_number : "";

			/** Configure user unique conditions **/
			const users = db.collection(USERS_COLLECTION);


			let image = (req.files && req.files.profile_image) ? req.files.profile_image : "";
			let imgaeOptions = {
				'image': image,
				'filePath': USERS_FILE_PATH
			};

			/** Upload user  image **/
			moveUploadedFile(req, res, imgaeOptions).then(imgaeResponse => {
				if (imgaeResponse.status == STATUS_ERROR) {
					req.session.formData = req.body;
					req.flash(STATUS_ERROR, imgaeResponse.message);
					return res.redirect(WEBSITE_ADMIN_URL + 'users/' + userType + "/add");
				}

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

						let authUserId = (req.session.user) ? req.session.user._id : "";

						if (userType == TUTOR_ROLE_SLUG) {


							/** Save user data **/
							users.insertOne({
								first_name: firstName,
								last_name: lastName,
								full_name: fullName,
								email: email,
								username: email,
								phone_number: phoneNumber,
								dial_code: dialCode,
								country_id: ObjectId(country_id),
								state_id: ObjectId(state_id),
								city_id: ObjectId(city_id),
								gender: (req.body.gender) ? req.body.gender : "",
								profile_image: (imgaeResponse.fileName) ? imgaeResponse.fileName : "",
								dateofbirth: (req.body.dateofbirth) ? getUtcDate(req.body.dateofbirth + " 00:00:00") : "",
								active: ACTIVE,
								user_role_id: TUTOR_ROLE_ID,
								user_role_slug: TUTOR_ROLE_SLUG,
								password: newPassword,
								is_verified: VERIFIED,
								approval_status: USER_STATUS_APPROVED,
								is_deleted: NOT_DELETED,
								created_by: ObjectId(authUserId),
								slug: (slugResponse && slugResponse.title) ? slugResponse.title : "",
								modified: getUtcDate(),
								created: getUtcDate(),


							}, (err, result) => {
								if (err) return next(err);

								/** Save tutor profile status **/
								if (result) {
									const tutor_profile_status = db.collection(TUTOR_PROFILE_STATUS_COLLECTION);
									tutor_profile_status.insertOne({
										user_id: result.insertedId,
										basic_profile: ACTIVE,
										modified: getUtcDate(),
										created: getUtcDate()
									});
								}

								/******* Send mail to user *******/

								/*
								let loginLink		=	WEBSITE_URL+'login';
								let emailOptions 	= 	{
									to 			: email,
									action 		: "New User Registration",
									rep_array 	:[fullName,email,password,loginLink]
								};
								sendMail(req,res,emailOptions);
								*/
								/******* Send mail to user *******/

								req.flash(STATUS_SUCCESS, res.__("admin.user.user_has_been_created"));
								return res.redirect(WEBSITE_ADMIN_URL + 'users/' + userType);
							});

						}
						else {

							/** Save user data **/
							users.insertOne({
								first_name: firstName,
								last_name: lastName,
								full_name: fullName,
								email: email,
								username: email,
								phone_number: phoneNumber,
								dial_code: dialCode,
								country_id: ObjectId(country_id),
								state_id: ObjectId(state_id),
								city_id: ObjectId(city_id),
								gender: (req.body.gender) ? req.body.gender : "",
								profile_image: (imgaeResponse.fileName) ? imgaeResponse.fileName : "",
								dateofbirth: (req.body.dateofbirth) ? getUtcDate(req.body.dateofbirth + " 00:00:00") : "",
								active: ACTIVE,
								user_role_id: STUDENT_ROLE_ID,
								user_role_slug: userType,
								password: newPassword,
								is_verified: VERIFIED,
								is_deleted: NOT_DELETED,
								block: UNBLOCK,
								created_by: ObjectId(authUserId),
								slug: (slugResponse && slugResponse.title) ? slugResponse.title : "",
								modified: getUtcDate(),
								created: getUtcDate()


							}, (err, result) => {
								if (err) return next(err);

								/******* Send mail to user *******/

								/*
								let loginLink		=	WEBSITE_URL+'login';
								let emailOptions 	= 	{
									to 			: email,
									action 		: "New User Registration",
									rep_array 	:[fullName,email,password,loginLink]
								};
								sendMail(req,res,emailOptions);
								*/
								/******* Send mail to user *******/

								req.flash(STATUS_SUCCESS, res.__("admin.user.user_has_been_created"));
								return res.redirect(WEBSITE_ADMIN_URL + 'users/' + userType);
							});

						}

					});
				}).catch(next);
			}).catch(next);
		}
		else {



			if (!userType || userType == "" || typeof FRONTEND_USERS_TYPE[userType] === typeof undefined) {
				req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
				return res.redirect(WEBSITE_ADMIN_URL);
			}
			/** Render edit page **/

			formData = false;
			if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
				formData = req.session.formData;
				req.session.formData = null;
			}

			var selectedCountryId = formData.country_id ? ObjectId(formData.country_id) : '';
			var selectedStateId = formData.state_id ? ObjectId(formData.state_id) : '';
			var selectedCityId = formData.city_id ? formData.city_id : '';
			var selectedCountryCode = formData.country_code ? formData.country_code : DEFAULT_COUNTRY_CODE;

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
					{
						collection: COUNTRY_CODE_COLLECTION,
						columns: ["dial_code", "dial_code"],
						selected: [selectedCountryCode]
					},
				]
			};



			getDropdownList(req, res, next, options).then(response => {

				req.breadcrumbs(BREADCRUMBS["admin/users/add"]);

				res.render("add", {
					dynamic_variable: FRONTEND_USERS_TYPE[userType] + " Management",
					dynamic_url: userType,
					user_type: userType,
					error: validationErrors,
					formData: formData,
					country_list: (response && response.final_html_data && response.final_html_data["0"]) ? response.final_html_data["0"] : "",
					state_list: (response && response.final_html_data && response.final_html_data["1"]) ? response.final_html_data["1"] : "",
					city_list: (response && response.final_html_data && response.final_html_data["2"]) ? response.final_html_data["2"] : "",
					country_code_list: (response && response.final_html_data && response.final_html_data["3"]) ? response.final_html_data["3"] : "",
				});
			})
		}
	};//End addUser()


	/**
	 * Function for update user's Detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editUser = (req, res, next, validationErrors) => {
		let userType = (req.params.user_type) ? req.params.user_type : "";

		if (!userType || userType == "" || typeof FRONTEND_USERS_TYPE[userType] === typeof undefined) {
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(WEBSITE_ADMIN_URL);
		}
		if (isPost(req) && !(validationErrors)) {
			/** Sanitize Data **/
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
			let password = (req.body.password) ? req.body.password : "";
			let confirmPassword = (req.body.confirm_password) ? req.body.confirm_password : "";
			let userId = (req.params.id) ? req.params.id : "";
			let email = (req.body.email) ? req.body.email : "";
			let firstName = (req.body.first_name) ? toTitleCase(req.body.first_name) : "";
			let lastName = (req.body.last_name) ? toTitleCase(req.body.last_name) : "";
			let dialCode = (req.body.dial_code) ? req.body.dial_code : "";
			let fullName = firstName + ' ' + lastName;
			let country_id = (req.body.country_id) ? req.body.country_id : "";
			let state_id = (req.body.state_id) ? req.body.state_id : "";
			let city_id = (req.body.city_id) ? req.body.city_id : "";
			let phoneNumber = (req.body.phone_number) ? req.body.phone_number : "";

			/** Configure user unique conditions **/
			const users = db.collection(USERS_COLLECTION);
			users.findOne({
				_id: { $ne: ObjectId(userId) },
				is_deleted: NOT_DELETED,
				$or: [
					{ email: { $regex: "^" + email + "$", $options: "i" } },
					{ phone_number: phoneNumber },
				]
			}, { projection: { _id: 1, email: 1, phone_number: 1 } },
				(err, result) => {
					if (err) return next(err);

					/** Set options for upload image **/
					let oldimage = (req.body.old_image) ? req.body.old_image : "";
					let image = (req.files && req.files.profile_image) ? req.files.profile_image : "";
					let options = {
						'image': image,
						'filePath': USERS_FILE_PATH,
						'oldPath': oldimage
					};

					/** Upload user  image **/
					moveUploadedFile(req, res, options).then(response => {
						if (response.status == STATUS_ERROR) {
							/** Send error response **/
							req.session.formData = req.body;
							req.flash(STATUS_ERROR, imgaeResponse.message);
							return res.redirect(WEBSITE_ADMIN_URL + 'users/' + userType + "/edit/" + userId);
						}

						/** Set update data **/
						let updateData = { modified: getUtcDate() };

						updateData.first_name = (req.body.first_name) ? req.body.first_name : "";
						updateData.last_name = (req.body.last_name) ? req.body.last_name : "";
						updateData.full_name = fullName;
						updateData.email = (req.body.email) ? req.body.email : "";
						updateData.dial_code = (req.body.dial_code) ? req.body.dial_code : "";
						updateData.phone_number = (req.body.phone_number) ? req.body.phone_number : "";
						updateData.gender = (req.body.gender) ? req.body.gender : "";
						updateData.dateofbirth = (req.body.dateofbirth) ? req.body.dateofbirth : "";
						updateData.profile_image = (response.fileName) ? response.fileName : "";
						updateData.country_id = ObjectId(country_id),
							updateData.state_id = ObjectId(state_id),
							updateData.city_id = ObjectId(city_id),

							/**Genrate password hash */
							bcrypt.hash(password, BCRYPT_PASSWORD_SALT_ROUNDS).then(newPassword => {
								if (password != "") {
									updateData.password = newPassword;
								}
								/** Update user data **/
								users.updateOne({ _id: ObjectId(userId) }, { $set: updateData }, (updateErr, result) => {
									if (updateErr) return next(updateErr);



									/** Send success response **/
									req.flash(STATUS_SUCCESS, res.__("admin.user.user_has_been_updated"));

									if (userType == TUTOR_ROLE_SLUG) {

										if (result) {
											const tutor_profile_status = db.collection(TUTOR_PROFILE_STATUS_COLLECTION);
											tutor_profile_status.findOne({ "user_id": ObjectId(userId) }, (err, tutor_profile) => {

												if (tutor_profile) {
													let statusData = {
														basic_profile: ACTIVE,
														modified: getUtcDate()
													}

													tutor_profile_status.updateOne({ user_id: ObjectId(userId) },
														{ $set: statusData }
													);
												}
												else {

													tutor_profile_status.insertOne({
														user_id: ObjectId(userId),
														basic_profile: ACTIVE,
														modified: getUtcDate(),
														created: getUtcDate()
													})

												}


											});
										}

										return res.redirect(WEBSITE_ADMIN_URL + 'users/' + userType + '/edit_links/' + userId);
									}
									else {
										return res.redirect(WEBSITE_ADMIN_URL + 'users/' + userType);
									}



								});
							});
					}).catch(next);
				});
		}
		else {
			/** Get user details **/
			this.getUserDetails(req, res, next).then(response => {
				if (response.status != STATUS_SUCCESS) {
					/** Send error response **/
					req.flash(STATUS_ERROR, response.message);
					return res.redirect(WEBSITE_ADMIN_URL + "users/" + userType);
				}

				var selectedCountryId = response.result.country_id ? ObjectId(response.result.country_id) : '';
				var selectedStateId = response.result.state_id ? ObjectId(response.result.state_id) : '';
				var selectedCityId = response.result.city_id ? ObjectId(response.result.city_id) : '';
				var selectedCountryCode = response.result.country_code ? response.result.country_code : DEFAULT_COUNTRY_CODE;

				formData = false;
				if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
					formData = req.session.formData;
					req.session.formData = null;

					var selectedCountryId = formData.country_id ? ObjectId(formData.country_id) : '';
					var selectedStateId = formData.state_id ? ObjectId(formData.state_id) : '';
					var selectedCityId = formData.city_id ? ObjectId(formData.city_id) : '';
					var selectedCountryCode = formData.country_code ? formData.country_code : DEFAULT_COUNTRY_CODE;
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
						{
							collection: COUNTRY_CODE_COLLECTION,
							columns: ["dial_code", "dial_code"],
							selected: [selectedCountryCode]
						},
					]
				};
				getDropdownList(req, res, next, options).then(dropdownResponse => {
					req.breadcrumbs(BREADCRUMBS["admin/users/edit"]);
					/** Render edit page **/
					res.render("edit", {

						result: (response.result) ? response.result : {},
						user_type: userType,
						dynamic_variable: FRONTEND_USERS_TYPE[userType] + " Management",
						dynamic_url: userType,
						error: validationErrors,
						formData: formData,
						country_list: (dropdownResponse && dropdownResponse.final_html_data && dropdownResponse.final_html_data["0"]) ? dropdownResponse.final_html_data["0"] : "",
						state_list: (dropdownResponse && dropdownResponse.final_html_data && dropdownResponse.final_html_data["1"]) ? dropdownResponse.final_html_data["1"] : "",
						city_list: (dropdownResponse && dropdownResponse.final_html_data && dropdownResponse.final_html_data["2"]) ? dropdownResponse.final_html_data["2"] : "",
						country_code_list: (dropdownResponse && dropdownResponse.final_html_data && dropdownResponse.final_html_data["3"]) ? dropdownResponse.final_html_data["3"] : "",

					});
				})
			}).catch(next);
		}
	};//End editUser()	

	/**
	 * Function for get user's Detail
	 *
	 * @param req	As Request Data
	 * @param res 	As Response Data
	 *
	 * @return json
	 */
	this.getUserDetails = (req, res, next) => {
		return new Promise(resolve => {
			let userId = (req.params.id) ? req.params.id : "";
			let userType = (req.params.user_type) ? req.params.user_type : "";
			/*
						if(userType = TUTOR_ROLE_SLUG)
						{
							user_role_id = TUTOR_ROLE_ID;
						}
						else{
							user_role_id = STUDENT_ROLE_ID;
						}
			*/

			let condition = {
				_id: ObjectId(userId),
				//	user_role_id	: user_role_id,
				is_deleted: NOT_DELETED,
				user_role_slug: userType
			};

			const users = db.collection(USERS_COLLECTION);
			users.findOne(condition, (err, result) => {
				if (err) return next(err);
				if (!result) {
					/** Send error response **/
					let response = {
						status: STATUS_ERROR,
						message: res.__("admin.system.invalid_access")
					};
					return resolve(response);
				}

				result.dateofbirth = getUtcDate(result.dateofbirth, DATE_RANGE_DATE_FORMAT)

				/** Set options for append image full path **/
				let options = {
					"file_url": USERS_URL,
					"file_path": USERS_FILE_PATH,
					"result": [result],
					"database_field": "profile_image"
				};

				/** Append image with full path **/
				appendFileExistData(options).then(fileResponse => {
					let response = {
						status: STATUS_SUCCESS,
						result: (fileResponse && fileResponse.result && fileResponse.result[0]) ? fileResponse.result[0] : {}
					};
					resolve(response);
				});
			});
		});
	};//End getUserDetails()



	/**
		 * Function for view user's Detail
		 *
		 * @param req 	As 	Request Data
		 * @param res 	As 	Response Data
		 * @param next 	As 	Callback argument to the middleware function
		 *
		 * @return render
		 */
	this.viewUserDetails = (req, res, next) => {

		let userId = (req.params.id) ? req.params.id : "";
		let userType = (req.params.user_type) ? req.params.user_type : "";

		if (!userType || userType == "" || typeof FRONTEND_USERS_TYPE[userType] === typeof undefined) {
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(WEBSITE_ADMIN_URL);
		}

		/** Get user details **/
		this.getUserDetails(req, res, next).then(response => {
			if (response.status != STATUS_SUCCESS) {
				/** Send error response **/
				req.flash(STATUS_ERROR, response.message);
				return res.redirect(WEBSITE_ADMIN_URL + "users/" + userType);
			}

			if (response.result && response.result.is_deleted == DELETED) {
				/** Send error response **/
				req.flash(STATUS_ERROR, res.__("admin.user.user_not_exists"));
				res.redirect(WEBSITE_ADMIN_URL + "users/" + userType);
				return;
			}


			req.breadcrumbs(BREADCRUMBS["admin/users/edit"]);
			req.breadcrumbs(BREADCRUMBS["admin/users/view"]);
			res.render("view", {
				result: (response.result) ? response.result : {},
				user_type: userType,
				dynamic_variable: FRONTEND_USERS_TYPE[userType] + " Management",
				dynamic_url: userType
			});
		}).catch(next);
	};//End viewUserDetails()


	/**
	 * Function for update user's status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateUserStatus = (req, res, next) => {
		let userId = (req.params.id) ? req.params.id : "";
		let userStatus = (req.params.status) ? req.params.status : "";
		let statusType = (req.params.status_type) ? req.params.status_type : "";
		let userType = (req.params.user_type) ? req.params.user_type : "";

		if (!userType || userType == "" || typeof FRONTEND_USERS_TYPE[userType] === typeof undefined) {
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(WEBSITE_ADMIN_URL);
		}

		if (!userId || !statusType || statusType != ACTIVE_INACTIVE_STATUS) {
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(WEBSITE_ADMIN_URL + "users/" + userType);
		}

		/** Set update data **/
		let updateData = { modified: getUtcDate() };
		if (statusType == ACTIVE_INACTIVE_STATUS) updateData.active = (userStatus == ACTIVE) ? DEACTIVE : ACTIVE;

		/** Update user status*/
		const users = db.collection(USERS_COLLECTION);
		users.updateOne({ _id: ObjectId(userId) }, { $set: updateData }, (err, result) => {
			if (err) return next(err);

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.user.user_status_has_been_updated"));
			res.redirect(WEBSITE_ADMIN_URL + "users/" + userType);
		});
	};//End updateUserStatus()


	/**
	 * Function for delete user
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.deleteUser = (req, res, next) => {
		/** Delete user*/
		let userId = (req.params.id) ? req.params.id : "";
		let userType = (req.params.user_type) ? req.params.user_type : "";

		if (!userType || userType == "" || typeof FRONTEND_USERS_TYPE[userType] === typeof undefined) {
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(WEBSITE_ADMIN_URL);
		}

		const users = db.collection(USERS_COLLECTION);
		users.updateOne(
			{ _id: ObjectId(userId) },
			{
				$set: {
					is_deleted: DELETED,
					deleted_at: getUtcDate(),
					modified: getUtcDate()
				}
			}, (err, result) => {
				if (err) return next(err);

				/** Send success response **/
				req.flash(STATUS_SUCCESS, res.__("admin.user.user_has_been_deleted"));
				res.redirect(WEBSITE_ADMIN_URL + "users/" + userType);
			}
		);
	};//End deleteUser()


	/**
	 * Function for verify user
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateVerifiedUserStatus = (req, res, next) => {
		let userId = (req.params.id) ? req.params.id : "";
		let userType = (req.params.user_type) ? req.params.user_type : "";

		if (!userType || userType == "" || typeof FRONTEND_USERS_TYPE[userType] === typeof undefined) {
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(WEBSITE_ADMIN_URL);
		}
		/** Verify user*/
		const users = db.collection(USERS_COLLECTION);
		users.updateOne({
			_id: ObjectId(userId)
		},
			{
				$set: {
					validate_string: "",
					is_verified: VERIFIED,
					modified: getUtcDate()
				}
			}, (err, result) => {
				if (err) return next(err);

				/** Send success response **/
				req.flash(STATUS_SUCCESS, res.__("admin.user.user_has_been_verified"));
				res.redirect(WEBSITE_ADMIN_URL + "users/" + userType);
			}
		);
	};//End updateVerifiedUserStatus()




	/**
		 * Function for get list of users
		 *
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return render/json
		 */
	this.getTutorEditLinks = (req, res, next) => {

		let userType = (req.params.user_type) ? req.params.user_type : "";
		this.getUserDetails(req, res, next).then(response => {
			if (response.status != STATUS_SUCCESS) {
				/** Send error response **/
				req.flash(STATUS_ERROR, response.message);
				return res.redirect(WEBSITE_ADMIN_URL + "users/" + userType);
			}


			const tutor_profile_status = db.collection(TUTOR_PROFILE_STATUS_COLLECTION);
			tutor_profile_status.find({ user_id: response.result._id }).toArray(function (err, tutorBasicStatus) {

				req.breadcrumbs(BREADCRUMBS["admin/users/edit"]);
				/** Render edit page **/
				res.render("tutor/edit_links", {

					result: (response.result) ? response.result : {},
					tutorBasicStatus: (tutorBasicStatus) ? tutorBasicStatus[0] : [],
					user_type: userType,
					dynamic_variable: FRONTEND_USERS_TYPE[userType] + " Management",
					dynamic_url: userType,
				});
			});
		}).catch(next);

	};//End getTutorEditLinks()



	/**
		 * Function for get list of users
		 *
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return render/json
		 */
	this.getTutorEditAdvanceProfile = (req, res, next, validationErrors) => {

		let userType = (req.params.user_type) ? req.params.user_type : "";


		const users = db.collection(USERS_COLLECTION);
		const tutorBasicDetails = db.collection(TUTOR_BASIC_DETAILS_COLLECTION);

		let userId = (req.params.id) ? req.params.id : "";


		if (isPost(req) && !(validationErrors)) {
			/** Sanitize Data **/
			//req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
			console.log(req.body);

			let brief_intro = (req.body.brief_intro) ? req.body.brief_intro : "";
			let tutoring_benefits = (req.body.tutoring_benefits) ? req.body.tutoring_benefits : "";
			let hobbies = (req.body.hobbies) ? req.body.hobbies : "";


			let tutor_languages = (req.body.tutor_languages) ? req.body.tutor_languages : null;
			let tutor_expertise = (req.body.tutor_expertise) ? req.body.tutor_expertise : null;
			let tutor_grades = (req.body.tutor_grades) ? req.body.tutor_grades : null;

			if (userId) {


				const tutor_profile_status = db.collection(TUTOR_PROFILE_STATUS_COLLECTION);
				tutor_profile_status.findOne({ "user_id": ObjectId(userId) }, (err, tutor_profile) => {

					if (tutor_profile) {
						let statusData = {
							advance_profile: ACTIVE,
							modified: getUtcDate()
						}

						tutor_profile_status.updateOne({ user_id: ObjectId(userId) },
							{ $set: statusData }
						);
					}

				});


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

				if (Array.isArray(tutor_languages)) {
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
				}


				/**save tutor languages */



				/**save tutor are of expertise */

				if (Array.isArray(tutor_expertise)) {
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
				}
				/**save tutor are of expertise */



				/**save tutor Grades */

				if (Array.isArray(tutor_grades)) {
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
				}
				/**save tutor Grades */

				req.flash(STATUS_SUCCESS, "Your advance profile has been updated successfully.");
				res.redirect(WEBSITE_ADMIN_URL + "users/" + userType + "/edit_links/" + userId);
			}
			else {
				/** Send error response **/
				req.session.formData = req.body;
				req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
				res.redirect(WEBSITE_ADMIN_URL + "users/" + userType);
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

					// if (!formData) {
					// 	formData = result[0];
					// }

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

						res.render("tutor/edit_advance_profile", { 'error': validationErrors, formData: formData, 'responseData': responseData, userId: userId, userType: userType, dynamic_variable: FRONTEND_USERS_TYPE[userType] + " Management", dynamic_url: userType, result: result[0] });
					});

				}

				else {
					/** Send error response **/
					req.flash(STATUS_ERROR, "Something went wrong, Please try again.");
					return res.redirect(WEBSITE_ADMIN_URL + "users/" + userType);
				}
			})
		}

	};//End getTutorEditAdvanceProfile()



	/**
	   * Function tutorRejectPopUp
	   *
	   * @param insertData As Data to be insert in database
	   * @param req As Request Data
	   * @param res As Response Data
	   *
	   * @return json		 */

	this.tutorRejectPopUp = (req, res, next) => {

		let userType = (req.params.user_type) ? req.params.user_type : "";
		console.log(userType);
		//	res.render("tutor/edit_links", {});




	};//End tutorRejectPopUp()





































































	/**
	 * Function for send login credentials
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.sendLoginCredentials = (req, res, next) => {
		let userId = (req.params.id) ? req.params.id : "";
		let userType = (req.params.user_type) ? req.params.user_type : "";

		if (!userType || userType == "" || typeof FRONTEND_USERS_TYPE[userType] === typeof undefined) {
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(WEBSITE_ADMIN_URL);
		}

		const users = db.collection(USERS_COLLECTION);
		users.findOne({
			_id: ObjectId(userId),
			user_role_id: FRONT_USER_ROLE_ID,
			user_type: userType
		},
			{ projection: { _id: 1, full_name: 1, email: 1 } }, (err, userResult) => {
				if (userResult) {

					var stringOptions = { 'srting_length': 8 };
					getRandomString(req, res, stringOptions).then(randomString => {

						if (randomString.result) {
							let newRandomPassword = randomString.result;

							bcrypt.hash(newRandomPassword, BCRYPT_PASSWORD_SALT_ROUNDS).then(newPassword => {

								let updateData = { modified: getUtcDate(), password: newPassword };
								users.updateOne({ _id: ObjectId(userId) }, { $set: updateData }, (err, result) => {
									if (err) return next(err);

									/******** Send Mail for login Credentials  *******/
									let loginLink = WEBSITE_URL + 'login';
									let emailOptions = {
										to: userResult.email,
										action: "Login Credentials To User",
										rep_array: [userResult.full_name, userResult.email, newRandomPassword, loginLink]
									};
									sendMail(req, res, emailOptions);
									/******** Send Mail for login Credentials  *******/

									req.flash(STATUS_SUCCESS, res.__("admin.user.login_details_has_been_changed_and_sent"));
									res.redirect(WEBSITE_ADMIN_URL + "users/" + userType);
								});
							});
						}
						else {
							/** Send error response **/
							req.flash(STATUS_ERROR, res.__("admin.user.link_expired_or_wrong"));
							res.redirect(WEBSITE_ADMIN_URL + "users/" + userType);
						}
					}).catch(next);
				}
				else {
					req.flash(STATUS_ERROR, res.__("admin.user.link_expired_or_wrong"));
					res.redirect(WEBSITE_ADMIN_URL + "users/" + userType);
				}
			});
	};//End sendLoginCredentials()







	/**
	 * Function for update user detail status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.approveUserDetails = (req, res, next) => {
		let userType = (req.params.user_type) ? req.params.user_type : "";
		let action = (req.params.action) ? req.params.action : "";
		let userId = (req.params.id) ? req.params.id : "";

		/**set fields to approve driver details **/
		let updateFields = {};
		if (action == USER_STATUS_APPROVED) {
			updateFields = {
				approval_status: USER_STATUS_APPROVED,
				modified: getUtcDate()
			};
		}

		/**Set fields to rejects user details **/
		if (action == USER_STATUS_REJECTED) {

			let rejectionMessage = (req.body.rejection_message) ? req.body.rejection_message : '';

			updateFields = {
				approval_status: USER_STATUS_REJECTED,
				rejection_reason: rejectionMessage,
				modified: getUtcDate(),
			};
		}
		let dataToBeUpdated = { $set: updateFields };
		if (action == USER_STATUS_APPROVED) dataToBeUpdated["$unset"] = { rejection_reason: 1 };

		const users = db.collection(USERS_COLLECTION);
		users.updateOne({ _id: ObjectId(userId) }, dataToBeUpdated, (err, updateResult) => {
			if (err) return next(err);

			/** if action type approved **/
			if (action == USER_STATUS_APPROVED) {
				/** Send success response **/
				let redirectURL = (req.query.redirect) ? req.query.redirect : WEBSITE_ADMIN_URL + "users/" + userType + "/view/" + userId;
				req.flash(STATUS_SUCCESS, res.__("admin.user.your_request_has_been_approved"));
				return res.redirect(redirectURL);
			}

			/** if action type rejected **/
			if (action == USER_STATUS_REJECTED) {
				/** Send success response **/
				req.flash(STATUS_SUCCESS, res.__("admin.user.your_request_has_been_rejected"));
				res.send({
					status: STATUS_SUCCESS,
					redirect_url: WEBSITE_ADMIN_URL + "users/" + userType + "/view/" + userId
				});
			}

			/**Send Mail to user according action taken on account 
			let sendMailOptions	= {
				event_type 	: USER_ACCOUNT_APPROVAL_EMAIL_EVENTS,
				user_id		: userId,
				user_type	: userType
			};
			sendMailToUsers(req,res,sendMailOptions);
			*/
		});
	};//End approveUserDetails()	






	const UserModel = this;
	/**const saltRounds= BCRYPT_PASSWORD_SALT_ROUNDS;*/

	/** Use in export data **/
	let exportNumber = 0;
	let exportFilterConditions = {};
	let exportSortConditions = {};
	let exportCommonConditions = {};
	exportSortConditions[exportNumber] = { _id: SORT_DESC };




}
module.exports = new User();
