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
 
	validateForSlider : [
		check('title',				anyObjectForLocale.__("ADMIN.SLIDER.PLEASE_ENTER_SLIDER_TITLE_HERE")).trim().notEmpty(),
		check('slider_text',		anyObjectForLocale.__("ADMIN.SLIDER.PLEASE_ENTER_SLIDER_TEXT_HERE")).trim().notEmpty(),		
		check('image', ALLOWED_IMAGE_ERROR_MESSAGE).custom((val, {req}) => {
            var filename 			= 	(req.files && req.files.image.name) ? req.files.image.name : '';
			var allowedExtensions 	= 	ALLOWED_IMAGE_EXTENSIONS;
			var extension 			= 	(path.extname(filename)).toLowerCase();
			extension				= 	extension.replace(".", "");
			if(!(req.params.id && (filename == '')) )
				var result		=	(allowedExtensions.indexOf(extension) == -1) ? false : true;
			else
				var result		=	true;
			
			return result; 
		}),
		
		
		check('image', ALLOWED_IMAGE_SIZE_ERROR_MESSAGE).custom((val, {req}) => {
            var filesize	= 	(req.files && req.files.image.size) ? req.files.image.size : 0;
			
			if(!(req.params.id && (filesize == 0)) )
				var result		=	(ALLOWED_IMAGE_SIZE < filesize) ? false : true;
			else
				var result		=	true;
			
			return result;
		})
	]
}
 
module.exports = validationObject;