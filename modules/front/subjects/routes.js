/** Model file path for current plugin **/

/** Model file path for current plugin **/
const modelPath     	=	__dirname+"/model/subjects";
const modulePath	    =   require(modelPath);


/** Set current view folder **/
app.use(modulePath,(req, res,next) => {
    app.set('views', __dirname + '/views');
	modulePath.list(req, res, false);
});


/** Routing is used to verify email id **/
app.get(FRONT_END_NAME+"subjects",(req, res,next)=>{
    app.set('views', __dirname + '/views');
    modulePath.list(req,res);
});


/** Routing is used to verify email id **/
app.get(FRONT_END_NAME+"our-products",(req, res,next)=>{
    app.set('views', __dirname + '/views');
    modulePath.list(req,res);
});


/** Routing is used to resend otp **/
app.get(FRONT_END_NAME+"subject/:slug",(req, res,next)=>{
    app.set('views', __dirname + '/views');
    modulePath.view(req,res);
});