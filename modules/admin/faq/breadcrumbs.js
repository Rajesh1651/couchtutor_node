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
	list 	:	[{name:anyObjectForLocale.__("admin.faq.listing_page_heading") ,url:'',icon:'picture_in_picture'}],
	
	edit	: 	[
					{name:anyObjectForLocale.__("admin.faq.listing_page_heading"), url:WEBSITE_ADMIN_URL+'faq',icon:'picture_in_picture'},
					{name:anyObjectForLocale.__("admin.faq.edit_page_heading"), url:'',icon:'mode_edit'}
				],
	
	add		: 	[
					{name:anyObjectForLocale.__("admin.faq.listing_page_heading"), url:WEBSITE_ADMIN_URL+'faq',icon:'picture_in_picture'},
					{name:anyObjectForLocale.__("admin.faq.add_page_heading"), url:'',icon:'add'}
				],
	
	view	: 	[
					{name:anyObjectForLocale.__("admin.faq.listing_page_heading"), url:WEBSITE_ADMIN_URL+'faq',icon:'picture_in_picture'},
					{name:anyObjectForLocale.__("admin.faq.view_page_heading"), url:'',icon:'find_in_page'}
				],	
};

module.exports = breadcrumbsObject;