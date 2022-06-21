/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/email_actions";
const modulePath					= 	"/"+ADMIN_NAME+"/email_actions/";
const adminEmailActions				=   require(modelPath);
const { check, validationResult } 	= 	require('express-validator');
const  vr 							= 	require(__dirname+"/validationRules");


/** Middleware for set current view folder and layout **/
app.use(modulePath, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});


 
/** Routing is used to get email action list **/
app.all(modulePath, checkAdminLogin, (req, res, next) => {
    adminEmailActions.getEmailActionsList(req, res, next);
});



/** Routing is used to render add email action page **/
app.get(modulePath+"add", checkAdminLogin, (req, res, next) => {
    adminEmailActions.addEmailAction(req, res, next, false);
});



/** Routing is used to add email action **/
app.post(modulePath+"add", checkAdminLogin, vr.validateForEmailAction, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminEmailActions.addEmailAction(req, res, next, validationErrors);
	}
	else {
		adminEmailActions.addEmailAction(req, res, next, false);
	}
});



/** Routing is used to render edit email action page**/
app.get(modulePath+"edit/:id", checkAdminLogin, (req,res,next) => {
    adminEmailActions.editEmailAction(req,res,next, false);
});



/** Routing is used to edit email action **/
app.post(modulePath+"edit/:id", checkAdminLogin, vr.validateForEmailAction, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminEmailActions.editEmailAction(req, res, next, validationErrors);
	}
	else {
		adminEmailActions.editEmailAction(req, res, next, false);
	}
});



/** Routing is used to delete email action  **/
app.all(modulePath+"delete/:id/", checkAdminLogin, (req, res,next)=>{
    adminEmailActions.deleteEmailAction(req,res,next);
});