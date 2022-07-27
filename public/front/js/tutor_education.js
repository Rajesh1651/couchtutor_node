$(document).ready(function () {
    showStartEndDate('start_date', 'end_date', cal_date_format);
  });
/***
 * Function for open add experience model box.
 */
function open_model_box(type, modelId) {
    if (type == "edu_add" || type == "edu_edit") {
        $.ajax({
            type: "POST",
            beforeSend: function () {
                blockedUI();
            },
            url: edu_model_url,
            data: { type: type, modelId: modelId },
            success: function (result) {

                /* If user is logged-out then redirect to login page **/
                /* if (typeof(result.status) != "undefined" && result.status !== null && result.status == 'no_logged_in') {
                     window.location.href = login_url
                 }
                */
                unblockedUI();
                $(".error").html("");

                $("#type").val(type);
                $("#modelId").val(modelId);
                $("#university_name").val("");
                $("#major").val("");
                $("#cumulative_gpa").val("");
                $("#degree").val("");
                $("#date-start").val("");
                $("#date-end").val("");


                if (result) {

                    //$("#educationModal").html(result);
                    if (type == "edu_edit") {
                        $("#type").val(type);
                        $("#modelId").val(modelId);

                        $("#university_name").val(result.result.university_name);
                        $("#major").val(result.result.major);
                        $("#cumulative_gpa").val(result.result.cumulative_gpa);
                        $("#degree").val(result.result.degree);

                        if(result.result.is_current == "on"){
                            $("#is_current").prop("checked", true);
                            $('#emp_end_date').hide();
                        }
                        else{
                            $("#is_current").prop("checked", false);

                            $("#date-end").val(result.result.end_date);
                        }

                        $("#date-start").val(result.result.start_date);
                       
                    }

                    $("#educationModal").modal();
                }
            }
        });
    }
}




$('#addEducation').submit(function (e) {
    $.ajax({
        url: "/tutor/saveTutorEducation",
        type: 'POST',
        data: new FormData(this),
        processData: false,
        contentType: false,
        beforeSend: function () {
            blockedUI();
        },
        success: function (result) {

            /* If user is logged-out then redirect to login page **/
            if (typeof (result.status) != "undefined" && result.status !== null && result.status == 'no_logged_in') {
                window.location.href = "{{ route('User.login', ['?return_url=Tutor.education'])}}";
            }

            unblockedUI();

            $(".error").html("");
            if (result.status == "error") {

                $.each(result.errors, function (key, value) {
                    $("." + key).html(value.msg);
                });
            }
            else {
                location.reload(true);
            }
        }
    });
    e.preventDefault();
});





function getPopupEducation(id) {
    $.ajax({
        url: '/tutor/education_detail',
        type: "POST",
        data: { 'educationId': id },
        success: function (r) {

            if (r.status == 'success') {             

                $(".detail_university_name").html(r.result.university_name);
                $(".detail_major").html(r.result.major);
                $(".detail_cumulative_gpa").html(r.result.cumulative_gpa);
                $(".detail_degree").html(r.result.degree);                 

                if(r.result.is_current == "on"){
                    detail_Duration =  r.result.start_date + " - " + "Current Education";  
                }
                else{
                    detail_Duration =  r.result.start_date + "-" + r.result.end_date;                    
                } 
               
                $(".detail_Duration").html(detail_Duration);

                $("#getting_basic_list_popover").modal('show');

            }
            else {
                location.reload(true);
            }

        }
    });
}


































































/**
 * Function for add more form element
 * @params day_id as id of days
 */
function add_more() {
    var counter_value = $('#counter').val();
    var next_counter_value = parseInt(counter_value) + 1;
    $('#counter').val(next_counter_value);

    var field_id = 'title_' + next_counter_value;
    var field_name = 'title[' + next_counter_value + ']';
    var error_id = 'error_title_' + next_counter_value;

    var html = '';
    html += '<div class="row additional_rows certificate_row">';
    html += '<div class="col-md-6">';
    html += '<div class="form-group">';
    html += '<input class="form-control" id="' + field_id + '" name="' + field_name + '" type="text" value="" placeholder = "' + certificate_placeholder + '">';

    html += '<span class="error help-inline ' + error_id + '"></span>';
    html += '</div>';
    html += '</div>';
    html += '<div class="col-md-6">';
    html += '<div class="form-group add_more_btn">';
    html += '<button class="btn btn-secondary tooltipHelp" type="button" onclick="remove(this);" data-html="true" data-toggle="tooltip"  data-original-title="' + remove_btn_tooltip + '"><i class="material-icons font-14">delete</i></button>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    $(".after_add_more").before(html);

    /** For tooltip */
    $('[data-toggle="tooltip"]').tooltip();

    certificateSubmitButtonsHideShow();
}




/**
 * Function for remove form element.
 * @params obj as form element object
 */
function remove(obj) {
    blockedUI();
    $(obj).parent().parent().parent().remove();
    certificateSubmitButtonsHideShow();
    unblockedUI();
}


function certificateSubmitButtonsHideShow() {
    var total_certificate_row = $('.certificate_row').length;
    if (total_certificate_row > 0) {
        $(".certificate_submit_buttons").show();
    } else {
        $(".certificate_submit_buttons").hide();
    }
}



/**
 * Function for delete tutor certificates
 * param id as id
 * param obj asd element onject
 **/
function deleteCertificate(id, obj) {
    if (isLogin == 1) {
        bootbox.confirm({
            message: deleteCertificateMsg,
            buttons: {
                confirm: {
                    className: 'btn btn-primary'
                },
                cancel: {
                    className: 'btn btn-primary btn_theme_blue_color'
                }
            },
            callback: function (result) {
                if (result) {
                    $.ajax({
                        data: { 'id': id },
                        url: deleteCertificateUrl,
                        beforeSend: function (e) {
                            blockedUI();
                        },
                        success: function (data) {
                            unblockedUI();
                            if (data.status == "success") {
                                $(obj).parent().parent().parent().remove();
                                certificateSubmitButtonsHideShow();
                                showSuccessMessageTopRight(data.message);
                            } else {
                                showErrorMessageTopRight(data.message);
                            }
                        }
                    });
                }
            }
        });
    } else {
        window.location.replace(returnLoginUrl + "?return_url=" + getQueryString);
    }
}




/**
 * Function for validations.
 * @return true/false
 */
$('#tutor_certificates').submit(function () {
    var form_valid = true;
    $("#tutor_certificates input[type=text]").each(function () {

        var field_id = this.id;
        var error_field_id = 'error_' + field_id;

        if ($.trim(this.value) == "") {
            form_valid = false;
            $('.' + error_field_id).html(cert_vali_msg);
        } else {
            $('.' + error_field_id).html('');
        }
    });

    if (form_valid) {
        return true;
    }
    return false;
});