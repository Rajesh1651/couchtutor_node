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


	validateForSignupTutor: [
		check('first_name', i18n.__("admin.user.please_enter_your_first_name")).trim().notEmpty(),
		check('last_name', i18n.__("admin.user.please_enter_your_last_name")).trim().notEmpty(),
		check('email', i18n.__("admin.user.please_enter_email")).trim().notEmpty(),
		check('email', i18n.__("admin.user.please_enter_valid_email_address")).isEmail(),
		check('email', i18n.__("admin.user.your_email_id_is_already_exist")).custom((value, { req }) => {
			return new Promise((resolve, reject) => {
				const users = db.collection(USERS_COLLECTION);
				users.findOne({ email: value }, function (err, user) {
					if (err) {
						reject(false);
					}

					if (Boolean(user)) {
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
		check('phone_number', i18n.__("admin.user.invalid_phone_number")).trim().notEmpty(),
		check('password', i18n.__("admin.user.please_enter_password")).trim().notEmpty(),
		check('password', i18n.__("admin.user.password_length_should_be_minimum_6_character")).trim().isLength({ min: 6 }),
		check('password', i18n.__("admin.user.password_length_should_be_max_20_character")).trim().isLength({ max: 20 }),
		check('confirm_password', i18n.__("admin.user.please_enter_confirm_password")).trim().notEmpty(),
		check('confirm_password', i18n.__("admin.user.confirm_password_should_be_same_as_password")).custom((value, { req }) => {
			if (value === req.body.password) {
				return true;
			}
			else {
				return false;
			}
		}),
		check('termsncond', i18n.__("admin.user.please_check_terms_and_conditions")).trim().notEmpty(),
	],




	validateForSignupStudent: [
		check('first_name', i18n.__("admin.user.please_enter_your_first_name")).trim().notEmpty(),
		check('last_name', i18n.__("admin.user.please_enter_your_last_name")).trim().notEmpty(),
		check('email', i18n.__("admin.user.please_enter_email")).trim().notEmpty(),
		check('email', i18n.__("admin.user.please_enter_valid_email_address")).isEmail(),
		check('email', i18n.__("admin.user.your_email_id_is_already_exist")).custom((value, { req }) => {
			return new Promise((resolve, reject) => {
				const users = db.collection(USERS_COLLECTION);
				users.findOne({ email: value }, function (err, user) {
					if (err) {
						reject(false);
					}

					if (Boolean(user)) {
						reject(false);
					}

					resolve(true);
				});
			});
		}),


		check('phone_number', i18n.__("admin.user.invalid_phone_number")).trim().notEmpty(),
		check('password', i18n.__("admin.user.please_enter_password")).trim().notEmpty(),
		check('password', i18n.__("admin.user.password_length_should_be_minimum_6_character")).trim().isLength({ min: 6 }),
		check('password', i18n.__("admin.user.password_length_should_be_max_20_character")).trim().isLength({ max: 20 }),
		check('confirm_password', i18n.__("admin.user.please_enter_confirm_password")).trim().notEmpty(),
		check('confirm_password', i18n.__("admin.user.confirm_password_should_be_same_as_password")).custom((value, { req }) => {
			if (value === req.body.password) {
				return true;
			}
			else {
				return false;
			}
		}),
		check('student_termsncond', i18n.__("admin.user.please_check_terms_and_conditions")).trim().notEmpty(),
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
		check('password', i18n.__("admin.user.password_length_should_be_minimum_6_character")).trim().isLength({ min: 6 }),
		check('password', i18n.__("admin.user.password_length_should_be_max_20_character")).trim().isLength({ max: 20 }),
		check('confirm_password', i18n.__("admin.user.please_enter_confirm_password")).trim().notEmpty(),
		check('confirm_password', i18n.__("admin.user.confirm_password_should_be_same_as_password")).custom((value, { req }) => {
			if (value === req.body.password) {
				return true;
			}
			else {
				return false;
			}
		})
	],







	validateForEditProfile: [
		check('first_name', i18n.__("admin.user.please_enter_your_first_name")).trim().notEmpty(),
		check('last_name', i18n.__("admin.user.please_enter_your_last_name")).trim().notEmpty(),
		check('password').trim().optional({ nullable: true }),
		check('confirm_password').trim().optional({ nullable: true }),
		check('password', i18n.__("admin.user.password_length_should_be_max_20_character")).trim().isLength({ max: 20 }),
		check('password', i18n.__("admin.user.password_length_should_be_minimum_6_character")).custom((value, { req }) => {
			if ((value.trim().length > 0) && (value.trim().length < 6)) {
				return false;
			}
			else {
				return true;
			}
		}),

		check('confirm_password', i18n.__("admin.user.confirm_password_should_be_same_as_password")).custom((value, { req }) => {
			if (value === req.body.password) {
				return true;
			}
			else {
				return false;
			}
		})
	],


	validateForEditAdvanceProfile: [
		check('brief_intro', i18n.__("admin.user.please_enter_brief_intro")).trim().notEmpty(),
		check('tutoring_benefits', i18n.__("admin.user.please_enter_tutoring_benefits")).trim().notEmpty(),
		check('hobbies', i18n.__("admin.user.please_enter_hobbies")).trim().notEmpty(),
		check('tutor_languages', i18n.__("admin.user.please_enter_tutor_languages")).trim().notEmpty(),
		check('tutor_expertise', i18n.__("admin.user.please_enter_tutor_expertise")).trim().notEmpty(),
		check('tutor_grades', i18n.__("admin.user.please_enter_tutor_grades")).trim().notEmpty(),

	],


	validateForFrontForeignContractorForm: [
		check('name', i18n.__("admin.user.please_enter_name")).trim().notEmpty(),
		check('citizenship', i18n.__("admin.user.please_enter_citizenship")).trim().notEmpty(),
		check('address', i18n.__("admin.user.please_enter_address")).trim().notEmpty(),
		check('country_id', i18n.__("admin.user.please_enter_country_name")).trim().notEmpty(),
		check('state_id', i18n.__("admin.user.please_enter_state_name")).trim().notEmpty(),
		check('city_id', i18n.__("admin.user.please_enter_city_name")).trim().notEmpty(),
		check('tin_number', i18n.__("admin.user.please_enter_tin_number")).trim().notEmpty(),
		check('foreign_tax_identification_number', i18n.__("admin.user.please_enter_foreign_tax_identification_number")).trim().notEmpty(),


	],


	validateForupdateProfileImageForm: [
		check('image', ALLOWED_IMAGE_ERROR_MESSAGE).custom((val, { req }) => {
			var filename = (req.files && req.files.image.name) ? req.files.image.name : '';
			var allowedExtensions = ALLOWED_IMAGE_EXTENSIONS;
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
				var result = (ALLOWED_IMAGE_EXTENSIONS < filesize) ? false : true;
			else
				var result = true;

			return result;
		})
	],



	validateForTutorAddEducation: [

		check('university_name', i18n.__("admin.user.please_enter_university_name")).trim().notEmpty(),
		check('major', i18n.__("admin.user.please_enter_major")).trim().notEmpty(),
		check('cumulative_gpa', i18n.__("admin.user.please_enter_cumulative_gpa")).trim().notEmpty(),
		check('degree', i18n.__("admin.user.please_enter_degree")).trim().notEmpty(),
		check('start_date', i18n.__("admin.user.please_enter_start_date")).trim().notEmpty(),
		check('end_date').trim().optional({ nullable: true }),
		check('end_date', i18n.__("admin.user.please_enter_end_date")).custom((value, { req }) => {
			var is_current = (req.body.is_current) ? req.body.is_current : 0;

			if (!(req.body.is_current) && is_current == 0) {
				if (value == "") {
					return false;
				}
				else {
					return true;
				}
			}
			else {
				return true;
			}

		})

	],




	validateForUserUpdateEmail: [
		check('email', i18n.__("admin.user.please_enter_email")).trim().notEmpty(),
		check('email', i18n.__("admin.user.please_enter_valid_email_address")).isEmail(),		
	],

}

module.exports = validationObject;