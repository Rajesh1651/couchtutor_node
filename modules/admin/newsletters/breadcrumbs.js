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
	list 	:	[{name:anyObjectForLocale.__("admin.newsletters.listing_page_heading") ,url:'',icon:'picture_in_picture'}],
	
		
};

module.exports = breadcrumbsObject;