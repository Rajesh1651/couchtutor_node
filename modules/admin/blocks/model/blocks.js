const paginate 		= 	require('express-paginate'); 
const {ObjectId} 	= 	require('mongodb');
const  brdObj		=	require(WEBSITE_ADMIN_MODULES_PATH+"/blocks/breadcrumbs");


function Blocks() {

	/**
	 * Listing URL
	 */
	const LISTING_URL	=	WEBSITE_ADMIN_URL+"blocks";
	
	
	
	/**
	 * Function for get list of blocks
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getBlockList = (req, res)=>{

		let limit			= (req.body.length) 		? parseInt(req.body.length) 		: ADMIN_LISTING_LIMIT;
		let skip			=  req.skip
		
		let block_name		= (req.query.block_name) ? req.query.block_name : "";
		let statusSearch	= (req.query.status) ? parseInt(req.query.status) : "";
		
		/** Set conditions **/
		var commonConditions = { is_deleted : NOT_DELETED };
		
		if (block_name != "") {
			commonConditions.block_name	=	new RegExp(block_name, 'i');
		}
		 
		if (statusSearch != "") {
			switch(statusSearch){
				case SEARCHING_ACTIVE:
					commonConditions.active 		= ACTIVE;
				break;

				case SEARCHING_DEACTIVE:
					commonConditions.active 		= DEACTIVE;
				break;
			}
		}
		
		const pages	= db.collection(BLOCKS_COLLECTION);
		
		pages.find(commonConditions).skip(skip).limit(limit).sort( { title: SORT_ASC } ).toArray(function(err, results) {
			if (err) throw err;
			
			pages.find(commonConditions).count(function(errCount, itemCount) {
				if (errCount) throw errCount;
				
				let pageCount = 	Math.ceil(itemCount / limit);
				
				req.breadcrumbs(brdObj.list);
				
				res.render('list', {results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
				}); 
			});
		});
	};//End getCmsList()
	
	
	
	/**
	 * Function for view Block's Detail
	 *
	 * @param req 	As 	Request Data
     * @param res 	As 	Response Data
     * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render
	 */
	this.viewBlockDetails = (req,res,next)=>{
		/** Get cms details **/
		getBlockDetails(req,res,next).then(response=>{
			if(response.status != STATUS_SUCCESS){
				/** Send error response **/
				req.flash(STATUS_ERROR,response.message);
				res.redirect(LISTING_URL);
				return;
			}
			
			/** Render edit page **/
			req.breadcrumbs(brdObj.view);
			res.render('view',{ result : response.result });
		}).catch(next);	
	};//End viewCmsDetails()	
	
	
	
	/**
	 * Function to get Block's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getBlockDetails = (req,res,next)=>{
		return new Promise(resolve=>{
			let blockId = (req.params.id) ? req.params.id : "";
			/** Get Cms details **/
			const blocks = db.collection(BLOCKS_COLLECTION);
			blocks.findOne(
				{_id : ObjectId(blockId)},
				(err, result)=>{
					if(err) return next(err);

					if(!result){
						/** Send error response **/
						let response = {
							status	: STATUS_ERROR,
							message	: res.__("admin.system.invalid_access")
						};
						return resolve(response);
					}
					
					if(result && result.is_deleted == DELETED){
						/** Send error response **/
						let response = {
							status	: STATUS_ERROR,
							message	: res.__("admin.cms.record_not_exists")
						};
						return resolve(response);
					}
					
					
					let response = {
						status	: STATUS_SUCCESS,
						result	: result
					};
					
					return resolve(response);
				}
			);
		});
	};// End getBlockDetails().

	
	
	/**
	 * Function to update Block's detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editBlock = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data **/
			req.body	= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
			let id		= (req.params.id) ? req.params.id :"";

			let allData		= 	req.body;
			let block_name			= 	(req.body.block_name)	?	req.body.block_name	:"";
			let page_name			= 	(req.body.page_name)	?	req.body.page_name	:"";
			let decription			= 	(req.body.decription)	?	req.body.decription	:"";
			 
			/** Update cms details **/
			const blogs = db.collection(BLOCKS_COLLECTION);
			blogs.updateOne(
				{ _id : ObjectId(id)},
				{$set: {
					block_name			:	block_name,
					page_name			: 	page_name,
					decription			: 	decription,
					modified 			:	getUtcDate()
				}},
				(err,result)=>{
					if(err){
						/** Send error response **/
						req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
						return res.redirect(LISTING_URL);
					}

					/** Send success response **/
					req.flash(STATUS_SUCCESS, res.__("admin.cms.record_updated_successfully"));
					res.redirect(LISTING_URL);
				}
			);
		 
		}
		else{
			/** Get cms details **/
			getBlockDetails(req,res,next).then(response=>{
				if(response.status != STATUS_SUCCESS){
					/** Send error response **/
					req.flash(STATUS_ERROR,response.message);
					res.redirect(LISTING_URL);
					return;
				}
				
				formData = false;
				if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
					formData = req.session.formData;
					req.session.formData = null;
				}
				
				/** Render edit page **/
				req.breadcrumbs(brdObj.edit);
				res.render('add_edit',{
					result : response.result,
					'error' : validationErrors, 
					'formData' : formData 
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
	this.addBlock = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data */
			req.body = 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);

			let allData				= 	req.body;
			let block_name			= 	(req.body.block_name)			?	req.body.block_name	:"";
			let page_name			= 	(req.body.page_name)	?	req.body.page_name	:"";
			let decription			= 	(req.body.decription)		?	req.body.decription	:"";
			
			  
				/** Set options **/
				let options = {
					title 		:	block_name,
					table_name 	: 	BLOCKS_COLLECTION,
					slug_field 	: 	"block"
				};
	 
				/** Make Slug */
				getDatabaseSlug(options).then(response=>{
					/** Save Cms details */
					const blogs = db.collection(BLOCKS_COLLECTION);
					blogs.insertOne({
						block_name			:	block_name,
						page_name			:	page_name,
						decription			: 	decription,
						slug				: 	(response && response.title)	?	response.title	:"",
						active				:	ACTIVE,
						is_deleted			: 	NOT_DELETED,
						created 			:	getUtcDate(),
						modified 			:	getUtcDate()
					},(err,result)=>{
						if(err){
							/** Send error response **/
							req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
							return res.redirect(LISTING_URL);
						}

						req.flash(STATUS_SUCCESS, res.__("admin.cms.record_added_successfully"));
						return res.redirect(LISTING_URL); 
					});
				},error=>{
					req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
					return res.redirect(LISTING_URL); 
				});
			  	
		}
		else{
			
			formData = false;
			if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
				formData = req.session.formData;
				req.session.formData = null;
			}
			
			req.breadcrumbs(brdObj.add);
			res.render("add_edit",{ 'error': validationErrors, 'formData': formData});
		}
	};//End addBlock()
	
	 
	 
	/**
	 * Function for update Block's status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateBlockStatus = (req,res,next)=>{
		let blockId		= (req.params.id) 			? req.params.id 		: "";
		let blockStatus	= (req.params.status) 		? req.params.status	 	: "";
		 
		if(!blockId){
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL);
		}

		/** Set update data **/
		let updateData = {modified  : getUtcDate()};
		updateData.active = (blockStatus==ACTIVE) ? DEACTIVE :ACTIVE;

		/** Update user status*/
		const blogs = db.collection(BLOCKS_COLLECTION);
		blogs.updateOne({_id : ObjectId(blockId)},{$set :updateData},(err,result)=>{
			if(err){
				/** Send error response **/
				req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.cms.record_updated_successfully"));
			return res.redirect(LISTING_URL);
		});
	};//End updateBlockStatus()
	
	
	
	 
	
}
module.exports = new Blocks();
