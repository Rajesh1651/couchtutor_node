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

	validateForPlan: [
		check('plan_name', anyObjectForLocale.__("ADMIN.PLANS.PLEASE_ENTER_PLAN_NAME")).trim().notEmpty(),

		check('plan_price', anyObjectForLocale.__("ADMIN.PLANS.PLEASE_ENTER_PRICE")).trim().notEmpty(),
		check('plan_price', anyObjectForLocale.__("ADMIN.PLANS.PLEASE_ENTER_PRICE_NUMBER")).isFloat(),

		check('plan_duration', anyObjectForLocale.__("ADMIN.PLANS.PLEASE_ENTER_DURATION")).trim().notEmpty(),
		check('plan_duration', anyObjectForLocale.__("ADMIN.PLANS.PLEASE_ENTER_DURATION_NUMBER")).isInt(),

		check('plan_hours', anyObjectForLocale.__("ADMIN.PLANS.PLEASE_ENTER_PLAN_HOURS")).trim().notEmpty(),
		check('plan_hours', anyObjectForLocale.__("ADMIN.PLANS.PLEASE_ENTER_PLAN_HOURS_NUMBER")).isInt(),

		check('plan_order', anyObjectForLocale.__("ADMIN.PLANS.PLEASE_ENTER_PLAN_ORDER")).trim().notEmpty(),
		check('plan_order', anyObjectForLocale.__("ADMIN.PLANS.PLEASE_ENTER_NUMBER")).isInt(),


		check('description', anyObjectForLocale.__("ADMIN.PLANS.PLEASE_ENTER_DESCRIPTION_HERE")).trim().notEmpty(),
	],
	
}

module.exports = validationObject;