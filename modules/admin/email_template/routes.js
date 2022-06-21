/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/email_template";
const modulePath					= 	"/"+ADMIN_NAME+"/email_template/";
const emailTemp      				=   require(modelPath);
const { check, validationResult } 	= 	require('express-validator');


/** For locale **/
var anyObjectForLocale	=	{};
const i18n 	= require("i18n");
i18n.configure({
    locales:LANGUAGE_FOLDER_CODE_ARRAY,
    defaultLocale: DEFAULT_LANGUAGE_FOLDER_CODE,
    directory: WEBSITE_LOCALE_ROOT_PATH,
	updateFiles: false,
	register: anyObjectForLocale
});



/** Validation rules and error msg **/
var validationRulesAndErrorMsg	=	[
	check('name', 		anyObjectForLocale.__("admin.email_template.please_enter_name")).trim().notEmpty(),
	check('subject',  	anyObjectForLocale.__("admin.email_template.please_enter_subject")).trim().notEmpty(),
	check('body',  		anyObjectForLocale.__("admin.email_template.please_enter_email_body")).trim().notEmpty()
];


/** Middleware for set current view folder and layout **/
app.use(modulePath, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});


 
/** Routing is used to get email template list **/
app.all(modulePath,  checkAdminLogin, (req, res, next) => {
    emailTemp.getTemplateList(req, res, next);
});



/** Routing is used to render add email template **/
app.get(modulePath+"add", checkAdminLogin, (req, res, next) => {
    emailTemp.addEmailTemplate(req, res, next, false);
});



/** Routing is used to add email template **/
app.post(modulePath+"add", checkAdminLogin, validationRulesAndErrorMsg, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		emailTemp.addEmailTemplate(req, res, next, validationErrors);
	}
	else {
		emailTemp.addEmailTemplate(req, res, next, false);
	}
});
 

/** Routing is used to render edit email template**/
app.get(modulePath+"edit/:id", checkAdminLogin, (req,res,next) => {
    emailTemp.editEmailTemplate(req,res,next, false);
});



/** Routing is used to edit email template **/
app.post(modulePath+"edit/:id", checkAdminLogin, validationRulesAndErrorMsg, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		emailTemp.editEmailTemplate(req, res, next, validationErrors);
	}
	else {
		emailTemp.editEmailTemplate(req, res, next, false);
	}
});


/** Routing is used to get email action options **/
app.post(modulePath+"get_action_options", checkAdminLogin, (req, res,next) => {
	emailTemp.getEmailActionOptions(req,res,next);
});