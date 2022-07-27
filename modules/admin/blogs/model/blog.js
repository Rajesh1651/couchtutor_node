const paginate = require('express-paginate');
const { ObjectId } = require('mongodb');
const brdObj = require(WEBSITE_ADMIN_MODULES_PATH + "/blogs/breadcrumbs");


function Blog() {

	/**
	 * Listing URL
	 */
	const LISTING_URL = WEBSITE_ADMIN_URL + "blogs";



	/**
	 * Function for get list of blog pages
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	this.getBlogList = (req, res) => {

		const limit = (req.body.length) ? parseInt(req.body.length) : ADMIN_LISTING_LIMIT;
		const skip = req.skip

		const title = (req.query.title) ? req.query.title : "";
		const statusSearch = (req.query.status) ? parseInt(req.query.status) : "";

		const pageSize = parseInt(req.query.page_size) - 1;
		const pageNumber = parseInt(req.query.page_number);


		/** Set conditions **/
		var commonConditions = { is_deleted: NOT_DELETED };

		if (title != "") {
			commonConditions.title = title;
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

		const pages = db.collection(BLOG_COLLECTION);


		pages.aggregate([
			{ $match: commonConditions },
			{ $sort: { title: SORT_ASC } },
			{ $skip: skip },
			{ $limit: limit },
			{
				$lookup: {
					from: COMMENTS_COLLECTION,
					localField: "_id",
					foreignField: "blog_id",
					as: "comments",
				}
			},
			{ $project: { _id: 1, title: 1, decription: 1, image: 1, slug: 1, active: 1, is_deleted: 1, comments: "$comments" } },
		]).toArray((err, results) => {
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
	};//End getBlogList()



	/**
	 * Function for view Blog's Detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render
	 */
	this.viewBlogDetails = (req, res, next) => {
		/** Get blog details **/
		getBlogDetails(req, res, next).then(response => {
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
	};//End viewBlogDetails()	



	/**
	 * Function to get blog's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getBlogDetails = (req, res, next) => {
		return new Promise(resolve => {
			let blogId = (req.params.id) ? req.params.id : "";
			/** Get blog details **/
			const pages = db.collection(BLOG_COLLECTION);

			pages.findOne(
				{ _id: ObjectId(blogId) },
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
							message: res.__("admin.blog.record_not_exists")
						};
						return resolve(response);
					}

					/** Set options for append image full path **/
					let options = {
						"file_url": BLOG_URL,
						"file_path": BLOG_FILE_PATH,
						"result": [result],
						"database_field": "image"
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
	};// End getBlogDetails().



	/**
	 * Function to update blog's detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editBlog = (req, res, next, validationErrors) => {
		if (isPost(req) && !validationErrors) {
			/** Sanitize Data **/
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);
			let id = (req.params.id) ? req.params.id : "";

			let allData = req.body;
			let title = (req.body.title) ? req.body.title : "";
			let decription = (req.body.decription) ? req.body.decription : "";

			let oldimage = (req.body.old_image) ? req.body.old_image : "";
			let image = (req.files && req.files.image) ? req.files.image : "";
			let imgaeOptions = {
				'image': image,
				'filePath': BLOG_FILE_PATH,
				'oldPath': oldimage
			};


			moveUploadedFile(req, res, imgaeOptions).then(imgaeResponse => {
				if (imgaeResponse.status == STATUS_ERROR) {
					/** Send error imgaeResponse **/
					req.session.formData = req.body;
					req.flash(STATUS_ERROR, imgaeResponse.message);
					return res.redirect(LISTING_URL + "/edit/" + id);
				}


				/** Update blog details **/
				const pages = db.collection(BLOG_COLLECTION);
				pages.updateOne(
					{ _id: ObjectId(id) },
					{
						$set: {
							title: title,
							decription: decription,
							image: (imgaeResponse.fileName) ? imgaeResponse.fileName : "",
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
						req.flash(STATUS_SUCCESS, res.__("admin.blog.record_updated_successfully"));
						res.redirect(LISTING_URL);
					}
				);
			}).catch(next);
		}
		else {
			/** Get blog details **/
			getBlogDetails(req, res, next).then(response => {
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
	};//End editBlog()



	/**
	 * Function for add blog
	 *
	 * @param req 	As	Request Data
	 * @param res 	As	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.addBlog = (req, res, next, validationErrors) => {
		if (isPost(req) && !validationErrors) {
			/** Sanitize Data */
			req.body = sanitizeData(req.body, NOT_ALLOWED_TAGS_XSS);

			let allData = req.body;
			let title = (req.body.title) ? req.body.title : "";
			let decription = (req.body.decription) ? req.body.decription : "";
			let image = (req.files && req.files.image) ? req.files.image : "";
			let imgaeOptions = {
				'image': image,
				'filePath': BLOG_FILE_PATH
			};



			/** Upload user  image **/
			moveUploadedFile(req, res, imgaeOptions).then(imgaeResponse => {
				if (imgaeResponse.status == STATUS_ERROR) {
					req.session.formData = req.body;
					req.flash(STATUS_ERROR, imgaeResponse.message);
					return res.redirect(LISTING_URL + "/add");
				}

				/** Set options **/
				let options = {
					title: title,
					table_name: BLOG_COLLECTION,
					slug_field: "slug"
				};

				/** Make Slug */
				getDatabaseSlug(options).then(response => {
					/** Save blog details */
					const pages = db.collection(BLOG_COLLECTION);
					pages.insertOne({
						title: title,
						decription: decription,
						image: (imgaeResponse.fileName) ? imgaeResponse.fileName : "",
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

						req.flash(STATUS_SUCCESS, res.__("admin.blog.record_added_successfully"));
						return res.redirect(LISTING_URL);
					});
				}, error => {
					req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
					return res.redirect(LISTING_URL);
				});
			}).catch(next);
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
	};//End addBlog()



	/**
	 * Function for update blog's status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateBlogStatus = (req, res, next) => {
		let blogId = (req.params.id) ? req.params.id : "";
		let blogStatus = (req.params.status) ? req.params.status : "";

		if (!blogId) {
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL);
		}

		/** Set update data **/
		let updateData = { modified: getUtcDate() };
		updateData.active = (blogStatus == ACTIVE) ? DEACTIVE : ACTIVE;

		/** Update user status*/
		const pages = db.collection(BLOG_COLLECTION);
		pages.updateOne({ _id: ObjectId(blogId) }, { $set: updateData }, (err, result) => {
			if (err) {
				/** Send error response **/
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.blog.record_updated_successfully"));
			return res.redirect(LISTING_URL);
		});
	};//End updateBlogStatus()



	/**
	 * Function for delete blog
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.deleteBlog = (req, res, next) => {
		let blogId = (req.params.id) ? req.params.id : "";

		if (!blogId) {
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL);
		}

		/** Set update data **/
		let updateData = { modified: getUtcDate(), is_deleted: DELETED };

		/** Update user status*/
		const pages = db.collection(BLOG_COLLECTION);
		pages.updateOne({ _id: ObjectId(blogId) }, { $set: updateData }, (err, result) => {
			if (err) {
				/** Send error response **/
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.blog.record_deleted_successfully"));
			return res.redirect(LISTING_URL);
		});
	};//End deleteBlog()



	/**
	 * Function for get list of comment pages
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	this.commentList = (req, res) => {

		const limit = (req.body.length) ? parseInt(req.body.length) : ADMIN_LISTING_LIMIT;
		const skip = req.skip

		const comment = (req.query.comment) ? req.query.comment : "";
		const statusSearch = (req.query.status) ? parseInt(req.query.status) : "";
		const blogId = (req.params.id) ? req.params.id : "";

		/** Set conditions **/
		var commonConditions = { blog_id: ObjectId(blogId), is_deleted: NOT_DELETED };


		if (comment != "") {
			commonConditions.comment = new RegExp(comment, 'i');
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

		const pages = db.collection(COMMENTS_COLLECTION);

		pages.find(commonConditions).skip(skip).limit(limit).sort({ created: SORT_DESC }).toArray(function (err, results) {
			if (err) throw err;
			pages.find(commonConditions).count(function (errCount, itemCount) {
				if (errCount) throw errCount;

				let pageCount = Math.ceil(itemCount / limit);
				req.breadcrumbs(brdObj.comment_list);

				res.render('comment_list', {
					results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page), blogId
				});
			});
		});
	};//End commentList()

}

module.exports = new Blog();
