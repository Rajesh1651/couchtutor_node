function Faq() {


	/**
	 * Function for get  faq List
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 * @return render/json
	 */
	this.listFaq = (req, res) => {
		
				const faq = db.collection(FAQ_COLLECTION);
				faq.find({ active: ACTIVE }).sort({ _id: SORT_ASC }).toArray((err, result) => {				
				
					res.render('list', {'result':result});
				});	
	
	};//End listfaq()





};//End Faq()

module.exports = new Faq();
