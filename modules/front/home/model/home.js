const asyncParallel		= require("async/parallel");
function Home() {

	/**
	 * Function for render index file
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 *
	 * @return json
	 */
	this.index = (req,res)=>{

		asyncParallel({

		subjects : (callback)=>{

			let subjectConditions		= { active: ACTIVE  ,parent_id :INACTIVE ,is_deleted: NOT_DELETED ,show_at_home:ACTIVE };
				const subjects = db.collection(SUBJECT_COLLECTION);
				subjects.find(subjectConditions,{subject_name:1,slug:1,image:1,color_code:1,color_code_hover:1,color_code_icon:1}).toArray(function (err, result) {
					callback(err, result);
				});
			},

		howItWorksBlock : (callback)=>{


				let blockConditions		= { slug:"how-it-works", active: ACTIVE ,is_deleted: NOT_DELETED };
				const blocks = db.collection(BLOCKS_COLLECTION);
				blocks.find(blockConditions,{block_name:1,description:1,slug:1}). toArray(function(err, result) {
					callback(err, result);
				});
			},

			weAreFeaturingBlock : (callback)=>{


				let blockConditions		= { slug:"we-are-featuring", active: ACTIVE ,is_deleted: NOT_DELETED };
				const blocks = db.collection(BLOCKS_COLLECTION);
				blocks.find(blockConditions,{block_name:1,description:1,slug:1}). toArray(function(err, result) {
					callback(err, result);
				});
			},

			sliders : (callback)=>{
				const sliders = db.collection(SLIDER_COLLECTION);
				sliders.find({active : ACTIVE,is_deleted:NOT_DELETED},{projection:{_id:1,image:1,description:1,title:1,slider_text:1}}).toArray((err, result)=>{
					/** Set options for appened image full path **/
					let options = {
						"file_url" 			: SLIDER_URL,
						"file_path" 		: SLIDER_FILE_PATH,
						"result" 			: result,
						"database_field" 	: "image"
					};

					//console.log(options);

					/** Appened image with full path **/
					appendFileExistData(options).then(imageResponse=>{
						let response = (imageResponse && imageResponse.result && imageResponse.result)	? imageResponse.result : [];
						callback(err, response);
					});
				});
			}

		// 	testimonials : (callback)=>{
		// 		/** Get list of testmonials**/
		// 		const testimonials	= db.collection("testimonials");
		// 		testimonials.find(
		// 			{is_active : ACTIVE},
		// 			{projection: {image:1,designation:1,description:1,name:1}}
		// 		).toArray((err, response)=>{
		// 			if(err) return callback(err,[]);

		// 			/** Set options for appened image **/
		// 			let options = {
		// 				"file_url" 			: TESTIMONIAL_FILE_URL,
		// 				"file_path" 		: TESTIMONIAL_FILE_PATH,
		// 				"result" 			: response,
		// 				"database_field" 	: "image",
		// 				"image_placeholder" : "testmonial_image"
		// 			};

		// 			/** Appened image with full path **/
		// 			appendFileExistData(options).then(responseData=>{
		// 				result = (responseData && responseData.result)	?	responseData.result	:[];
		// 				callback(err, result);
		// 			});
		// 		});
		// 	},
			
		 },(err,response)=>{

			/** Render to index page **/
			let result = {
				subjects 			: response.subjects,			   
				howItWorksBlock	: response.howItWorksBlock,
				weAreFeaturingBlock 			: response.weAreFeaturingBlock,
			    main_slider		: response.sliders[0]
			};


console.log(result);

			res.render('index', result);
	

		});

	

	};// end index()


}
module.exports = new Home();
