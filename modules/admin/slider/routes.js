/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/slider";
const modulePath					= 	"/"+ADMIN_NAME+"/slider/";
const adminSlider     				=   require(modelPath);
const { check, validationResult } 	= 	require('express-validator');
const  vr							= 	require(__dirname+"/validationRules");


/** Middleware for set current view folder and layout **/
app.use(modulePath, checkAdminLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});


 
/** Routing is used to get slider list **/
app.all(modulePath,  checkAdminLogin,  (req, res, next) => {
    adminSlider.getSliderList(req, res, next);
});



/** Routing is used to render add slider page **/
app.get(modulePath+"add", checkAdminLogin,  (req, res, next) => {
    adminSlider.addSlider(req, res, next, false);
});



/** Routing is used to add slider **/
app.post(modulePath+"add", checkAdminLogin,  vr.validateForSlider, (req,res,next)=>{
	
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminSlider.addSlider(req, res, next, validationErrors);
	}
	else {
		adminSlider.addSlider(req, res, next, false);
	}
});



/** Routing is used to render edit slider page**/
app.get(modulePath+"edit/:id", checkAdminLogin,  (req,res,next) => {
    adminSlider.editSlider(req,res,next, false);
});



/** Routing is used to edit slider **/
app.post(modulePath+"edit/:id", checkAdminLogin,  vr.validateForSlider, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminSlider.editSlider(req, res, next, validationErrors);
	}
	else {
		adminSlider.editSlider(req, res, next, false);
	}
});



/** Routing is used to update slider status **/
app.all(modulePath+":update_slider_status/:id/:status", checkAdminLogin,  (req, res,next)=>{
    adminSlider.updateSliderStatus(req,res,next);
});



/** Routing is used to delete slider  **/
app.all(modulePath+"delete/:id/", checkAdminLogin,  (req, res,next)=>{
    adminSlider.deleteSlider(req,res,next);
});


