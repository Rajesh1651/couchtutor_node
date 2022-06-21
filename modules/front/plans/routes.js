/** Model file path for current plans **/
const modelPath     	=	__dirname+"/model/plans";
const modulePath	    =   require(modelPath);


/** Set current view folder **/
app.use(modulePath,(req, res,next) => {
    app.set('views', __dirname + '/views');
	modulePath.list(req, res, false);
});


/** Routing is used to view plans**/
app.get(FRONT_END_NAME+"plans/:type",(req, res,next)=>{
    app.set('views', __dirname + '/views');
    modulePath.list(req,res);
});


