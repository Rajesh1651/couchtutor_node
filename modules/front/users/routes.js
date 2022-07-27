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



/** Routing is used to update auth user details **/
app.get(FRONT_END_NAME + "tutor/edit-advance-profile", checkUserLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	userModel.tutorAdvanceProfile(req, res, next, false);
});



/** Routing is used to update auth user details **/
app.post(FRONT_END_NAME + "tutor/edit-advance-profile", checkUserLogin, vr.validateForEditAdvanceProfile, (req, res, next) => {
	app.set('views', __dirname + '/views');

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();		
		userModel.tutorAdvanceProfile(req, res, next, validationErrors);
	}
	else {
		userModel.tutorAdvanceProfile(req, res, next, false);
	}
});


/** Routing is used to update auth user Front Foreign Contractor Form **/
app.get(FRONT_END_NAME + "tutor/edit-foreign-contractor-form", checkUserLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	userModel.addFrontForeignContractorForm(req, res, next, false);
});



/** Routing is used to update auth user Front Foreign Contractor Form **/
app.post(FRONT_END_NAME + "tutor/edit-foreign-contractor-form", checkUserLogin, vr.validateForFrontForeignContractorForm, (req, res, next) => {
	app.set('views', __dirname + '/views');
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();		
		userModel.addFrontForeignContractorForm(req, res, next, validationErrors);
	}
	else {
		userModel.addFrontForeignContractorForm(req, res, next, false);
	}
});





/** Routing is used to update auth user Front Foreign Contractor Form **/
app.get(FRONT_END_NAME + "tutor/education", checkUserLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	userModel.tutorEducation(req, res, next, false);
});


/** Routing is used to update auth user Front Foreign Contractor Form **/
app.post(FRONT_END_NAME + "tutor/openEducationModel", checkUserLogin, (req, res, next) => {	
	userModel.openTutorEducationModel(req, res, next, false).then(function (result) {		
		res.send(result);
	});
});




/** Routing is used to render html and submit reset password form **/
app.post(FRONT_END_NAME + "tutor/saveTutorEducation", checkUserLogin, vr.validateForTutorAddEducation, (req, res, next) => {
	app.set('views', __dirname + '/views');
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		userModel.saveTutorEducation(req, res, next, validationErrors).then(function (result) {
			res.send(result);
		});
	}
	else {
		userModel.saveTutorEducation(req, res, next, false).then(function (result) {
			res.send(result);
		});
	}
});



/** Routing is used to update auth user Front  Tutor delete education  **/
app.get(FRONT_END_NAME + "tutor/delete_education/:educationId", checkUserLogin, (req, res, next) => {	
	userModel.deleteTutorEducation(req, res, next, false);
});

/** Routing is used to update auth user Front  Tutor Education Detail  **/
app.post(FRONT_END_NAME + "tutor/education_detail", checkUserLogin, (req, res, next) => {	
	userModel.TutorEducationDetail(req, res, next, false).then(function (result) {			
		res.send(result);
	});
});






/** Routing is used to update auth user Front Foreign Contractor Form **/
app.get(FRONT_END_NAME + "tutor/availability",/* checkUserLogin,*/  (req, res, next) => {
	app.set('views', __dirname + '/views');
	userModel.tutorAvailability(req, res, next, false);
});


/** Routing is used to user Front  availability Form Element  **/
app.post(FRONT_END_NAME + "tutor/availability_form_element", /*checkUserLogin,*/(req, res, next) => {
	app.set('layout', WEBSITE_LAYOUT_PATH + "blank");
	app.set('views', __dirname + '/views');	
	userModel.availabilityFormElement(req, res, next, false);
});


/** Routing is used to  Front  Tutor Education Detail  **/
app.post(FRONT_END_NAME + "tutor/availability_time_slots", /*checkUserLogin,*/(req, res, next) => {
	app.set('layout', WEBSITE_LAYOUT_PATH + "blank");
	app.set('views', __dirname + '/views');	
	userModel.availabilityTimeSlots(req, res, next, false);
});




/** Routing is used to render html and submit reset password form **/
app.post(FRONT_END_NAME + "user/updateEmail", checkUserLogin, vr.validateForUserUpdateEmail, (req, res, next) => {
	app.set('views', __dirname + '/views');
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		userModel.userUpdateEmail(req, res, next, validationErrors).then(function (result) {
			res.send(result);
		});
	}
	else {
		userModel.userUpdateEmail(req, res, next, false).then(function (result) {
			res.send(result);
		});
	}
});









/** Routing is used to update auth user Front Foreign Contractor Form **/
app.get(FRONT_END_NAME + "tutors", (req, res) => {
	app.set('views', __dirname + '/views');
	userModel.tutorList(req, res, false);
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


/** Routing is used to update auth user details **/
app.get(FRONT_END_NAME + "student/edit_profile", checkUserLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	userModel.studentEeditProfile(req, res, next, false);
});



/** Routing is used to update auth user details **/
app.post(FRONT_END_NAME + "student/edit_profile", checkUserLogin, vr.validateForEditProfile, (req, res, next) => {
	app.set('views', __dirname + '/views');
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		userModel.studentEeditProfile(req, res, next, validationErrors);
	}
	else {
		userModel.studentEeditProfile(req, res, next, false);
	}
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



/* ########################################ROUTING STARTS FOR CITIES SECTION #################################*/



/** Routing is used to get states dropdown from country **/
app.post(FRONT_END_NAME+"get-states-dropdown-from-country/:country_id?", (req,res,next)=>{
	app.set('layout', WEBSITE_LAYOUT_PATH + "blank");
	app.set('views', __dirname + '/views');
	userModel.getStatesDropdownFromCountry(req, res, next);
});

/** Routing is used to get cities dropdown from state **/
app.post(FRONT_END_NAME+"get-cities-dropdown-from-state/:state_id?", (req,res,next)=>{	
	app.set('layout', WEBSITE_LAYOUT_PATH + "blank");
	app.set('views', __dirname + '/views');
	userModel.getCitiesDropdownFromState(req, res, next);
});







/** Routing is used to update auth user Front Foreign Contractor Form **/
app.post(FRONT_END_NAME + "update-profile-image", checkUserLogin, vr.validateForupdateProfileImageForm, (req, res, next) => {
	app.set('views', __dirname + '/views');
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();		
		userModel.updateProfileImage(req, res, next, validationErrors).then(function(result){
			res.send(result);
			});		
	}
	else {
		userModel.updateProfileImage(req, res, next, false).then(function(result){
			res.send(result);
			});		
	}
});
