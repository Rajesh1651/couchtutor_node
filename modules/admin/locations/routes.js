/** Model file path for current plugin **/
const modelPath     				= 	__dirname+"/model/locations";
const modulePath					= 	"/"+ADMIN_NAME+"/locations/";
const adminLocations    			=   require(modelPath);
const { check, validationResult } 	= 	require('express-validator');
const  vr 							= 	require(__dirname+"/validationRules");


/** Middleware for set current view folder and layout **/
app.use(modulePath, checkAdminLogin, (req, res, next) => {
	app.set('views', __dirname + '/views');
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"default");
    next();
});


/* ########################################ROUTING STARTS FOR COUNTRIES SECTION #################################*/
 
/** Routing is used to get countries list **/
app.all(modulePath+"countries",  (req, res, next) => {
    adminLocations.getCountriesList(req, res, next);
});



/** Routing is used to render add Country page **/
app.get(modulePath+"countries/add", (req, res, next) => {
    adminLocations.addCountry(req, res, next, false);
});



/** Routing is used to add Country **/
app.post(modulePath+"countries/add",  vr.validateForCountry, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminLocations.addCountry(req, res, next, validationErrors);
	}
	else {
		adminLocations.addCountry(req, res, next, false);
	}
});



/** Routing is used to render edit Country page**/
app.get(modulePath+"countries/edit/:country_id", (req,res,next) => {
    adminLocations.editCountry(req,res,next, false);
});



/** Routing is used to edit Country **/
app.post(modulePath+"countries/edit/:country_id", vr.validateForEditCountry, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminLocations.editCountry(req, res, next, validationErrors);
	}
	else {
		adminLocations.editCountry(req, res, next, false);
	}
});



/** Routing is used to update Country status **/
app.all(modulePath+"countries/:update_location_status/:country_id/:status", (req, res,next)=>{
    adminLocations.updateCountryStatus(req,res,next);
});


/* ########################################ROUTING ENDS FOR COUNTRIES SECTION #################################*/




/* ########################################ROUTING STARTS FOR STATES SECTION #################################*/


/** Routing is used to get states list **/
app.all(modulePath+"states/:country_id/",  (req, res, next) => {
    adminLocations.getStatesList(req, res, next);
});



/** Routing is used to render add states page **/
app.get(modulePath+"states/:country_id/add", (req, res, next) => {
    adminLocations.addState(req, res, next, false);
});



/** Routing is used to add states **/
app.post(modulePath+"states/:country_id/add",  vr.validateForState, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminLocations.addState(req, res, next, validationErrors);
	}
	else {
		adminLocations.addState(req, res, next, false);
	}
});



/** Routing is used to render edit states page**/
app.get(modulePath+"states/:country_id/edit/:state_id", (req,res,next) => {
    adminLocations.editState(req,res,next, false);
});



/** Routing is used to edit states **/
app.post(modulePath+"states/:country_id/edit/:state_id", vr.validateForEditState, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminLocations.editState(req, res, next, validationErrors);
	}
	else {
		adminLocations.editState(req, res, next, false);
	}
});



/** Routing is used to update state status **/
app.all(modulePath+"states/:country_id/update_status/:state_id/:status", (req, res,next)=>{
    adminLocations.updateStateStatus(req,res,next);
});

/* ########################################ROUTING ENDS FOR STATES SECTION #################################*/




/* ########################################ROUTING STARTS FOR CITIES SECTION #################################*/

/** Routing is used to get cities list **/
app.all(modulePath+"cities/:state_id/",  (req, res, next) => {
    adminLocations.getCitiesList(req, res, next);
});



/** Routing is used to render add city page **/
app.get(modulePath+"cities/:state_id/add", (req, res, next) => {
    adminLocations.addCity(req, res, next, false);
});



/** Routing is used to add city **/
app.post(modulePath+"cities/:state_id/add",  vr.validateForCity, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminLocations.addCity(req, res, next, validationErrors);
	}
	else {
		adminLocations.addCity(req, res, next, false);
	}
});



/** Routing is used to render edit city page**/
app.get(modulePath+"cities/:state_id/edit/:city_id", (req,res,next) => {
    adminLocations.editCity(req,res,next, false);
});



/** Routing is used to edit city **/
app.post(modulePath+"cities/:state_id/edit/:city_id", vr.validateForEditCity, (req,res,next)=>{
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();
		req.session.formData 	=	req.body;
		adminLocations.editCity(req, res, next, validationErrors);
	}
	else {
		adminLocations.editCity(req, res, next, false);
	}
});



/** Routing is used to update city status **/
app.all(modulePath+"cities/:state_id/update_status/:city_id/:status", (req, res,next)=>{
    adminLocations.updateCityStatus(req,res,next);
});

/* ########################################ROUTING STARTS FOR CITIES SECTION #################################*/



/** Routing is used to get states dropdown from country **/
app.post(modulePath+"get-states-dropdown-from-country/:country_id?", (req,res,next)=>{
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"blank");
	adminLocations.getStatesDropdownFromCountry(req, res, next);
});


/** Routing is used to get cities dropdown from state **/
app.post(modulePath+"get-cities-dropdown-from-state/:state_id?", (req,res,next)=>{
	app.set('layout', WEBSITE_ADMIN_LAYOUT_PATH+"blank");
	adminLocations.getCitiesDropdownFromState(req, res, next);
});