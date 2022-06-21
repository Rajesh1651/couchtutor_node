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
 
	/** Validation rules and error msg **/
	validationRulesAndMessage	: [
		check('title', 		anyObjectForLocale.__("admin.settings.please_enter_title")).trim().notEmpty(),
		check('value',  	anyObjectForLocale.__("admin.settings.please_enter_value")).trim().notEmpty(),
		check('key_value',	anyObjectForLocale.__("admin.settings.please_enter_key_value")).trim().notEmpty(),
		check('input_type',	anyObjectForLocale.__("admin.settings.please_select_input_type")).trim().notEmpty(),
	
		check('key_value', 		anyObjectForLocale.__("admin.settings.key_value_is_already_exist")).custom((value, {req})=>{	
			return new Promise((resolve, reject) => {
				const settingCollection	= 	db.collection(SETTING_COLLECTION);
				var settingId			=	(req.params.id) ? req.params.id : null;
				
				if(settingId){
					settingCollection.findOne({key_value : value, _id : {$ne:ObjectId(settingId)}}, function(err, record){
						if(err) {
							reject(false);
						}

						if(Boolean(record)) {
							reject(false);
						}
						
						resolve(true);
					}); 
				}
				else {
					settingCollection.findOne({key_value:value}, function(err, record){
						if(err) {
							reject(false);
						}

						if(Boolean(record)) {
							reject(false);
						}
						
						resolve(true);
					}); 
				}
			});
		})
	]
}
 
module.exports = validationObject;