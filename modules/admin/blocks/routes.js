/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/blocks";
const modulePath					= 	"/"+ADMIN_NAME+"/blocks/";
const adminBlocks      				=   require(modelPath);
const { check, validationResult } 	= 	require('express-validator');
const  vr 							= 	require(__dirname+"/validationRules");


/** Middleware for set current view folder and layout **/
app.use(modulePath, checkAdminLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});


 
/** Routing is used to get cms list **/
app.all(modulePath,  /* checkAdminLogin, */ (req, res, next) => {
    adminBlocks.getBlockList(req, res, next);
});


/** Routing is used to render add cms page **/
app.get(modulePath+"add", /* checkAdminLogin, */ (req, res, next) => {
    adminBlocks.addBlock(req, res, next, false);
});



/** Routing is used to add cms **/
app.post(modulePath+"add", /* checkAdminLogin, */ vr.validateForBlogs, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminBlocks.addBlock(req, res, next, validationErrors);
	}
	else {
		adminBlocks.addBlock(req, res, next, false);
	}
});


/** Routing is used to render edit cms page**/
app.get(modulePath+"edit/:id", /* checkAdminLogin, */ (req,res,next) => {
    adminBlocks.editBlock(req,res,next, false);
});



/** Routing is used to edit cms **/
app.post(modulePath+"edit/:id", /* checkAdminLogin, */ vr.validateForBlogs, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminBlocks.editBlock(req, res, next, validationErrors);
	}
	else {
		adminBlocks.editBlock(req, res, next, false);
	}
});



/** Routing is used to update cms status **/
app.all(modulePath+":update_block_status/:id/:status", /* checkAdminLogin, */ (req, res,next)=>{
    adminBlocks.updateBlockStatus(req,res,next);
});


/** Routing is used to view CMS details **/
app.get(modulePath+"view/:id",	/* checkAdminLogin, */ (req, res,next)=>{
    adminBlocks.viewBlockDetails(req, res,next);
});