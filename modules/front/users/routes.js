/** Model file path for current plugin **/
const modelPath = __dirname + "/model/user";
const userModel = require(modelPath);
const vr = require(__dirname + "/validationRules");
const { check, validationResult } = require('express-validator');









/** Routing is used to submit login form **/
app.post(FRONT_END_NAME + "login/:returnUrl?", isLoggedIn, vr.validateForLogin, (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		app.set('views', __dirname + '/views');
	
		userModel.login(req, res, validationErrors).then(function (result) {			
			res.send(result);
		});
	}
	else {		
		userModel.login(req, res, false).then(function (result) {			
			res.send(result);
		});
	}
});

/** Routing is used for user logout */
app.get(FRONT_END_NAME + "logout", (req, res, next) => {
	userModel.logout(req, res, next);
});


/** Routing is used to render html and submit forgot password form **/
app.post(FRONT_END_NAME + "forgot-password", vr.validateForForgotPassword, (req, res, next) => {
	app.set('views', __dirname + '/views');
	const errors = validationResult(req);
	if (!errors.isEmpty()) {

		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		userModel.forgotPassword(req, res, validationErrors).then(function (result) {				
			res.send(result);
		});
	}
	else {
		userModel.forgotPassword(req, res, false).then(function (result) {						
			res.send(result);
		});
	}
});



/* ///////////////////////////////////////////////////// Tutor Routes ///////////////////////////////////////////    */




/** Routing is used to render html and submit reset password form **/
app.post(FRONT_END_NAME + "tutor/signup", isLoggedIn, vr.validateForSignupTutor, (req, res, next) => {
	app.set('views', __dirname + '/views');
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		userModel.tutorSignup(req, res, next, validationErrors).then(function (result) {
			res.send(result);
		});
	}
	else {
		userModel.tutorSignup(req, res, next, false).then(function (result) {
			res.send(result);
		});
	}
});




/** Routing is used to update auth user details **/
app.get(FRONT_END_NAME + "tutor/dashboard", checkUserLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	userModel.tutorDashboard(req, res, next, false);
});





/** Routing is used to update auth user details **/
app.get(FRONT_END_NAME + "tutor/edit_profile", checkUserLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	userModel.tutorEeditProfile(req, res, next, false);
});



/** Routing is used to update auth user details **/
app.post(FRONT_END_NAME + "tutor/edit_profile", checkUserLogin, vr.validateForEditProfile, (req, res, next) => {
	app.set('views', __dirname + '/views');
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		userModel.tutorEeditProfile(req, res, next, validationErrors);
	}
	else {
		userModel.tutorEeditProfile(req, res, next, false);
	}
});



/* ///////////////////////////////////////////////////// Student Routes ///////////////////////////////////////////    */




/** Routing is used to render html and submit reset password form **/
app.post(FRONT_END_NAME + "student/signup", isLoggedIn, vr.validateForSignupStudent, (req, res, next) => {
	app.set('views', __dirname + '/views');
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		userModel.studentSignup(req, res, next, validationErrors).then(function (result) {
			res.send(result);
		});
	}
	else {
		userModel.studentSignup(req, res, next, false).then(function (result) {
			res.send(result);
		});
	}
});

/** Routing is used to update auth user details **/
app.get(FRONT_END_NAME + "student/dashboard", checkUserLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	userModel.studentDashboard(req, res, next, false);
});































/** Routing is used to render html login form **/
app.get(FRONT_END_NAME + "login", isLoggedIn, (req, res, next) => {
	app.set('views', __dirname + '/views');
	userModel.login(req, res, false);
});


/** Routing is used to submit login form **/
app.post(FRONT_END_NAME + "login", isLoggedIn, vr.validateForLogin, (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		app.set('views', __dirname + '/views');
		userModel.login(req, res, validationErrors);
	}
	else {
		userModel.login(req, res, false);
	}
});





/** Routing is used to render html and submit forgot password form **/
app.get(FRONT_END_NAME + "forgot-password", (req, res, next) => {
	app.set('views', __dirname + '/views');
	userModel.forgotPassword(req, res, false);
});






/** Routing is used to render html and submit reset password form **/
app.get(FRONT_END_NAME + "reset-password", (req, res, next) => {
	app.set('views', __dirname + '/views');
	userModel.resetPassword(req, res, false);
});



/** Routing is used to render html and submit reset password form **/
app.post(FRONT_END_NAME + "reset-password", vr.validateForResetPassword, (req, res, next) => {
	app.set('views', __dirname + '/views');
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		userModel.resetPassword(req, res, validationErrors);
	}
	else {
		userModel.resetPassword(req, res, false);
	}
});





/** Routing is used to render html and submit reset password form **/
app.get(FRONT_END_NAME + "verify_email/:validate_string", (req, res, next) => {
	userModel.verifyEmail(req, res, false);
});



/** Routing is used to render html and submit reset password form **/
app.get(FRONT_END_NAME + "resend_verify_email/:validate_string", (req, res, next) => {
	userModel.resendVerificationEmail(req, res, false);
});



