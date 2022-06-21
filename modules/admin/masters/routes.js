/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/masters";
const modulePath					= 	"/"+ADMIN_NAME+"/masters/";
const adminMasters     				=   require(modelPath);
const { check, validationResult } 	= 	require('express-validator');
const  vr 							= 	require(__dirname+"/validationRules");


/** Middleware for set current view folder and layout **/
app.use(modulePath, checkAdminLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});


 
/** Routing is used to get master data list **/
app.all(modulePath+":type",  /* checkAdminLogin, */ (req, res, next) => {
    adminMasters.getMasterDataList(req, res, next);
});



/** Routing is used to render add master data **/
app.get(modulePath+":type/add", /* checkAdminLogin, */ (req, res, next) => {
    adminMasters.addMasterData(req, res, next, false);
});



/** Routing is used to add master data **/
app.post(modulePath+":type/add", /* checkAdminLogin, */ vr.validateForMaster, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminMasters.addMasterData(req, res, next, validationErrors);
	}
	else {
		adminMasters.addMasterData(req, res, next, false);
	}
});


/** Routing is used to update master data status **/
app.all(modulePath+":type/update_status/:id/:status", /* checkAdminLogin, */ (req, res,next)=>{
    adminMasters.updateMasterStatus(req,res,next);
});



/** Routing is used to render edit master data **/
app.get(modulePath+":type/edit/:id", /* checkAdminLogin, */ (req,res,next) => {
    adminMasters.editMaster(req,res,next, false);
});



/** Routing is used to edit master data **/
app.post(modulePath+":type/edit/:id", /* checkAdminLogin, */ vr.validateForMaster, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminMasters.editMaster(req, res, next, validationErrors);
	}
	else {
		adminMasters.editMaster(req, res, next, false);
	}
});