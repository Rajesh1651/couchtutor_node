/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/text_setting";
const modulePath					= 	"/"+ADMIN_NAME+"/text_setting/";
const adminTextSetting				=   require(modelPath);
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
	check('key', 		anyObjectForLocale.__("admin.text_setting.please_enter_key")).trim().notEmpty(),
	check('text_settings_descriptions.'+DEFAULT_LANGUAGE_MONGO_ID+'.value',  	anyObjectForLocale.__("admin.text_setting.please_enter_value")).trim().notEmpty()
];

/** Middleware for set current view folder and layout **/
app.use(modulePath, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});


 
/** Routing is used to get cms list **/
app.all(modulePath+":type",  checkAdminLogin, (req, res, next) => {
    adminTextSetting.getTextSettingList(req, res, next);
});



/** Routing is used to render add TextSetting **/
app.get(modulePath+":type/add", checkAdminLogin, (req, res, next) => {
    adminTextSetting.addTextSetting(req, res, next, false);
});



/** Routing is used to save TextSetting **/
app.post(modulePath+":type/add", checkAdminLogin, validationRulesAndErrorMsg, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminTextSetting.addTextSetting(req, res, next, validationErrors);
	}
	else {
		adminTextSetting.addTextSetting(req, res, next, false);
	}
});



/** Routing is used to render edit TextSetting page**/
app.get(modulePath+":type/edit/:id", checkAdminLogin, (req,res,next) => {
    adminTextSetting.editTextSetting(req,res,next, false);
});



/** Routing is used to edit TextSetting **/
app.post(modulePath+":type/edit/:id", checkAdminLogin, validationRulesAndErrorMsg, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminTextSetting.editTextSetting(req, res, next, validationErrors);
	}
	else {
		adminTextSetting.editTextSetting(req, res, next, false);
	}
});