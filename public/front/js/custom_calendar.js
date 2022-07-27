/**
 * Function for show time picker
 * @params start_time_id as id of start_time input box
 * @params end_time_id as id of end_time input box
 * @params date_formate as date format
 */
function showStartEndDate(start_time_id, end_time_id, date_formate) {   

    $('#' + end_time_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        autoclose: true,
        shortTime: false,
        date: true,
        time: false,
    }).on('change', function (e, date) {
        var copiedDate 		= 	new Date(date);	
		var startDate		=	$('#' + start_time_id).val();
		var startDateObj	=	null;
		if(startDate){
			/*
			* Note: JavaScript counts months from 0 to 11: January = 0. December = 11.
			*/
			var stratDateArray	=	startDate.split('-');
			var stratDateDate	=	stratDateArray[0];
			var stratDateMonth	=	stratDateArray[1]-1;
			var stratDateYear	=	stratDateArray[2];
	
			var startDateObj	=	new Date(stratDateYear, stratDateMonth, stratDateDate);
			
			/*End Date can not be less than start date */
			if (copiedDate <= startDateObj) {
				$(this).val("");
				return false;
			}
		}
		
		$('#' + start_time_id).bootstrapMaterialDatePicker('setDate', copiedDate);
		$('#' + start_time_id).bootstrapMaterialDatePicker('setMaxDate', copiedDate);  
    });

    $('#' + start_time_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        autoclose: true,
        shortTime: false,
        date: true,
        time: false,
    }).on('change', function (e, date) {
        var copiedDate 	= 	new Date(date);	
		var endDate		=	$('#' + end_time_id).val();
		var endDateObj	=	null;
		if(endDate){
			/*
			* Note: JavaScript counts months from 0 to 11: January = 0. December = 11.
			*/
			var endDateArray	=	endDate.split('-');
			var endDateDate		=	endDateArray[0];
			var endDateMonth	=	endDateArray[1]-1;
			var endDateYear		=	endDateArray[2];
	
			var endDateObj	=	new Date(endDateYear, endDateMonth, endDateDate);
			
			/*start Date can not be greater than end date */
			if (copiedDate >= endDateObj) {
				$(this).val("");
				return false;
			}
		}
		 
		$('#' + end_time_id).bootstrapMaterialDatePicker('setMinDate', copiedDate);
         
    });
}


/**
 * Function for show time picker
 * @params start_time_id as id of start_time input box
 * @params end_time_id as id of end_time input box
 * @params date_formate as date format
 */
function showStartEndTimePickerNew(start_time_id, end_time_id, date_formate) {

    $('#' + end_time_id).timepicker({
        timeFormat: 'h:mm p',
        interval: 60,
        minTime: '00:00',
        maxTime: '23:45',
        dynamic: true,
        dropdown: true,
        scrollbar: true
    });

    $('#' + start_time_id).timepicker({
        timeFormat: 'HH:mm p',
        interval: 15,
        minTime: '00:00',
        maxTime: '23:45',
        dynamic: true,
        dropdown: true,
        scrollbar: true,
        change: function (time) {
            // the input field
            var element = $(this),
                text;
            // get access to this Timepicker instance
            var timepicker = element.timepicker();
            text = 'Selected time is: ' + timepicker.format(time);
            $('#' + end_time_id).timepicker({ minTime: time });
        
        }
    });
}


/**
 * Function for show time picker
 * @params start_time_id as id of start_time input box
 * @params end_time_id as id of end_time input box
 */
function showStartEndTimePicker(start_time_id, end_time_id, time_format) {
    $('#' + end_time_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: time_format,
        autoclose: true,
        shortTime: false,
        date: false
    }).on('change', function (e, date) {
        var copiedDate = new Date(date);
        copiedDate.setHours(copiedDate.getHours() - 1);
        $('#' + start_time_id).bootstrapMaterialDatePicker('setDate', copiedDate);
        $('#' + start_time_id).bootstrapMaterialDatePicker('setMaxDate', copiedDate);
    });

    $('#' + start_time_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: time_format,
        autoclose: true,
        date: false,
        shortTime: false,
    }).on('change', function (e, date) {
        var copiedDate = new Date(date);
        copiedDate.setHours(copiedDate.getHours() + 1);
        $('#' + end_time_id).bootstrapMaterialDatePicker('setDate', copiedDate);
        $('#' + end_time_id).bootstrapMaterialDatePicker('setMinDate', copiedDate);
    });
}


/**
 * Function for show date picker
 * @params field_id as id of dob field
 * @params date_formate as date format
 */
function calendarForDOB(field_id, date_formate) {
    var currentDate = new Date();
    currentDate.setYear(currentDate.getFullYear() - 18);

    $('#' + field_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        shortTime: false,
        date: true,
        time: false,
        maxDate: currentDate,
        autoclose: true,
    }).on('change', function (e, date) {
        
		if($('#tutorSignUpForm').length > 0){
			$('#tutorSignUpForm').formValidation('addField', field_id);
		}
		
		if($('#tutorEditBasicProfileForm').length > 0){
			$('#tutorEditBasicProfileForm').formValidation('addField', field_id);
		}
		
        var copiedDate = new Date(date);
        if (copiedDate > currentDate) {
            $('#' + field_id).val('');
        }

    });
}


/**
 * Function for show date picker
 * @params field_id as id of dob field
 * @params date_formate as date format
 */
function calendarForStudentDOB(field_id, date_formate) {
    var str = field_id;
    var field = str.replace("student_", "");
    var currentDate = new Date();
	currentDate.setDate(currentDate.getDate() - 1);
    
    $('#' + field_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        shortTime: false,
        date: true,
        time: false,
        maxDate: currentDate,
        autoclose: true,
    }).on('change', function (e, date) {
        $('#studentSignUpForm').formValidation('addField', field);

        var copiedDate = new Date(date);
        if (copiedDate > currentDate) {
            $('#' + field_id).val('');
        }
    });
}


/**
 * Function for show date picker
 * @params field_id as id of dob field
 * @params date_formate as date format
 */
function showDatePicker(field_id, date_formate, showDate, showTime) {
    $('#' + field_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        shortTime: false,
        date: showDate,
        time: showTime,
        autoclose: true,
    });
}


/**
 * Function for show time picker
 * @params start_time_id as id of start_time input box
 * @params end_time_id as id of end_time input box
 * @params date_formate as date format
 */
function showStartEndDateInPast(start_time_id, end_time_id, date_formate) {
    var currentDate = new Date();
    var yesterday 	= new Date(new Date().setDate(new Date().getDate() - 1));
	
    $('#' + end_time_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        autoclose: true,
        shortTime: false,
        date: true,
        time: false,
        maxDate: yesterday,
    }).on('change', function (e, date) {
        var copiedDate = new Date(date);
        
		/*End Date can not be greater than current date */
		if (copiedDate > currentDate) {
            $(this).val("");
            return false;
        } 
		else {
			
			var startDate		=	$('#' + start_time_id).val();
			var startDateObj	=	null;
			if(startDate){
				/*
				* Note: JavaScript counts months from 0 to 11: January = 0. December = 11.
				*/
				var stratDateArray	=	startDate.split('-');
				var stratDateDate	=	stratDateArray[0];
				var stratDateMonth	=	stratDateArray[1]-1;
				var stratDateYear	=	stratDateArray[2];
		
				var startDateObj	=	new Date(stratDateYear, stratDateMonth, stratDateDate);
				
				/*End Date can not be less than start date */
				if (copiedDate <= startDateObj) {
					$(this).val("");
					return false;
				}
			}
			
			$('#' + start_time_id).bootstrapMaterialDatePicker('setDate', copiedDate);
			$('#' + start_time_id).bootstrapMaterialDatePicker('setMaxDate', copiedDate);
        }
    });

    $('#' + start_time_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        autoclose: true,
        shortTime: false,
        date: true,
        time: false,
        maxDate: yesterday,
    }).on('change', function (e, date) {
        var copiedDate = new Date(date);
        
		/*start Date can not be greater than current date */
		if (copiedDate > currentDate) {
            $(this).val("");
            return false;
        } 
		else {
			
			
			var endDate		=	$('#' + end_time_id).val();
			var endDateObj	=	null;
			if(endDate){
				/*
				* Note: JavaScript counts months from 0 to 11: January = 0. December = 11.
				*/
				var endDateArray	=	endDate.split('-');
				var endDateDate		=	endDateArray[0];
				var endDateMonth	=	endDateArray[1]-1;
				var endDateYear		=	endDateArray[2];
		
				var endDateObj	=	new Date(endDateYear, endDateMonth, endDateDate);
				
				/*start Date can not be greater than end date */
				if (copiedDate >= endDateObj) {
					$(this).val("");
					return false;
				}
			}
			
			
            $('#' + end_time_id).bootstrapMaterialDatePicker('setMinDate', copiedDate);
        }
    });
}


/**
 * Function for show time picker
 * @params start_time_id as id of start_time input box
 * @params end_time_id as id of end_time input box
 * @params date_formate as date format
 */
function showStartEndDateInPastExperience(start_time_id, end_time_id, date_formate) {
    var currentDate = new Date();
    var yesterday1 = new Date(new Date().setDate(new Date().getDate() - 1));

    $('#' + end_time_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        autoclose: true,
        shortTime: false,
        date: true,
        time: false,
        maxDate: yesterday1,
        minDate: $('#date-start').val(),
    }).on('change', function (e, date) {
        var copiedDate = new Date(date);

        if (copiedDate > currentDate) {
            $(this).val("");
            return false;
        } else {
            $('#' + start_time_id).bootstrapMaterialDatePicker('setDate', copiedDate);
            $('#' + start_time_id).bootstrapMaterialDatePicker('setMaxDate', copiedDate);

        }
    });

    $('#' + start_time_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        autoclose: true,
        shortTime: false,
        date: true,
        time: false,
        maxDate: yesterday1,
    }).on('change', function (e, date) {
        var copiedDate = new Date(date);
        if (copiedDate > currentDate) {
            $(this).val("");
            return false;
        } else {
            $('#' + end_time_id).bootstrapMaterialDatePicker('setMinDate', copiedDate);
            // alert('date is not greater');
        }

    });
}


/**
 * Function for show date picker
 * @params field_id as id of dob field
 * @params date_formate as date format
 */
function calendarForStudentDOBForProfile(field_id, date_formate, STUDENT_MINIMUM_AGE) {
    var str 		= 	field_id;
    var field 		= 	str.replace("student_", "");
    var currentDate = 	new Date();
 
    $('#' + field_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        shortTime: false,
        date: true,
        time: false,
        maxDate: currentDate,
        autoclose: true,
    }).on('change', function (e, date) {
        
		if($('#studentSignUpForm').length > 0){
			$('#studentSignUpForm').formValidation('addField', field);
		}
		
		if($('#tutorEditProfile').length > 0){
			$('#tutorEditProfile').formValidation('addField', field);
		}
        var currentDate = new Date();
        var copiedDate = new Date(date);
        if (copiedDate > currentDate) {
            $('#' + field_id).val('');
        }
    });
}

/**
 * Function for show time picker
 * @params start_time_id as id of start_time input box
 * @params end_time_id as id of end_time input box
 * @params date_formate as date format
 */
function showPlanStartEndDate(start_time_id, end_time_id, date_formate) {
    var currentDate = new Date();
    var tomorrow = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    $('#' + end_time_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        autoclose: true,
        shortTime: false,
        date: true,
        time: false,
        minDate: tomorrow,
    }).on('change', function (e, date) {

        if($('#addExamPrepForm').length > 0){
			$('#addExamPrepForm').formValidation('addField', end_time_id);
		}

		var copiedDate = new Date(date);
		if (copiedDate.getTime() < currentDate.getTime()) {
            $(this).val("");
            return false;
        } else {
			 copiedDate.setDate(copiedDate.getDate() - 1);
            $('#' + start_time_id).bootstrapMaterialDatePicker('setDate', copiedDate);
            $('#' + start_time_id).bootstrapMaterialDatePicker('setMaxDate', copiedDate);

        }
    });

    $('#' + start_time_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        autoclose: true,
        shortTime: false,
        date: true,
        time: false,
        minDate: tomorrow,
    }).on('change', function (e, date) {

        if($('#addExamPrepForm').length > 0){
			$('#addExamPrepForm').formValidation('addField', start_time_id);
		}

        var copiedDate = new Date(date);
        if (copiedDate.getTime() < currentDate.getTime()) {
            $(this).val("");
            return false;
               }

            copiedDate.setDate(copiedDate.getDate() + 1);
			$('#' + end_time_id).bootstrapMaterialDatePicker('setDate', copiedDate);
			$('#' + end_time_id).bootstrapMaterialDatePicker('setMinDate', copiedDate);
        
    });
}
