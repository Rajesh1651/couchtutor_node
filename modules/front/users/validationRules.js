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
	

	validateForSignupTutor: [
		check('first_name',	i18n.__("admin.user.please_enter_your_first_name")).trim().notEmpty(),
		check('last_name',	i18n.__("admin.user.please_enter_your_last_name")).trim().notEmpty(),
		check('email',		i18n.__("admin.user.please_enter_email")).trim().notEmpty(),
		check('email',		i18n.__("admin.user.please_enter_valid_email_address")).isEmail(),
		check('email', 		i18n.__("admin.user.your_email_id_is_already_exist")).custom((value, {req})=>{	
			return new Promise((resolve, reject) => {
				const users = db.collection(USERS_COLLECTION);
				users.findOne({email:value}, function(err, user){
					if(err) {
						reject(false);
					}

					if(Boolean(user)) {
						reject(false);
					}
					
					resolve(true);
				}); 
			});
		}),
		
		/*
		check('phone_number', i18n.__("admin.user.invalid_phone_number")).trim().notEmpty(),
		check('phone_number', i18n.__("admin.user.invalid_phone_number")).trim().isNumeric(),
		check('phone_number', i18n.__("admin.user.invalid_phone_number")).trim().isLength({min: 10 }),
		*/
		check('phone_number',		i18n.__("admin.user.invalid_phone_number")).trim().notEmpty(),
		check('password', 			i18n.__("admin.user.please_enter_password")).trim().notEmpty(),
		check('password', 			i18n.__("admin.user.password_length_should_be_minimum_6_character")).trim().isLength({min: 6 }),
		check('password', 			i18n.__("admin.user.password_length_should_be_max_20_character")).trim().isLength({max: 20 }),
		check('confirm_password', 	i18n.__("admin.user.please_enter_confirm_password")).trim().notEmpty(),
		check('confirm_password', 	i18n.__("admin.user.confirm_password_should_be_same_as_password")).custom((value, {req})=>{
			if (value === req.body.password) {
				return true;
			} 
			else {
				return false;
			}
		}),
		check('termsncond', 	i18n.__("admin.user.please_check_terms_and_conditions")).trim().notEmpty(),
	],




	validateForSignupStudent: [
		check('first_name',	i18n.__("admin.user.please_enter_your_first_name")).trim().notEmpty(),
		check('last_name',	i18n.__("admin.user.please_enter_your_last_name")).trim().notEmpty(),
		check('email',		i18n.__("admin.user.please_enter_email")).trim().notEmpty(),
		check('email',		i18n.__("admin.user.please_enter_valid_email_address")).isEmail(),
		check('email', 		i18n.__("admin.user.your_email_id_is_already_exist")).custom((value, {req})=>{	
			return new Promise((resolve, reject) => {
				const users = db.collection(USERS_COLLECTION);
				users.findOne({email:value}, function(err, user){
					if(err) {
						reject(false);
					}

					if(Boolean(user)) {
						reject(false);
					}
					
					resolve(true);
				}); 
			});
		}),
		
		
		check('phone_number',		i18n.__("admin.user.invalid_phone_number")).trim().notEmpty(),
		check('password', 			i18n.__("admin.user.please_enter_password")).trim().notEmpty(),
		check('password', 			i18n.__("admin.user.password_length_should_be_minimum_6_character")).trim().isLength({min: 6 }),
		check('password', 			i18n.__("admin.user.password_length_should_be_max_20_character")).trim().isLength({max: 20 }),
		check('confirm_password', 	i18n.__("admin.user.please_enter_confirm_password")).trim().notEmpty(),
		check('confirm_password', 	i18n.__("admin.user.confirm_password_should_be_same_as_password")).custom((value, {req})=>{
			if (value === req.body.password) {
				return true;
			} 
			else {
				return false;
			}
		}),
		check('student_termsncond', 	i18n.__("admin.user.please_check_terms_and_conditions")).trim().notEmpty(),
	],













	validateForLogin: [
		check('username', i18n.__("admin.user.please_enter_email")).trim().notEmpty(),
		check('username', i18n.__("admin.user.please_enter_valid_email_address")).isEmail(),
		check('password', i18n.__("admin.user.please_enter_password")).trim().notEmpty()
	],
	








	
	
	validateForForgotPassword: [
		check('email', i18n.__("admin.user.please_enter_email")).trim().notEmpty(),
		check('email', i18n.__("admin.user.please_enter_valid_email_address")).isEmail()
	],
	
	
	
	validateForResetPassword: [
		check('password', i18n.__("admin.user.please_enter_password")).trim().notEmpty(),
		check('password', i18n.__("admin.user.password_length_should_be_minimum_6_character")).trim().isLength({min: 6 }),
		check('password', i18n.__("admin.user.password_length_should_be_max_20_character")).trim().isLength({max: 20 }),
		check('confirm_password', i18n.__("admin.user.please_enter_confirm_password")).trim().notEmpty(),
		check('confirm_password', i18n.__("admin.user.confirm_password_should_be_same_as_password")).custom((value, {req})=>{
			if (value === req.body.password) {
				return true;
			} 
			else {
				return false;
			}
		})
	], 
	
	 
	

	
	
	
	validateForEditProfile: [
		check('first_name',	i18n.__("admin.user.please_enter_your_first_name")).trim().notEmpty(),
		check('last_name',	i18n.__("admin.user.please_enter_your_last_name")).trim().notEmpty(),
		check('password').trim().optional({nullable: true}),
		check('confirm_password').trim().optional({nullable: true}),
		check('password', i18n.__("admin.user.password_length_should_be_max_20_character")).trim().isLength({max: 20 }),
		check('password', i18n.__("admin.user.password_length_should_be_minimum_6_character")).custom((value, {req})=>{
			if ((value.trim().length > 0) && (value.trim().length < 6) ) {
				return false;
			} 
			else {
				return true;
			}
		}),
		 
		check('confirm_password', i18n.__("admin.user.confirm_password_should_be_same_as_password")).custom((value, {req})=>{
			if (value === req.body.password) {
				return true;
			} 
			else {
				return false;
			}
		})
	], 
}
 
module.exports = validationObject;