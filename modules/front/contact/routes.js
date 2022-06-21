/** Model file path for current plugin **/
const modelPath     	=	__dirname+"/model/contact";
const contactModel	    =   require(modelPath);
const { check, validationResult } 	= 	require('express-validator');
const  vr 				= 	require(__dirname+"/validationRules");

/** Routing is used to render contact form **/
app.get(FRONT_END_NAME+"contact",	(req, res, next)=>{ 
    app.set('views', __dirname + '/views');
	contactModel.contact(req, res, false);
});

/** Routing is used to submit contact form **/
app.post(FRONT_END_NAME+"contact", vr.validateForContact, (req, res, next) => {
	app.set('views', __dirname + '/views');
	const errors = validationResult(req);
	if (!errors.isEmpty()) {	

		var validationErrors	=	errors.mapped();	
		req.session.formData 	=	req.body;
		contactModel.contact(req, res,next, validationErrors );
	}
	else {
		contactModel.contact(req, res, false);
	}
});