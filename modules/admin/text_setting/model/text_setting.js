const paginate 		= 	require('express-paginate'); 
const {ObjectId} 	= 	require('mongodb');
const  brdObj		=	require(WEBSITE_ADMIN_MODULES_PATH+"/text_setting/breadcrumbs");
const fsWriteFile	= 	require("fs").writeFile;

function TextSetting() {

	/**
	 * Listing URL
	 */
	const LISTING_URL	=	WEBSITE_ADMIN_URL+"text_setting/";
	
	
	
	/**
	 * Function for get list of Text Setting
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getTextSettingList = (req, res)=>{
		let textSettingType = (req.params.type) ? req.params.type : "";
		if(textSettingType && TEXT_SETTINGS_NAME[textSettingType]){
			let limit			= (req.body.length) 		? parseInt(req.body.length) 		: ADMIN_LISTING_LIMIT;
			let skip			=  req.skip
			
			let key		= (req.query.key) ? req.query.key : "";
			let value	= (req.query.value) ? req.query.value : "";
			
			/** Set conditions **/
			var commonConditions = {type : textSettingType};
			
			if (key != "") {
				commonConditions.key	=	new RegExp(key, 'i');
			}
			
			if (value != "") {
				commonConditions.value	=	new RegExp(value, 'i');
			}
			
			const textsettings = db.collection(TEXT_SETTING_COLLECTION);
			
			textsettings.find(commonConditions).skip(skip).limit(limit).sort( { modified: SORT_DESC } ).toArray(function(err, results) {
				if (err) throw err;
				
				textsettings.find(commonConditions).count(function(errCount, itemCount) {
					if (errCount) throw errCount;
					
					let pageCount = 	Math.ceil(itemCount / limit);
					
					req.breadcrumbs(brdObj.list);
					
					let textSettingName	= TEXT_SETTINGS_NAME[textSettingType];
					
					res.render('list', {
						type			: textSettingType,
						dynamic_variable: textSettingName+" Management",
						dynamic_url		: textSettingType,
						results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
					}); 
				});
			});
		}
		else{
			/** Send error response **/
			req.flash(STATUS_ERROR, "admin.system.invalid_access" );
			return res.redirect(LISTING_URL+TEXT_SETTINGS_FRONT);
		}
	};//End getTextSettingList()
	
	
	
	/**
	 * Function for add addTextSetting
	 *
	 * @param req 	As	Request Data
	 * @param res 	As	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.addTextSetting = (req, res, next, validationErrors)=>{
		
		let textSettingType = (req.params.type) ? req.params.type : "";
		if(textSettingType && TEXT_SETTINGS_NAME[textSettingType]){
			if(isPost(req) && !validationErrors){
				/** Sanitize Data */
				req.body = 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
				
				if(req.body.text_settings_descriptions !== typeof undefined && req.body.text_settings_descriptions[DEFAULT_LANGUAGE_MONGO_ID] !== typeof undefined && req.body.text_settings_descriptions[DEFAULT_LANGUAGE_MONGO_ID] != "" && req.body.text_settings_descriptions[DEFAULT_LANGUAGE_MONGO_ID].value !== typeof undefined && req.body.text_settings_descriptions[DEFAULT_LANGUAGE_MONGO_ID].value !=  ''){
					
					let allData		= 	req.body;
					let key			=	(req.body.key) ? req.body.key : "";
					let value		=	req.body.text_settings_descriptions[DEFAULT_LANGUAGE_MONGO_ID].value;
					
					
					/** check for unique key*/
					const textsettings = db.collection(TEXT_SETTING_COLLECTION);
					textsettings.findOne({"key": {$regex : "^"+key+"$",$options : "i"}},
						{projection: {_id:1}},(errs,keyResult)=>{
							if(!keyResult){
								let insertData	=

								/** Insert record*/
								textsettings.insertOne({
										key							: 	key,
										value						: 	value,
										type						: 	textSettingType,
										default_language_id			: 	DEFAULT_LANGUAGE_MONGO_ID,
										text_settings_descriptions	: 	(allData.text_settings_descriptions) ? allData.text_settings_descriptions :{},
										created 					:	getUtcDate(),
										modified 					: 	getUtcDate()
									},(err,result)=>{
										if(!err){
											writeTextSettingFile().then((response)=>{
												/** Send success response **/
												req.flash(STATUS_SUCCESS, res.__("admin.text_setting.text_setting_has_been_added_successfully"));
												return res.redirect(LISTING_URL+textSettingType+'/add');
											});
										}
										else{
											/** Send error response **/
											req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
											return res.redirect(LISTING_URL+textSettingType);
										}
									}
								);

							}
							else{
								/** Send error response **/
								req.session.formData 	=	req.body;
								req.flash(STATUS_ERROR, res.__("admin.text_setting.key_is_already_exists"));
								return res.redirect(LISTING_URL+textSettingType+'/add');
							}
						}
					);
				}
				else{
					/** Send error response **/
					req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again") );
					return res.redirect(LISTING_URL+textSettingType);
				}
			}
			else{
				
				/** Get language list **/
				let defaultLanguage = (textSettingType == TEXT_SETTINGS_ADMIN) ?  DEFAULT_LANGUAGE_MONGO_ID : "";
				getLanguages(defaultLanguage).then((languageList)=>{

					formData = false;
					if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
						formData = req.session.formData;
						req.session.formData = null;
					}
					
					let textSettingName	= TEXT_SETTINGS_NAME[textSettingType];
					req.breadcrumbs(brdObj.add);
					
					/** Render add page **/
					res.render("add_edit",{
						language_list	: languageList,
						type			: textSettingType,
						dynamic_variable: textSettingName+" Management",
						dynamic_url		: textSettingType,
						error			: validationErrors,
						formData		: formData
					});
				});
			}
		}
		else{
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access") );
			return res.redirect(LISTING_URL+TEXT_SETTINGS_FRONT);
		}	
	};//End addTextSetting()
	
	
	
	/**
	 * Function to update TextSetting's detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editTextSetting = (req, res, next, validationErrors)=>{
		
		let textSettingType = (req.params.type) ? req.params.type : "";
		if(textSettingType && TEXT_SETTINGS_NAME[textSettingType]){
		
			if(isPost(req) && !validationErrors){
				/** Sanitize Data **/
				req.body	= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
				let id		= (req.params.id) ? req.params.id :"";

				if(id != "" && req.body.text_settings_descriptions !== typeof undefined && req.body.text_settings_descriptions[DEFAULT_LANGUAGE_MONGO_ID] !== typeof undefined && req.body.text_settings_descriptions[DEFAULT_LANGUAGE_MONGO_ID] != "" && req.body.text_settings_descriptions[DEFAULT_LANGUAGE_MONGO_ID].value !== typeof undefined && req.body.text_settings_descriptions[DEFAULT_LANGUAGE_MONGO_ID].value !=  '' ){
					
					let allData		= 	req.body;
					let key			=	(req.body.key) ? req.body.key : "";
					let value		=	req.body.text_settings_descriptions[DEFAULT_LANGUAGE_MONGO_ID].value;
					
					/** Update record*/
					const textsettings = db.collection(TEXT_SETTING_COLLECTION);
					textsettings.updateOne({_id : ObjectId(id)},
						{$set: {
							key							: key,
							value						: value,
							default_language_id			: DEFAULT_LANGUAGE_MONGO_ID,
							text_settings_descriptions	: (allData.text_settings_descriptions) ? allData.text_settings_descriptions :{},
							modified 					: getUtcDate()
						}},(err,result)=>{
							if(!err){
								writeTextSettingFile().then(response=>{
									/** Send success response **/
									req.flash(STATUS_SUCCESS, res.__("admin.text_setting.text_setting_has_been_updated_successfully"));
									return res.redirect(LISTING_URL+textSettingType);
								});
							}
							else{
								/** Send error response **/
								req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
								return res.redirect(LISTING_URL+textSettingType);
							}
						}
					);
				}
				else{
					/** Send error response **/
					req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again") );
					return res.redirect(LISTING_URL+textSettingType);
				}
			}
			else{
				
				let defaultLanguage = (textSettingType == TEXT_SETTINGS_ADMIN) ? DEFAULT_LANGUAGE_MONGO_ID : "";
				/** Get language list **/
				getLanguages(defaultLanguage).then((languageList)=>{
				
					/** Get cms details **/
					textSettingDetails(req,res,next).then(response=>{
						if(response.status != STATUS_SUCCESS){
							/** Send error response **/
							req.flash(STATUS_ERROR,response.message);
							return res.redirect(LISTING_URL+textSettingType);
						}
						
						formData = false;
						if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
							formData = req.session.formData;
							req.session.formData = null;
						}
						
						let textSettingName	= TEXT_SETTINGS_NAME[textSettingType];
						
						/** Render edit page **/
						req.breadcrumbs(brdObj.edit);
						res.render('add_edit',{
							result			: response.result,
							language_list	: languageList,
							type			: textSettingType,
							dynamic_variable: textSettingName+" Management",
							dynamic_url		: textSettingType,
							'error' : validationErrors, 
							'formData' : formData 
						});
					}).catch(next);	 
				});
			}
		}
		else{
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL+TEXT_SETTINGS_FRONT);
		}
	};//End editTextSetting()
	
	
	
	/**
	 * Function for get text setting's detail
	 *
	 * @param req		As Request Data
	 * @param res		As Response Data
	 *
	 * @return json
	 */
	let textSettingDetails = (req,res)=>{
		return new Promise(resolve=>{
			let textSettingId = (req.params.id) ? req.params.id : "";
			if(!textSettingId || textSettingId ==""){
				let response = {
					status	: STATUS_ERROR,
					message	: res.__("admin.system.invalid_access")
				};
				resolve(response);
			}else{
				try{
					/**Get text settings detials*/
					const textsettings = db.collection(TEXT_SETTING_COLLECTION);
					textsettings.findOne({
							_id : ObjectId(textSettingId)
						},
						{projection: {
							_id:1,key:1,value:1,modified:1,default_language_id:1,text_settings_descriptions:1
						}},(err, result)=>{
							if(result){
								/** Send success response **/
								let response = {
									status	: STATUS_SUCCESS,
									result	: result
								};
								resolve(response);
							}else{
								/** Send error response **/
								let response = {
									status	: STATUS_ERROR,
									message	: res.__("admin.system.invalid_access")
								};
								resolve(response);
							}
						}
					);
				}
				catch(e){
					/** Send error response */
					let response = {
						status	: STATUS_ERROR,
						message	: res.__("admin.system.something_going_wrong_please_try_again")
					};
					resolve(response);
				}
			}
		});
	};//End textSettingDetails()

	
	
	/**
	 * Function to write text setting file.
	 *
	 * @param null
	 *
	 * @return void
	 */
	let writeTextSettingFile = ()=>{
		return new Promise(resolve=>{
			try{
				const textsettings 		= 	db.collection(TEXT_SETTING_COLLECTION);
				const languages 		= 	db.collection(LANGUAGES_COLLECTION);
				
				languages.find({active : ACTIVE},{projection: {_id:1,folder_code:1}}).toArray((languageErr, languageResult)=>{
				
					if(!languageErr && languageResult && languageResult.length>0){
						
						let languageObject 		= 	{};
						let textSettingsObject 	= 	{};
						
						languageResult.forEach((languageRecord,languageIndex)=>{
							languageId 			=	(languageRecord["_id"]) 		? 	languageRecord["_id"] 			:"";
							languageFolderCode	= 	(languageRecord["folder_code"]) ?	languageRecord["folder_code"] 	:"";
							
							/** Create a Language Object With language id and folder code **/
							languageObject[languageId] 	= languageFolderCode;
						
							if(typeof textSettingsObject[languageFolderCode] === typeof undefined){
								textSettingsObject[languageFolderCode] = {};
							}
							
							
							
							
	if(languageResult.length-1 == languageIndex){
		if(Object.keys(languageObject).length > 0){
		
			/** Get All text settings **/
			textsettings.find({},{projection: {_id:1,key:1,value:1,text_settings_descriptions:1,modified:1}}).toArray((err, result)=>{
				if(!err){
					let textSettingsObject 	= {};
					result.forEach((record,arrayIndex)=>{
						let languageKey 	= (record.key)	 ? record.key 	: "";
						let languageValue 	= (record.value) ? record.value : "";
					
						/** Loop through Language Object and check that particular value is exist in this language or not, if not exist then use default langugae value **/
						Object.keys(languageObject).forEach((languageId,languageIndex)=>{
							
							folderCode = languageObject[languageId];
							
							/** Check Textsetting Folder code is undefined or not **/
							if(typeof textSettingsObject[folderCode] === typeof undefined){
								textSettingsObject[folderCode] = {};
							}
							
							/** Check Textsetting[Folder code][Text setting key] is undefined or not **/
							if(typeof textSettingsObject[folderCode][languageKey] === typeof undefined){
								textSettingsObject[folderCode][languageKey] = {};
							}
							
							
							/** Check if value is exist in a particular language or not **/
							if( 
								typeof record["text_settings_descriptions"] !== typeof undefined && 
								typeof record["text_settings_descriptions"][languageId] !== typeof undefined &&
								typeof record["text_settings_descriptions"][languageId]["value"] !== typeof undefined && 
								record["text_settings_descriptions"][languageId]["value"]!=""){
									textSettingsObject[folderCode][languageKey] = record["text_settings_descriptions"][languageId]["value"];
							}
							else{
								textSettingsObject[folderCode][languageKey] = languageValue;
							}
							
							
							/** check If result.length-1 == arrayIndex, means textsettings loop is on the last index then write file **/
							if(result.length-1 == arrayIndex){
								fsWriteFile(WEBSITE_ROOT_PATH+"locales/"+folderCode+".json", JSON.stringify(textSettingsObject[folderCode]), "utf8",()=>{});
								if(Object.keys(languageObject).length-1 == languageIndex){
									resolve();
								}
							}
						
						});
					
					});
				}
				else{
					resolve();
				}
			});
		}
		else{
			resolve();
		}
	}
							
						});
					}
					else{
						resolve();
					}
				});
			}
			catch(e){
				resolve();
			}
		});
	}
}
module.exports = new TextSetting();
