const asyncParallel = require("async/parallel");
const async = require("async");
const { ObjectId } = require('mongodb');

function Message() {



	/**
	 * Function for get   List
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 * @return render/json
	 */
	this.list = (req, res) => {

		const messages = db.collection(MESSAGES_COLLECTION);

		let user_role_id = (req.session.user.user_role_id) ? req.session.user.user_role_id : "";

		let commonConditions = { is_deleted: NOT_DELETED, active: ACTIVE };

		let limit = (req.body.length) ? parseInt(req.body.length) : FRONT_LISTING_LIMIT;
		let skip = (req.body.start) ? parseInt(req.body.start) : DEFAULT_SKIP;
		var page = req.params.page || 1;

		asyncParallel({

			records: (callback) => {

				messages.find({ active: ACTIVE }).sort({ _id: SORT_DESC }).limit(limit).skip((limit * page) - limit).toArray((err, result) => {					
					callback(err, result);
				});
			},
			total_count: (callback) => {
				/** Get total number of records in collection **/
				messages.countDocuments(commonConditions, (err, countResult) => {
					callback(err, countResult);

				});
			},	
			unread_message: (callback) => {
				/** Get total number of records in collection **/
				messages.countDocuments({is_deleted: NOT_DELETED, active: ACTIVE,is_read:INACTIVE}, (err, unreadCountResult) => {
					callback(err, unreadCountResult);

				});
			},		
		
		}, (err, response) => {

			console.log(response);
			/** Render to list page **/
			res.render("messages", {
				results: response.records,
				loginUserData: {},			
				user_role_id:user_role_id,
				recordsTotal: (response.total_count) ? response.total_count : 0,
				unreadMessage: (response.unread_message) ? response.unread_message : 0,
				current: page,
				pages: Math.ceil(response.total_count / limit)
			});

		});
	};//End list()


 




	/**
	 * Function for messagePopUp
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 * @return render/json
	 */
	this.messagePopUp = (req, res) => {

		const users = db.collection(USERS_COLLECTION);
		let tutorSlug = (req.body.tutorSlug) ? req.body.tutorSlug : "";
		let userId = (req.session.user) ? req.session.user._id : "";

		users.findOne({ _id: ObjectId(userId) }, (err, result) => {
			res.render('message_pop_up', { 'result': result, tutorSlug: tutorSlug });

		});

	}


	/**
		 * Function for saveMessage
		 *
		 * @param req As Request Data
		 * @param res As Response Data
		 *
		 * @return render/json
		 */
	this.saveMessage = (req, res, next, validationErrors) => {

		return new Promise(resolve => {
			if (isPost(req) && !(validationErrors)) {

				/** Sanitize Data **/
				req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
				let subject = (req.body.subject) ? req.body.subject : "";
				let message = (req.body.message) ? req.body.message : "";

				let tutorSlug = (req.params.tutorSlug) ? req.params.tutorSlug : "";
				let userId = (req.session.user) ? req.session.user._id : "";

				let currentTime = currentTimeStamp();

				const users = db.collection(USERS_COLLECTION);
				users.findOne({
					"slug": tutorSlug,
				}, { projection: { _id: 1, full_name: 1 } }, (err, result) => {
					if (result) {

						const messages = db.collection(MESSAGES_COLLECTION);

						messages.insertOne({
							thread_id: 0,
							sender_id: ObjectId(userId),
							receiver_id: ObjectId(result._id),
							subject: subject,
							message: message,
							thread_order: currentTime,
							is_read: INACTIVE,
							active: ACTIVE,
							is_deleted: NOT_DELETED,
							modified: getUtcDate(),
							created: getUtcDate()
						}, (err, result) => {
							if (err) return next(err);

							req.flash(STATUS_SUCCESS, "Message has been sent successfully.");

							let response = {
								status: STATUS_SUCCESS,
							};
							resolve(response);
						});
					}
				});


			}
			else {
				resolve({
					status: STATUS_ERROR,
					errors: validationErrors
				});
			}
		});
	};//End saveMessage()



};//End Message()




module.exports = new Message();
