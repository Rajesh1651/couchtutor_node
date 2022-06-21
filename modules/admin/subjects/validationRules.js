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

	validateForSubject: [
		check('subject_name', anyObjectForLocale.__("ADMIN.SUBJECT.PLEASE_ENTER_SUBJECT_NAME")).trim().notEmpty(),
		check('color_code', anyObjectForLocale.__("ADMIN.SUBJECT.PLEASE_ENTER_COLOR_CODE")).trim().notEmpty(),
		check('color_code_hover', anyObjectForLocale.__("ADMIN.SUBJECT.PLEASE_ENTER_COLOR_CODE_HOVER")).trim().notEmpty(),
		check('color_code_icon', anyObjectForLocale.__("ADMIN.SUBJECT.PLEASE_ENTER_COLOR_CODE_ICON")).trim().notEmpty(),
		check('description', anyObjectForLocale.__("ADMIN.SUBJECT.PLEASE_ENTER_DESCRIPTION_HERE")).trim().notEmpty(),

		check('image', SUBJECT_IMAGE_ERROR_MESSAGE).custom((val, { req }) => {
			var filename = (req.files && req.files.image.name) ? req.files.image.name : '';
			var allowedExtensions = SUBJECT_IMAGE_EXTENSION;
			var extension = (path.extname(filename)).toLowerCase();
			extension = extension.replace(".", "");
			if (!(req.params.id && (filename == '')))
				var result = (allowedExtensions.indexOf(extension) == -1) ? false : true;
			else
				var result = true;

			return result;
		}),


		check('image', ALLOWED_IMAGE_SIZE_ERROR_MESSAGE).custom((val, { req }) => {
			var filesize = (req.files && req.files.image.size) ? req.files.image.size : 0;

			if (!(req.params.id && (filesize == 0)))
				var result = (SUBJECT_IMAGE_EXTENSION < filesize) ? false : true;
			else
				var result = true;

			return result;
		})
	],
	validateForTopic: [
		check('subject_name', anyObjectForLocale.__("ADMIN.TOPIC.PLEASE_ENTER_TOPIC_NAME")).trim().notEmpty(),		
		check('description', anyObjectForLocale.__("ADMIN.TOPIC.PLEASE_ENTER_DESCRIPTION_HERE")).trim().notEmpty(),
	]
}

module.exports = validationObject;