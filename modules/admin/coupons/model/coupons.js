const paginate = require('express-paginate');
const { ObjectId } = require('mongodb');
const brdObj = require(WEBSITE_ADMIN_MODULES_PATH + "/coupons/breadcrumbs");


function Coupons() {

	/**
	 * Listing URL
	 */
	const LISTING_URL = WEBSITE_ADMIN_URL + "coupons";



	/**
	 * Function for get list of cms pages
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	this.getList = (req, res) => {

		let limit = (req.body.length) ? parseInt(req.body.length) : ADMIN_LISTING_LIMIT;
		let skip = req.skip

		let coupon_code = (req.query.coupon_code) ? req.query.coupon_code : "";
		let statusSearch = (req.query.status) ? parseInt(req.query.status) : "";

		/** Set conditions **/
		var commonConditions = { is_deleted: NOT_DELETED };

		if (coupon_code != "") {
			commonConditions.coupon_code = new RegExp(coupon_code, 'i');
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

		const pages = db.collection(COUPONS_COLLECTION);

		pages.find(commonConditions).skip(skip).limit(limit).sort({ created: SORT_DESC }).toArray(function (err, results) {
			if (err) throw err;

			pages.find(commonConditions).count(function (errCount, itemCount) {
				if (errCount) throw errCount;

				let pageCount = Math.ceil(itemCount / limit);

				req.breadcrumbs(brdObj.list);

				res.render('list', {
					results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
				});
			});
		});
	};//End getList()



	/**
		 * Function for add coupon
		 *
		 * @param req 	As	Request Data
		 * @param res 	As	Response Data
		 * @param next 	As 	Callback argument to the middleware function
		 *
		 * @return render/json
		 */
	this.add = (req, res, next, validationErrors) => {
		if (isPost(req) && !validationErrors) {
			/** Sanitize Data */
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);

			let allData = req.body;

			let coupon_code = (req.body.coupon_code) ? req.body.coupon_code : "";
			let description = (req.body.description) ? req.body.description : "";
			let discounttype = (req.body.discounttype) ? req.body.discounttype : "";
			let discount = (req.body.discount) ? req.body.discount : 0;
			let max_discount_allowed = (req.body.max_discount_allowed) ? req.body.max_discount_allowed : "";
			let usage_limit = (req.body.usage_limit) ? req.body.usage_limit : "";
			let quantity = (req.body.quantity) ? req.body.quantity : "";
			let startdate = (req.body.startdate) ? dateToTimeStamp(req.body.startdate) : "";
			let lastdate = (req.body.lastdate) ? dateToTimeStamp(req.body.lastdate) : "";

			/** Set options **/
			let options = {
				title: coupon_code,
				table_name: COUPONS_COLLECTION,
				slug_field: "slug"
			};

			/** Make Slug */
			getDatabaseSlug(options).then(response => {
				/** Save coupon details */
				const pages = db.collection(COUPONS_COLLECTION);
				pages.insertOne({
					coupon_code: coupon_code,
					description: description,
					discounttype: discounttype,
					discount: discount,
					max_discount_allowed: max_discount_allowed,
					usage_limit: usage_limit,
					quantity: quantity,
					startdate: startdate,
					lastdate: lastdate,
					slug: (response && response.title) ? response.title : "",
					active: ACTIVE,
					is_deleted: NOT_DELETED,
					created: getUtcDate(),
					modified: getUtcDate()
				}, (err, result) => {
					if (err) {
						/** Send error response **/
						req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
						return res.redirect(LISTING_URL);
					}

					req.flash(STATUS_SUCCESS, res.__("admin.coupons.record_added_successfully"));
					return res.redirect(LISTING_URL);
				});
			}, error => {
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL);
			});
		}
		else {

			formData = false;
			if ((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)) {
				formData = req.session.formData;
				req.session.formData = null;
			}

			req.breadcrumbs(brdObj.add);
			res.render("add_edit", { 'error': validationErrors, 'formData': formData });
		}
	};//End addCms()



	/**
	 * Function for update cms's status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateStatus = (req, res, next) => {
		let Id = (req.params.id) ? req.params.id : "";
		let Status = (req.params.status) ? req.params.status : "";

		if (!Id) {
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL);
		}

		/** Set update data **/
		let updateData = { modified: getUtcDate() };
		updateData.active = (Status == ACTIVE) ? DEACTIVE : ACTIVE;

		/** Update user status*/
		const pages = db.collection(COUPONS_COLLECTION);
		pages.updateOne({ _id: ObjectId(Id) }, { $set: updateData }, (err, result) => {
			if (err) {
				/** Send error response **/
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.coupons.record_updated_successfully"));
			return res.redirect(LISTING_URL);
		});
	};//End updateUserStatus()






	// /**
	//  * Function for view Detail
	//  *
	//  * @param req 	As 	Request Data
	//  * @param res 	As 	Response Data
	//  * @param next 	As 	Callback argument to the middleware function
	//  *
	//  * @return render
	//  */
	// this.viewDetails = (req, res, next) => {
	// 	/** Get cms details **/
	// 	getDetails(req, res, next).then(response => {
	// 		if (response.status != STATUS_SUCCESS) {
	// 			/** Send error response **/
	// 			req.flash(STATUS_ERROR, response.message);
	// 			res.redirect(LISTING_URL);
	// 			return;
	// 		}

	// 		/** Render edit page **/
	// 		req.breadcrumbs(brdObj.view);
	// 		res.render('view', { result: response.result });
	// 	}).catch(next);
	// };//End viewDetails()	



	// /**
	//  * Function to get cms's detail
	//  *
	//  * @param req	As	Request Data
	//  * @param res	As	Response Data
	//  * @param next	As 	Callback argument to the middleware function
	//  *
	//  * @return json
	//  */
	// let getDetails = (req, res, next) => {
	// 	return new Promise(resolve => {
	// 		let Id = (req.params.id) ? req.params.id : "";
	// 		/** Get  details **/
	// 		const pages = db.collection(COUPONS_COLLECTION);
	// 		pages.findOne(
	// 			{ _id: ObjectId(Id) },
	// 			(err, result) => {
	// 				if (err) return next(err);

	// 				if (!result) {
	// 					/** Send error response **/
	// 					let response = {
	// 						status: STATUS_ERROR,
	// 						message: res.__("admin.system.invalid_access")
	// 					};
	// 					return resolve(response);
	// 				}

	// 				if (result && result.is_deleted == DELETED) {
	// 					/** Send error response **/
	// 					let response = {
	// 						status: STATUS_ERROR,
	// 						message: res.__("admin.coupons.record_not_exists")
	// 					};
	// 					return resolve(response);
	// 				}

	// 				/** Set options for append image full path **/
	// 				let options = {
	// 					"result": [result]
	// 				};

	// 				/** Append image with full path **/
	// 				appendFileExistData(options).then(fileResponse => {
	// 					let response = {
	// 						status: STATUS_SUCCESS,
	// 						result: (fileResponse && fileResponse.result && fileResponse.result[0]) ? fileResponse.result[0] : {}
	// 					};
	// 					resolve(response);
	// 				});
	// 			}
	// 		);
	// 	});
	// };// End getDetails().



}
module.exports = new Coupons();
