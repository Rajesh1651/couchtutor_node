const { check, validationResult } 	= 	require('express-validator');
const {ObjectId} 					= 	require('mongodb');


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



validationObject = {
 
	validateForEmailAction : [
		check('action',				anyObjectForLocale.__("admin.email_actions.please_enter_action")).trim().notEmpty(),
		check('options',			anyObjectForLocale.__("admin.email_actions.please_enter_options")).trim().notEmpty(),
	]
}
 
module.exports = validationObject;