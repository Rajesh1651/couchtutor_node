/** Model file path for current plugin **/

/** Model file path for current plugin **/
const modelPath     	=	__dirname+"/model/message";
const modulePath	    =   require(modelPath);
const vr = require(__dirname + "/validationRules");
const { check, validationResult } = require('express-validator');



/** Set current view folder **/
app.use(modulePath,(req, res,next) => {
    app.set('views', __dirname + '/views');
	modulePath.list(req, res, false);
});


/** Routing is used to blog list**/
app.get(FRONT_END_NAME+"messages",checkUserLogin,(req, res,next)=>{
    app.set('views', __dirname + '/views');
    modulePath.list(req,res);
});




/** Routing is used to message PopUp **/
app.post(FRONT_END_NAME+"message/messagePopUp",checkUserLogin,(req, res,next)=>{
    app.set('layout', WEBSITE_LAYOUT_PATH + "blank");
    app.set('views', __dirname + '/views');
    modulePath.messagePopUp(req,res);
});


/** Routing is used to update auth user Front Foreign Contractor Form **/
app.post(FRONT_END_NAME + "message/saveMessage/:tutorSlug", checkUserLogin, vr.validateForsaveMessage, (req, res, next) => {
	app.set('views', __dirname + '/views');
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		var validationErrors = errors.mapped();		
		modulePath.saveMessage(req, res, next, validationErrors).then(function(result){
			res.send(result);
			});		
	}
	else {
		modulePath.saveMessage(req, res, next, false).then(function(result){
			res.send(result);
			});		
	}
});





