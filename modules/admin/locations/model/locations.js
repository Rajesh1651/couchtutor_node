const paginate 		= 	require('express-paginate'); 
const {ObjectId} 	= 	require('mongodb');
const  brdObj		=	require(WEBSITE_ADMIN_MODULES_PATH+"/locations/breadcrumbs");


function Locations() {

	/**
	 * Listing URL
	 */
	const LISTING_URL_COUNTRIES	=	WEBSITE_ADMIN_URL+"locations/countries";
	const LISTING_URL_STATES	=	WEBSITE_ADMIN_URL+"locations/states";
	const LISTING_URL_CITIES	=	WEBSITE_ADMIN_URL+"locations/cities";
	
	
	/**
	 * Function for get list of Countries
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getCountriesList = (req, res)=>{

		let limit			= (req.body.length) 		? parseInt(req.body.length) 		: ADMIN_LISTING_LIMIT;
		let skip			=  req.skip
		
		let title			= (req.query.title) ? req.query.title : "";
		let statusSearch	= (req.query.status) ? parseInt(req.query.status) : "";
		
		/** Set conditions **/
		var commonConditions = { is_deleted : NOT_DELETED };
		
		if (title != "") {
			commonConditions.title	=	new RegExp(title, 'i');
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
		
		const countries	= db.collection(COUNTRIES_COLLECTION);
		
		countries.find(commonConditions).skip(skip).limit(limit).sort( { title: SORT_ASC } ).toArray(function(err, results) {
			if (err) throw err;
			
			countries.countDocuments(commonConditions, function(errCount, itemCount) {
				if (errCount) throw errCount;
				
				let pageCount = 	Math.ceil(itemCount / limit);
				
				req.breadcrumbs(brdObj.list);
				
				res.render('country_list', {results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
				}); 
			});
		});
		
		res.locals.admin_country_list_url 	= 	LISTING_URL_COUNTRIES ;
		res.locals.admin_status_list_url 	= 	LISTING_URL_STATES ;
		
	};//End getCountriesList()
	
	
	/**
	 * Function to get Country's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getCountryDetails = (req,res,next)=>{
		return new Promise(resolve=>{
			let countryId = (req.params.country_id) ? req.params.country_id : "";
			/** Get country details **/
			const countries = db.collection(COUNTRIES_COLLECTION);
				
			if(countryId){	
				countries.findOne(
					{_id : ObjectId(countryId)},
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
								message	: res.__("admin.countries.record_not_exists")
							};
							return resolve(response);
						}
						
						let response = {
							status	: STATUS_SUCCESS,
							result	: result
						};
						resolve(response);
					}
				);
			}
			else{
				let response = {
					status	: STATUS_ERROR,
					message	: res.__("admin.countries.record_not_exists")
				};
				return resolve(response);
			}
		});
	};// End getCountryDetails().

	
	/**
	 * Function for add Country
	 *
	 * @param req 	As	Request Data
	 * @param res 	As	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.addCountry = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data */
			req.body = 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);

			let allData		= 	req.body;
			let title		= 	(req.body.title) ?	req.body.title	:"";
			   
			/** Set options **/
			let options = {
				title 		:	title,
				table_name 	: 	COUNTRIES_COLLECTION,
				slug_field 	: 	"slug"
			};
 
			/** Make Slug */
			getDatabaseSlug(options).then(response=>{
				/** Save countrie details */
				const countries = db.collection(COUNTRIES_COLLECTION);
				countries.insertOne({
					title				:	title,	
					slug				: 	(response && response.title)	?	response.title	:"",
					active				:	ACTIVE,
					is_deleted			: 	NOT_DELETED,
					created 			:	getUtcDate(),
					modified 			:	getUtcDate()
				},(err,result)=>{
					if(err){
						/** Send error response **/
						req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
						return res.redirect(LISTING_URL_COUNTRIES);
					}

					req.flash(STATUS_SUCCESS, res.__("admin.countries.record_added_successfully"));
					return res.redirect(LISTING_URL_COUNTRIES); 
				});
			},error=>{
				req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL_COUNTRIES); 
			});
		}
		else{
			
			formData = false;
			if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
				formData = req.session.formData;
				req.session.formData = null;
			}
			res.locals.admin_country_list_url 	= 	LISTING_URL_COUNTRIES ;
			req.breadcrumbs(brdObj.add);
			res.render("country_add_edit",{ 'error': validationErrors, 'formData': formData});
		}
		
		
		
	};//End addCountry()
	
	
	/**
	 * Function to update Country's detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editCountry = (req, res, next, validationErrors)=>{
		if(isPost(req) && !validationErrors){
			/** Sanitize Data **/
			req.body	= sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
			let id		= (req.params.country_id) ? req.params.country_id :"";

			let allData		= 	req.body;
			let title				= 	(req.body.title)			?	req.body.title	:"";
			  
			  
				/** Update countries details **/
				const countries = db.collection(COUNTRIES_COLLECTION);
				countries.updateOne(
					{ _id : ObjectId(id)},
					{$set: {
						title				:	title,
						modified 			:	getUtcDate()
					}},
					(err,result)=>{
						if(err){
							/** Send error response **/
							req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
							return res.redirect(LISTING_URL_COUNTRIES);
						}

						/** Send success response **/
						req.flash(STATUS_SUCCESS, res.__("admin.countries.record_updated_successfully"));
						res.redirect(LISTING_URL_COUNTRIES);
					}
				);
			 
		}
		else{
			/** Get Country details **/
			getCountryDetails(req,res,next).then(response=>{
				if(response.status != STATUS_SUCCESS){
					/** Send error response **/
					req.flash(STATUS_ERROR,response.message);
					res.redirect(LISTING_URL_COUNTRIES);
					return;
				}
				
				formData = false;
				if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
					formData = req.session.formData;
					req.session.formData = null;
				}
				
				res.locals.admin_country_list_url 	= 	LISTING_URL_COUNTRIES;
				
				/** Render edit page **/
				req.breadcrumbs(brdObj.edit);
				res.render('country_add_edit',{
					result : response.result,
					'error' : validationErrors, 
					'formData' : formData 
				});
			}).catch(next);	 
		}
	};//End editCountry()

	
	/**
	 * Function for update Country's status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateCountryStatus = (req,res,next)=>{
		let countryId		= (req.params.country_id) 	? req.params.country_id	: "";
		let countryStatus	= (req.params.status) 		? req.params.status	 	: "";
		 
		if(!countryId){
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL_COUNTRIES);
		}

		/** Set update data **/
		let updateData = {modified  : getUtcDate()};
		updateData.active = (countryStatus==ACTIVE) ? DEACTIVE :ACTIVE;

		/** Update Country status*/
		const countries	= db.collection(COUNTRIES_COLLECTION);
		countries.updateOne({_id : ObjectId(countryId)},{$set :updateData},(err,result)=>{
			if(err){
				/** Send error response **/
				req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL_COUNTRIES);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.countries.record_updated_successfully"));
			return res.redirect(LISTING_URL_COUNTRIES);
		});
	};//End updateCountryStatus()
	
	
	
	
	
	/**
	 * Function for get list of States
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getStatesList = (req, res ,next)=>{

		/** Get Country details **/
		getCountryDetails(req,res,next).then(response=>{
			if(response.status != STATUS_SUCCESS){
				/** Send error response **/
				req.flash(STATUS_ERROR,response.message);
				res.redirect(LISTING_URL_COUNTRIES);
				return;
			}
			
			  
			let limit			= (req.body.length) 		? parseInt(req.body.length) 		: ADMIN_LISTING_LIMIT;
			let skip			=  req.skip
			
			let title			= (req.query.title) ? req.query.title : "";
			let statusSearch	= (req.query.status) ? parseInt(req.query.status) : "";
			let countryId 		= (req.params.country_id) ? req.params.country_id : "";
			
			
			/** Set conditions **/
			var commonConditions = { is_deleted : NOT_DELETED, country_id : ObjectId(countryId) };
			
			if (title != "") {
				commonConditions.title	=	new RegExp(title, 'i');
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
			
			const states	= db.collection(STATES_COLLECTION);
			
			states.find(commonConditions).skip(skip).limit(limit).sort( { title: SORT_ASC } ).toArray(function(err, results) {
				if (err) throw err;
				
				states.countDocuments(commonConditions, function(errCount, itemCount) {
					if (errCount) throw errCount;
					
					let pageCount = 	Math.ceil(itemCount / limit);
					
					req.breadcrumbs(brdObj.list_state);
					
					res.render('state_list', {results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page),  countryId}); 
				});
			});
			
			res.locals.admin_state_list_url 	= 	LISTING_URL_STATES + '/' + countryId;
			res.locals.admin_city_list_url 		= 	LISTING_URL_CITIES;
			
		}).catch(next);
	};//End getStatesList()
	
		
	/**
	 * Function to get State's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getStateDetails = (req,res,next)=>{
		return new Promise(resolve=>{
			let stateId 	= (req.params.state_id) ? req.params.state_id : "";
			
			if(stateId){	
			/** Get country details **/
				const states = db.collection(STATES_COLLECTION);
				states.findOne(
					{_id : ObjectId(stateId)},
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
								message	: res.__("admin.states.record_not_exists")
							};
							return resolve(response);
						}
						
						let response = {
							status	: STATUS_SUCCESS,
							result	: result
						};
						resolve(response);
					}
				);
			}
			else{
				let response = {
					status	: STATUS_ERROR,
					message	: res.__("admin.states.record_not_exists")
				};
				return resolve(response);
			}
		});
	};// End getStateDetails().

	
	/**
	 * Function for add State
	 *
	 * @param req 	As	Request Data
	 * @param res 	As	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.addState = (req, res, next, validationErrors)=>{
		getCountryDetails(req,res,next).then(response=>{
			
			if(response.status != STATUS_SUCCESS){
				/** Send error response **/
				req.flash(STATUS_ERROR,response.message);
				res.redirect(LISTING_URL_COUNTRIES);
				return;
			}
			
			
			if(isPost(req) && !validationErrors){
				/** Sanitize Data */
				req.body = 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);

				let allData		= 	req.body;
				let title		= 	(req.body.title) ?	req.body.title	:"";
				let countryId	= 	(req.params.country_id) ? req.params.country_id : "";
				
				   
				/** Set options **/
				let options = {
					title 		:	title,
					table_name 	: 	STATES_COLLECTION,
					slug_field 	: 	"slug"
				};
	 
				/** Make Slug */
				getDatabaseSlug(options).then(response=>{
					/** Save state details */
					const states = db.collection(STATES_COLLECTION);
					states.insertOne({
						title				:	title,	
						slug				: 	(response && response.title)	?	response.title	:"",
						country_id			:	ObjectId(countryId),
						active				:	ACTIVE,
						is_deleted			: 	NOT_DELETED,
						created 			:	getUtcDate(),
						modified 			:	getUtcDate()
					},(err,result)=>{
						if(err){
							/** Send error response **/
							req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
							return res.redirect(LISTING_URL_STATES + '/' + countryId);
						}

						req.flash(STATUS_SUCCESS, res.__("admin.states.record_added_successfully"));
						return res.redirect(LISTING_URL_STATES + '/' + countryId); 
					});
				},error=>{
					req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
					return res.redirect(LISTING_URL_STATES + '/' + countryId); 
				});
			}
			else{
				
				let countryId 		= (req.params.country_id) ? req.params.country_id : "";
				
				formData = false;
				if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
					formData = req.session.formData;
					req.session.formData = null;
				}
				res.locals.admin_state_list_url 	= 	LISTING_URL_STATES + '/' + countryId;
				req.breadcrumbs(brdObj.add_state);
				res.render("state_add_edit",{ 'error': validationErrors, 'formData': formData, 'countryId': countryId, dynamic_url : countryId});
			}
		}).catch(next);
	};//End addState()
	
	
	/**
	 * Function to update State's detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editState = (req, res, next, validationErrors)=>{
		getCountryDetails(req,res,next).then(response=>{
			
			if(response.status != STATUS_SUCCESS){
				/** Send error response **/
				req.flash(STATUS_ERROR,response.message);
				res.redirect(LISTING_URL_COUNTRIES);
				return;
			}

			if(isPost(req) && !validationErrors){
				/** Sanitize Data **/
				req.body		= 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
				let id			= 	(req.params.state_id) ? req.params.state_id :"";
				let countryId	= 	(req.params.country_id) ? req.params.country_id :"";

				let allData		= 	req.body;
				let title				= 	(req.body.title)			?	req.body.title	:"";
				  
				  
				/** Update states details **/
				const states = db.collection(STATES_COLLECTION);
				states.updateOne(
					{ _id : ObjectId(id)},
					{$set: {
						title				:	title,
						country_id			:	ObjectId(countryId),
						modified 			:	getUtcDate()
					}},
					(err,result)=>{
						if(err){
							/** Send error response **/
							req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
							return res.redirect(LISTING_URL_STATES + '/' + countryId);
						}

						/** Send success response **/
						req.flash(STATUS_SUCCESS, res.__("admin.states.record_updated_successfully"));
						res.redirect(LISTING_URL_STATES + '/' + countryId);
					}
				);
				 
			}
			else{
				/** Get State details **/
				getStateDetails(req,res,next).then(response=>{
					
					let countryId 		= (req.params.country_id) ? req.params.country_id : "";
					
					if(response.status != STATUS_SUCCESS){
						/** Send error response **/
						req.flash(STATUS_ERROR,response.message);
						res.redirect(LISTING_URL_STATES + '/' + countryId);
						return;
					}
					
					formData = false;
					if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
						formData = req.session.formData;
						req.session.formData = null;
					}
					
					res.locals.admin_state_list_url 	= 	LISTING_URL_STATES + '/' + countryId;
					
					/** Render edit page **/
					req.breadcrumbs(brdObj.edit_state);
					res.render('state_add_edit',{
						result : response.result,
						'error' : validationErrors, 
						'formData' : formData, 
						dynamic_url : countryId
					});
				}).catch(next);	 
			}
		}).catch(next);	
	};//End editState()


	/**
	 * Function for update State's status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateStateStatus = (req,res,next)=>{
		let stateId			= (req.params.state_id)		? req.params.state_id 		: "";
		let countryId		= (req.params.country_id)	? req.params.country_id 	: "";
		let countryStatus	= (req.params.status) 		? req.params.status	 		: "";
		 
		if(!stateId){
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL_STATES + '/' + countryId);
		}

		/** Set update data **/
		let updateData = {modified  : getUtcDate()};
		updateData.active = (countryStatus==ACTIVE) ? DEACTIVE :ACTIVE;

		/** Update Country status*/
		const states = db.collection(STATES_COLLECTION);
		states.updateOne({_id : ObjectId(stateId)},{$set :updateData},(err,result)=>{
			if(err){
				/** Send error response **/
				req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL_STATES + '/' + countryId);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.states.record_updated_successfully"));
			return res.redirect(LISTING_URL_STATES + '/' + countryId);
		});
	};//End updateStateStatus()





	/**
	 * Function for get list of Cities
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getCitiesList = (req, res ,next)=>{

		/** Get State details **/
		getStateDetails(req,res,next).then(response=>{
			if(response.status != STATUS_SUCCESS){
				/** Send error response **/
				req.flash(STATUS_ERROR,response.message);
				res.redirect(LISTING_URL_COUNTRIES);
				return;
			}
			
			  
			let limit			= 	(req.body.length) 		? parseInt(req.body.length) 		: ADMIN_LISTING_LIMIT;
			let skip			=  	req.skip
			
			let title			= 	(req.query.title) ? req.query.title : "";
			let statusSearch	= 	(req.query.status) ? parseInt(req.query.status) : "";
			let stateId 		= 	(req.params.state_id) ? req.params.state_id : "";
			var countryId		=	response.result.country_id;
			
			/** Set conditions **/
			var commonConditions = { is_deleted : NOT_DELETED, state_id : ObjectId(stateId) };
			
			if (title != "") {
				commonConditions.title	=	new RegExp(title, 'i');
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
			
			const cities	= db.collection(CITIES_COLLECTION);
			
			cities.find(commonConditions).skip(skip).limit(limit).sort( { title: SORT_ASC } ).toArray(function(err, results) {
				if (err) throw err;
				
				cities.countDocuments(commonConditions, function(errCount, itemCount) {
					if (errCount) throw errCount;
					
					let pageCount = 	Math.ceil(itemCount / limit);
					
					req.breadcrumbs(brdObj.list_city);
					
					res.render('city_list', {results, pageCount, itemCount, pages: paginate.getArrayPages(req)(3, pageCount, req.query.page),  stateId, dynamic_url : countryId}); 
				});
			});
			
			res.locals.admin_city_list_url 	= 	LISTING_URL_CITIES + '/' + stateId;
			
		}).catch(next);
	};//End getCitiesList()

	
	/**
	 * Function to get City's detail
	 *
	 * @param req	As	Request Data
	 * @param res	As	Response Data
	 * @param next	As 	Callback argument to the middleware function
	 *
	 * @return json
	 */
	let getCityDetails = (req,res,next)=>{
		return new Promise(resolve=>{
			let cityId 	= (req.params.city_id) ? req.params.city_id : "";
			/** Get city details **/
			const cities = db.collection(CITIES_COLLECTION);
			cities.findOne(
				{_id : ObjectId(cityId)},
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
							message	: res.__("admin.cities.record_not_exists")
						};
						return resolve(response);
					}
					
					let response = {
						status	: STATUS_SUCCESS,
						result	: result
					};
					resolve(response);
				}
			);
		});
	};// End getCityDetails().

	
	/**
	 * Function for add City
	 *
	 * @param req 	As	Request Data
	 * @param res 	As	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.addCity = (req, res, next, validationErrors)=>{
		getStateDetails(req,res,next).then(response=>{
			
			if(response.status != STATUS_SUCCESS){
				/** Send error response **/
				req.flash(STATUS_ERROR,response.message);
				res.redirect(LISTING_URL_COUNTRIES);
				return;
			}
			
			var countryId	=	response.result.country_id;
			
			if(isPost(req) && !validationErrors){
				/** Sanitize Data */
				req.body = 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);

				let allData		= 	req.body;
				let title		= 	(req.body.title) ?	req.body.title	:"";
				let stateId 	= 	(req.params.state_id) ? req.params.state_id : "";
				   
				/** Set options **/
				let options = {
					title 		:	title,
					table_name 	: 	CITIES_COLLECTION,
					slug_field 	: 	"slug"
				};
	 
				/** Make Slug */
				getDatabaseSlug(options).then(response=>{
					/** Save City details */
					const cities = db.collection(CITIES_COLLECTION);
					cities.insertOne({
						title				:	title,	
						slug				: 	(response && response.title)	?	response.title	:"",
						country_id			:	ObjectId(countryId),
						state_id			:	ObjectId(stateId),
						active				:	ACTIVE,
						is_deleted			: 	NOT_DELETED,
						created 			:	getUtcDate(),
						modified 			:	getUtcDate()
					},(err,result)=>{
						if(err){
							/** Send error response **/
							req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
							return res.redirect(LISTING_URL_CITIES + '/' + stateId);
						}

						req.flash(STATUS_SUCCESS, res.__("admin.cities.record_added_successfully"));
						return res.redirect(LISTING_URL_CITIES + '/' + stateId); 
					});
				},error=>{
					req.flash(STATUS_ERROR, res.__("admin.system.something_going_wrong_please_try_again"));
					return res.redirect(LISTING_URL_CITIES + '/' + stateId); 
				});
			}
			else{
				
				let stateId 		= (req.params.state_id) ? req.params.state_id : "";
				
				formData = false;
				if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
					formData = req.session.formData;
					req.session.formData = null;
				}
				res.locals.admin_city_list_url 	= 	LISTING_URL_CITIES + '/' + stateId;
				req.breadcrumbs(brdObj.add_city);
				res.render("city_add_edit",{ 'error': validationErrors, 'formData': formData, 'stateId': stateId, 'dynamic_url': stateId, 'dynamic_url2': countryId });
			}
		}).catch(next);
	};//End addCity()


	/**
	 * Function to update Cities's detail
	 *
	 * @param req 	As 	Request Data
	 * @param res 	As 	Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return render/json
	 */
	this.editCity = (req, res, next, validationErrors)=>{
		getStateDetails(req,res,next).then(response=>{
			
			if(response.status != STATUS_SUCCESS){
				/** Send error response **/
				req.flash(STATUS_ERROR,response.message);
				res.redirect(LISTING_URL_COUNTRIES);
				return;
			}
			
			var countryId	=	response.result.country_id;
			
			if(isPost(req) && !validationErrors){
				/** Sanitize Data **/
				req.body		= 	sanitizeData(req.body,NOT_ALLOWED_TAGS_XSS);
				let stateId		= 	(req.params.state_id) ? req.params.state_id :"";
				let id			= 	(req.params.city_id) ? req.params.city_id :"";

				let allData		= 	req.body;
				let title		= 	(req.body.title)			?	req.body.title	:"";
				  
				  
				/** Update states details **/
				const states = db.collection(CITIES_COLLECTION);
				states.updateOne(
					{ _id : ObjectId(id)},
					{$set: {
						title				:	title,
						country_id			:	ObjectId(countryId),
						state_id			:	ObjectId(stateId),
						modified 			:	getUtcDate()
					}},
					(err,result)=>{
						if(err){
							/** Send error response **/
							req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
							return res.redirect(LISTING_URL_CITIES + '/' + stateId);
						}

						/** Send success response **/
						req.flash(STATUS_SUCCESS, res.__("admin.cities.record_updated_successfully"));
						res.redirect(LISTING_URL_CITIES + '/' + stateId);
					}
				);
				 
			}
			else{
				/** Get State details **/
				getCityDetails(req,res,next).then(response=>{
					
					let stateId 		= (req.params.state_id) ? req.params.state_id : "";
					
					if(response.status != STATUS_SUCCESS){
						/** Send error response **/
						req.flash(STATUS_ERROR,response.message);
						res.redirect(LISTING_URL_CITIES + '/' + stateId);
						return;
					}
					
					formData = false;
					if((typeof req.session.formData !== typeof undefined) && (req.session.formData != null)){
						formData = req.session.formData;
						req.session.formData = null;
					}
					
					res.locals.admin_city_list_url 	= 	LISTING_URL_CITIES + '/' + stateId;
					
					/** Render edit page **/
					req.breadcrumbs(brdObj.edit_city);
					res.render('city_add_edit',{
						result : response.result,
						'error' : validationErrors, 
						'formData' : formData, 
						dynamic_url : stateId,
						dynamic_url2 : countryId
					});
				}).catch(next);	 
			}
		}).catch(next);	
	};//End editCity()


	/**
	 * Function for update City's status
	 *
	 * @param req 	As Request Data
	 * @param res 	As Response Data
	 * @param next 	As 	Callback argument to the middleware function
	 *
	 * @return null
	 */
	this.updateCityStatus = (req,res,next)=>{
		let stateId			= (req.params.state_id)		? req.params.state_id 		: "";
		let cityId			= (req.params.city_id)		? req.params.city_id 	: "";
		let cityStatus		= (req.params.status) 		? req.params.status	 		: "";
		 
		if(!cityId){
			/** Send error response **/
			req.flash(STATUS_ERROR, res.__("admin.system.invalid_access"));
			return res.redirect(LISTING_URL_CITIES + '/' + stateId);
		}

		/** Set update data **/
		let updateData = {modified  : getUtcDate()};
		updateData.active = (cityStatus==ACTIVE) ? DEACTIVE :ACTIVE;

		/** Update City status*/
		const cities = db.collection(CITIES_COLLECTION);
		cities.updateOne({_id : ObjectId(cityId)},{$set :updateData},(err,result)=>{
			if(err){
				/** Send error response **/
				req.flash(STATUS_ERROR,res.__("admin.system.something_going_wrong_please_try_again"));
				return res.redirect(LISTING_URL_CITIES + '/' + stateId);
			}

			/** Send success response **/
			req.flash(STATUS_SUCCESS, res.__("admin.cities.record_updated_successfully"));
			return res.redirect(LISTING_URL_CITIES + '/' + stateId);
		});
	};//End updateCityStatus()
	
	
	
	
	
	/**
	 * Function for get states dropdown from country
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getStatesDropdownFromCountry = (req, res ,next)=>{
		/** Get Country details **/
		getCountryDetails(req,res,next).then(response=>{
			if(response.status != STATUS_SUCCESS){
				res.render('state_dropdown', {results : []})
			}
			else {
				let countryId 		= (req.params.country_id) ? req.params.country_id : "0";
				if(countryId){
					/** Set conditions **/
					var commonConditions = { is_deleted : NOT_DELETED, active : ACTIVE , country_id : ObjectId(countryId) };
					 
					const states	= db.collection(STATES_COLLECTION);
					
					states.find(commonConditions).sort( { title: SORT_ASC } ).toArray(function(err, results) {
						if (err){
							res.render('state_dropdown', {results : []});
						}
						else {
							res.render('state_dropdown', {results,  countryId})
						}
					});
				}	
				else {
					res.render('state_dropdown', {results : []});
				}
			}
		});
	};//End getStatesDropdownFromCountry()

	
	/**
	 * Function for get cities dropdown from state
	 *
	 * @param req As Request Data
	 * @param res As Response Data
	 *
	 * @return render/json
	 */
    this.getCitiesDropdownFromState = (req, res ,next)=>{

		/** Get Country details **/
		getStateDetails(req,res,next).then(response=>{
			if(response.status != STATUS_SUCCESS){
				res.render('city_dropdown', {results : []});
			}
			
			let stateId 		= (req.params.state_id) ? req.params.state_id : "";
			
			if(stateId){
				/** Set conditions **/
				var commonConditions = { is_deleted : NOT_DELETED, active : ACTIVE , state_id : ObjectId(stateId) };
				 
				const cities = db.collection(CITIES_COLLECTION);
				
				cities.find(commonConditions).sort( { title: SORT_ASC } ).toArray(function(err, results) {
	 
					if (err){
						res.render('city_dropdown', {results : []});
					}
					else {
						res.render('city_dropdown', {results,  stateId});
					}
				});
			}	
			else {
				//res.render('city_dropdown', {results : []});
			}
		});
	};//End getCitiesDropdownFromState()
}
module.exports = new Locations();
