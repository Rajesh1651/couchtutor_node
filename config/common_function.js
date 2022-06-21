const { createTransport } = require("nodemailer");
const timeDate = require('date-and-time');
const slug = require("slug");
const clone = require("clone");
const fs = require('fs')
var randomstring = require("randomstring");
const { ObjectId } = require('mongodb');
const { renderFile } = require("ejs");

/**
 * To check request method is post or get
 *
 * @param req	As Request Data
 * @param res	As Response Data
 *
 * @return boolean
 */
isPost = (req) => {
	if (typeof req.body !== typeof undefined && Object.keys(req.body).length != 0) {
		return true;
	} else {
		return false;
	}
}//End isPost()



/**
 * Function for sanitize form data
 *
 * @param data				As Request Body
 * @param notAllowedTags	As Array of not allowed tags
 *
 * @return json
 */
sanitizeData = (data, notAllowedTags) => {
	let sanitized = arrayStripTags(data, notAllowedTags);
	return sanitized;
};//End sanitizeData()



/**
 * Function to strip not allowed tags from array
 *
 * @param array				As Data Array
 * @param notAllowedTags	As Tags to be removed
 *
 * @return array
 */
arrayStripTags = (array, notAllowedTags) => {
	if (array.constructor === Object) {
		var result = {};
	} else {
		var result = [];
	}
	for (let key in array) {
		let value = (array[key] != null) ? array[key] : '';
		if (value.constructor === Array || value.constructor === Object) {
			result[key] = arrayStripTags(value, notAllowedTags);
		} else {
			result[key] = stripHtml(value.toString().trim(), notAllowedTags);
		}
	}
	return result;
};//End arrayStripTags()



/**
 * Function to Remove Unwanted tags from html
 *
 * @param html				As Html Code
 * @param notAllowedTags	As Tags to be removed
 *
 * @return html
 */
stripHtml = (html, notAllowedTags) => {
	let unwantedTags = notAllowedTags;
	for (let j = 0; j < unwantedTags.length; j++) {
		html = html.replace(unwantedTags[j], '');
	}
	return html;
};//end stripHtml();


/**
 * Function to get current timestamp
 *
 * @param null
 *
 * @return timestamp
 */
currentTimeStamp = () => {
	return new Date().getTime();
};//end currentTimeStamp();



/**
 * Function to send Email
 *
 * @param to		As Recipient Email Address
 * @param repArray  As Response Array
 * @param action  	As Email Action
 *
 * @return array
 */
sendMail = (req, res, options) => {
	try {
		let to = (options && options.to) ? options.to : "";
		let repArray = (options && options.rep_array) ? options.rep_array : "";
		let action = (options && options.action) ? options.action : "";
		let attachments = (options && options.attachments) ? options.attachments : "";
		let subject = (options && options.subject) ? options.subject : "";

		let userEmail = res.locals.settings["Email.user_email"];
		let emailHost = res.locals.settings["Email.host"];
		let emailPassword = res.locals.settings["Email.password"];
		let emailUserName = res.locals.settings["Email.user_name"];
		let emailPort = res.locals.settings["Email.port"];

		const transporter = createTransport({
			host: emailHost,
			port: emailPort,
			secure: (emailPort == 465) ? true : false, // true for 465, false for other ports
			auth: {
				user: userEmail, // generated ethereal user
				pass: emailPassword // generated ethereal password
			},
			tls: {
				rejectUnauthorized: true
			}
		});

		const email_templates = db.collection(EMAIL_TEMPLATE_COLLECTION);
		const email_actions = db.collection(EMAIL_ACTION_COLLECTION);

		/** Get Email template details **/
		email_templates.findOne({
			action: action
		}, { projection: { _id: 1, name: 1, subject: 1, body: 1 } }, (err, result) => {
			if (!err && result) {

				let emailTemplateResult = result;

				/** Get Email action details **/
				email_actions.findOne({
					action: action
				},
					{ projection: { _id: 1, options: 1 } }, (emailErr, emailResult) => {
						if (!emailErr && emailResult) {

							let actionData = emailResult;
							let actionOptions = actionData.options.toString().split(",");
							let body = emailTemplateResult.body;
							subject = (subject) ? subject : emailTemplateResult.subject;
							actionOptions.forEach((value, key) => {
								body = body.replace(RegExp('{' + value + '}', 'g'), repArray[key]);
							});

							/** get email layout **/
							renderFile(WEBSITE_LAYOUT_PATH + 'email.html', { settings: res.locals.settings }, '', (err, html) => {
								html = html.replace(RegExp('{{MESSAGE_BODY}}', 'g'), body);
								let mailOptions = {
									from: emailUserName,
									to: to,
									subject: subject,
									html: html
								};

								/** Send  attachment **/
								if (attachments) {
									mailOptions["attachments"] = {
										path: attachments
									};
								}

								/**Send email
								transporter.sendMail(mailOptions,(error, info)=>{
									const email_logs = db.collection(EMAIL_LOG_COLLECTION);
									mailOptions.is_sent = (error) ? false :true;
									mailOptions.error	= error;
									mailOptions.created = getUtcDate();
									email_logs.insertOne(mailOptions);
	
									if(error){
										console.error('error');
										return console.error(error);
									}
								});
								*/

								const email_logs = db.collection(EMAIL_LOG_COLLECTION);
								mailOptions.is_sent = true;
								mailOptions.error = '';
								mailOptions.created = getUtcDate();
								email_logs.insertOne(mailOptions);

							});
						} else {
							return console.log('Error in email action');
						}
					})
			} else {
				return console.log('Error in email template');
			}
		})
	} catch (e) {
		console.log("email error in sendMail function");
		console.log(e);
	}
};//end sendMail();



/**
 * Function to get date in any format
 *
 * @param date 		as	Date object
 * @param format 	as 	Date format
 *
 * @return date string
 */
newDate = (date, format) => {
	if (date) {
		var now = new Date(date);
	} else {
		var now = new Date();
	}
	if (format) {
		return timeDate.format(now, format);
	} else {
		return now;
	}
};//end newDate();



/**
 * Function to get date in any format with utc format
 *
 * @param date 		as	Date object
 * @param format 	as 	Date format
 *
 * @reference Site : https://www.npmjs.com/package/dateformat
 *
 * @return date string
 */
getUtcDate = (date, format) => {
	if (date) {
		var now = new Date(date);
	} else {
		var now = new Date();
	}

	if (format) {
		return timeDate.format(now, format);
	}
	else {
		return now;
	}
};//end getUtcDate();



/**
 * Function to upload image
 *
 * @param options	As data in Object
 *
 * @return json
 */
moveUploadedFile = (req, res, options) => {
	return new Promise(resolve => {
		let image = (options && options.image) ? options.image : "";
		let filePath = (options && options.filePath) ? options.filePath : "";
		let oldPath = (options && options.oldPath) ? options.oldPath : "";
		let allowedExtensions = (options && options.allowedExtensions) ? options.allowedExtensions : ALLOWED_IMAGE_EXTENSIONS;
		let allowedImageError = (options && options.allowedImageError) ? options.allowedImageError : ALLOWED_IMAGE_ERROR_MESSAGE;
		let allowedMimeTypes = (options && options.allowedMimeTypes) ? options.allowedMimeTypes : ALLOWED_IMAGE_MIME_EXTENSIONS;
		let allowedMimeError = (options && options.allowedMimeError) ? options.allowedMimeError : ALLOWED_IMAGE_MIME_ERROR_MESSAGE;

		/** Send success response **/
		if (image == '') return resolve({ status: STATUS_SUCCESS, fileName: oldPath });

		let fileData = (image.name) ? image.name.split('.') : [];
		let imageName = (image.name) ? image.name : '';

		let extension = (fileData) ? fileData.pop().toLowerCase() : '';

		/** Send error response **/
		if (allowedExtensions.indexOf(extension) == -1) return resolve({ status: STATUS_ERROR, message: allowedImageError });

		/** Create new folder of this month *
		let newFolder	= 	(newDate("","mmm")+ newDate("","yyyy")).toUpperCase()+'/';
		createFolder(filePath+newFolder);
		let newFileName 	= newFolder + Date.now()+ '-' +changeFileName(imageName);
		*/

		let newFileName = Date.now() + '-' + changeFileName(imageName);
		let uploadedFile = filePath + newFileName;

		/** move image to folder*/
		image.mv(uploadedFile, (err) => {
			if (err) {
				/** Send error response **/
				return resolve({
					status: STATUS_ERROR,
					message: "Something went wrong, Please try again."
				});
			}

			/** check mime type
			exec('file --mime-type -b '+uploadedFile,(err, out, code)=>{
				if (allowedMimeTypes.indexOf(out.trim()) == -1){
					unlink(uploadedFile,(err)=>{
						if (err){
							return resolve({
								status	: 	STATUS_ERROR,
								message	:	res.__("admin.system.something_going_wrong_please_try_again")
							});
						}

						resolve({
							status	: 	STATUS_ERROR,
							message	:	allowedMimeError
						});
					});
				}
				else{
				*/
			/** Send success response **/
			resolve({ status: STATUS_SUCCESS, fileName: newFileName });

			/** remove old images*/
			if (oldPath) removeFile({ file_path: filePath + oldPath }).then((imageResponse) => { });
			/*
			}
		});
		*/
		});
	});
};//End moveUploadedFile()



/**
 * Function for remove file from root path
 *
 * @param options As data in file root path
 *
 * @return json
 */
removeFile = (options) => {
	return new Promise(resolve => {
		var filePath = (options.file_path) ? options.file_path : "";
		let response = {
			status: STATUS_SUCCESS
		};

		if (filePath != "") {
			/** remove file **/
			fs.unlink(filePath, (err) => {
				if (!err) {
					/** Send success response **/
					resolve(response);
				} else {
					/** Send error response **/
					response.status = STATUS_ERROR;
					resolve(response);
				}
			});
		} else {
			/** Send error response **/
			response.status = STATUS_ERROR;
			resolve(response);
		}
	})
};//end removeFile()



/**
 * Function for change file name
 *
 * @param fileName AS File Name
 *
 * @return filename
 */
changeFileName = (fileName) => {
	let fileData = (fileName) ? fileName.split('.') : [];
	let extension = (fileData) ? fileData.pop() : '';
	fileName = fileName.replace('.' + extension, '');
	fileName = fileName.replace(RegExp('[^0-9a-zA-Z\.]+', 'g'), '');
	fileName = fileName.replace('.', '');
	return fileName + '.' + extension;
};//end changeFileName();



/**
 * Function to get data base slug
 *
 * @param tableName AS Table Name
 * @param title AS Title
 * @param slugField AS Slug Field Name in database
 *
 * @return string
 */
getDatabaseSlug = (options) => {
	return new Promise(resolve => {
		let tableName = (options && options.table_name) ? options.table_name : "";
		let title = (options && options.title) ? options.title : "";
		let slugField = (options && options.slug_field) ? options.slug_field : "";

		if (title == '' || tableName == "") return resolve({ title: "", options: options });

		let convertTitleIntoSlug = slug(title).toLowerCase();
		let collectionName = db.collection(String(tableName));

		/** Set conditions **/
		let conditions = {};
		conditions[slugField] = { $regex: new RegExp(convertTitleIntoSlug, "i") };

		/** Get count from table **/
		collectionName.countDocuments(conditions, (err, count) => {
			/** Send response **/
			resolve({
				title: (count > 0) ? convertTitleIntoSlug + '-' + count : convertTitleIntoSlug
			});
		});

	});
};//end getDatabaseSlug();



/**
 * Function to Make full image path and check file is exist or not
 *
 * @param options As data in Object format (like :-  file url,file path,result,database field name)
 *
 * @return json
 */
appendFileExistData = (options) => {
	return new Promise(resolve => {
		var fileUrl = (options.file_url) ? options.file_url : "";
		var filePath = (options.file_path) ? options.file_path : "";
		var result = (options.result) ? clone(options.result) : "";
		var databaseField = (options.database_field) ? options.database_field : "";
		var image_placeholder = (options.image_placeholder) ? options.image_placeholder : IMAGE_FIELD_NAME;
		var noImageAvailable = (options.no_image_available) ? options.no_image_available : NO_IMAGE_AVAILABLE;
		var multitoSingleImg = (options.multi_single_img) ? options.multi_single_img : "";
		if (result.length > 0) {
			let index = 0;
			result.forEach((record, recordIndex) => {
				var file = (record[databaseField] != '' && record[databaseField] != undefined) ? filePath + record[databaseField] : '';
				result[recordIndex][image_placeholder] = noImageAvailable;
				/** Set check file data **/
				let checkFileData = {
					"file": file,
					"file_url": fileUrl,
					"image_name": record[databaseField],
					"record_index": recordIndex,
					"no_image_available": noImageAvailable
				}

				checkFileExist(checkFileData).then((fileResponse) => {
					let recordIndexResponse = (typeof fileResponse.record_index !== typeof undefined) ? fileResponse.record_index : "";
					let imageResponse = (fileResponse.file_url) ? fileResponse.file_url : "";
					result[recordIndexResponse][image_placeholder] = imageResponse;

					if (result.length - 1 == index) {
						/** Send response **/
						let response = {
							result: result
						};
						resolve(response);
					}
					index++;
				});
			});
		} else {
			if (multitoSingleImg) result.push({ image: 'no-image.jpg', _id: "", full_image_path: noImageAvailable });
			/** Send response **/
			let response = {
				result: result
			};
			resolve(response);
		}
	});
};//End appendFileExistData()



/**
 * Function to check a file is exist in folder or not
 *
 * @param options As data in Object format (like :-  file,file url,image name,index)
 *
 * @return  json
 */
checkFileExist = (options) => {
	return new Promise(resolve => {
		var file = (options.file) ? options.file : "";
		var fileUrl = (options.file_url) ? options.file_url : "";
		var imageName = (options.image_name) ? options.image_name : "";
		var recordIndex = (typeof options.record_index !== typeof undefined) ? options.record_index : "";
		var noImageAvailable = (options.no_image_available) ? options.no_image_available : "";

		if (fs.existsSync(file)) {
			/** Send response **/
			let response = {
				file_url: fileUrl + imageName,
				record_index: recordIndex
			};
			resolve(response);
		}
		else {
			/** Send response **/
			let response = {
				file_url: (noImageAvailable) ? noImageAvailable : NO_IMAGE_AVAILABLE,
				record_index: recordIndex
			};
			resolve(response);
		}
	});
};//end checkFileExist()



/**
 *  Function to generate a random sting
 *
 * @param req 		As Request Data
 * @param res 		As Response Data
 * @param options	As options
 *
 * @return string
 */
getRandomString = (req, res, options) => {
	return new Promise(resolve => {
		let srtingLength = (options && options.srting_length) ? parseInt(options.srting_length) : DEFAULT_RANDOM_NUMBER_LENGTH;

		/**Generate random string **/
		let unique = randomstring.generate({
			length: srtingLength,
			charset: 'alphanumeric',
			capitalization: 'uppercase'
		});

		return resolve({
			status: STATUS_SUCCESS,
			result: unique
		});
	});
}//End getRandomString()



/**
 *  Function to get dropdown list with html
 *
 * @param req 				As Request Data
 * @param res 				As Response Data
 * @param options			As options
 *
 * @return object
 */
getDropdownList = (req, res, next, options) => {
	return new Promise(resolve => {

		var collections = (options.collections) ? options.collections : {};
		var responseSend = false;
		var finalHtmlData = {};
		if (collections && collections.length > 0) {
			let index = 0;
			collections.map((collectionRecords, j) => {
				let collection = (collectionRecords["collection"]) ? collectionRecords["collection"] : "";
				let selectedValues = (collectionRecords["selected"]) ? collectionRecords["selected"] : [];
				let columns = (collectionRecords.columns) ? collectionRecords.columns : [];
				let columnKey = (columns[0]) ? columns[0] : "";
				let columnValue = (columns[1]) ? columns[1] : "";
				let conditions = (collectionRecords.conditions) ? collectionRecords.conditions : {};// First parameter should be key, and second should be value
				let finalHtml = "";
				if (columnKey && columnValue && conditions) {
					let sortConditions = {};
					sortConditions[columnValue] = SORT_ASC;

					if (collectionRecords["sort_conditions"]) {
						sortConditions = collectionRecords["sort_conditions"];
					}

					let finalColumns = {};
					finalColumns[columnKey] = 1;
					finalColumns[columnValue] = 1;

					var collectionObject = db.collection(collection);
					collectionObject.find(
						conditions,
						finalColumns
					).collation(COLLATION_VALUE).sort(sortConditions).toArray((err, result) => {


						if (!err) {
							for (let i = 0; i < result.length; i++) {
								let records = (result[i]) ? result[i] : "";
								let selectedHtml = "";
								for (let i = 0; i < selectedValues.length; i++) {
									if (String(selectedValues[i]) == String(records[columnKey])) {
										selectedHtml = 'selected="selected"';
									}
								}
								finalHtml += '<option value="' + records[columnKey] + '" ' + selectedHtml + '>' + records[columnValue] + '</option>';
							}
							finalHtmlData[j] = finalHtml;
							if (Object.keys(collections).length - 1 == index) {
								if (!responseSend) {
									let resolveResponse = {
										status: STATUS_SUCCESS,
										final_html_data: finalHtmlData
									}
									resolve(resolveResponse);
								}
							}
						}
						else {
							if (!responseSend) {
								let resolveResponse = {
									status: STATUS_ERROR,
									message: res.__("admin.system.something_going_wrong_please_try_again")
								}
								resolve(resolveResponse);
							}
						}
						index++;
					});
				}
				else {
					if (!responseSend) {
						let resolveResponse = {
							status: STATUS_ERROR,
							message: res.__("admin.system.missing_parameters")
						}
						resolve(resolveResponse);
					}
					index++;
				}
			});
		}
		else {
			let resolveResponse = {
				status: STATUS_ERROR,
				message: res.__("admin.system.missing_parameters")
			}
			resolve(resolveResponse);
		}
	});
}//End getDropdownList()



/**
 * function is used to update user wise module flag
 *
 * @param userId as User Id
 * @param data as Data to be updated
 * @param type as update Type : delete/add/get
 *
 * @return regular expression
 */
userModuleFlagAction = (userId, data, type) => {
	var adminModulesList = myCache.get("admin_modules_list");
	if (typeof adminModulesList === typeof undefined) {
		adminModulesList = {};
	}
	if (type == "add") {
		adminModulesList[userId] = data;
		myCache.set("admin_modules_list", adminModulesList, 0);
		return true;
	} else if (type == "delete") {
		delete adminModulesList[userId];
		myCache.set("admin_modules_list", adminModulesList, 0);
		return true;
	} else if (type == "get") {
		return adminModulesList[userId];
	}
}//end userModuleFlagAction



/**
 * Function for get languages list
 *
 * @param defaultLanguage	As Default Language
 *
 * @return json
 */
getLanguages = (defaultLanguage) => {
	return new Promise(resolve => {
		try {
			/** Set  Conditios **/
			if (!defaultLanguage) {
				var conditions = { active: ACTIVE };
			} else {
				var conditions = { '_id': ObjectId(defaultLanguage), active: ACTIVE };
			}


			/** Get Language List **/
			var languages = db.collection(LANGUAGES_COLLECTION);
			languages.find(
				conditions
			).toArray((err, result) => {
				if (result) {
					/** Send success response **/
					resolve(result);
				} else {
					/** Send blank response **/
					resolve([]);
				}
			});
		} catch (e) {
			/** Send blank response **/
			resolve([]);
		}
	});
}//End getLanguages()



/**
 * Function for make string to title case
 *
 * @param str AS String
 *
 * @return string
 */
toTitleCase = (str) => {
	return str.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};//end toTitleCase();






/**
 * Function for get user detail
 *
 * @param defaultLanguage	As Default Language
 *
 * @return json
 */
getUserDetailById = (userId) => {

	return new Promise(resolve => {
		try {

			/** Set  Conditios **/
			var conditions = { '_id': userId, active: ACTIVE };

			const users = db.collection(USERS_COLLECTION);
			users.findOne(conditions, (err, result) => {

				if (result) {
					/** Send success response **/
					resolve(result);
				} else {
					/** Send blank response **/
					resolve([]);
				}
			});
		} catch (e) {
			/** Send blank response **/
			resolve([]);
		}
	});


}//End getUserDetailById()


