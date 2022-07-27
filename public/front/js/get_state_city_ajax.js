function getStateData(value){
	$.ajax({
		'type'		: 	'POST',
		url 		:	WEBSITE_URL+"get-states-dropdown-from-country/"+value,
		'data'		: 	{ 'country_id': value	},
		'success': function (response){
			$("#state_id_div").html(response);
			getCityData('');
			$('#state_id').select2({'width':'100%'});			
			
		}
	});
}


function getCityData(value){
	$.ajax({
		'type'		: 	'POST',
		url 		:	WEBSITE_URL+"get-cities-dropdown-from-state/"+value,
		'data'		: 	{ 'state_id': value	},
		'success': function (response){
			$("#city_id_div").html(response);
			$('#city_id').select2({'width':'100%'}); 		
		}
	});
}