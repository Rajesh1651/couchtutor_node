/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/email_logs";
const modulePath					= 	"/"+ADMIN_NAME+"/email_logs/";
const adminEmailLog 				=   require(modelPath);


/** Middleware for set current view folder and layout **/
app.use(modulePath, checkAdminLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
    app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});


 
/** Routing is used to get email logs list **/
app.all(modulePath,   checkAdminLogin,  (req, res, next) => {
    adminEmailLog.getEmailLogList(req, res, next);
});


/** Routing is used to view email log details **/
app.get(modulePath+"view/:id",	checkAdminLogin,  (req, res,next)=>{
    adminEmailLog.viewEmailLogDetails(req, res,next);
});