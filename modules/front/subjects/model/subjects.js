const asyncParallel = require("async/parallel");
const async = require("async");
const { ObjectId } = require('mongodb');

// const mongoose = require('mongoose');


// const subjectSchema = new mongoose.Schema({
    
// })
  
// const topicSchema = new mongoose.Schema({
// })

// const subject = new mongoose.model('subject', subjectSchema);
// const topic = new mongoose.model('topic', topicSchema);




function Subject() {


	/**
	 * Function for get  blog List
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 * @return render/json
	 */
	this.list = (req, res) => {
			
			asyncParallel({

			records: (callback) => {				


				  const subjects = db.collection(SUBJECT_COLLECTION);	

					let commonConditions		= { active: ACTIVE  ,parent_id :INACTIVE ,is_deleted: NOT_DELETED };

					subjects.aggregate([
						 {$match : commonConditions},
						// {$sort  : dataTableConfig.sort_conditions},
						// {$skip 	: skip},
						// {$limit : limit},
						{$lookup : {
							from 		: "subjects",
							localField	: "_id",
							foreignField: "parent_id",
							as 			: "topics",
						}},						
						{$project :	{ _id : 1, subject_name : 1, description : 1,color_code:1,color_code_hover:1,color_code_icon:1,show_at_home:1,image:1,slug:1,active:1,parent_id:1, topics	: "$topics" }},
					]).toArray((err, result)=>{
						/**Set option for image**/
					
					/** Set options for appened image full path **/
					let options = {
						"file_url": SUBJECT_URL,
						"file_path": SUBJECT_FILE_PATH,
						"result": result,
						"database_field": "image"
					};

					/** Appened image with full path **/
					appendFileExistData(options).then(imageResponse => {
						let response = (imageResponse && imageResponse.result && imageResponse.result) ? imageResponse.result : [];
						callback(err, response);
					});
				});
			}
		
		}, (err, response) => {		
			res.render('list', {results : response.records});
		});


	};//End list()



	/**
		 * Function to get  details
		 * @param req	As Request Data
		 * @param res	As Response Data
		 * @param next 	As Callback argument to the middleware function
		 * @return json
		 */
	let getDetails = (req, res, next) => {
		return new Promise(resolve => {
			let slug = (req.params.slug) ? req.params.slug : "";
			/** Send error response */
			if (!slug) return resolve({ status: STATUS_ERROR, message: res.__("admin.system.invalid_access") });
			/** Get  details **/
			const subjects = db.collection(SUBJECT_COLLECTION);
			subjects.findOne({ slug: slug }, (err, result) => {
				if (err) return next(err);


				let limit = FRONT_LISTING_LIMIT;
				subjects.find({ active: ACTIVE ,parent_id:ObjectId(result._id),is_deleted: NOT_DELETED}).limit(limit).sort({ _id: SORT_DESC }).toArray((err, topics) => {
					/** Set options for appened image full path **/
					let options = {
						"file_url": SUBJECT_URL,
						"file_path": SUBJECT_FILE_PATH,
						"result": topics,
						"database_field": "image"
					};

					/** Appened image with full path **/
					appendFileExistData(options).then(imageResponse => {
						let subjectTopic = (imageResponse && imageResponse.result && imageResponse.result) ? imageResponse.result : [];

						/** Send error response */
						if (!result) return resolve({ status: STATUS_ERROR, message: res.__("admin.system.invalid_access") });
						/** Send success response **/
						resolve({ status: STATUS_SUCCESS, result: result, subjectTopic: subjectTopic });
					});
				});
			});
		});
	};// End getDetails()




	/**
	 * Function for 
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As Callback argument to the middleware function
	 * @return render/json
	 */
	this.view = (req, res, next) => {
		/** Get  details **/
		getDetails(req, res, next).then((response) => {
			if (response.status != STATUS_SUCCESS) {
				/** Send Error response **/
				req.flash("error", response.message);
				res.redirect(WEBSITE_URL + "subjects");
				return;
			}
			res.render('subject_detail', {
				result: response.result,
				subjectTopic: response.subjectTopic,
			});
		}).catch(next);

	};//End view()

};//End list()



module.exports = new Subject();
