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
	
		/**TEXT SETTING SECTION**/
		list : [{name:'dynamic_variable',url:'',icon:'text_format'}],
		
		edit : [
					{name:'dynamic_variable',url:WEBSITE_ADMIN_URL+'text_setting/{dynamic_variable}',icon:'text_format'},
					{name:anyObjectForLocale.__("admin.text_setting.edit_page_heading"),url:'',icon:'mode_edit'}
				],
				
		add : [
					{name:'dynamic_variable',url:WEBSITE_ADMIN_URL+'text_setting/{dynamic_variable}',icon:'text_format'},
					{name:anyObjectForLocale.__("admin.text_setting.add_page_heading"),url:'',icon:'add'}
				]
};

module.exports = breadcrumbsObject;