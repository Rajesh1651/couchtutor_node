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
	
	validateForLogin: [
		check('username', anyObjectForLocale.__("admin.user.please_enter_email")).trim().notEmpty(),
		check('username', anyObjectForLocale.__("admin.user.please_enter_valid_email_address")).isEmail(),
		check('password', anyObjectForLocale.__("admin.user.please_enter_password")).trim().notEmpty()
	],
	

	validateForEditProfile: [
		check('full_name', anyObjectForLocale.__("admin.user.please_enter_full_name")).trim().notEmpty(),
		
		check('email',		anyObjectForLocale.__("admin.user.please_enter_email")).trim().notEmpty(),
		check('email',		anyObjectForLocale.__("admin.user.please_enter_valid_email_address")).isEmail(),
		check('email', 		anyObjectForLocale.__("admin.user.your_email_id_is_already_exist")).custom((value, {req})=>{	
			return new Promise((resolve, reject) => {
				const users	=	db.collection(USERS_COLLECTION);
				var userId	=	req.session.user._id;
				
				users.findOne({email : value, _id : {$ne:ObjectId(userId)}}, function(err, user){
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
		
		check('password').trim().optional({nullable: true}),
		check('old_password').trim().optional({nullable: true}),
		check('confirm_password').trim().optional({nullable: true}),
		
		check('password', anyObjectForLocale.__("admin.user.password_length_should_be_max_20_character")).trim().isLength({max: 20 }),
		check('password', anyObjectForLocale.__("admin.user.password_length_should_be_minimum_6_character")).custom((value, {req})=>{
			if ((value.trim().length > 0) && (value.trim().length < 6) ) {
				return false;
			} 
			else {
				return true;
			}
		}),
		 
		check('confirm_password', anyObjectForLocale.__("admin.user.confirm_password_should_be_same_as_password")).custom((value, {req})=>{
			if (value === req.body.password) {
				return true;
			} 
			else {
				return false;
			}
		})
	], 
	
	
	validateForForgotPassword: [
		check('email', anyObjectForLocale.__("admin.user.please_enter_email")).trim().notEmpty(),
		check('email', anyObjectForLocale.__("admin.user.please_enter_valid_email_address")).isEmail()
	],



	
	
	validateForAddUser : [
		check('first_name',	anyObjectForLocale.__("admin.user.please_enter_name")).trim().notEmpty(),
		check('last_name',	anyObjectForLocale.__("admin.user.please_enter_name")).trim().notEmpty(),
		check('gender',		anyObjectForLocale.__("admin.user.please_select_gender")).trim().notEmpty(),
		check('dateofbirth',anyObjectForLocale.__("admin.user.please_select_date_of_birth")).trim().notEmpty(),
		check('email',		anyObjectForLocale.__("admin.user.please_enter_email")).trim().notEmpty(),
		check('email',		anyObjectForLocale.__("admin.user.please_enter_valid_email_address")).isEmail(),
		check('email', 		anyObjectForLocale.__("admin.user.your_email_id_is_already_exist")).custom((value, {req})=>{	
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
		check('mobile_number', anyObjectForLocale.__("admin.user.invalid_phone_number")).trim().notEmpty(),
		check('mobile_number', anyObjectForLocale.__("admin.user.invalid_phone_number")).trim().isNumeric(),
		check('mobile_number', anyObjectForLocale.__("admin.user.invalid_phone_number")).trim().isLength({min: 10 }),
		*/
		check('phone_number',		anyObjectForLocale.__("admin.user.invalid_phone_number")).trim().notEmpty(),
		check('password', 			anyObjectForLocale.__("admin.user.please_enter_password")).trim().notEmpty(),
		check('password', 			anyObjectForLocale.__("admin.user.password_length_should_be_minimum_6_character")).trim().isLength({min: 6 }),
		check('password', 			anyObjectForLocale.__("admin.user.password_length_should_be_max_20_character")).trim().isLength({max: 20 }),
		check('confirm_password', 	anyObjectForLocale.__("admin.user.please_enter_confirm_password")).trim().notEmpty(),
		check('confirm_password', 	anyObjectForLocale.__("admin.user.confirm_password_should_be_same_as_password")).custom((value, {req})=>{
			if (value === req.body.password) {
				return true;
			} 
			else {
				return false;
			}
		}),
		
		
		check('profile_image', ALLOWED_IMAGE_ERROR_MESSAGE).custom((val, {req}) => {
            var filename 			= 	(req.files && req.files.profile_image.name) ? req.files.profile_image.name : '';
			var allowedExtensions 	= 	ALLOWED_IMAGE_EXTENSIONS;
			var extension 			= 	(path.extname(filename)).toLowerCase();
			extension				= 	extension.replace(".", "");
			if(!(req.params.id && (filename == '')) )
				var result		=	(allowedExtensions.indexOf(extension) == -1) ? false : true;
			else
				var result		=	true;
			
			return result; 
		}),
		
		
		check('profile_image', ALLOWED_IMAGE_SIZE_ERROR_MESSAGE).custom((val, {req}) => {
            var filesize	= 	(req.files && req.files.profile_image.size) ? req.files.profile_image.size : 0;
			
			if(!(req.params.id && (filesize == 0)) )
				var result		=	(ALLOWED_IMAGE_SIZE < filesize) ? false : true;
			else
				var result		=	true;
			
			return result;
		})
	],
	































	








	
	
	validateForResetPassword: [
		check('password', anyObjectForLocale.__("admin.user.please_enter_password")).trim().notEmpty(),
		check('password', anyObjectForLocale.__("admin.user.password_length_should_be_minimum_6_character")).trim().isLength({min: 6 }),
		check('password', anyObjectForLocale.__("admin.user.password_length_should_be_max_20_character")).trim().isLength({max: 20 }),
		check('confirm_password', anyObjectForLocale.__("admin.user.please_enter_confirm_password")).trim().notEmpty(),
		check('confirm_password', anyObjectForLocale.__("admin.user.confirm_password_should_be_same_as_password")).custom((value, {req})=>{
			if (value === req.body.password) {
				return true;
			} 
			else {
				return false;
			}
		})
	], 
	
	

	
	
	validateForEditUser : [
		check('first_name',	anyObjectForLocale.__("admin.user.please_enter_name")).trim().notEmpty(),
		check('last_name',	anyObjectForLocale.__("admin.user.please_enter_name")).trim().notEmpty(),
		check('gender',		anyObjectForLocale.__("admin.user.please_select_gender")).trim().notEmpty(),
		check('dateofbirth',anyObjectForLocale.__("admin.user.please_select_date_of_birth")).trim().notEmpty(),

		check('email',		anyObjectForLocale.__("admin.user.please_enter_email")).trim().notEmpty(),
		check('email',		anyObjectForLocale.__("admin.user.please_enter_valid_email_address")).isEmail(),
		check('email', 		anyObjectForLocale.__("admin.user.your_email_id_is_already_exist")).custom((value, {req})=>{	
			return new Promise((resolve, reject) => {
				const users	=	db.collection(USERS_COLLECTION);
				var userId	=	(req.params.id) ? req.params.id : null;
				
				users.findOne({email : value, _id : {$ne:ObjectId(userId)}}, function(err, user){
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
		check('mobile_number', anyObjectForLocale.__("admin.user.invalid_phone_number")).trim().notEmpty(),
		check('mobile_number', anyObjectForLocale.__("admin.user.invalid_phone_number")).trim().isNumeric(),
		check('mobile_number', anyObjectForLocale.__("admin.user.invalid_phone_number")).trim().isLength({min: 10 }),
		*/
		/*
		check('mobile_number',	anyObjectForLocale.__("admin.user.invalid_phone_number")).trim().notEmpty().isNumeric().isLength({min: 10, max: 10 }),
		*/
		
		check('phone_number', 		anyObjectForLocale.__("admin.user.your_mobile_number_is_already_exist")).custom((value, {req})=>{	
			return new Promise((resolve, reject) => {
				const users	=	db.collection(USERS_COLLECTION);
				var userId	=	(req.params.id) ? req.params.id : null;
				
				users.findOne({mobile_number : value, _id : {$ne:ObjectId(userId)}}, function(err, user){
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
		
		
		
		check('password').trim().optional({nullable: true}),
		check('confirm_password').trim().optional({nullable: true}),		
		check('password', anyObjectForLocale.__("admin.user.password_length_should_be_max_20_character")).trim().isLength({max: 20 }),
		check('password', anyObjectForLocale.__("admin.user.password_length_should_be_minimum_6_character")).custom((value, {req})=>{
			if ((value.trim().length > 0) && (value.trim().length < 6) ) {
				return false;
			} 
			else {
				return true;
			}
		}),
		  
		check('confirm_password', anyObjectForLocale.__("admin.user.confirm_password_should_be_same_as_password")).custom((value, {req})=>{
			if (value === req.body.password) {
				return true;
			} 
			else {
				return false;
			}
		}),
		
		
		check('profile_image', ALLOWED_IMAGE_ERROR_MESSAGE).custom((val, {req}) => {
            var filename 			= 	(req.files && req.files.profile_image.name) ? req.files.profile_image.name : '';
			var allowedExtensions 	= 	ALLOWED_IMAGE_EXTENSIONS;
			var extension 			= 	(path.extname(filename)).toLowerCase();
			extension				= 	extension.replace(".", "");
			
			if(!(req.params.id && (filename == '')) )
				var result		=	(allowedExtensions.indexOf(extension) == -1) ? false : true;
			else
				var result		=	true;
			
			return result; 
		}),
		
		
		check('profile_image', ALLOWED_IMAGE_SIZE_ERROR_MESSAGE).custom((val, {req}) => {
            var filesize	= 	(req.files && req.files.profile_image.size) ? req.files.profile_image.size : 0;
			
			if(!(req.params.id && (filesize == 0)) )
				var result		=	(ALLOWED_IMAGE_SIZE < filesize) ? false : true;
			else
				var result		=	true;
			
			return result;
		})
	],
	
	
	
	validateProfileRejection: [
		check('rejection_message', anyObjectForLocale.__("admin.user.please_enter_rejection_message")).trim().notEmpty(),
		//check('rejection_message', anyObjectForLocale.__("admin.user.rejection_message_length_should_be_max_20_character")).trim().isLength({max: 20 })
	]
	
}
 
module.exports = validationObject;