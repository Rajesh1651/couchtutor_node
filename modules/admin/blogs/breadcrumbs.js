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
	list 	:	[{name:anyObjectForLocale.__("admin.blog.listing_page_heading") ,url:'',icon:'picture_in_picture'}],
	
	edit	: 	[
					{name:anyObjectForLocale.__("admin.blog.listing_page_heading"), url:WEBSITE_ADMIN_URL+'blogs',icon:'picture_in_picture'},
					{name:anyObjectForLocale.__("admin.blog.edit_page_heading"), url:'',icon:'mode_edit'}
				],
	
	add		: 	[
					{name:anyObjectForLocale.__("admin.blog.listing_page_heading"), url:WEBSITE_ADMIN_URL+'blogs',icon:'picture_in_picture'},
					{name:anyObjectForLocale.__("admin.blog.add_page_heading"), url:'',icon:'add'}
				],
	
	view	: 	[
					{name:anyObjectForLocale.__("admin.blog.listing_page_heading"), url:WEBSITE_ADMIN_URL+'blogs',icon:'picture_in_picture'},
					{name:anyObjectForLocale.__("admin.blog.view_page_heading"), url:'',icon:'find_in_page'}
				],	

 comment_list 	:	[{name:anyObjectForLocale.__("admin.comment.listing_page_heading") ,url:'',icon:'picture_in_picture'}],
};

module.exports = breadcrumbsObject;