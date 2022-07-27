/** Open model box when loggedin user wants to change phone number */




/** Open model box when loggedin user wants to change his email address*/
function updateEmail() { 
    
    $('.email_err').html("");
    
    emailUpdateFormSubmit();

    $('#updateEmailModal').modal('show');
    $('body.iti-mobile').removeClass('open-menu');
    $('.account_left').removeClass('show');
    $('.sidebar_menu').removeClass('show');
}





function  emailUpdateFormSubmit(){

    $('#emailUpdateForm').formValidation('destroy', true);    

    $('#emailUpdateForm').formValidation({
        message: ERROR_ENTER_VALID_VALUE,
        fields: {
            'email': {
                row: '.mws-form-item',
                err: '.email_err',
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
            url: updateEmailUrl,            
            data: $("#emailUpdateForm").serialize(),
            beforeSend: function () {
                blockedUI();
            },
            success: function (r) {

                /* If user is logged-out then redirect to login page **/
                if (typeof (r.status) != "undefined" && r.status !== null && r.status == 'no_logged_in') {
                    window.location.href = return_url;
                }

                if (r.status == "success") {
                    window.location.reload();
                } else if (r.status == "not_updated") {
                    window.location.reload();
                } else {
                    $('.email_err').html(r.message);
                }
                unblockedUI();
            }
        });
    });
    
}




