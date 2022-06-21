/** Model file path for current plugin **/
const modelPath     	=	__dirname+"/model/newsletters";
const newsletterModel	    =   require(modelPath);
const { check, validationResult } 	= 	require('express-validator');
const  vr 				= 	require(__dirname+"/validationRules");


/** Routing is used to submit newsletterModel form **/
app.post(FRONT_END_NAME+"newsletters-save", vr.validateForNewsLetter, (req, res, next) => {

	app.set('views', __dirname + '/views');
	const errors = validationResult(req);	
	if (!errors.isEmpty()) {
		var validationErrors	=	errors.mapped();	
		req.session.formData 	=	req.body;
	     newsletterModel.newsLetterSave(req, res,next, validationErrors ).then(function(result){
		res.send(result);
		 });
	  }
	else {
	 newsletterModel.newsLetterSave(req, res, false).then(function(result){
		res.send(result);
		});		
	   }
});