const paginate = require('express-paginate');
const { ObjectId } = require('mongodb');
const brdObj = require(WEBSITE_ADMIN_MODULES_PATH + "/cms/breadcrumbs");


function Cms() {

	/**
	 * Listing URL
	 */
	const LISTING_URL = WEBSITE_ADMIN_URL + "cms";



	/**
	 * Function for get list of cms pages
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	this.getCmsList = (req, res) => {

		let limit = (req.body.length) ? parseInt(req.body.length) : ADMIN_LISTING_LIMIT;
		let skip = req.skip

		let title = (req.query.title) ? req.query.title : "";
		let statusSearch = (req.query.status) ? parseInt(req.query.status) : "";

		/** Set conditions **/
		var commonConditions = { is_deleted: NOT_DELETED };

		if (title != "") {
			commonConditions.title = new RegExp(title, 'i');
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

		const pages = db.collection(CMS_PAGE_COLLECTION);

		pages.find(commonConditions).skip(skip).limit(limit).sort({ title: SORT_ASC }).toArray(function (err, results) {
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
	};//End getCmsList()



	/**
	 * Function for view Cms's Detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render
	 */
	this.viewCmsDetails = (req, res, next) => {
		/** Get cms details **/
		getCmsDetails(req, res, next).then(response => {
			if (response.status != STATUS_SUCCESS) {
				/** Send error response **/
				req.flash(STATUS_ERROR, response.message);
				res.redirect(LISTING_URL);
				return;
			}

			/** Render edit page **/
			req.breadcrumbs(brdObj.view);
			res.render('view', { result: response.result });
		}).catch(next);
	};//End viewCmsDetails()	



	/**
	 * Function to get cms's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getCmsDetails = (req, res, next) => {
		return new Promise(resolve => {
			let cmsId = (req.params.id) ? req.params.id : "";
			/** Get Cms details **/
			const pages = db.collection(CMS_PAGE_COLLECTION);
			pages.findOne(
				{ _id: ObjectId(cmsId) },
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
							message: res.__("admin.cms.record_not_exists")
						};
						return resolve(response);
					}

					/** Set options for append image full path **/
					let options = {
						"result": [result]
					};

					/** Append image with full path **/
					appendFileExistData(options).then(fileResponse => {
						let response = {
							status: STATUS_SUCCESS,
							result: (fileResponse && fileResponse.result && fileResponse.result[0]) ? fileResponse.result[0] : {}
						};
						resolve(response);
					});
				}
			);
		});
	};// End getCmsDetails().



	/**
	 * Function to update cms's detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editCms = (req, res, next, validationErrors) => {
		if (isPost(req) && !validationErrors) {
			/** Sanitize Data **/
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
			let id = (req.params.id) ? req.params.id : "";

			let allData = req.body;
			let title = (req.body.title) ? req.body.title : "";
			let short_decription = (req.body.short_decription) ? req.body.short_decription : "";
			let decription = (req.body.decription) ? req.body.decription : "";
			let meta_title = (req.body.meta_title) ? req.body.meta_title : "";
			let meta_keywords = (req.body.meta_keywords) ? req.body.meta_keywords : "";
			let meta_decription = (req.body.meta_decription) ? req.body.meta_decription : "";


			/** Update cms details **/
			const pages = db.collection(CMS_PAGE_COLLECTION);
			pages.updateOne(
				{ _id: ObjectId(id) },
				{
					$set: {
						title: title,
						short_decription: short_decription,
						decription: decription,
						meta_title: meta_title,
						meta_keywords: meta_keywords,
						meta_decription: meta_decription,
						modified: getUtcDate()
					}
				},
				(err, result) => {
					if (err) {
						/** Send error response **/
						req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
						return res.redirect(LISTING_URL);
					}

					/** Send success response **/
					req.flash(STATUS_SUCCESS, res.__("admin.cms.record_updated_successfully"));
					res.redirect(LISTING_URL);
				}
			);

		}
		else {
			/** Get cms details **/
			getCmsDetails(req, res, next).then(response => {
				if (response.status != STATUS_SUCCESS) {
					/** Send error response **/
					req.flash(STATUS_ERROR, response.message);
					res.redirect(LISTING_URL);
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
					'formData': formData
				});
			}).catch(next);
		}
	};//End editCms()



	/**
	 * Function for add cms
	 *
	 * @param req 	As	Request Data
	 * @param res 	As	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.addCms = (req, res, next, validationErrors) => {
		if (isPost(req) && !validationErrors) {
			/** Sanitize Data */
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);

			let allData = req.body;
			let title = (req.body.title) ? req.body.title : "";
			let short_decription = (req.body.short_decription) ? req.body.short_decription : "";
			let decription = (req.body.decription) ? req.body.decription : "";
			let meta_title = (req.body.meta_title) ? req.body.meta_title : "";
			let meta_keywords = (req.body.meta_keywords) ? req.body.meta_keywords : "";
			let meta_decription = (req.body.meta_decription) ? req.body.meta_decription : "";

			/** Set options **/
			let options = {
				title: title,
				table_name: CMS_PAGE_COLLECTION,
				slug_field: "slug"
			};

			/** Make Slug */
			getDatabaseSlug(options).then(response => {
				/** Save Cms details */
				const pages = db.collection(CMS_PAGE_COLLECTION);
				pages.insertOne({
					title: title,
					short_decription: short_decription,
					decription: decription,
					meta_title: meta_title,
					meta_keywords: meta_keywords,
					meta_decription: meta_decription,
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

					req.flash(STATUS_SUCCESS, res.__("admin.cms.record_added_successfully"));
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
	this.updateCmsStatus = (req, res, next) => {
		let cmsId = (req.params.id) ? req.params.id : "";
		let cmsStatus = (req.params.status) ? req.params.status : "";

		if (!cmsId) {
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL);
		}

		/** Set update data **/
		let updateData = { modified: getUtcDate() };
		updateData.active = (cmsStatus == ACTIVE) ? DEACTIVE : ACTIVE;

		/** Update user status*/
		const pages = db.collection(CMS_PAGE_COLLECTION);
		pages.updateOne({ _id: ObjectId(cmsId) }, { $set: updateData }, (err, result) => {
			if (err) {
				/** Send error response **/
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.cms.record_updated_successfully"));
			return res.redirect(LISTING_URL);
		});
	};//End updateUserStatus()



	/**
	 * Function for delete cms
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.deleteCms = (req, res, next) => {
		let cmsId = (req.params.id) ? req.params.id : "";

		if (!cmsId) {
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL);
		}

		/** Set update data **/
		let updateData = { modified: getUtcDate(), is_deleted: DELETED };

		/** Update user status*/
		const pages = db.collection(CMS_PAGE_COLLECTION);
		pages.updateOne({ _id: ObjectId(cmsId) }, { $set: updateData }, (err, result) => {
			if (err) {
				/** Send error response **/
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.cms.record_deleted_successfully"));
			return res.redirect(LISTING_URL);
		});
	};//End deleteCms()

}
module.exports = new Cms();
