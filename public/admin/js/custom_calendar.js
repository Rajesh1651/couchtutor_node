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
        maxDate: new Date(),
        time: false,
    }).on('change', function (e, date) {
        var copiedDate = new Date(date);
         
        $('#' + start_time_id).bootstrapMaterialDatePicker('setDate', copiedDate);
        $('#' + start_time_id).bootstrapMaterialDatePicker('setMaxDate', copiedDate);
    });

    $('#' + start_time_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        autoclose: true,
        shortTime: false,
        maxDate: new Date(),
        date: true,
        time: false,
    }).on('change', function (e, date) {
        var copiedDate = new Date(date);
        
        $('#' + end_time_id).bootstrapMaterialDatePicker('setDate', copiedDate);
        $('#' + end_time_id).bootstrapMaterialDatePicker('setMinDate', copiedDate);
    });
}

/**
 * Function for show time picker
 * @params start_time_id as id of start_time input box
 * @params end_time_id as id of end_time input box
 * @params date_formate as date format
 */
function showStartEndDateFuture(start_time_id, end_time_id, date_formate) {

    var currentDate = new Date();
    $('#' + end_time_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        autoclose: true,
        shortTime: false,
        date: true,
        minDate: new Date(),
        time: false,
    }).on('change', function (e, date) {
        var copiedDate = new Date(date);

        if (copiedDate < currentDate) {
            $(this).val("");
            return false;
        } else {

            var startDate       =   $('#' + start_time_id).val();
            var startDateObj    =   null;
            if(startDate){
                /*
                * Note: JavaScript counts months from 0 to 11: January = 0. December = 11.
                */
                var stratDateArray  =   startDate.split('-');
                var stratDateDate   =   stratDateArray[0];
                var stratDateMonth  =   stratDateArray[1]-1;
                var stratDateYear   =   stratDateArray[2];
        
                var startDateObj    =   new Date(stratDateYear, stratDateMonth, stratDateDate);
                
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
        minDate: new Date(),
        date: true,
        time: false,
    }).on('change', function (e, date) {
        var copiedDate = new Date(date);
        if (copiedDate < currentDate) {
            $(this).val("");
            return false;
        } else {
             
            $('#' + end_time_id).bootstrapMaterialDatePicker('setDate', copiedDate);
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

        var copiedDate = new Date(date);
        if (copiedDate.getTime() < currentDate.getTime()) {
            $(this).val("");
            return false;
        } else {
            copiedDate.setDate(copiedDate.getDate() + 1);
			$('#' + end_time_id).bootstrapMaterialDatePicker('setDate', copiedDate);
			$('#' + end_time_id).bootstrapMaterialDatePicker('setMinDate', copiedDate);
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

    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);

    $('#' + field_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        shortTime: false,
        date: true,
        time: false,
        maxDate: currentDate,
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd',
        autoclose: true,

    }).on('change', function (e, date) {

        var dob = new Date(date);

        var years = new Date(new Date() - new Date(dob)).getFullYear() - 1970;
        alert(years);
        if (years > 13) {
            $('#parent_email').hide();
            $('.parent_email').hide();
            $('#studentSignUpForm').formValidation('addField', 'parent_email');
        } else {
            $('#parent_email').show();
            $('.parent_email').show();
            $('#studentSignUpForm').formValidation('addField', 'parent_email');
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

    $('#' + end_time_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        autoclose: true,
        shortTime: false,
        date: true,
        time: false,
        maxDate: currentDate,
    }).on('change', function (e, date) {
        var copiedDate = new Date(date);
         
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
        maxDate: currentDate,
    }).on('change', function (e, date) {
        var copiedDate = new Date(date);
         
        $('#' + end_time_id).bootstrapMaterialDatePicker('setDate', copiedDate);
        $('#' + end_time_id).bootstrapMaterialDatePicker('setMinDate', copiedDate);
    });
}


/**
 * Function for show time picker
 * @params start_time_id as id of start_time input box
 * @params end_time_id as id of end_time input box
 * @params date_formate as date format
 */
function showStartEndDateAllTime(start_time_id, end_time_id, date_formate) {
    var currentDate = new Date();
    $('#' + end_time_id).bootstrapMaterialDatePicker({
        weekStart: 0,
        format: date_formate,
        autoclose: true,
        shortTime: false,
        date: true,
        minDate: null,
        time: false,
    }).on('change', function (e, date) {
        var copiedDate = new Date(date);
        
        var startDate       =   $('#' + start_time_id).val();
        var startDateObj    =   null;
        if(startDate){
            /*
            * Note: JavaScript counts months from 0 to 11: January = 0. December = 11.
            */
            var stratDateArray  =   startDate.split('-');
            var stratDateDate   =   stratDateArray[0];
            var stratDateMonth  =   stratDateArray[1]-1;
            var stratDateYear   =   stratDateArray[2];
    
            var startDateObj    =   new Date(stratDateYear, stratDateMonth, stratDateDate);
            
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
        minDate: null,
        date: true,
        time: false,
    }).on('change', function (e, date) {
        var copiedDate = new Date(date);
        
        var endDate     =   $('#' + end_time_id).val();
        var endDateObj  =   null;
        if(endDate){
            /*
            * Note: JavaScript counts months from 0 to 11: January = 0. December = 11.
            */
            var endDateArray    =   endDate.split('-');
            var endDateDate     =   endDateArray[0];
            var endDateMonth    =   endDateArray[1]-1;
            var endDateYear     =   endDateArray[2];
    
            var endDateObj  =   new Date(endDateYear, endDateMonth, endDateDate);
            
            /*start Date can not be greater than end date */
            if (copiedDate >= endDateObj) {
                $(this).val("");
                return false;
            }
        }

        $('#' + end_time_id).bootstrapMaterialDatePicker('setDate', copiedDate);
        $('#' + end_time_id).bootstrapMaterialDatePicker('setMinDate', copiedDate);



    });
}