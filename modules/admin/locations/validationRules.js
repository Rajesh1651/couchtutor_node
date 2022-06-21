var path 							= 	require('path');
const { check, validationResult } 	= 	require('express-validator');
const {ObjectId} 					= 	require('mongodb');


/** For locale **/
var anyObjectForLocale	=	{};
const i18n 	= require("i18n");
i18n.configure({
    locales:LANGUAGE_FOLDER_CODE_ARRAY,
    defaultLocale: DEFAULT_LANGUAGE_FOLDER_CODE,
    directory: WEBSITE_LOCALE_ROOT_PATH,
	updateFiles: false,
	register: anyObjectForLocale
});


validationObject = {
 
	validateForCountry : [
		check('title',		anyObjectForLocale.__("ADMIN.COUNTRY.PLEASE_ENTER_PAGE_TITLE_HERE")).trim().notEmpty(),
		check('title', 		anyObjectForLocale.__("admin.user.country_title_is_already_exists")).custom((value, {req})=>{	
			return new Promise((resolve, reject) => {
				const countries	=	db.collection(COUNTRIES_COLLECTION);
				countries.findOne({title : value}, function(err, country){
					if(err) {
						reject(false);
					}

					if(Boolean(country)) {
						reject(false);
					}
					
					resolve(true);
				}); 
			});
		}),
		 
	],
	
	
	validateForEditCountry : [
		check('title',		anyObjectForLocale.__("ADMIN.COUNTRY.PLEASE_ENTER_PAGE_TITLE_HERE")).trim().notEmpty(),
		check('title', 		anyObjectForLocale.__("admin.user.country_title_is_already_exists")).custom((value, {req})=>{	
			return new Promise((resolve, reject) => {
				const countries	=	db.collection(COUNTRIES_COLLECTION);
				var countryId	=	(req.params.country_id) ? req.params.country_id : null;
				
				countries.findOne({title : value, _id : {$ne:ObjectId(countryId)}}, function(err, country){
					if(err) {
						reject(false);
					}

					if(Boolean(country)) {
						reject(false);
					}
					
					resolve(true);
				}); 
			});
		}),
		 
	],
	
	
	
	
	validateForState : [
		check('title',		anyObjectForLocale.__("ADMIN.STATE.PLEASE_ENTER_PAGE_TITLE_HERE")).trim().notEmpty(),
		check('title', 		anyObjectForLocale.__("admin.user.state_title_is_already_exists")).custom((value, {req})=>{	
			return new Promise((resolve, reject) => {
				const states	=	db.collection(STATES_COLLECTION);
				let countryId 	=	(req.params.country_id) ? req.params.country_id : "";
				
				states.findOne({title : value, country_id : countryId}, function(err, stateAvailable){
					if(err) {
						reject(false);
					}

					if(Boolean(stateAvailable)) {
						reject(false);
					}
					
					resolve(true);
				}); 
			});
		}),
	],
	
	
	validateForEditState : [
		check('title',		anyObjectForLocale.__("ADMIN.STATE.PLEASE_ENTER_PAGE_TITLE_HERE")).trim().notEmpty(),
		check('title', 		anyObjectForLocale.__("admin.user.country_title_is_already_exists")).custom((value, {req})=>{	
			return new Promise((resolve, reject) => {
				const states	=	db.collection(STATES_COLLECTION);
				var countryId	=	(req.params.country_id) ? req.params.country_id : null;
				var stateId		=	(req.params.state_id) ? req.params.state_id : null;
				
				states.findOne({title : value, _id : {$ne:ObjectId(stateId)}}, function(err, stateAvailable){
					if(err) {
						reject(false);
					}

					if(Boolean(stateAvailable)) {
						reject(false);
					}
					
					resolve(true);
				}); 
			});
		}),
	],
	
	
	
	
	validateForCity : [
		check('title',		anyObjectForLocale.__("ADMIN.CITY.PLEASE_ENTER_PAGE_TITLE_HERE")).trim().notEmpty(),
		check('title', 		anyObjectForLocale.__("admin.user.city_title_is_already_exists")).custom((value, {req})=>{	
			return new Promise((resolve, reject) => {
				const cities	=	db.collection(CITIES_COLLECTION);
				let stateId 	=	(req.params.state_id) ? req.params.state_id : "";
				
				cities.findOne({title : value, state_id : stateId}, function(err, cityAvailable){
					if(err) {
						reject(false);
					}

					if(Boolean(cityAvailable)) {
						reject(false);
					}
					
					resolve(true);
				}); 
			});
		}),
	],
	
	
	validateForEditCity : [
		check('title',		anyObjectForLocale.__("ADMIN.CITY.PLEASE_ENTER_PAGE_TITLE_HERE")).trim().notEmpty(),
		check('title', 		anyObjectForLocale.__("admin.user.city_title_is_already_exists")).custom((value, {req})=>{	
			return new Promise((resolve, reject) => {
				const cities	=	db.collection(CITIES_COLLECTION);
				var cityId		=	(req.params.city_id) ? req.params.city_id : null;
				var stateId		=	(req.params.state_id) ? req.params.state_id : null;
				
				cities.findOne({title : value, state_id : stateId, _id : {$ne:ObjectId(cityId)}}, function(err, cityAvailable){
					if(err) {
						reject(false);
					}

					if(Boolean(cityAvailable)) {
						reject(false);
					}
					
					resolve(true);
				}); 
			});
		}),
	],
	
	
}
 
module.exports = validationObject;