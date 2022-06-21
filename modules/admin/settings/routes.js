/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/settings";
const modulePath					= 	"/"+ADMIN_NAME+"/settings/";
const adminSettings					=   require(modelPath);
const { check, validationResult } 	= 	require('express-validator');
const  vr 							= 	require(__dirname+"/validationRules");


/** Middleware for set current view folder and layout **/
app.use(modulePath, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});


 
/** Routing is used to get setting list **/
app.all(modulePath, checkAdminLogin, (req, res, next) => {
    adminSettings.getSettingList(req, res, next);
});



/** Routing is used to render add new setting **/
app.get(modulePath+"add", checkAdminLogin, (req, res, next) => {
    adminSettings.addSetting(req, res, next, false);
});



/** Routing is used to add setting **/
app.post(modulePath+"add", checkAdminLogin, vr.validationRulesAndMessage, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminSettings.addSetting(req, res, next, validationErrors);
	}
	else {
		adminSettings.addSetting(req, res, next, false);
	}
});



/** Routing is used to delete setting  **/
app.all(modulePath+"delete/:id/", checkAdminLogin, (req, res,next)=>{
    adminSettings.deleteSetting(req,res,next);
});



/** Routing is used to render edit setting **/
app.get(modulePath+"edit/:id", checkAdminLogin, (req,res,next) => {
    adminSettings.editSetting(req,res,next, false);
});



/** Routing is used to edit setting **/
app.post(modulePath+"edit/:id", checkAdminLogin, vr.validationRulesAndMessage, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminSettings.editSetting(req, res, next, validationErrors);
	}
	else {
		adminSettings.editSetting(req, res, next, false);
	}
});



/** Routing is used to get setting listing with edit page **/
app.all(modulePath+"prefix/:type", checkAdminLogin, function(req, res) {
    adminSettings.prefix(req, res);
});