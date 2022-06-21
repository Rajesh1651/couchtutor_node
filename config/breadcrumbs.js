BREADCRUMBS = {
	/** Admin Breadcrumbs */
		/** DASHBOARD SECTION**/
		'admin/dashboard' : [{name:'Dashboard',url:'',icon:'dashboard'}],

		/**EDIT PROFILE SECTION**/
		'admin/user_profile/edit' : [{name:'Edit profile',url:'',icon:'mode_edit'}],

		/**USER MANAGEMENT SECTION**/
		'admin/users/list' 		: 	[{name:'dynamic_variable',url:'',icon:'person'}],
		'admin/users/edit' 		: 	[{name:'dynamic_variable',url:WEBSITE_ADMIN_URL+'users/{dynamic_variable}',icon:'person'},{name:'Edit',url:'',icon:'mode_edit'}],
		'admin/users/add'		: 	[{name:'dynamic_variable',url:WEBSITE_ADMIN_URL+'users/{dynamic_variable}',icon:'person'},{name:'Add',url:'',icon:'person_add'}],
		'admin/users/view' 		:	[{name:'dynamic_variable',url:WEBSITE_ADMIN_URL+'users/{dynamic_variable}',icon:'person'},{name:'View',url:'',icon:'find_in_page'}],

		 
		
		
		/** LATEST NEWS SECTION**/
		'admin/system_images/list' 	: 	[{name:'System Images',url:'',icon:'comment'}],
		'admin/system_images/add' 	: 	[{name:'System Images',url:WEBSITE_ADMIN_URL+'system_images',icon:'comment'},{name:'Add System Image',url:'',icon:'add'}],
		'admin/system_images/edit' 	: 	[{name:'System Images',url:WEBSITE_ADMIN_URL+'system_images',icon:'comment'},{name:'Edit System Image',url:'',icon:'edit'}],
		'admin/system_images/view' 	:	[{name:'System Images',url:WEBSITE_ADMIN_URL+'system_images',icon:'comment'},{name:'View System Image',url:'',icon:'find_in_page'}],
		
		
		
		/**TEXT SETTING SECTION**/
		'admin/text_setting/list' : [{name:'dynamic_variable',url:'',icon:'text_format'}],
		'admin/text_setting/edit' : [{name:'dynamic_variable',url:WEBSITE_ADMIN_URL+'text-setting/{dynamic_variable}',icon:'text_format'},{name:'Edit Text Setting',url:'',icon:'mode_edit'}],
		'admin/text_setting/add' : [{name:'dynamic_variable',url:WEBSITE_ADMIN_URL+'text-setting/{dynamic_variable}',icon:'text_format'},{name:'Add Text Setting',url:'',icon:'add'}],

		/**EMAIL MANAGEMENT SECTION**/
		'admin/email_template/list' : [{name:'Email Templates',url:'',icon:'contact_mail'}],
		'admin/email_template/edit' : [{name:'Email Templates',url:WEBSITE_ADMIN_URL+'email_template',icon:'contact_mail'},{name:'Edit email template',url:'',icon:'mode_edit'}],


		/** EMAIL LOGS SECTION**/
		'admin/email_logs/list' : [{name:'Email Logs',url:'',icon:'mail_outline'}],
		'admin/email_logs/view' : [{name:'Email Logs',url:WEBSITE_ADMIN_URL+'email_logs',icon:'mail_outline'},{name:'Email Logs Details',url:'',icon:'find_in_page'}],

		
		/** Sms LOGS SECTION**/
		'admin/sms_logs/list' : [{name:'Sms Logs',url:'',icon:'textsms'}],
		'admin/sms_logs/view' : [{name:'Sms Logs',url:WEBSITE_ADMIN_URL+'sms_logs',icon:'textsms'},{name:'Sms Log Details',url:'',icon:'find_in_page'}],

		/**SETTING MANAGEMENT SECTION**/
		'admin/setting/list' 	: [{name:'Settings',url:'',icon:'settings'}],
		'admin/setting/add'  	: [{name:'Settings',url:WEBSITE_ADMIN_URL+'settings',icon:'settings'},{name:'Add Setting',url:'',icon:'add'}],
		'admin/setting/edit' 	: [{name:'Settings',url:WEBSITE_ADMIN_URL+'settings',icon:'settings'},{name:'Edit Setting',url:'',icon:'mode_edit'}],
		'admin/setting/prefix' 	: [{name:'dynamic_variable',url:'',icon:'settings'}],

		/**MASTER MANAGEMENT SECTION**/
		'admin/master/list' : [{name:'dynamic_variable',url:'',icon:'subject'}],
		'admin/master/add' 	: [{name:'dynamic_variable',url:WEBSITE_ADMIN_URL+'master/{dynamic_variable}',icon:'subject'},{name:'Add',url:'',icon:'add'}],
		'admin/master/edit' : [{name:'dynamic_variable',url:WEBSITE_ADMIN_URL+'master/{dynamic_variable}',icon:'subject'},{name:'Edit',url:'',icon:'mode_edit'}],
		'admin/master/view' : [{name:'dynamic_variable',url:WEBSITE_ADMIN_URL+'master/{dynamic_variable}',icon:'subject'},{name:'View',url:'',icon:'find_in_page'}],

		/**ADMIN ROLE SECTION**/
		'admin/admin_role/list' : [{name:'Manage Roles',url:'',icon:'security'}],
		'admin/admin_role/add'  : [{name:'Manage Roles',url:WEBSITE_ADMIN_URL+'admin_role',icon:'security'},{name:'Add Role',url:'',icon:'add'}],
		'admin/admin_role/edit' : [{name:'Manage Roles',url:WEBSITE_ADMIN_URL+'admin_role',icon:'security'},{name:'Edit Role',url:'',icon:'edit'}],

		/**ADMIN PERMISSIONS SECTION**/
		'admin/admin_permissions/list' : [{name:'Sub-admin',url:'',icon:'perm_data_setting'}],
		'admin/admin_permissions/add'  : [{name:'Sub-admin',url:WEBSITE_ADMIN_URL+'admin_permissions',icon:'perm_data_setting'},{name:'Add Sub-admin ',url:'',icon:'add'}],
		'admin/admin_permissions/edit' : [{name:'Sub-admin',url:WEBSITE_ADMIN_URL+'admin_permissions',icon:'perm_data_setting'},{name:'Edit Sub-admin ',url:'',icon:'edit'}],
		'admin/admin_permissions/view' : [{name:'Sub-admin',url:WEBSITE_ADMIN_URL+'admin_permissions',icon:'perm_data_setting'},{name:'View Sub-admin ',url:'',icon:'find_in_page'}],

		/** ADMIN MODULES SECTION**/
		'admin/admin_modules/list' : [{name:'Admin Modules',url:'',icon:'pages'}],
		'admin/admin_modules/add'  : [{name:'Admin Modules',url:WEBSITE_ADMIN_URL+'admin_modules',icon:'pages'},{name:'Add Admin Modules',url:'',icon:'add'}],
		'admin/admin_modules/edit' : [{name:'Admin Modules',url:WEBSITE_ADMIN_URL+'admin_modules',icon:'pages'},{name:'Edit Admin Modules',url:'',icon:'edit'}],

		/** NOTIFICATION SECTION**/
		'admin/notification/list' : [{name:'Notification Management',url:'',icon:'notifications'}],

		/**TEXT GROUP SETTING SECTION**/
		'admin/text_group_setting/list' : [{name:'Text Group Setting',url:'',icon:'new_releases'}],
		'admin/text_group_setting/view' : [{name:'Text Group Setting',url:WEBSITE_ADMIN_URL+'text_group_setting',icon:'new_releases'},{name:'View Text Group Setting',url:'',icon:'find_in_page'}],
		'admin/text_group_setting/edit'       : [{name:'View Text Group Setting ',url:WEBSITE_ADMIN_URL+'text_group_setting/{dynamic_variable}/view',icon:'text_format'},{name:'Edit Text Setting',url:'',icon:'mode_edit'}],
		'admin/text_group_setting/import'       : [{name:'Text Group Setting',url:WEBSITE_ADMIN_URL+'text_group_setting',icon:'new_releases'},{name:'Import Text Group Setting',url:'',icon:'find_in_page'}],

		/** Contact SECTION**/
		'admin/contact/list' 	: [{name:'Contact Manager',url:'',icon:'contact_mail'}],
		'admin/contact/view'	: [{name:'Contact Manager',url:WEBSITE_ADMIN_URL+'contact',icon:'contact_mail'},{name:'View',url:'',icon:'find_in_page'}],

		/** TESTIMONIALS SECTION**/
		'admin/testimonials/list' 	: 	[{name:'Testimonials',url:'',icon:'comment'}],
		'admin/testimonials/add' 	: 	[{name:'Testimonials',url:WEBSITE_ADMIN_URL+'testimonials',icon:'comment'},{name:'Add Testimonial',url:'',icon:'add'}],
		'admin/testimonials/edit' 	: 	[{name:'Testimonials',url:WEBSITE_ADMIN_URL+'testimonials',icon:'comment'},{name:'Edit Testimonial',url:'',icon:'edit'}],
		'admin/testimonials/view' 	:	[{name:'Testimonials',url:WEBSITE_ADMIN_URL+'testimonials',icon:'comment'},{name:'View Testimonial',url:'',icon:'find_in_page'}],
		
		/** LATEST NEWS SECTION**/
		'admin/latest_news/list' 	: 	[{name:'Latest News',url:'',icon:'comment'}],
		'admin/latest_news/add' 	: 	[{name:'Latest News',url:WEBSITE_ADMIN_URL+'latest_news',icon:'comment'},{name:'Add Latest News',url:'',icon:'add'}],
		'admin/latest_news/edit' 	: 	[{name:'Latest News',url:WEBSITE_ADMIN_URL+'latest_news',icon:'comment'},{name:'Edit Latest News',url:'',icon:'edit'}],
		'admin/latest_news/view' 	:	[{name:'Latest News',url:WEBSITE_ADMIN_URL+'latest_news',icon:'comment'},{name:'View Latest News',url:'',icon:'find_in_page'}],

		/** causes SECTION**/
		'admin/causes/list' 	: 	[{name:'Causes Manager',url:'',icon:'contact_mail'}],
		'admin/causes/view' 	:	[{name:'Causes Manager',url:WEBSITE_ADMIN_URL+'causes',icon:'contact_mail'},{name:'View Causes',url:'',icon:'find_in_page'}],
		
		/** GALLERY SECTION**/
		'admin/gallery/list' 	: 	[{name:'Gallery',url:'',icon:'comment'}],
		'admin/gallery/add' 	: 	[{name:'Gallery',url:WEBSITE_ADMIN_URL+'gallery',icon:'comment'},{name:'Add Gallery',url:'',icon:'add'}],
		'admin/gallery/edit' 	: 	[{name:'Gallery',url:WEBSITE_ADMIN_URL+'gallery',icon:'comment'},{name:'Edit Gallery',url:'',icon:'edit'}],

		/** Admin Breadcrumbs */

		/** Front Breadcrumbs */
		/** DASHBOARD SECTION**/
		'dashboard' : [{name:'Dashboard',url:'',icon:'dashboard'}],
		
};

