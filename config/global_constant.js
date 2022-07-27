PORT = 1123;
ADMIN_FOLDER_NAME = "admin";
FRONT_END_FOLDER_NAME = "front";
ADMIN_NAME = "admin";
FRONT_END_NAME = "/";
WEBSITE_URL = "http://learning.dev2.gipl.inet:" + PORT + "/";
WEBSITE_PUBLIC_PATH = WEBSITE_URL;
WEBSITE_ADMIN_URL = WEBSITE_URL + ADMIN_NAME + "/";
WEBSITE_ROOT_PATH = process.cwd() + "/";
WEBSITE_MODULES_PATH = WEBSITE_ROOT_PATH + "modules/" + FRONT_END_FOLDER_NAME + "/";
WEBSITE_LAYOUT_PATH = WEBSITE_ROOT_PATH + "modules/" + FRONT_END_FOLDER_NAME + "/layouts/";
WEBSITE_ADMIN_MODULES_PATH = WEBSITE_ROOT_PATH + "modules/" + ADMIN_FOLDER_NAME + "/";
WEBSITE_ADMIN_LAYOUT_PATH = WEBSITE_ROOT_PATH + "modules/" + ADMIN_FOLDER_NAME + "/layouts/";

WEBSITE_ADMIN_FILES_URL = WEBSITE_URL + ADMIN_FOLDER_NAME + "/";
WEBSITE_ADMIN_JS_PATH = WEBSITE_ADMIN_FILES_URL + "js/";
WEBSITE_ADMIN_JS_PAGE_PATH = WEBSITE_ADMIN_JS_PATH + "pages/";
WEBSITE_FILES_URL = WEBSITE_URL + FRONT_END_FOLDER_NAME + "/";
WEBSITE_IMG_URL = WEBSITE_FILES_URL + "images/";
WEBSITE_CSS_PATH = WEBSITE_FILES_URL + "css/";
WEBSITE_JS_PATH = WEBSITE_FILES_URL + "js/";
WEBSITE_JS_PLUGIN_PATH = WEBSITE_FILES_URL + "plugins/";
WEBSITE_ADMIN_JS_PLUGIN_PATH = WEBSITE_ADMIN_FILES_URL + "plugins/";
WEBSITE_ADMIN_CSS_PATH = WEBSITE_ADMIN_FILES_URL + "css/";
WEBSITE_PUBLIC_UPLOADS_PATH = WEBSITE_PUBLIC_PATH + FRONT_END_FOLDER_NAME + "/uploads/";
WEBSITE_UPLOADS_ROOT_PATH = WEBSITE_ROOT_PATH + "public/" + FRONT_END_FOLDER_NAME + "/uploads/";
WEBSITE_LOCALE_ROOT_PATH = WEBSITE_ROOT_PATH + "locales";

/** For User images file directory path and url*/
USERS_FILE_PATH = WEBSITE_UPLOADS_ROOT_PATH + "user/";
USERS_URL = WEBSITE_PUBLIC_UPLOADS_PATH + "user/";

CMS_FILE_PATH = WEBSITE_UPLOADS_ROOT_PATH + "cms/";
CMS_URL = WEBSITE_PUBLIC_UPLOADS_PATH + "cms/";


BLOG_FILE_PATH = WEBSITE_UPLOADS_ROOT_PATH + "blogs/";
BLOG_URL = WEBSITE_PUBLIC_UPLOADS_PATH + "blogs/";


SLIDER_FILE_PATH = WEBSITE_UPLOADS_ROOT_PATH + "slider/";
SLIDER_URL = WEBSITE_PUBLIC_UPLOADS_PATH + "slider/";

MASTERS_FILE_PATH = WEBSITE_UPLOADS_ROOT_PATH + "masters/";
MASTERS_URL = WEBSITE_PUBLIC_UPLOADS_PATH + "masters/";


SUBJECT_FILE_PATH = WEBSITE_UPLOADS_ROOT_PATH + "subjects/";
SUBJECT_URL = WEBSITE_PUBLIC_UPLOADS_PATH + "subjects/";



ACTIVE = 1;
INACTIVE = 0;
DEACTIVE = 0;
VERIFIED = 1;
NOT_VERIFIED = 0;
DELETED = 1;
NOT_DELETED = 0;
NOT_SEEN = 0;
SEEN = 1;
NOT_READ = 0;
READ = 1;
SENT = 1;
NOT_SENT = 0;
SHOWN = 1;
NOT_SHOWN = 0;
NOT_REGISTER = 0;
REGISTER = 1;
NOT_VISIBLE = 0;
VISIBLE = 1;
NOT_AVAILABLE = 0;
AVAILABLE = 1;
REJECTED = 2;
OFFLINE = 0;
ONLINE = 1;
UNBLOCK = 0;

/**Constant for user status **/
USER_STATUS_PENDING = "pending";
USER_STATUS_APPROVED = "approved";
USER_STATUS_REJECTED = "rejected";
USER_STATUS_SUBMITED = "submited";


/** Type of Flash messages */
STATUS_SUCCESS = "success";
STATUS_ERROR = "error";
ACTIVE_INACTIVE_STATUS = "active_inactive";
DEFAULT_RANDOM_NUMBER_LENGTH = 6;

SUPER_ADMIN_ROLE_ID = '5b6bc8111dd6a1219e632b03';
FRONT_USER_ROLE_ID = 2;

ADMIN_LISTING_LIMIT = 10;
FRONT_LISTING_LIMIT = 10;



/** Gender type*/
MALE = "male";
FEMALE = "female";
GENDER_OTHER = "other";

GENDER_DROPDOWN = {};
GENDER_DROPDOWN[MALE] = "Male";
GENDER_DROPDOWN[FEMALE] = "Female";
GENDER_DROPDOWN[GENDER_OTHER] = "Other";

/** DISCOUNT_TYPE type*/

DISCOUNT_TYPE = {};
DISCOUNT_TYPE['fixed'] = "fixed";
DISCOUNT_TYPE['percentage'] = "percentage";


/** USAGE_LIMIT type*/

USAGE_LIMIT = [
	{
		value: 1,
		name: "Only 1 time",		
	},
	{
		value: 2,
		name: "Multiple time",		
	}
];





/** Datatable configurations **/
SORT_DESC = -1;
SORT_ASC = 1;
DEFAULT_SKIP = 0;


/** Upload image configurations*/
ALLOWED_IMAGE_EXTENSIONS = ["jpg", "jpeg", "png"];
ALLOWED_IMAGE_ERROR_MESSAGE = "Please select valid file, Valid file extensions are " + ALLOWED_IMAGE_EXTENSIONS.join(", ") + ".";

ALLOWED_IMAGE_SIZE = 2 * 1024 * 1024;
ALLOWED_IMAGE_SIZE_ERROR_MESSAGE = "Valid file size is " + ALLOWED_IMAGE_SIZE + ".";

ALLOWED_IMAGE_MIME_EXTENSIONS = ["image/jpg", "image/jpeg", "image/png"];
ALLOWED_IMAGE_MIME_ERROR_MESSAGE = "Please select valid mime type, Valid mime types are " + ALLOWED_IMAGE_MIME_EXTENSIONS.join(", ") + ".";
IMAGE_RESOLUTION = "1202*424";

ALLOWED_ADMIN_TO_SET_COOKIE = DEACTIVE;


SUBJECT_IMAGE_EXTENSION = ["jpg", "jpeg", "png", "svg"];
SUBJECT_IMAGE_ERROR_MESSAGE = "Please select valid file, Valid file extensions are " + SUBJECT_IMAGE_EXTENSION.join(", ") + ".";

RESUME_EXTENSION = ["pdf","doc","docx"];


IMAGE_UPLOAD_FILE_MAX_SIZE_TWO = 2;


/** Not allowed html tags list*/
NOT_ALLOWED_TAGS_XSS = [/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*/gi];


CURRENTDATE_START_DATE_FORMAT = "yyyy-mm-dd 00:00:00";
CURRENTDATE_END_DATE_FORMAT = "yyyy-mm-dd 23:59:59";
BCRYPT_PASSWORD_SALT_ROUNDS = 1;
DEFAULT_COUNTRY_CODE = "+91";

/** Urls of commonly used images */
NO_IMAGE_AVAILABLE = WEBSITE_PUBLIC_UPLOADS_PATH + "no-image.png";
ADD_PROFILE_IMAGE_ICON = WEBSITE_PUBLIC_UPLOADS_PATH + 'no-image.png';
IMAGE_FIELD_NAME = "full_image_path";


/**Date formats used in datetange picker	 */
DISPLAY_DATE_FORMAT = "DD MMM, YYYY";
DATEPICKER_DATE_FORMAT = "DD/MM/YYYY";
DATEPICKER_START_DATE_FORMAT = "YYYY-MM-DD 00:00:00";
DATEPICKER_END_DATE_FORMAT = "YYYY-MM-DD 23:59:59";
DATE_RANGE_DISPLAY_FORMAT_FOR_START_DATE = "YYYY-MM-DD HH:mm:00";
DATE_RANGE_DISPLAY_FORMAT_FOR_END_DATE = "YYYY-MM-DD HH:mm:59";
DATE_RANGE_DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm";
DATE_RANGE_DATE_FORMAT = "YYYY-MM-DD";
DATEPICKER_TIME_FORMAT = "HH:mm";
DEFAULT_TIME_ZONE = "Asia/Kolkata";


DISPLAY_DATE_TIME_FORMAT="d/m/Y h:i A";
MANAGE_SLOT_TIME_FORMAT='H:i';
//MANAGE_SLOT_TIME_FORMAT_AM_PM='h:i A';



SESSION_SLOT_INTERVAL= 86400;
SLOTE_INTERVAL_TIME= 3600;



TYPE_ACTIVE = "active";
TYPE_DEACTIVE = "deactive";

/**Search Status for users **/
SEARCHING_ACTIVE = 1;
SEARCHING_DEACTIVE = 2;
SEARCHING_VERIFIED = 3;
SEARCHING_NOT_VERIFIED = 4;

/** Search status for user **/
USER_STATUS_SEARCH_DROPDOWN = [
	{
		status_id: SEARCHING_ACTIVE,
		status_name: "Active",
		status_type: TYPE_ACTIVE
	},
	{
		status_id: SEARCHING_DEACTIVE,
		status_name: "Inactive",
		status_type: TYPE_DEACTIVE
	},
	{
		status_id: SEARCHING_VERIFIED,
		status_name: "Verified"
	},
	{
		status_id: SEARCHING_NOT_VERIFIED,
		status_name: "Not Verified"
	}
];


/** Search status for user **/
STATUS_SEARCH_DROPDOWN = [
	{
		status_id: SEARCHING_ACTIVE,
		status_name: "Active",
		status_type: TYPE_ACTIVE
	},
	{
		status_id: SEARCHING_DEACTIVE,
		status_name: "Inactive",
		status_type: TYPE_DEACTIVE
	}
];


/** Setting validate type dropdown **/
SETTINGS_VALIDATE_TYPE_DROPDOWN = [
	{
		input_id: "number",
		input_name: "Number"
	},
	{
		input_id: "float",
		input_name: "Float"
	},
];

/** Setting input type dropdown **/
SETTING_INPUT_TYPE_DROPDOWN = [
	{
		input_id: "text",
		input_name: "Text"
	},
	{
		input_id: "textarea",
		input_name: "Textarea"
	}
];


/**Contact us message max length */
CONTACT_MESSAGE_TEXT_LENGTH = 200;
REJECTION_MESSAGE_TEXT_LENGTH = 200;
CAUSES_MESSAGE_TEXT_LENGTH = 200;

/** to ignore Case sensitive searching/sorting in mongo collections  **/
COLLATION_VALUE = { locale: "en_US", caseLevel: true };


/** Text Setting types*/
TEXT_SETTINGS_ADMIN = "admin";
TEXT_SETTINGS_FRONT = "front";

/** Name of text setting types*/
TEXT_SETTINGS_NAME = {};
TEXT_SETTINGS_NAME[TEXT_SETTINGS_ADMIN] = "Admin Text Settings";
TEXT_SETTINGS_NAME[TEXT_SETTINGS_FRONT] = "Front Text Settings";

/** Text Setting types*/
TEXT_SEARCH_DROPDOWN = [
	{ status_id: TEXT_SETTINGS_ADMIN, status_name: "Admin" },
	{ status_id: TEXT_SETTINGS_FRONT, status_name: "Front" },
];

LANGUAGE_CODES = {};
/** English language configurations */
ENGLISH_LANGUAGE_MONGO_ID = "5a3a13238481824b077b23ca";
ENGLISH_LANGUAGE_CODE = "en";
ENGLISH_LANGUAGE_FOLDER_CODE = "en";
LANGUAGE_CODES[ENGLISH_LANGUAGE_MONGO_ID] = ENGLISH_LANGUAGE_CODE;
LANGUAGE_FOLDER_CODE_ARRAY = ['en']

/** Default language configurations */
DEFAULT_LANGUAGE_MONGO_ID = ENGLISH_LANGUAGE_MONGO_ID;
DEFAULT_LANGUAGE_FOLDER_CODE = ENGLISH_LANGUAGE_FOLDER_CODE;
DEFAULT_LANGUAGE_CODE = ENGLISH_LANGUAGE_CODE;

LANGUAGES_IN_SYSTEM = [
	ENGLISH_LANGUAGE_MONGO_ID,
];


MASTER_TYPES_NAME = []
MASTER_TYPES_NAME['grades'] = true;
MASTER_TYPES_NAME['language'] = true;
MASTER_TYPES_NAME['area_of_expertise'] = true;


MASTER_TYPES_NAME['faq_category'] = true;
DEFAULT_MASTER_TYPE = 'faq_category';


MASTER_TYPES_WITH_IMAGE = ['faq_category'];


USERS_COLLECTION = 'users';
CMS_PAGE_COLLECTION = 'cms_pages';
TEXT_SETTING_COLLECTION = 'text_settings';
ADMIN_MODULES_COLLECTION = 'admin_modules';
BLOG_COLLECTION = 'blogs';
FAQ_COLLECTION = 'faqs';
CONTACTS_COLLECTION = 'contacts';
SLIDER_COLLECTION = 'sliders';
SETTING_COLLECTION = 'settings';
LANGUAGES_COLLECTION = 'languages';
BLOCKS_COLLECTION = 'blocks';
MASTERS_COLLECTION = 'masters';
SUBJECT_COLLECTION = 'subjects';
NEWSLETTER_COLLECTION = 'newsletters';
EMAIL_ACTION_COLLECTION = 'email_actions';
EMAIL_TEMPLATE_COLLECTION = 'email_templates';
EMAIL_LOG_COLLECTION = 'email_logs';
COMMENTS_COLLECTION = 'comments';
PLANS_COLLECTION = 'plans';
COUPONS_COLLECTION = 'coupons';
MESSAGES_COLLECTION = 'messages';


COUNTRIES_COLLECTION = 'countries';
STATES_COLLECTION = 'states';
CITIES_COLLECTION = 'cities';
COUNTRY_CODE_COLLECTION = 'country_code';


TUTOR_PROFILE_STATUS_COLLECTION = 'tutor_profile_status';
TUTOR_BASIC_DETAILS_COLLECTION = 'tutor_basic_details';
TUTOR_LANGUAGE_COLLECTION = 'tutor_languages';
TUTOR_AREA_OF_EXPERTISE_COLLECTION = 'tutor_area_of_expertise';
TUTOR_GRADES_COLLECTION = 'tutor_grades';
TUTOR_REFERANCE_COLLECTION = 'tutor_references';
TUTOR_W8_CONTRACTOR_FORM_COLLECTION = 'user_foreign_contractors';
TUTOR_EDUCATION_COLLECTION = 'tutor_education';


STUDENT_ROLE_ID = 3;
TUTOR_ROLE_ID = 4;

STUDENT_ROLE_SLUG = "student";
TUTOR_ROLE_SLUG = "tutor";


/**Front end users type */

FRONTEND_USERS_TYPE = {};
FRONTEND_USERS_TYPE[STUDENT_ROLE_SLUG] = "Student";
FRONTEND_USERS_TYPE[TUTOR_ROLE_SLUG] = "Tutor";



STUDENT_PLAN = "student-plans";
ORGANISATION_PLAN = "organisation-plans";


/* DURATION TYPE */
DURATION_TYPE_DROPDOWN = {};
DURATION_TYPE_DROPDOWN['days'] = "Day(s)";
DURATION_TYPE_DROPDOWN['months'] = "Month(s)";
DURATION_TYPE_DROPDOWN['years'] = "Year(s)";



/** RESUME UPLOAD TYPE dropdown **/
RESUME_UPLOAD_TYPE = [
	{
		key: 1,
		value: "Enter your resume url"
	},
	{
		key: 2,
		value: "Upload your resume document"
	}
];




DATE_RANGE_CANCEL_LABEL = "aaaa";
JS_DATE_FORMAT = 'DD-MM-YYYY';

ONLY_ONE_TIME_USEAGE_LIMIT = 1;
N_TIME_USEAGE_LIMIT = 2;

TUTOR_REFERENCES_COUNT = 3;

COUPON_DESCRIPTION_LENGTH = 100;
TUTOR_INTRODUCTION_LENGTH = 500;

MESSAGE_SUBJECT_MAX_LENGTH = 150;
MESSAGE_MAX_LENGTH = 300;


RESUME_UPLOAD_FILE_MAX_SIZE_TWO = 10;

WEEK_DAYS = {};
WEEK_DAYS[1] = "Monday";
WEEK_DAYS[2] = "Tuesday";
WEEK_DAYS[3] = "Wednesday";
WEEK_DAYS[4] = "Thursday";
WEEK_DAYS[5] = "Friday";
WEEK_DAYS[6] = "Saturday";
WEEK_DAYS[7] = "Sunday";



