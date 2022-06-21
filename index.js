/** Including contants file */
require("./config/global_constant");

/** Node express */
const express	= 	require('express');
const app 		=	express();
const port 		= 	PORT;


/**
 * Set publically accessable folder 
 * To serve static files such as images, CSS, JavaScript files, use the express.static built-in middleware function in Express.
 * Now, you can load the files that are in the public directory:
 * http://localhost:3000/images/kitten.jpg
 * http://localhost:3000/css/style.css
 * http://localhost:3000/js/app.js
 */
app.use(express.static(__dirname + '/public'));



/** 
 * bodyParser for node js 
 * This module is used to receive post data into req.body.
*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true,
	limit	: '50mb',
    parameterLimit : 1000000
}));
app.use(bodyParser.json());




/** Use to upload files */
const	fileUpload = require('express-fileupload');
app.use(fileUpload());



/** For locale 
 *  In ejs view file 		:   <%= __("admin.cms.search_by_page_title"); %>
 *  in your apps methods	:	res.__('Hello')
 *  In exporting modules 	:   anyObjectForLocale.__("ADMIN.CMS.PLEASE_ENTER_PAGE_TITLE_HERE")
 **/
var anyObjectForLocale	=	{};
const i18n 	= require("i18n");
i18n.configure({
    locales:LANGUAGE_FOLDER_CODE_ARRAY,
    defaultLocale: DEFAULT_LANGUAGE_FOLDER_CODE,
    directory: WEBSITE_LOCALE_ROOT_PATH,
	updateFiles: false,
	register: anyObjectForLocale
});
app.use(i18n.init);



/** Initialize Ejs (Embedded JavaScript template engine) Layout  */
const ejsLayouts = require("express-ejs-layouts");
app.use(ejsLayouts);
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);



/**  Set Breadcrumbs home information */
const breadcrumbs = require('express-breadcrumbs');
app.use(breadcrumbs.init());

/** Mount the breadcrumbs at `/admin` */
app.use('/admin', breadcrumbs.setHome({
    name: 'Home',
    url: '/admin'
}));



/**  This module is used for flash messages in the system */
const flash  = require('express-flash');
app.use(flash());

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/

const server = app.listen(port,()=>{
    console.log('Server listening on port ' + port);
});


/** Function to get unhandled errors and prevent to stop nodejs server */
process.on("uncaughtException", function (err) {
	console.log("error name ---------"+err.name);    		/** Print the error name */
	console.log("error date ---------"+new Date());    		/** Print the error date */
	console.log("error message ---------"+err.message); 	/** Print the error message */
	console.log("error stack ---------"+err.stack);   		/** Print the stack trace */
	setTimeout(function(){
		process.exit(1);
	},1000);
});


/** required for Session */
const expressSession  	 = require('express-session');
var sessionTimeInSeconds = 15 * 24 * 60 * 60;
app.use(expressSession({
	name: 'session',
	resave: false,
	saveUninitialized: false,
	proxy:false,
	secret: 'NodeJs9799530SecretKey515',
}));


/** Including common function */
require(WEBSITE_ROOT_PATH + "config/common_function");


/** Including mongo connection file */
const mongo	= require(WEBSITE_ROOT_PATH + "config/database_connection");
mongo.connectToServer(function(){
	const routes = require(WEBSITE_ROOT_PATH + 'routes/web');
    routes.configure(app,mongo);
});