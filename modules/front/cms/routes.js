/** Model file path for current plugin **/
const modelPath     	=	__dirname+"/model/cms";
const modulePath	    =   require(modelPath);



/** Set current view folder **/
app.use(modulePath,(req, res,next) => {
    app.set('views', __dirname + '/views');
	modulePath.getPage(req, res, false);
});


/** Routing is used to verify email id **/
app.get(FRONT_END_NAME+"pages/:slug",(req, res,next)=>{
    app.set('views', __dirname + '/views');
    modulePath.getPage(req,res);
});
