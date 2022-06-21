$(document).ready(function() {

	/* Sign up form of Tutor */
    $('#editTutorProfileForm').formValidation({
		message: 'This value is not valid',
		fields: {
			'first_name': {
				row: '.form-group',
				err: '.first_name_error',
				validators: {
					notEmpty: {
						message: "Please enter your first name here."
					},
					regexp: {
						regexp: /^[a-zA-Z\s]+$/,
						message: 'Please enter alphabet only.'
					}
				}
			},
			'last_name': {
				row: '.form-group',
				err: '.last_name_error',
				validators: {
					notEmpty: {
						message: "Please enter your last name here."
					},
					regexp: {
						regexp: /^[a-zA-Z\s]+$/,
						message: 'Please enter alphabet only.'
					}
				}
			},
			'password': {
				row: '.form-group',
				err: '.password_error',
				validators: {
					regexp: {
						regexp: PASSWORD_REGX,
						message: ERROR_PASSWORD_REGX
					}
				}
			},
			'confirm_password': {
				row: '.form-group',
				err: '.confirm_password_error',
				validators: {
					identical: {
						field: 'password',
						message: ERROR_PASSWORD_CONFIRM_PASSWORD_NOT_MATCH
					},
				}
			}
		}
	});

});