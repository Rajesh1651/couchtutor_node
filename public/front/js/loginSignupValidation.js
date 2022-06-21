$(document).ready(function () {


    /** For Datepicker for student*/
    // calendarForDOB('date_of_birth', JS_DATE_FORMAT);
    // calendarForStudentDOB('student_date_of_birth', JS_DATE_FORMAT);

    phoneNumValidate('studentUserMobile', 'student_UserPhone_error', 'studentUserPhone');
    phoneNumValidate('tutorUserMobile', 'tutor_UserPhone_error', 'tutorUserPhone');
   
    /**
     * For student signup model box
     **/


    /*
    $('#studentSignUpForm #student_country').select2({ 'width': '100%', dropdownParent: $('.student_countrybox'), dropdownPosition: 'below' });
    $('#studentSignUpForm #student_state').select2({ 'width': '100%', dropdownParent: $('#student_state_div'), dropdownPosition: 'below' });
    $('#studentSignupGrade').select2({ 'width': '100%', dropdownParent: $('.gradebox'), dropdownPosition: 'below' });
    $('#studentSignupCurriculum').select2({ 'width': '100%', dropdownParent: $('.curriculumbox'), dropdownPosition: 'below' });
    $('#studentSignUpForm #student_time_zone').select2({ 'width': '100%', dropdownParent: $('.timezonebox'), dropdownPosition: 'below' });
*/

    /**
     * For Tutor signup model box
     **/

    /*
    $('#tutorSignUpForm #country').select2({ 'width': '100%', dropdownParent: $('.countrybox'), dropdownPosition: 'below' });
    $('#tutorSignUpForm #state').select2({ 'width': '100%', dropdownParent: $('#state_div'), dropdownPosition: 'below' });
    $('#tutorSignUpForm #city').select2({ 'width': '100%', dropdownParent: $('#city_div'), dropdownPosition: 'below' });
    $('#tutorSignUpForm #time_zone').select2({ 'width': '100%', dropdownParent: $('#timezonebox'), dropdownPosition: 'below' });
    $('#tutorSignUpForm #gender').select2({ 'width': '100%', dropdownParent: $('.tutor-gender'), dropdownPosition: 'below' });
*/
  
    

  

    /** 
     * Email update form validations 
     * Called when user wants to change email address
     **/
    $('#userForgetPasswordForm').formValidation({
        message: 'This value is not valid',
        fields: {
            'email': {
                row: '.mws-form-item',
                err: '.forgot_email_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_EMAIL_ADDRESS
                    },
                    emailAddress: {
                        message: ERROR_ENTER_VALID_EMAIL_ADDRESS
                    }
                }
            }
        }
    }).on('success.form.fv', function (e, data) {
        var return_url = $('#return_url').val();
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: submit_forgetPassword_otp_url,            
            data: $("#userForgetPasswordForm").serialize(),
            beforeSend: function () {
                blockedUI();
            },
            success: function (r) {

                /* If user is logged-out then redirect to login page **/
                if (typeof (r.status) != "undefined" && r.status !== null && r.status == 'no_logged_in') {
                    window.location.href = return_url;
                }
                /*
                if (r.status == "success") {
                    if (r.from == 'email') {
                        window.location.reload();
                    } else if (r.from == 'phone') {
                        showSuccessMessageTopRight(r.message);
                        $('#userForgetPasswordModal').modal('hide');
                        if (typeof r.slug != "undefined") {
                            setTimeout(function () {
                                $.ajax({
                                    type: 'POST',
                                    url: forget_password_otp_modal_url,                                   
                                    data: { slug: r.slug },
                                    beforeSend: function () {
                                        blockedUI();
                                    },
                                    success: function (r) {
                                        unblockedUI();
                                        if (r.status == 'success') {
                                            $('#submitForgetPasswordOtpModalDiv').html(r.view);
                                            $('#submitForgetOTPModal').modal({ backdrop: 'static', keyboard: false });
                                        }
                                        if (r.status == "error") {
                                            showErrorMessageTopRight(r.message);
                                        }
                                    }
                                });

                            }, 1000);
                        }
                    } else {
                        showSuccessMessageTopRight(r.message);
                    }

                } else 
                */
                
                if (r.status == "error") {
                    showErrorMessageTopRight(r.message);
                } else if (r.status == "success") {
                    window.location.reload();
                } else {
                    $('.email_err').html(r.message);
                }
                unblockedUI();

            }
        });
    });
});


/* login function */
function login(formId) {

    $.ajax({
        type: 'POST',
        url: user_login_url,
        data: $("#" + formId).serialize() + "&modal=modal",
        beforeSend: function () {
            blockedUI();
        },
        success: function (r) {
            unblockedUI();
            if (r.status == 'success') {
                window.location.href = r.url;
            }

            if (r.status == "error") {
                showErrorMessageTopRight(r.errors);
            }
        }
    });

}


/* signup function */
function signup(formId, signup_url) {
    $.ajax({
        type: 'POST',
        url: signup_url,
        data: $("#" + formId).serialize() + "&modal=modal",
        beforeSend: function () {
            blockedUI();
        },
        success: function (r) {
            unblockedUI();
            if (r.status == 'success') {
                window.location.href = r.url;
            }
            if (r.status == "error") {

                $(".error-message").empty();
                $.each(r.errors, function (index, value) {                  

                    console.log(index + "--" + value.msg);
                    if (formId == 'studentSignUpForm') {
                        $(".stu_" + index).html(value.msg);
                    }
                    if (formId == 'tutorSignUpForm') {
                        $(".tut_" + index).html(value.msg);
                    }
                });
            }
        }
    });

}



/** Function is used for open signin/signup model boxes **/
function openSigninSignupBox(userType, formType) {

     studentLoginFormValidation();
     tutorLoginFormValidation();  

    if (userType == STUDENT_ROLE_SLUG) {
        studentSignUpFormValidation();        
       
        studentForm(formType);
    } else if (userType == TUTOR_ROLE_SLUG) {      
         tutorSignUpFormValidation();        
        tutorForm(formType);
    } 


}


/* student form */
function studentForm(type) {
    if (type == 'login') {   
        $('#tutorFormModal').modal('hide');
        $('#tutor-signup').removeClass("show active");
        $('#tutor-login').addClass("show active");
        $('#tutor-signup-tab').removeClass("active");
        $('#tutor-login-tab').addClass("active");

    } else if (type == 'signup') {      

        $('#studentFormModal').modal('hide');
        $('#tutor-signup').removeClass("show active");
        $('#tutor-login').addClass("show active");
        $('#tutor-signup-tab').removeClass("active");
        $('#tutor-login-tab').addClass("active");
    }
    
    blockedUI();
    if (type == 'login') {
        setTimeout(function () {
            $('#studentFormModal').modal('show');
            unblockedUI();
        }, 1000);

    } else if (type == 'signup') {
        setTimeout(function () {
            $('#tutorFormModal').modal('show');
            unblockedUI();
        }, 1000);
    }

}


/* student tutor form */
function tutorForm(type) {
    if (type == 'login') {   
        $('#tutorFormModal').modal('hide');
        $('#student-login').removeClass("show active");
        $('#student-signup').addClass("show active");
        $('#student-login-tab').removeClass("active");
        $('#student-signup-tab').addClass("active");

    } else if (type == 'signup') {  

        $('#studentFormModal').modal('hide');
        $('#tutor-signup').addClass("show active");
        $('#tutor-login').removeClass("show active");
        $('#tutor-signup-tab').addClass("active");
        $('#tutor-login-tab').removeClass("active");
    }

    blockedUI();
   
    if (type == 'login') {
        setTimeout(function () {
            $('#studentFormModal').modal('show');
            unblockedUI();
        }, 1000);
    } else if (type == 'signup') {        
        setTimeout(function () {
            $('#tutorFormModal').modal('show');
            unblockedUI();
        }, 1000);
    }

}


/** Open model box when loggedin user  Forget Password */
function userForgetPassword(form_type) {
    
    $('#studentFormModal').modal('hide');
    $('#tutorFormModal').modal('hide');


    if (form_type == 'studentFormModal') {
        $("#user_type_slug").val(STUDENT_ROLE_SLUG);
    } else if (form_type == 'tutorFormModal') {
        $("#user_type_slug").val(TUTOR_ROLE_SLUG);
    } 
   

    blockedUI();
    setTimeout(function () {
        $('#userForgetPasswordModal').modal('show');
        unblockedUI();
    }, 1000);
}

/** Open login model box from forgot-password */
function openLoginBox(form_type) {
    var user_type_slug = $("#user_type_slug").val();
    $('#' + form_type).modal('hide');
    if (user_type_slug == TUTOR_ROLE_SLUG) {
        var modelBoxId = '#tutorFormModal';
    } else if (user_type_slug == STUDENT_ROLE_SLUG) {
        var modelBoxId = '#studentFormModal';
    } 
    /*
    else if (user_type_slug == ORGANISATION_ROLE_SLUG) {
        var modelBoxId = '#organizationFormModal';
    }
*/
    blockedUI();
    if (user_type_slug == TUTOR_ROLE_SLUG) {

        setTimeout(function () {
            tutorForm('login');
            unblockedUI();
        }, 1000);

    } else if (user_type_slug == STUDENT_ROLE_SLUG) {

        setTimeout(function () {
            studentForm('login');
            unblockedUI();
        }, 1000);

    }


}

/** Open model box */
function studentLoginBox(form_type) {
    $('#' + form_type).modal('hide');
    $('#studentFormModal').modal('show');
}

$('#tutor-login-tab, #tutor-signup-tab, #login-tab, #signup-tab').click(function (e) {

    studentSignUpFormValidation();
    tutorSignUpFormValidation();

    studentLoginFormValidation();
    tutorLoginFormValidation();
   

    e.preventDefault();
});




function studentSignUpFormValidation() {

    $('#studentSignUpForm').formValidation('destroy', true);

    $('#studentSignUpForm').formValidation({
        message: 'This value is not valid',
        fields: {
            'first_name': {
                row: '.form-group',
                err: '.student_signup_first_name_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_FIRST_NAME
                    }
                }
            },
            'last_name': {
                row: '.form-group',
                err: '.student_signup_last_name_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_LAST_NAME
                    }
                }
            },
            // 'date_of_birth': {
            //     row: '.form-group',
            //     err: '.student_signup_date_of_birth_error',
            //     validators: {
            //         notEmpty: {
            //             message: PLEASE_SELECT_DATE_OF_BIRTH
            //         }
            //     }
            // },
            'email': {
                row: '.form-group',
                err: '.student_signup_email_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_EMAIL_ADDRESS
                    },
                    emailAddress: {
                        message: ERROR_ENTER_VALID_EMAIL_ADDRESS
                    }
                }
            },
            
            'phone_number': {
                row: '.form-group',
                err: '.student_signup_phone_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_MOBILE_NO
                    },
                }
            },
            // 'country': {
            //     row: '.form-group',
            //     err: '.student_signup_country_error',
            //     validators: {
            //         notEmpty: {
            //             message: PLEASE_SELECT_COUNTRY
            //         },
            //     }
            // },
            // 'student_state': {
            //     row: '.form-group',
            //     err: '.student_signup_state_error',
            //     validators: {
            //         notEmpty: {
            //             message: PLEASE_SELECT_STATE
            //         },
            //     }
            // },
            // 'student_city': {
            //     row: '.form-group',
            //     err: '.student_signup_city_error',
            //     validators: {
            //         notEmpty: {

            //             message: PLEASE_SELECT_CITY
            //         },
            //     }
            // },

            // 'address_one': {
            //     row: '.form-group',
            //     err: '.student_signup_address_one_error',
            //     validators: {
            //         notEmpty: {
            //             message: PLEASE_ENTER_ADDRESS
            //         },
            //     }
            // },
            'password': {
                row: '.form-group',
                err: '.student_signup_password_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_PASSWORD
                    },
                    regexp: {
                        regexp: PASSWORD_REGX,
                        message: ERROR_PASSWORD_REGX
                    }
                }
            },
            'confirm_password': {
                row: '.form-group',
                err: '.student_signup_confirm_password_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_CONFIRM_PASSWORD
                    },
                    identical: {
                        field: 'password',
                        message: ERROR_PASSWORD_CONFIRM_PASSWORD_NOT_MATCH
                    },
                }
            },

            // 'grade': {
            //     row: '.form-group',
            //     err: '.student_signup_grade_error',
            //     validators: {
            //         notEmpty: {
            //             message: ERROR_SELECT_GRADE
            //         },
            //     }
            // },
            // 'time_zone': {
            //     row: '.form-group',
            //     err: '.student_signup_timezone_error',
            //     validators: {
            //         notEmpty: {
            //             message: ERROR_SELECT_TIME_ZONE
            //         },
            //     }
            // },
            // 'user_subjects[]': {
            //     row: '.form-group',
            //     err: '.student_signup_user_subjects_error',
            //     validators: {
            //         notEmpty: {
            //             message: ERROR_SELECT_SUBJECT
            //         },
            //     }
            // },



            'student_termsncond': {
                row: '.form-group',
                err: '.student_signup_student_termsncond_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ACCEPT_TERMS_CONDITION
                    },
                }
            },


        }
    }).on('success.form.fv', function (e) {
        e.preventDefault();
        var signup_url = student_signup_url;
        signup('studentSignUpForm', signup_url);

    });

    $('#studentSignUpForm').formValidation('resetForm', { reset: true });

} 


function tutorSignUpFormValidation() {

    $('#tutorSignUpForm').formValidation('destroy', true);

    $('#tutorSignUpForm').formValidation({
        message: 'This value is not valid',
        fields: { 
            'first_name': {
                row: '.form-group',
                err: '.tutor_signup_first_name_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_FIRST_NAME
                    }
                }
            },
            'last_name': {
                row: '.form-group',
                err: '.tutor_signup_last_name_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_LAST_NAME
                    }
                }
            },
            'email': {
                row: '.form-group',
                err: '.tutor_signup_email_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_EMAIL_ADDRESS
                    },
                    emailAddress: {
                        message: ERROR_ENTER_VALID_EMAIL_ADDRESS
                    }
                }
            },
            'phone_number': {
                row: '.form-group',
                err: '.tutor_signup_phone_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_MOBILE_NO
                    },
                }
            },
            // 'gender': {
            //     row: '.form-group',
            //     err: '.tutor_signup_gender_error',
            //     validators: {
            //         notEmpty: {
            //             message: ERROR_SELECT_GENDER
            //         },
            //     }
            // },
            // 'date_of_birth': {
            //     row: '.form-group',
            //     err: '.tutor_signup_date_of_birth_error',
            //     validators: {
            //         notEmpty: {
            //             message: PLEASE_SELECT_DATE_OF_BIRTH
            //         },
            //     }
            // },

            // 'country': {
            //     row: '.form-group',
            //     err: '.tutor_signup_country_error',
            //     validators: {
            //         notEmpty: {
            //             message: PLEASE_SELECT_COUNTRY
            //         },
            //     }
            // },
            // 'state': {
            //     row: '.form-group',
            //     err: '.tutor_signup_state_error',
            //     validators: {
            //         notEmpty: {
            //             message: PLEASE_SELECT_STATE
            //         },
            //     }
            // },
            // 'city': {
            //     row: '.form-group',
            //     err: '.tutor_signup_city_error',
            //     validators: {
            //         notEmpty: {

            //             message: PLEASE_SELECT_CITY
            //         },
            //     }
            // },
            // 'time_zone': {
            //     row: '.form-group',
            //     err: '.tutor_timezone_error',
            //     validators: {
            //         notEmpty: {
            //             message: ERROR_SELECT_TIME_ZONE
            //         },
            //     }
            // },
            
            'password': {
                row: '.form-group',
                err: '.tutor_signup_password_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_PASSWORD
                    },
                    regexp: {
                        regexp: PASSWORD_REGX,
                        message: ERROR_PASSWORD_REGX
                    }
                }
            },
            'confirm_password': {
                row: '.form-group',
                err: '.tutor_signup_confirm_password_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_CONFIRM_PASSWORD
                    },
                    identical: {
                        field: 'password',
                        message: ERROR_PASSWORD_CONFIRM_PASSWORD_NOT_MATCH
                    },
                }
            },
            'termsncond': {
                row: '.form-group',
                err: '.tutor_signup_termsncond_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ACCEPT_TERMS_CONDITION
                    },
                }
            },
        },

    }).on('success.form.fv', function (e) {
        e.preventDefault();
        var signup_url = tutor_signup_url;
        signup('tutorSignUpForm', signup_url);

    });
    
    $('#tutorSignUpForm').formValidation('resetForm', { reset: true });

    var defaultCountry  = $('.defaultCountryId').attr('data-value'); 

    $("#country").val(defaultCountry);
}

function studentLoginFormValidation() {   

    $('#studentLoginForm').formValidation('destroy', true);
    $('#studentLoginForm').formValidation({
        message: 'This value is not valid',
        fields: {
            'email': {
                row: '.form-group',
                err: '.stu_login_email_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_EMAIL_ADDRESS
                    },
                    emailAddress: {
                        message: ERROR_ENTER_VALID_EMAIL_ADDRESS
                    }

                }
            },
            'password': {
                row: '.form-group',
                err: '.stu_login_password_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_PASSWORD
                    },
                }
            },
        }
    }).on('success.form.fv', function (e) {
        e.preventDefault();
        login('studentLoginForm');
    });

    $('#studentLoginForm').formValidation('resetForm', { reset: true });
}

function tutorLoginFormValidation() {

    $('#tutorLoginForm').formValidation('destroy', true);

    $('#tutorLoginForm').formValidation({
        message: 'This value is not valid',
        fields: {
            'email': {
                row: '.form-group',
                err: '.stu_login_email_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_EMAIL_ADDRESS
                    },
                    emailAddress: {
                        message: ERROR_ENTER_VALID_EMAIL_ADDRESS
                    }

                }
            },
            'password': {
                row: '.form-group',
                err: '.stu_login_password_error',
                validators: {
                    notEmpty: {
                        message: ERROR_ENTER_PASSWORD
                    },
                }
            },
        }
    }).on('success.form.fv', function (e) {
        e.preventDefault();      
        login('tutorLoginForm');
    });

    $('#tutorLoginForm').formValidation('resetForm', { reset: true });
}




