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

	list 	:	[{name:'dynamic_variable',url:'',icon:'picture_in_picture'}],
	
	edit	: 	[	
					{name:'dynamic_variable',url:WEBSITE_ADMIN_URL+'masters/{dynamic_variable}',icon:'picture_in_picture'},
					{name:anyObjectForLocale.__("admin.system.edit"), url:'',icon:'mode_edit'}
				],
	
	add		: 	[
					{name:'dynamic_variable',url:WEBSITE_ADMIN_URL+'masters/{dynamic_variable}',icon:'picture_in_picture'},
					{name:anyObjectForLocale.__("admin.system.add_new"), url:'',icon:'add'}
				]
};

module.exports = breadcrumbsObject;