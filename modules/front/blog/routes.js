/** Model file path for current plugin **/

/** Model file path for current plugin **/
const modelPath     	=	__dirname+"/model/blog";
const modulePath	    =   require(modelPath);


/** Set current view folder **/
app.use(modulePath,(req, res,next) => {
    app.set('views', __dirname + '/views');
	modulePath.listBlog(req, res, false);
});


/** Routing is used to blog list**/
app.get(FRONT_END_NAME+"blog",(req, res,next)=>{
    app.set('views', __dirname + '/views');
    modulePath.listBlog(req,res);
});


/** Routing is used to blog page **/
app.all(FRONT_END_NAME+"blog/:page",(req, res,next)=>{
    app.set('views', __dirname + '/views');
    modulePath.listBlog(req,res);
});


/** Routing is used to blog detail **/
app.get(FRONT_END_NAME+"blog-detail/:slug",(req, res,next)=>{
    app.set('views', __dirname + '/views');
    modulePath.viewBlog(req,res);
});

/** Routing is used to verify email id **/
app.all(FRONT_END_NAME+"add_blog_comment/:id",(req, res,next)=>{

    app.set('views', __dirname + '/views');
    modulePath.addComment(req,res);
});