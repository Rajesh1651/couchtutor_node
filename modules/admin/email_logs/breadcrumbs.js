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


breadcrumbsObject = {
	list 	:	[{name:anyObjectForLocale.__("admin.email_logs.listing_page_heading") ,url:'',icon:'picture_in_picture'}],
	
	view	: 	[
					{name:anyObjectForLocale.__("admin.email_logs.listing_page_heading"), url:WEBSITE_ADMIN_URL+'email_logs',icon:'picture_in_picture'},
					{name:anyObjectForLocale.__("admin.email_logs.view_page_heading"), url:'',icon:'find_in_page'}
				],	
};

module.exports = breadcrumbsObject;