/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/blog";
const modulePath					= 	"/"+ADMIN_NAME+"/blogs/";
const adminBlog      				=   require(modelPath);
const { check, validationResult } 	= 	require('express-validator');
const  vr							= 	require(__dirname+"/validationRules");


/** Middleware for set current view folder and layout **/
app.use(modulePath, checkAdminLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});


 
/** Routing is used to get blog list **/
app.all(modulePath,  checkAdminLogin,  (req, res, next) => {
    adminBlog.getBlogList(req, res, next);
});



/** Routing is used to render add blog page **/
app.get(modulePath+"add", checkAdminLogin,  (req, res, next) => {
    adminBlog.addBlog(req, res, next, false);
});



/** Routing is used to add blog **/
app.post(modulePath+"add", checkAdminLogin,  vr.validateForBlog, (req,res,next)=>{
	
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminBlog.addBlog(req, res, next, validationErrors);
	}
	else {
		adminBlog.addBlog(req, res, next, false);
	}
});



/** Routing is used to render edit blog page**/
app.get(modulePath+"edit/:id", checkAdminLogin,  (req,res,next) => {
    adminBlog.editBlog(req,res,next, false);
});



/** Routing is used to edit blog **/
app.post(modulePath+"edit/:id", checkAdminLogin,  vr.validateForBlog, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminBlog.editBlog(req, res, next, validationErrors);
	}
	else {
		adminBlog.editBlog(req, res, next, false);
	}
});



/** Routing is used to update blog status **/
app.all(modulePath+":update_blog_status/:id/:status", checkAdminLogin,  (req, res,next)=>{
    adminBlog.updateBlogStatus(req,res,next);
});



/** Routing is used to delete blog  **/
app.all(modulePath+"delete/:id/", checkAdminLogin,  (req, res,next)=>{
    adminBlog.deleteBlog(req,res,next);
});



/** Routing is used to view Blog details **/
app.get(modulePath+"view/:id",	checkAdminLogin,  (req, res,next)=>{
    adminBlog.viewBlogDetails(req, res,next);
});


/** Routing is used to view Comments list **/
app.get(modulePath+"comments/:id",	 checkAdminLogin,  (req, res,next)=>{
    adminBlog.commentList(req, res,next);
});


