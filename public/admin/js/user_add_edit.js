$(document).ready(function(){
			
	/**
	 * User image Upload
	 */
	$(document).on("click", ".changePhoto", function(){
		if(!$(".add-image #profile_image").hasClass("added")){
			$(".add-image #profile_image").trigger("click");
			$(".add-image #profile_image").addClass("added");
			window.setTimeout(function(){
				$(".add-image #profile_image").removeClass("added");
			},500);
		}
	});

	
	/**
	 *Show user image after select
	 */
	$("#profile_image").on("change", function(){
		var files = !!this.files ? this.files : [];
		if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

		if (/^image/.test( files[0].type)){
			// only image file
			var reader = new FileReader(); // instance of the FileReader
			reader.readAsDataURL(files[0]); // read the local file
			reader.onloadend = function(){

				$("#pImage").html("<img src='"+this.result+"' class='profileImage' >");
			}
		}
		$("span#profile_image_error").text("");
	});

	
	/**
	 * For date of birth
	 */
	var options		= 	{};
	options.locale 	=	{
		format	: 	'<%=DATE_RANGE_DATE_FORMAT%>',
	};
	options.startDate		= 	moment().tz(defaultTimeZone).format(dateRangeFormat);
	options.autoUpdateInput	= 	false;
	options.singleDatePicker= 	true;
	options.showDropdowns	= 	true;
	options.maxDate			= 	moment().tz(defaultTimeZone).format(dateRangeFormat);
	options.drops			= 	"up";

	var configDemo = $('.datepicker');
	configDemo.daterangepicker(options);
	configDemo.on('apply.daterangepicker', function(e,picker){
		var displayStartDate 	=	picker.startDate.format(dateRangeFormat);
		$('.datepicker').val(displayStartDate);
	});
});