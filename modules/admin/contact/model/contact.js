const paginate = require('express-paginate');
const { ObjectId } = require('mongodb');
const brdObj = require(WEBSITE_ADMIN_MODULES_PATH + "/contact/breadcrumbs");


function Contact() {

	/**
	 * Listing URL
	 */
	const LISTING_URL = WEBSITE_ADMIN_URL + "contact";



	/**
	 * Function for get list of Contact pages
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
	this.getContactList = (req, res) => {

		let limit = (req.body.length) ? parseInt(req.body.length) : ADMIN_LISTING_LIMIT;
		let skip			=  req.skip
		
		let email = (req.query.email) ? req.query.email : "";
		let subject = (req.query.subject) ? req.query.subject : "";

		/** Set conditions **/
		var commonConditions = {};

		if (email != "") {
			commonConditions.email	=	new RegExp(email, 'i');
		}

		if (subject != "") {
			commonConditions.subject	=	new RegExp(subject, 'i');
		}

		const pages = db.collection(CONTACTS_COLLECTION);
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
	};//End getContactList()



	/**
	 * Function for delete Contact
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.deleteContact = (req, res, next) => {
		let contactId = (req.params.id) ? req.params.id : "";

		if (!contactId) {
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL);
		}		
		/** delete contact detail*/
		const contact = db.collection(CONTACTS_COLLECTION);
		contact.deleteOne({ _id: ObjectId(contactId) }, (err, result) => {
			if (err) {
				/** Send error response **/
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.contact.record_deleted_successfully"));
			return res.redirect(LISTING_URL);
		});
	};//End deleteContact()

}
module.exports = new Contact();
