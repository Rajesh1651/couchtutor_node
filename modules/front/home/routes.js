/** Model file path for current module **/
const modelPath  	= __dirname+"/model/home";
const modulePath	= FRONT_END_NAME+"home/";
const {index} 	= require(modelPath);


/** Routing is used to render index page **/
app.all(FRONT_END_NAME,/*isLoggedIn,*/(req, res)=>{
	/** Set current view folder **/
  app.set('views', __dirname + '/views');
	index(req, res);	
});

/** Set current view folder **/
app.use(modulePath,(req,res,next) => {
	req.rendering.layout 	= WEBSITE_LAYOUT_PATH+"marketing";
	req.rendering.views		= __dirname + "/views";
    next();
});



