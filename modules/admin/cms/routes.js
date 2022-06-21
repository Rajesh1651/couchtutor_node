/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/cms";
const modulePath					= 	"/"+ADMIN_NAME+"/cms/";
const adminCms      				=   require(modelPath);
const { check, validationResult } 	= 	require('express-validator');
const  vr							= 	require(__dirname+"/validationRules");


/** Middleware for set current view folder and layout **/
app.use(modulePath, checkAdminLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});


 
/** Routing is used to get cms list **/
app.all(modulePath,   checkAdminLogin,  (req, res, next) => {
    adminCms.getCmsList(req, res, next);
});



/** Routing is used to render add cms page **/
app.get(modulePath+"add",  checkAdminLogin,  (req, res, next) => {
    adminCms.addCms(req, res, next, false);
});



/** Routing is used to add cms **/
app.post(modulePath+"add",  checkAdminLogin, vr.validateForCMS, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminCms.addCms(req, res, next, validationErrors);
	}
	else {
		adminCms.addCms(req, res, next, false);
	}
});



/** Routing is used to render edit cms page**/
app.get(modulePath+"edit/:id",  checkAdminLogin,  (req,res,next) => {
    adminCms.editCms(req,res,next, false);
});



/** Routing is used to edit cms **/
app.post(modulePath+"edit/:id",  checkAdminLogin,  vr.validateForCMS, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminCms.editCms(req, res, next, validationErrors);
	}
	else {
		adminCms.editCms(req, res, next, false);
	}
});



/** Routing is used to update cms status **/
app.all(modulePath+":update_cms_status/:id/:status",  checkAdminLogin,  (req, res,next)=>{
    adminCms.updateCmsStatus(req,res,next);
});



/** Routing is used to delete cms  **/
app.all(modulePath+"delete/:id/",  checkAdminLogin,  (req, res,next)=>{
    adminCms.deleteCms(req,res,next);
});



/** Routing is used to view CMS details **/
app.get(modulePath+"view/:id",	 checkAdminLogin,  (req, res,next)=>{
    adminCms.viewCmsDetails(req, res,next);
});