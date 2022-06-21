/** Model file path for current plugin **/

/** Model file path for current plugin **/
const modelPath     	=	__dirname+"/model/faqs";
const modulePath	    =   require(modelPath);


/** Set current view folder **/
app.use(modulePath,(req, res,next) => {
    app.set('views', __dirname + '/views');
	modulePath.listFaq(req, res, false);
});


/** Routing is used to verify email id **/
app.get(FRONT_END_NAME+"faqs",(req, res,next)=>{
    app.set('views', __dirname + '/views');
    modulePath.listFaq(req,res);
});

