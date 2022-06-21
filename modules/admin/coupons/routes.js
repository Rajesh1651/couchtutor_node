/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/coupons";
const modulePath					= 	"/"+ADMIN_NAME+"/coupons/";
const adminCoupon      				=   require(modelPath);
const { check, validationResult } 	= 	require('express-validator');
const  vr							= 	require(__dirname+"/validationRules");


/** Middleware for set current view folder and layout **/
app.use(modulePath, /*checkAdminLogin,*/ (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});


 
/** Routing is used to get coupons list **/
app.all(modulePath,  /* checkAdminLogin, */ (req, res, next) => {
    adminCoupon.getList(req, res, next);
});



/** Routing is used to render add coupons page **/
app.get(modulePath+"add", /* checkAdminLogin,*/  (req, res, next) => {
    adminCoupon.add(req, res, next, false);
});



/** Routing is used to add coupon **/
app.post(modulePath+"add", /* checkAdminLogin,*/ vr.validateForCoupon, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminCoupon.add(req, res, next, validationErrors);
	}
	else {
		adminCoupon.add(req, res, next, false);
	}
});


/** Routing is used to update coupon status **/
app.all(modulePath+":update_status/:id/:status", /* checkAdminLogin,*/  (req, res,next)=>{
    adminCoupon.updateStatus(req,res,next);
});


/** Routing is used to delete coupon  **/
app.all(modulePath+"delete/:id/", /* checkAdminLogin,*/  (req, res,next)=>{
    adminCoupon.delete(req,res,next);
});
