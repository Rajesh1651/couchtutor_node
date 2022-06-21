const paginate = require('express-paginate');
const { ObjectId } = require('mongodb');
const brdObj = require(WEBSITE_ADMIN_MODULES_PATH + "/plans/breadcrumbs");

function Plans() {

	/**
	 * Listing URL
	 */

	const LISTING_URL = WEBSITE_ADMIN_URL + "plans";


	/**
	 * Function for get list of plans pages
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	this.getList = (req, res) => {

		let type = (req.params.type) ? (req.params.type) : "";
		let limit = (req.body.length) ? parseInt(req.body.length) : ADMIN_LISTING_LIMIT;
		let skip = req.skip

		let plan_name = (req.query.plan_name) ? req.query.plan_name : "";
		let statusSearch = (req.query.status) ? parseInt(req.query.status) : "";

		/** Set conditions **/
		var commonConditions = { plan_type: type, is_deleted: NOT_DELETED };

		if (plan_name != "") {
			commonConditions.plan_name = new RegExp(plan_name, 'i');
		}

		if (statusSearch != "") {
			switch (statusSearch) {
				case SEARCHING_ACTIVE:
					commonConditions.active = ACTIVE;
					break;

				case SEARCHING_DEACTIVE:
					commonConditions.active = DEACTIVE;
					break;
			}
		}

		const pages = db.collection(PLANS_COLLECTION);

		pages.find(commonConditions).skip(skip).limit(limit).sort({ plan_name: SORT_ASC }).toArray(function (err, results) {
			if (err) throw err;

			pages.find(commonConditions).count(function (errCount, itemCount) {
				if (errCount) throw errCount;

				let pageCount = Math.ceil(itemCount / limit);
				req.breadcrumbs(brdObj.list);

				res.render('list', {
					results, type,dynamic_variable:type, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
				});
			});
		});
	};//End getList()


	/**
		 * Function for add plan
		 *
		 * @param req 	As	Request Data
		 * @param res 	As	Response Data
		 * @param next 	As 	Callback argument to the middleware function
		 *
		 * @return render/json
		 */
	this.add = (req, res, next, validationErrors) => {

		let type = (req.params.type) ? (req.params.type) : "";

		if (isPost(req) && !validationErrors) {
			/** Sanitize Data */

			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);

			let allData = req.body;

			let plan_name = (req.body.plan_name) ? req.body.plan_name : "";
			let plan_price = (req.body.plan_price) ? parseFloat(req.body.plan_price).toFixed(2) : 0.00;
			let plan_duration = (req.body.plan_duration) ? req.body.plan_duration : "";
			let plan_hours = (req.body.plan_hours) ? req.body.plan_hours : "";
			let plan_order = (req.body.plan_order) ? req.body.plan_order : "";
			let description = (req.body.description) ? req.body.description : "";


			/** Set options **/
			let options = {
				title: plan_name,
				table_name: PLANS_COLLECTION,
				slug_field: "slug"
			};

			// /** Make Slug */
			getDatabaseSlug(options).then(response => {
				/** Save plan details */
				const pages = db.collection(PLANS_COLLECTION);
				pages.insertOne({
					slug: (response && response.title) ? response.title : "",
					plan_name: plan_name,
					plan_price: plan_price,
					plan_duration: plan_duration,
					plan_hours: plan_hours,
					description: description,
					plan_order: plan_order,
					plan_type: type,
					active: ACTIVE,
					is_recommended: DEACTIVE,
					is_deleted: NOT_DELETED,
					created: getUtcDate(),
					modified: getUtcDate()
				}, (err, result) => {
					if (err) {
						/** Send error response **/
						req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
						return res.redirect(LISTING_URL + '/' + type);
					}

					req.flash(STATUS_SUCCESS, res.__("admin.plans.record_added_successfully"));
					return res.redirect(LISTING_URL + '/' + type);
				});

			}, error => {
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL + '/' + type);

			});
		}
		else {

			formData = false;
			if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
				formData = req.session.formData;
				req.session.formData = null;
			}

			req.breadcrumbs(brdObj.add);
			res.render("add_edit", { 'error': validationErrors, 'formData': formData, 'type': type, dynamic_url: type,dynamic_variable:type });
		}
	};//End add()


	/**
	 * Function to get Plan's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getDetails = (req, res, next) => {
		return new Promise(resolve => {
			let planId = (req.params.id) ? req.params.id : "";
			/** Get Plan details **/
			const pages = db.collection(PLANS_COLLECTION);
			pages.findOne(
				{ _id: ObjectId(planId) },
				(err, result) => {
					if (err) return next(err);

					if (!result) {
						/** Send error response **/
						let response = {
							status: STATUS_ERROR,
							message: res.__("admin.system.invalid_access")
						};
						return resolve(response);
					}

					if (result && result.is_deleted == DELETED) {
						/** Send error response **/
						let response = {
							status: STATUS_ERROR,
							message: res.__("admin.plans.record_not_exists")
						};
						return resolve(response);
					}


					let response = {
						status: STATUS_SUCCESS,
						result: result,
					};

					resolve(response);
				}
			);
		});
	};// End getDetails().



	/**
	 * Function to update Plan's detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.edit = (req, res, next, validationErrors) => {

		let type = (req.params.type) ? (req.params.type) : "";

		if (isPost(req) && !validationErrors) {
			/** Sanitize Data **/
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
			let id = (req.params.id) ? req.params.id : "";

			let allData = req.body;

			let plan_name = (req.body.plan_name) ? req.body.plan_name : "";
			let plan_price = (req.body.plan_price) ? parseFloat(req.body.plan_price).toFixed(2) : 0.00;
			let plan_duration = (req.body.plan_duration) ? req.body.plan_duration : "";
			let plan_hours = (req.body.plan_hours) ? req.body.plan_hours : "";
			let plan_order = (req.body.plan_order) ? req.body.plan_order : "";
			let description = (req.body.description) ? req.body.description : "";

			/** Update plan details **/
			const pages = db.collection(PLANS_COLLECTION);
			pages.updateOne(
				{ _id: ObjectId(id) },
				{
					$set: {
						plan_name: plan_name,
						plan_price: plan_price,
						plan_duration: plan_duration,
						plan_hours: plan_hours,
						description: description,
						plan_order: plan_order,
						modified: getUtcDate()
					}
				},
				(err, result) => {
					if (err) {
						/** Send error response **/
						req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
						return res.redirect(LISTING_URL + '/' + type);
					}

					/** Send success response **/
					req.flash(STATUS_SUCCESS, res.__("admin.plans.record_updated_successfully"));
					res.redirect(LISTING_URL + '/' + type);
				}
			);


		}
		else {
			/** Get Plan details **/
			getDetails(req, res, next).then(response => {
				if (response.status != STATUS_SUCCESS) {
					/** Send error response **/
					req.flash(STATUS_ERROR, response.message);
					res.redirect(LISTING_URL + '/' + type);
					return;
				}

				formData = false;
				if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
					formData = req.session.formData;
					req.session.formData = null;
				}

				/** Render edit page **/
				req.breadcrumbs(brdObj.edit);
				res.render('add_edit', {
					result: response.result,
					'error': validationErrors,
					'formData': formData,
					'type': type,
					dynamic_url: type,
					dynamic_variable:type
				});
			}).catch(next);
		}
	};//End edit()



	/**
	 * Function for update Plan's status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateStatus = (req, res, next) => {

		let type = (req.params.type) ? (req.params.type) : "";
		let planId = (req.params.id) ? req.params.id : "";
		let planStatus = (req.params.status) ? req.params.status : "";

		if (!planId) {
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL + '/' + type);
		}

		/** Set update data **/
		let updateData = { modified: getUtcDate() };
		updateData.active = (planStatus == ACTIVE) ? DEACTIVE : ACTIVE;

		/** Update user status*/
		const pages = db.collection(PLANS_COLLECTION);
		pages.updateOne({ _id: ObjectId(planId) }, { $set: updateData }, (err, result) => {
			if (err) {
				/** Send error response **/
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL + '/' + type);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.plans.record_updated_successfully"));
			return res.redirect(LISTING_URL + '/' + type);
		});
	};//End updateStatus()



	/**
	 * Function for update plan's  recommended status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateRecommendedStatus = (req, res, next) => {

		let type = (req.params.type) ? (req.params.type) : "";
		let planId = (req.params.id) ? req.params.id : "";

		if (!planId) {
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL + '/' + type);
		}

		/** Set update data **/
		let updateData = { modified: getUtcDate() };

		
		/** Update user status*/
		const pages = db.collection(PLANS_COLLECTION);


		pages.update({plan_type : type},{ $set: {is_recommended: DEACTIVE} }, (err, result) => {
		

			updateData.is_recommended = ACTIVE;

			pages.updateOne({ _id: ObjectId(planId) }, { $set: updateData}, (err, result) => {

				if (err) {
					/** Send error response **/
					req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
					return res.redirect(LISTING_URL + '/' + type);
				}

				/** Send success response **/
				req.flash(STATUS_SUCCESS, res.__("admin.plans.record_updated_successfully"));
				return res.redirect(LISTING_URL + '/' + type);
			});
		});


	};//End updateStatus()


}
module.exports = new Plans();
