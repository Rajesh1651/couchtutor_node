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
		check('coupon_code',		anyObjectForLocale.__("ADMIN.COUPONS.PLEASE_ENTER_coupon_code")).trim().notEmpty(),
		check('description',		anyObjectForLocale.__("ADMIN.COUPONS.PLEASE_ENTER_description")).trim().notEmpty(),
		check('discounttype',		anyObjectForLocale.__("ADMIN.COUPONS.PLEASE_ENTER_discounttype")).trim().notEmpty(),
		check('discount',	        anyObjectForLocale.__("ADMIN.COUPONS.PLEASE_ENTER_discount")).trim().notEmpty(),
		check('usage_limit',	anyObjectForLocale.__("ADMIN.COUPONS.PLEASE_ENTER_usage_limit")).trim().notEmpty(),			
	]
}
 
module.exports = validationObject;