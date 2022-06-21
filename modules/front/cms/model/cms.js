
function Cms() {


	/**
	 * Function for contact
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.getPage = (req, res, next) => {

		result = {};

		let slug = (req.params.slug) ? req.params.slug : "";
		/** Send error response */
		if (!slug) return { status: STATUS_ERROR, message: res.__("admin.system.invalid_access") };


		const pages = db.collection(CMS_PAGE_COLLECTION);
		pages.findOne({ slug: slug },(err, result) => {
				if (err) return next(err);

		 		console.log(result);				

				res.render("page", {
					'result': result
				});
		}
		);

	};//End getPage()


}
module.exports = new Cms();
