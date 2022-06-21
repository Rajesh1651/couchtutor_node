/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/admin_modules";
const modulePath					= 	"/"+ADMIN_NAME+"/admin_modules/";
const adminModules     				=   require(modelPath);
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
	check('title', 		anyObjectForLocale.__("admin.admin_module.please_enter_title")).trim().notEmpty(),
	check('path', 		anyObjectForLocale.__("admin.admin_module.please_enter_path")).trim().notEmpty(),
	check('group_path',	anyObjectForLocale.__("admin.admin_module.please_enter_group_path")).trim().notEmpty(),
	check('order', 		anyObjectForLocale.__("admin.admin_module.please_enter_order")).trim().notEmpty(),
	check('order',		anyObjectForLocale.__("admin.admin_module.order_must_be_numeric")).trim().isNumeric(),
	check('order').matches(/^(0*[1-9][0-9]*)$/, 'g').withMessage(anyObjectForLocale.__("admin.admin_module.order_must_be_greater_then_0"))
];



/** Middleware for set current view folder and layout **/
app.use(modulePath, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});



/** Routing is used for listing page **/
app.all(modulePath, checkAdminLogin, (req, res) => {
	adminModules.list(req, res);
});



/** Routing is used to render add form page **/
app.get(modulePath+"add", checkAdminLogin, (req, res, next) => {
    adminModules.add(req, res, next, false);
});



/** Routing is used to add record into database **/
app.post(modulePath+"add", checkAdminLogin, validationRulesAndErrorMsg, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminModules.add(req, res, next, validationErrors);
	}
	else {
		adminModules.add(req, res, next, false);
	}
});



/** Routing is used to render edit cms page**/
app.get(modulePath+"edit/:id", checkAdminLogin, (req,res,next) => {
    adminModules.edit(req,res,next, false);
});



/** Routing is used to edit cms **/
app.post(modulePath+"edit/:id", checkAdminLogin, validationRulesAndErrorMsg, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminModules.edit(req, res, next, validationErrors);
	}
	else {
		adminModules.edit(req, res, next, false);
	}
});



/** Routing is used to update cms status **/
app.all(modulePath+":update_status/:id/:status", checkAdminLogin, (req, res,next)=>{
    adminModules.updateStatus(req,res,next);
});



/** Routing is used to delete cms  **/
app.all(modulePath+"delete/:id/", checkAdminLogin, (req, res,next)=>{
    adminModules.deleteAdminModule(req,res,next);
});



/** Routing is used to change order of module **/
app.post(modulePath+"change_order",	[
	
		check('new_order', anyObjectForLocale.__("admin.admin_module.please_enter_order")).trim().notEmpty(),
		check('new_order', anyObjectForLocale.__("admin.admin_module.order_must_be_numeric")).trim().isNumeric(),
		check('new_order').matches(/^(0*[1-9][0-9]*)$/, 'g').withMessage(anyObjectForLocale.__("admin.admin_module.order_must_be_greater_then_0"))
	
	],	
	checkAdminLogin, (req, res, next) => {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.send({
					status	: STATUS_ERROR,
					message	: errors.mapped(),
				});
			}
			adminModules.changeOrderValue(req, res, next);
	}
);