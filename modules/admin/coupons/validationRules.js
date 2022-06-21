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
 
	validateForCoupon : [
		check('title',				anyObjectForLocale.__("ADMIN.COUPONS.PLEASE_ENTER_PAGE_TITLE_HERE")).trim().notEmpty(),
		check('meta_title',			anyObjectForLocale.__("ADMIN.COUPONS.PLEASE_ENTER_META_TITLE_HERE")).trim().notEmpty(),
		check('meta_keywords',		anyObjectForLocale.__("ADMIN.COUPONS.PLEASE_ENTER_META_KEYWORDS_HERE")).trim().notEmpty(),
		check('short_decription',	anyObjectForLocale.__("ADMIN.COUPONS.PLEASE_ENTER_SHORT_DESCRIPTION_HERE")).trim().notEmpty(),
		check('meta_decription',	anyObjectForLocale.__("ADMIN.COUPONS.PLEASE_ENTER_META_DESCRIPTION_HERE")).trim().notEmpty(),
		check('decription',			anyObjectForLocale.__("ADMIN.COUPONS.PLEASE_ENTER_DESCRIPTION_HERE")).trim().notEmpty(),		
	]
}
 
module.exports = validationObject;