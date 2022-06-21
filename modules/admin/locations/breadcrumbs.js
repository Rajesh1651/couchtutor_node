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
	list 	:	[{name:anyObjectForLocale.__("admin.countries.listing_page_heading") ,url:'',icon:'picture_in_picture'}],
	
	edit	: 	[{
					name:anyObjectForLocale.__("admin.countries.listing_page_heading"), 
					url:WEBSITE_ADMIN_URL+'locations/countries',
					icon:'picture_in_picture'
				},
				{
					name:anyObjectForLocale.__("admin.countries.edit_page_heading"), 
					url:'',
					icon:'mode_edit'
				}],
	
	add		: 	[{
					name:anyObjectForLocale.__("admin.countries.listing_page_heading"),
					url:WEBSITE_ADMIN_URL+'locations/countries',
					icon:'picture_in_picture'
				},
				{
					name:anyObjectForLocale.__("admin.countries.add_page_heading"),
					url:'',
					icon:'add'
				}],
 
				
	list_state 	:	[{
						name:anyObjectForLocale.__("admin.countries.listing_page_heading") ,
						url:WEBSITE_ADMIN_URL+'locations/countries',
						icon:'picture_in_picture'
					},
					{
						name:anyObjectForLocale.__("admin.states.listing_page_heading") ,
						url:'',
						icon:'picture_in_picture'
					}],			


	add_state	: 	[{
						name:anyObjectForLocale.__("admin.countries.listing_page_heading"),
						url:WEBSITE_ADMIN_URL+'locations/countries',
						icon:'picture_in_picture'
					},
					{
						name:anyObjectForLocale.__("admin.states.listing_page_heading"), 
						url:WEBSITE_ADMIN_URL+'locations/states/{dynamic_variable}',
						icon:'picture_in_picture'
					},
					{
						name:anyObjectForLocale.__("admin.states.add_page_heading"), 
						url:'',
						icon:'add'
					}],

	edit_state	: 	[{
						name:anyObjectForLocale.__("admin.countries.listing_page_heading"),
						url:WEBSITE_ADMIN_URL+'locations/countries',
						icon:'picture_in_picture'
					},
					{
						name:anyObjectForLocale.__("admin.states.listing_page_heading"), 
						url:WEBSITE_ADMIN_URL+'locations/states/{dynamic_variable}',
						icon:'picture_in_picture'
					},
					{
						name:anyObjectForLocale.__("admin.states.edit_page_heading"), 
						url:'',
						icon:'mode_edit'
					}],
	

	list_city 	:	[{
						name:anyObjectForLocale.__("admin.countries.listing_page_heading") ,
						url:WEBSITE_ADMIN_URL+'locations/countries',
						icon:'picture_in_picture'
					},
					{
						name:anyObjectForLocale.__("admin.states.listing_page_heading"), 
						url:WEBSITE_ADMIN_URL+'locations/states/{dynamic_variable}',
						icon:'picture_in_picture'
					},
					{
						name:anyObjectForLocale.__("admin.city.listing_page_heading") ,
						url:'',
						icon:'picture_in_picture'
					}],			


	add_city	: 	[{
						name:anyObjectForLocale.__("admin.countries.listing_page_heading"),
						url:WEBSITE_ADMIN_URL+'locations/countries',
						icon:'picture_in_picture'
					},
					{
						name:anyObjectForLocale.__("admin.states.listing_page_heading"), 
						url:WEBSITE_ADMIN_URL+'locations/states/{dynamic_variable2}',
						icon:'picture_in_picture'
					},
					{
						name:anyObjectForLocale.__("admin.city.listing_page_heading"), 
						url:WEBSITE_ADMIN_URL+'locations/cities/{dynamic_variable}',
						icon:'picture_in_picture'
					},
					{
						name:anyObjectForLocale.__("admin.states.add_page_heading"), 
						url:'',
						icon:'add'
					}],

	edit_city	: 	[{
						name:anyObjectForLocale.__("admin.countries.listing_page_heading"),
						url:WEBSITE_ADMIN_URL+'locations/countries',
						icon:'picture_in_picture'
					},
					{
						name:anyObjectForLocale.__("admin.states.listing_page_heading"), 
						url:WEBSITE_ADMIN_URL+'locations/states/{dynamic_variable2}',
						icon:'picture_in_picture'
					},
					{
						name:anyObjectForLocale.__("admin.city.listing_page_heading"), 
						url:WEBSITE_ADMIN_URL+'locations/cities/{dynamic_variable}',
						icon:'picture_in_picture'
					},
					{
						name:anyObjectForLocale.__("admin.city.edit_page_heading"), 
						url:'',
						icon:'mode_edit'
					}],
};

module.exports = breadcrumbsObject;