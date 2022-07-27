/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/newsletters";
const modulePath					= 	"/"+ADMIN_NAME+"/newsletters/";
const adminNewsletter    				=   require(modelPath);

/** Middleware for set current view folder and layout **/
app.use(modulePath, checkAdminLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});
 
/** Routing is used to get Newsletter list **/
app.all(modulePath,   checkAdminLogin, (req, res, next) => {
    adminNewsletter.getNewsletterList(req, res, next);
});

/** Routing is used to delete Contact  **/
app.all(modulePath+"delete/:id/",  checkAdminLogin, (req, res,next)=>{
    adminNewsletter.deleteNewsletter(req,res,next);
});

