/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/faq";
const modulePath					= 	"/"+ADMIN_NAME+"/faq/";
const adminFaq      				=   require(modelPath);
const { check, validationResult } 	= 	require('express-validator');
const  vr							= 	require(__dirname+"/validationRules");


/** Middleware for set current view folder and layout **/
app.use(modulePath, checkAdminLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});


 
/** Routing is used to get faq list **/
app.all(modulePath,  checkAdminLogin,  (req, res, next) => {
    adminFaq.getFaqList(req, res, next);
});



/** Routing is used to render add faq page **/
app.get(modulePath+"add", checkAdminLogin,  (req, res, next) => {
    adminFaq.addFaq(req, res, next, false);
});



/** Routing is used to add faq **/
app.post(modulePath+"add", checkAdminLogin,  vr.validateForFaq, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminFaq.addFaq(req, res, next, validationErrors);
	}
	else {
		adminFaq.addFaq(req, res, next, false);
	}
});



/** Routing is used to render edit faq page**/
app.get(modulePath+"edit/:id", checkAdminLogin,  (req,res,next) => {
    adminFaq.editFaq(req,res,next, false);
});



/** Routing is used to edit faq **/
app.post(modulePath+"edit/:id", checkAdminLogin,  vr.validateForFaq, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminFaq.editFaq(req, res, next, validationErrors);
	}
	else {
		adminFaq.editFaq(req, res, next, false);
	}
});



/** Routing is used to update faq status **/
app.all(modulePath+":update_faq_status/:id/:status", checkAdminLogin,  (req, res,next)=>{
    adminFaq.updateFaqStatus(req,res,next);
});



/** Routing is used to delete faq  **/
app.all(modulePath+"delete/:id/", checkAdminLogin,  (req, res,next)=>{
    adminFaq.deleteFaq(req,res,next);
});



/** Routing is used to view faq details **/
app.get(modulePath+"view/:id",	checkAdminLogin,  (req, res,next)=>{
    adminFaq.viewFaqDetails(req, res,next);
});