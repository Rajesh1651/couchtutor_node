/** Model file path for current plugin **/
const modelPath = __dirname + "/model/plans";
const modulePath = "/" + ADMIN_NAME + "/plans/";
const adminPlans = require(modelPath);
const { check, validationResult } = require('express-validator');
const vr = require(__dirname + "/validationRules");


/** Middleware for set current view folder and layout **/
app.use(modulePath, checkAdminLogin, (req, res, next) => {		
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH + "default");
	next();
});



/** Routing is used to get plans list **/
app.all(modulePath + ":type", checkAdminLogin, (req, res, next) => {		
	adminPlans.getList(req, res, next);
});



/** Routing is used to render add plans page **/
app.get(modulePath + "add/:type", checkAdminLogin, (req, res, next) => {
	adminPlans.add(req, res, next, false);
});



/** Routing is used to add plan **/
app.post(modulePath + "add/:type", checkAdminLogin, vr.validateForPlan, (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		adminPlans.add(req, res, next, validationErrors);
	}
	else {
		adminPlans.add(req, res, next, false);
	}
});



/** Routing is used to render edit plan page**/
app.get(modulePath + "edit/:id/:type", checkAdminLogin, (req, res, next) => {
	adminPlans.edit(req, res, next, false);
});



/** Routing is used to edit plan **/
app.post(modulePath + "edit/:id/:type", checkAdminLogin, vr.validateForPlan, (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		adminPlans.edit(req, res, next, validationErrors);
	}
	else {
		adminPlans.edit(req, res, next, false);
	}
});


/** Routing is used to update plan status **/
app.all(modulePath + ":update_status/:id/:status/:type", checkAdminLogin, (req, res, next) => {
	adminPlans.updateStatus(req, res, next);
});


/** Routing is used to update plan status **/
app.all(modulePath + ":recommended/:id/:type", checkAdminLogin, (req, res, next) => {
	adminPlans.updateRecommendedStatus(req, res, next);
});






