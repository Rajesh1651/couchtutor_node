var configure = function (router, mongo) {

	db = mongo.getDb();
	app = router;
	const moment = require("moment");
	const { readFile } = require("fs");

	/** node cache module */
	const NodeCache = require("node-cache");
	myCache = new NodeCache();

	

	const paginate = require('express-paginate');
	app.use(paginate.middleware(ADMIN_LISTING_LIMIT, ADMIN_LISTING_LIMIT));


	/** Middlewares **/
	/** FUNCTION : CHECK ADMIN IS LOGGEDIN OR NOT */
	checkAdminLogin = function (req, res, next) {
		res.header("Cache-Control", "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0");
		if (
			typeof req.session.user !== typeof undefined &&
			typeof req.session.user._id !== typeof undefined &&
			typeof req.session.user.user_role_id !== typeof undefined
		) {
			if (req.session.user.user_role_id == SUPER_ADMIN_ROLE_ID) {
				return next();
			}
			else {
				res.redirect(WEBSITE_ADMIN_URL + "login");
			}
		}
		else {
			res.redirect(WEBSITE_ADMIN_URL + "login");
		}
	}//end checkAdminLogin();



	/** FUNCTION : CHECK USER IS LOGGEDIN OR NOT */
	checkUserLogin = function (req, res, next) {
		res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
		if (
			typeof req.session.user !== typeof undefined &&
			typeof req.session.user._id !== typeof undefined &&
			typeof req.session.user.user_role_id !== typeof undefined
		) {
			if (req.session.user.user_role_id == TUTOR_ROLE_ID) {
				return next();
			}
			else if (req.session.user.user_role_id == STUDENT_ROLE_ID) {
				return next();
			}
			else {
				res.redirect('/');
			}
		}
		else {
			res.redirect('/');
		}
	}//end checkUserLogin();



	/** 
	* Function to check if user is logged in then redirect him/her to dashboard 
	* This function is used only for login page.
	*/
	isLoggedIn = function (req, res, next) {
		res.header("Cache-Control", "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0");
		if (
			typeof req.session !== typeof undefined &&
			typeof req.session.user !== typeof undefined &&
			typeof req.session.user._id !== typeof undefined &&
			typeof req.session.user.user_role_id !== typeof undefined
		) {
			if (req.session.user.user_role_id == TUTOR_ROLE_ID) {
				if (req.session.user) {
					return res.redirect(WEBSITE_URL + "tutor/dashboard");
				}
				return next();
			}
			else if (req.session.user.user_role_id == STUDENT_ROLE_ID) {
				if (req.session.user) {
					return res.redirect(WEBSITE_URL + "student/dashboard");
				}
				return next();
			}
			else {
				res.redirect(WEBSITE_ADMIN_URL + "dashboard");
			}
		}
		else {
			return next();
		}
	}//end isLoggedIn(); 




	/** Before Filter **/
	app.use(function (req, res, next) {

		/** Rendering options to set views and layouts */
		req.rendering = {};

		res.locals.auth = "";
		if (req.session.user !== "undefined" && req.session.user) {
			res.locals.auth = req.session.user;
		}

		res.locals.site_url = req.url;
		res.locals.query = req.query;
		res.locals.moment = moment;

		/** Configure success flash message **/
		res.locals.success_flash_message = "";
		res.locals.success_status = "";

		/** Configure error flash message **/
		res.locals.error_flash_message = "";
		res.locals.error_status = "";

		if (typeof req.session.flash !== "undefined") {

			if (typeof req.session.flash.success !== "undefined") {
				res.locals.success_status = STATUS_SUCCESS;
				res.locals.success_flash_message = req.session.flash.success;
			}

			if (typeof req.session.flash.error !== "undefined") {
				res.locals.error_status = STATUS_ERROR;
				res.locals.error_flash_message = req.session.flash.error;
			}
		}


		/** Read/write Basic settings from/in Cache **/
		let settings = myCache.get("settings");
		if (settings == undefined) {
			readFile(WEBSITE_ROOT_PATH + "config/settings.json", "utf8", function readFileCallback(err, data) {
				if (!err) {
					settings = JSON.parse(data);
					myCache.set("settings", settings, 0);
					res.locals.settings = settings;
				}
			});
		}
		else {
			res.locals.settings = settings;
		}

		next();
	});




	/** Admin Before Filter **/
	app.use(FRONT_END_NAME + ADMIN_NAME + "/", function (req, res, next) {

		/** SET LOCAL VERIABLES  */
		res.locals.active_path = req.path.split("/")[1];
		res.locals.admin_list_url = WEBSITE_ADMIN_URL + res.locals.active_path;
		res.locals.breadcrumb = req.breadcrumbs();

		/** GET LEFT MENUS  */
		if (typeof req.session.user !== typeof undefined) {
			let userId = (req.session.user._id) ? req.session.user._id : "";
			let moduleLists = userModuleFlagAction(userId, "", "get");

			if (moduleLists == undefined) {
				const { getAdminModulesListing } = require(WEBSITE_ADMIN_MODULES_PATH + "admin_modules/model/admin_modules");
				getAdminModulesListing(req, res).then(function (moduleResponse) {
					res.locals.admin_modules_list = moduleResponse.result;
					userModuleFlagAction(userId, moduleResponse.result, "add");
					next();
				});
			}
			else {
				res.locals.admin_modules_list = moduleLists;
				next();
			}
		}
		else {
			res.locals.admin_modules_list = [];
			next();
		}
	});



	/** include breadcrumb file **/
	require(WEBSITE_ROOT_PATH + "config/breadcrumbs");

	/***************** ADMIN ROUTES STARTS FROM HERE ************/
	require(WEBSITE_ADMIN_MODULES_PATH + "users/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "text_setting/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "admin_modules/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "settings/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "cms/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "blogs/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "faq/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "contact/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "slider/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "blocks/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "masters/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "subjects/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "newsletters/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "email_actions/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "email_template/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "email_logs/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "plans/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "coupons/routes");
	require(WEBSITE_ADMIN_MODULES_PATH + "locations/routes");


	/** Route is used to render 404 page */
	app.get(FRONT_END_NAME + ADMIN_NAME + "/*", function (req, res) {
		let layout404 = WEBSITE_ADMIN_LAYOUT_PATH + "404";
		if (res.locals.auth && res.locals.auth._id) {
			layout404 = WEBSITE_ADMIN_LAYOUT_PATH + "default";
		}
		app.set('views', WEBSITE_ADMIN_MODULES_PATH + "elements/");
		app.set('layout', layout404);
		res.render("404");
	});

	/***************** ADMIN ROUTES ENDS HERE ***************/




/** Front Before Filter */
	app.use(FRONT_END_NAME, function (req, res, next) {
		res.locals.breadcrumb = req.breadcrumbs();
		res.locals.active_path = req.path.split("/")[1];
		res.locals.active_tab = req.path.split("/")[2];
		res.locals.list_url = WEBSITE_URL + res.locals.active_path;
		app.set('layout', WEBSITE_LAYOUT_PATH + "default");
		next();
	});


	/***************** FRONT ROUTES STARTS FROM HERE ***************
	
	/** Include Reports Module **/
	require(WEBSITE_MODULES_PATH + "blog/routes");
	require(WEBSITE_MODULES_PATH + "contact/routes");
	require(WEBSITE_MODULES_PATH + "cms/routes");
	require(WEBSITE_MODULES_PATH + "faqs/routes");   
	require(WEBSITE_MODULES_PATH + "home/routes");
	require(WEBSITE_MODULES_PATH + "newsletters/routes");
	require(WEBSITE_MODULES_PATH + "users/routes");
	require(WEBSITE_MODULES_PATH + "subjects/routes");
	require(WEBSITE_MODULES_PATH + "plans/routes");
	require(WEBSITE_MODULES_PATH + "message/routes");
	



	/***************** FRONT ROUTES ENDS HERE *************** /
	
	



	/** Route is used to render 404 page */
	app.get("*", function (req, res) {
		let layout404 = WEBSITE_LAYOUT_PATH + "404";
		if (res.locals.auth && res.locals.auth._id) {
			layout404 = WEBSITE_LAYOUT_PATH + "default";
		}

		app.set('views', WEBSITE_ADMIN_MODULES_PATH + "elements/");
		app.set('layout', layout404);
		res.render("404");
	});
}

module.exports.configure = configure; 