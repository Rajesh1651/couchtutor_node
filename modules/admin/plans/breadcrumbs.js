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

	list 	:	[{name:anyObjectForLocale.__("admin.plans.listing_page_heading_dynamic_variable") ,url:'',icon:'picture_in_picture'}],
	
	edit	: 	[
					{name:anyObjectForLocale.__("admin.plans.listing_page_heading_dynamic_variable"), url:WEBSITE_ADMIN_URL+'plans/{dynamic_variable}' ,icon:'picture_in_picture'},
					{name:anyObjectForLocale.__("admin.plans.edit_page_heading"), url:'',icon:'mode_edit'}
				],
	
	add		: 	[
					{name:anyObjectForLocale.__("admin.plans.listing_page_heading_dynamic_variable"), url:WEBSITE_ADMIN_URL+'plans/{dynamic_variable}',icon:'picture_in_picture'},
					{name:anyObjectForLocale.__("admin.plans.add_page_headings"), url:'',icon:'add'}
				],
	
				/*
	view	: 	[
					{name:anyObjectForLocale.__("admin.plans.listing_page_heading_dynamic_variable"), url:WEBSITE_ADMIN_URL+'plans/{dynamic_variable}',icon:'picture_in_picture'},
					{name:anyObjectForLocale.__("admin.plans.view_page_heading"), url:'',icon:'find_in_page'}
				],		
		*/		


};


module.exports = breadcrumbsObject;