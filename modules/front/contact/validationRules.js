var path 							= 	require('path');
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

	validateForContact: [
		check('first_name',	anyObjectForLocale.__("admin.user.please_enter_your_first_name")).trim().notEmpty(),
		check('last_name',	anyObjectForLocale.__("admin.user.please_enter_your_last_name")).trim().notEmpty(),
		check('email',		anyObjectForLocale.__("admin.user.please_enter_email")).trim().notEmpty(),
		check('email',		anyObjectForLocale.__("admin.user.please_enter_valid_email_address")).isEmail(),
		check('phone_number',		anyObjectForLocale.__("admin.user.invalid_phone_number")).trim().notEmpty(),
		check('subject', 			anyObjectForLocale.__("admin.user.please_enter_subject")).trim().notEmpty(),
		check('message', 			anyObjectForLocale.__("admin.user.please_enter_message")).trim().notEmpty()
	]
}
 
module.exports = validationObject;