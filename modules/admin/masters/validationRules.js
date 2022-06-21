var path 							= 	require('path');
const { check, validationResult } 	= 	require('express-validator');
const {ObjectId} 					= 	require('mongodb');


/** For locale **/
var anyObjectForLocale	=	{};
const i18n 	= require("i18n");
i18n.configure({
    locales:LANGUAGE_FOLDER_CODE_ARRAY,
    defaultLocale: DEFAULT_LANGUAGE_FOLDER_CODE,
    directory: WEBSITE_LOCALE_ROOT_PATH,
	updateFiles: false,
	register: anyObjectForLocale
});


validationObject = {
 
	validateForMaster : [
		check('title',		anyObjectForLocale.__("ADMIN.MASTERS.PLEASE_ENTER_TITLE_HERE")).trim().notEmpty(),
		check('title', 		anyObjectForLocale.__("ADMIN.MASTERS.TITLE_IS_EXISTS")).custom((value, {req})=>{	
			return new Promise((resolve, reject) => {
				const mastersCollection	= 	db.collection(MASTERS_COLLECTION);
				let masterId			=	(req.params.id) ? req.params.id : '';
				let masterType			=	(req.params.type)	?	req.params.type	: "";
				
				if(masterId){
					mastersCollection.findOne({title : value, _id : {$ne:ObjectId(masterId)}}, function(err, masterData){
						if(err) {
							reject(false);
						}

						if(Boolean(masterData)) {
							reject(false);
						}
						
						resolve(true);
					}); 
				}
				else {
					mastersCollection.findOne({title : value}, function(err, masterData){
						if(err) {
							reject(false);
						}

						if(Boolean(masterData)) {
							reject(false);
						}
						
						resolve(true);
					}); 
				}
				
			});
		}),
		
		
		check('image', ALLOWED_IMAGE_ERROR_MESSAGE).custom((val, {req}) => {
            let masterType			=	(req.params.type)	?	req.params.type	: "";
			if(MASTER_TYPES_WITH_IMAGE.indexOf(masterType) !== -1){
				var filename 			= 	(req.files && req.files.image.name) ? req.files.image.name : '';
				var allowedExtensions 	= 	ALLOWED_IMAGE_EXTENSIONS;
				var extension 			= 	(path.extname(filename)).toLowerCase();
				extension				= 	extension.replace(".", "");
				if(!(req.params.id && (filename == '')) )
					var result		=	(allowedExtensions.indexOf(extension) == -1) ? false : true;
				else
					var result		=	true;
				
				return result; 
			}
			else {
				return true;
			}
		}),
		
		
		check('image', ALLOWED_IMAGE_SIZE_ERROR_MESSAGE).custom((val, {req}) => {
			let masterType			=	(req.params.type)	?	req.params.type	: "";
			if(MASTER_TYPES_WITH_IMAGE.indexOf(masterType) !== -1){
				var filesize	= 	(req.files && req.files.image.size) ? req.files.image.size : 0;
				if(!(req.params.id && (filesize == 0)) )
					var result		=	(ALLOWED_IMAGE_SIZE < filesize) ? false : true;
				else
					var result		=	true;
				
				return result;
			}
			else {
				return true;
			}
		})
		
	]
}
 
module.exports = validationObject;