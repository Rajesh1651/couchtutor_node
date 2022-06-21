const paginate = require('express-paginate');
const { ObjectId } = require('mongodb');
const brdObj = require(WEBSITE_ADMIN_MODULES_PATH + "/newsletters/breadcrumbs");


function Newsletter() {

	/**
	 * Listing URL
	 */
	const LISTING_URL = WEBSITE_ADMIN_URL + "newsletters";



	/**
	 * Function for get list of newsletters pages
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	this.getNewsletterList = (req, res) => {

		let limit = (req.body.length) ? parseInt(req.body.length) : ADMIN_LISTING_LIMIT;
		let skip			=  req.skip
		
		let email = (req.query.email) ? req.query.email : "";
		

		/** Set conditions **/
		var commonConditions = {};

		if (email != "") {
			commonConditions.email	=	new RegExp(email, 'i');
		}
		
		const pages = db.collection(NEWSLETTER_COLLECTION);
		pages.find(commonConditions).skip(skip).limit(limit).sort({ _id: SORT_DESC }).toArray(function(err, results) {
         	if (err) throw err;

			//  console.log(results);

			pages.find(commonConditions).count(function (errCount, itemCount) {
				if (errCount) throw errCount;

				let pageCount = Math.ceil(itemCount / limit);

				req.breadcrumbs(brdObj.list);

				res.render('list', {
					results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
				});
			});
		});
	};//End getNewsletterList()



	/**
	 * Function for delete Newsletter
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.deleteNewsletter = (req, res, next) => {
		let newsletterId = (req.params.id) ? req.params.id : "";

		if (!newsletterId) {
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL);
		}		
		/** delete Newsletter detail*/
		const newsletter = db.collection(NEWSLETTER_COLLECTION);
		newsletter.deleteOne({ _id: ObjectId(newsletterId) }, (err, result) => {
			if (err) {
				/** Send error response **/
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.newsletters.record_deleted_successfully"));
			return res.redirect(LISTING_URL);
		});
	};//End deleteNewsletter()

}
module.exports = new Newsletter();
