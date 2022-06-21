/** Model file path for current plugin **/
const modelPath     =	__dirname+"/model/user";
const modulePath	= 	"/"+ADMIN_NAME+"/users/";
const adminUser	    =   require(modelPath);
const  vr 							= 	require(__dirname+"/validationRules");
const { check, validationResult } 	= 	require('express-validator');



app.use("/"+ADMIN_NAME, (req,res,next)=>{
	/** console.log("layout before_login"); */
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"before_login");
	app.set('views', __dirname + '/views');
	next();
}); 

 
 /** Middleware for set current view folder and layout **/
app.use([modulePath, "/"+ADMIN_NAME+"/edit_profile"], (req,res,next)=>{
	/** console.log("layout default"); */
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
	app.set('views', __dirname + '/views');
	next();
}); 
 
 
 
/** Routing is used to render html login form **/
app.get(["/"+ADMIN_NAME+"/login","/"+ADMIN_NAME],isLoggedIn,(req,res,next)=>{
    adminUser.login(req, res, false);
});

/** Routing is used to submit login form **/
app.post(["/"+ADMIN_NAME+"/login","/"+ADMIN_NAME],	isLoggedIn, vr.validateForLogin, (req,res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminUser.login(req, res, validationErrors );
	}
	else {
		adminUser.login(req, res, false );
	}
});

/** Routing is used for admin logout */
app.get("/"+ADMIN_NAME+"/logout",(req, res)=>{
    res.header("Cache-Control", "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0");

    /** Delete user Modules list Flag **/
	let userId  = (req.session && req.session.user && req.session.user._id) ? req.session.user._id : "";
    userModuleFlagAction(userId,"","delete"); 
	
    req.session.destroy();
    res.clearCookie("adminLoggedIn");
    res.redirect(WEBSITE_ADMIN_URL+"login");
});

/** Routing is used to update auth user details **/
app.get("/"+ADMIN_NAME+"/edit_profile",checkAdminLogin,(req, res)=>{
    adminUser.editProfile(req, res, false);
});



/** Routing is used to update auth user details **/
app.post("/"+ADMIN_NAME+"/edit_profile", checkAdminLogin, vr.validateForEditProfile, (req,res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminUser.editProfile(req, res, validationErrors );
	}
	else {
		adminUser.editProfile(req, res, false);
	}
});

/** Routing is used to render html and submit forgot password form **/
app.get("/"+ADMIN_NAME+"/forgot-password",(req, res)=>{ 
    adminUser.forgotPassword(req, res, false);
});


/** Routing is used to render html and submit forgot password form **/
app.post("/"+ADMIN_NAME+"/forgot-password", vr.validateForForgotPassword, (req,res,next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		
		var validationErrors	=	errors.mapped();
		console.log(validationErrors);
		req.session.formData 	=	req.body;
		adminUser.forgotPassword(req, res, validationErrors );
	}
	else {
		adminUser.forgotPassword(req, res, false);
	}
});

 
/** Routing is used to render html and submit reset password form **/
app.get("/"+ADMIN_NAME+"/reset-password",(req, res)=>{
    adminUser.resetPassword(req, res, false);
});

/** Routing is used to render html and submit reset password form **/
app.post("/"+ADMIN_NAME+"/reset-password",  vr.validateForResetPassword, (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminUser.resetPassword(req, res, validationErrors );
	}
	else {
		adminUser.resetPassword(req, res, false);
	}
});

/** Routing is used to render dashboard html */
app.get("/"+ADMIN_NAME+"/dashboard",checkAdminLogin,(req, res, next)=>{
	/** Set current view folder **/
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    adminUser.dashboard(req, res, next);
});
 


/** Routing is used to get user list **/
app.all(modulePath+":user_type",checkAdminLogin,(req, res)=>{
	
    adminUser.getUserListing(req, res);
});


/** Routing is used to add user **/
app.get(modulePath+":user_type/add",checkAdminLogin,(req,res,next)=>{
    adminUser.addUser(req, res, next, false);
});


app.post(modulePath+":user_type/add", checkAdminLogin, vr.validateForAddUser, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminUser.addUser(req, res, next, validationErrors );
		
	}
	else {
		adminUser.addUser(req, res, next, false);
	}
});


/** Routing is used to edit user **/
app.get(modulePath+":user_type/edit/:id",checkAdminLogin,(req,res,next)=>{
    adminUser.editUser(req,res,next, false);
});



app.post(modulePath+":user_type/edit/:id", checkAdminLogin, vr.validateForEditUser, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminUser.editUser(req, res, next, validationErrors );

	}
	else {
		adminUser.editUser(req, res, next, false);
	}
});



/** Routing is used to view user details **/
app.get(modulePath+":user_type/view/:id",checkAdminLogin,(req, res,next)=>{
    adminUser.viewUserDetails(req, res,next);
});



/** Routing is used to update user status **/
app.all(modulePath+":user_type/update_user_status/:id/:status/:status_type",checkAdminLogin,(req, res,next)=>{
    adminUser.updateUserStatus(req,res,next);
});




/** Routing is used to delete user details **/
app.get(modulePath+":user_type/delete/:id",checkAdminLogin,(req,res,next)=>{
    adminUser.deleteUser(req,res,next);
});



/** Routing is used to update user verified status **/
app.get(modulePath+":user_type/update_verified_user_status/:id",checkAdminLogin,(req, res,next)=>{
    adminUser.updateVerifiedUserStatus(req, res,next);
});




































 











/** Routing is used to edit user **/
app.all(modulePath+":user_type/send_login_credentials/:id",checkAdminLogin,(req,res,next)=>{
    adminUser.sendLoginCredentials(req,res,next);
});






/** Routing is used to approve/reject user profile  **/
app.get(modulePath+":user_type/update_user_detail/:action/:id",checkAdminLogin,(req, res)=>{
    adminUser.approveUserDetails(req, res);
});




/** Routing is used to insert comment when admin reject an user profile **/
app.post(modulePath+":user_type/update_user_detail/:action/:id",checkAdminLogin, vr.validateProfileRejection,  (req,res,next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.send({
			status	: STATUS_ERROR,
			message	: errors.mapped(),
		});
	}
	else {
		adminUser.approveUserDetails(req, res);
	}
 
});





























