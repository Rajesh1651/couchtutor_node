const asyncParallel = require("async/parallel");
const async = require("async");
const { ObjectId } = require('mongodb');

function Blog() {


	/**
	 * Function for get  blog List
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 * @return render/json
	 */
	this.listBlog = (req, res) => {

		const blog = db.collection(BLOG_COLLECTION);

		let commonConditions = { is_deleted: NOT_DELETED, active: ACTIVE };

		let limit 		  = (req.body.length) ? parseInt(req.body.length) : FRONT_LISTING_LIMIT;
		let skip 	 	  = (req.body.start)  ? parseInt(req.body.start)  : DEFAULT_SKIP; 
		var page 		  = req.params.page || 1;
		
		asyncParallel({

			records: (callback) => {				

				blog.find({ active: ACTIVE }).sort({ _id: SORT_DESC }).limit(limit).skip((limit * page) - limit).toArray((err, result) => {
					/** Set options for appened image full path **/
					let options = {
						"file_url": BLOG_URL,
						"file_path": BLOG_FILE_PATH,
						"result": result,
						"database_field": "image"
					};

					/** Appened image with full path **/
					appendFileExistData(options).then(imageResponse => {
						let response = (imageResponse && imageResponse.result && imageResponse.result) ? imageResponse.result : [];
						callback(err, response);
					});
				});
			},
			total_count: (callback) => {
				/** Get total number of records in blogs collection **/
					blog.countDocuments(commonConditions, (err, countResult) => {
						callback(err, countResult);

				});
			},
			filtered_count: (callback) => {
				/** Get filtered records counting in blogs**/
						blog.countDocuments(commonConditions, (err, filterContResult) => {
						callback(err, filterContResult);				

				});
			},
			latestPost: (callback) => {

				let limit = ADMIN_LISTING_LIMIT;
				const blog = db.collection(BLOG_COLLECTION);
				blog.find({ active: ACTIVE }).limit(limit).sort({ _id: SORT_DESC }).toArray((err, result) => {
					/** Set options for appened image full path **/
					let options = {
						"file_url": BLOG_URL,
						"file_path": BLOG_FILE_PATH,
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

			/** Render to list page **/
			
			res.render("list",{ 
				result			: response.records ,
				loginUserData   :{},
				latestPost      : response.latestPost,				
				recordsFiltered	: (response.filtered_count) ? response.filtered_count : 0,
				recordsTotal	: (response.total_count) 	? response.total_count 	  : 0,
				current			: page,
				pages			: Math.ceil(response.total_count / limit)
			});
			
		});
	};//End listBlog()



	/**
		 * Function to get blog details
		 * @param req	As Request Data
		 * @param res	As Response Data
		 * @param next 	As Callback argument to the middleware function
		 * @return json
		 */
	let getBlogDetails = (req, res, next) => {
		return new Promise(resolve => {
			let slug = (req.params.slug) ? req.params.slug : "";
			/** Send error response */
			if (!slug) return resolve({ status: STATUS_ERROR, message: res.__("admin.system.invalid_access") });
			/** Get blog details **/
			const blog = db.collection(BLOG_COLLECTION);

			
			let commonConditions		= { slug: slug ,is_deleted: NOT_DELETED };


			blog.aggregate([
				{$match : commonConditions},
				// {$sort  : dataTableConfig.sort_conditions},
				// {$skip 	: skip},
				// {$limit : limit},
				{$lookup : {
				   from 		: COMMENTS_COLLECTION,
				   localField	: "_id",
				   foreignField: "blog_id",
				   as 			: "comments",
				}},						
				{$project :	{ _id : 1, title : 1, decription : 1,image:1,slug:1,active:1,is_deleted:1, comments	: "$comments" }},
				]).toArray((err, result)=>{           
				if (err) return next(err);		


				let limit = ADMIN_LISTING_LIMIT;
				blog.find({ active: ACTIVE }).limit(limit).sort({ _id: SORT_DESC }).toArray((err, post) => {
					/** Set options for appened image full path **/
					let options = {
						"file_url": BLOG_URL,
						"file_path": BLOG_FILE_PATH,
						"result": post,
						"database_field": "image"
					};

					/** Appened image with full path **/
					appendFileExistData(options).then(imageResponse => {
						let latestPost = (imageResponse && imageResponse.result && imageResponse.result) ? imageResponse.result : [];


						/** Send error response */
						if (!result) return resolve({ status: STATUS_ERROR, message: res.__("admin.system.invalid_access") });
						/** Send success response **/
						resolve({ status: STATUS_SUCCESS, result: result[0], latestPost: latestPost });
					});
				});
			});
		});
	};// End getDetails()




	/**
	 * Function for edit Blog
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As Callback argument to the middleware function
	 * @return render/json
	 */
	this.viewBlog = (req, res, next) => {
		/** Get blog details **/
		getBlogDetails(req, res, next).then((response) => {

			if (response.status != STATUS_SUCCESS) {
				/** Send Error response **/
				req.flash("error", response.message);
				res.redirect(WEBSITE_URL + "blog");
				return;
			}
			res.render('blog_detail', {
				result: response.result,
				latestPost: response.latestPost,
				currentUrl : req.url,
			});
		}).catch(next);

	};//End viewBlog()



/**
	 * Function for add blog comment
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As Callback argument to the middleware function
	 *
	 * @return null
	*/
	this.addComment = (req, res, next) => {

		let blogId 		= (req.params.id) 		? req.params.id : "";
		let blog_slug 		= (req.body.blog_slug) 		? req.body.blog_slug : "";
		let userDetail		= (req.session.user) 	? req.session.user : "";
		let commentVal 	= (req.body.description) ? req.body.description : "";
		let commentArr  = [];
		let commentObj	= { '_id' : ObjectId(), 'comment':commentVal, date:getUtcDate(), user_id:ObjectId(userDetail._id) };
     	commentArr.push(commentObj);

		 
		/**For update comment details */
		const comment = db.collection(COMMENTS_COLLECTION);		
		comment.insertOne({
			    blog_id				:	ObjectId(blogId),
				user_id             :   ObjectId(userDetail._id),	
				comment				:	commentVal,					
				date                :   getUtcDate(),
				active				:	ACTIVE,
				is_deleted			: 	NOT_DELETED,
				created 			:	getUtcDate(),
				modified 			:	getUtcDate()
			},(err,result)=>{

			req.flash(STATUS_SUCCESS, 'Comment has been sent successfully.');		

			res.send({
				status		 : STATUS_SUCCESS,				
				result		 : result,
			 	url          : "/blog-detail/"+ blog_slug,
				date		 : getUtcDate(commentObj.date,'dd mmm yyyy')
			});
		});
	};//End addComment()










};//End listBlog()


	

module.exports = new Blog();
