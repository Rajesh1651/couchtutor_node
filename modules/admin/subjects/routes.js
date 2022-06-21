/** Model file path for current plugin **/
const modelPath = __dirname + "/model/subjects";
const modulePath = "/" + ADMIN_NAME + "/subjects/";
const moduleTopicPath = "/" + ADMIN_NAME + "/topicIndex/";
const adminSubjects = require(modelPath);
const { check, validationResult } = require('express-validator');
const vr = require(__dirname + "/validationRules");


/** Middleware for set current view folder and layout **/
app.use(modulePath, checkAdminLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH + "default");
	next();
});



/** Routing is used to get subjects list **/
app.all(modulePath, checkAdminLogin, (req, res, next) => {
	adminSubjects.getSubjectList(req, res, next);
});



/** Routing is used to render add Subject page **/
app.get(modulePath + "add", checkAdminLogin, (req, res, next) => {
	adminSubjects.addSubject(req, res, next, false);
});



/** Routing is used to add subject **/
app.post(modulePath + "add", checkAdminLogin, vr.validateForSubject, (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		adminSubjects.addSubject(req, res, next, validationErrors);
	}
	else {
		adminSubjects.addSubject(req, res, next, false);
	}
});



/** Routing is used to render edit Subject page**/
app.get(modulePath + "edit/:id", checkAdminLogin, (req, res, next) => {
	adminSubjects.editSubject(req, res, next, false);
});



/** Routing is used to edit Subject **/
app.post(modulePath + "edit/:id", checkAdminLogin, vr.validateForSubject, (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		adminSubjects.editSubject(req, res, next, validationErrors);
	}
	else {
		adminSubjects.editSubject(req, res, next, false);
	}
});



/** Routing is used to update Subject status **/
app.all(modulePath + ":update_subject_status/:id/:status", checkAdminLogin, (req, res, next) => {
	adminSubjects.updateSubjectStatus(req, res, next);
});










//  Subject topic  //


/** Middleware for set current view folder and layout **/
app.use(moduleTopicPath, checkAdminLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH + "default");
	next();
});


/** Routing is used to get subjects topic list **/
app.all(moduleTopicPath + ":subjectId", checkAdminLogin, (req, res, next) => {
	adminSubjects.getSubjectTopicList(req, res, next);
});



/** Routing is used to render add Subject Topic page **/
app.get(moduleTopicPath + "add/:subjectId", checkAdminLogin, (req, res, next) => {
	adminSubjects.addSubjectTopic(req, res, next, false);
});


/** Routing is used to add subject topic**/
app.post(moduleTopicPath + "add/:subjectId", checkAdminLogin, vr.validateForTopic, (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		adminSubjects.addSubjectTopic(req, res, next, validationErrors);
	}
	else {
		adminSubjects.addSubjectTopic(req, res, next, false);
	}
});

/** Routing is used to render edit Subject topic page**/
app.get(moduleTopicPath + "edit/:subjectId/:id", checkAdminLogin, (req, res, next) => {
	adminSubjects.editSubjectTopic(req, res, next, false);
});


/** Routing is used to edit Subject **/
app.post(moduleTopicPath + "edit/:subjectId/:id", checkAdminLogin, vr.validateForTopic, (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();
		req.session.formData = req.body;
		adminSubjects.editSubjectTopic(req, res, next, validationErrors);
	}
	else {
		adminSubjects.editSubjectTopic(req, res, next, false);
	}
});


/** Routing is used to update Subject topic status **/
app.all(moduleTopicPath + ":update_status/:subjectId/:id/:status", checkAdminLogin, (req, res, next) => {
	adminSubjects.updateSubjectTopicStatus(req, res, next);
});





