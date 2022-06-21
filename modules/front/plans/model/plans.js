function Plans() {


	/**
	 * Function for get  faq List
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 * @return render/json
	 */
	this.list = (req, res) => {	

		let type = (req.params.type) ? req.params.type : STUDENT_PLAN;		       
				const faq = db.collection(PLANS_COLLECTION);
				faq.find({'plan_type':type, active: ACTIVE ,is_deleted:NOT_DELETED}).sort({ plan_order: SORT_ASC }).toArray((err, result) => {
					res.render('list', {'result':result});
				});	
	
	};//End list()





};//End Faq()

module.exports = new Plans();
