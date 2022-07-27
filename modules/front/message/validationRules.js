var path = require('path');
const { check, validationResult } = require('express-validator');
const { ObjectId } = require('mongodb');


/** For locale **/
var anyObjectForLocale = {};
const i18n = require("i18n");
i18n.configure({
	locales: LANGUAGE_FOLDER_CODE_ARRAY,
	defaultLocale: DEFAULT_LANGUAGE_FOLDER_CODE,
	directory: WEBSITE_LOCALE_ROOT_PATH,
	updateFiles: false,
	register: anyObjectForLocale
});


validationObject = {

	validateForsaveMessage: [
		check('subject', i18n.__("admin.user.please_enter_subject")).trim().notEmpty(),
		check('message', i18n.__("admin.user.please_enter_message")).trim().notEmpty(),				
	],


}

module.exports = validationObject;