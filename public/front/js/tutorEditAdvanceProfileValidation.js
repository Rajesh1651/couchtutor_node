/* tuter edit advance profile form validation */
$(document).ready(function() {
  
    $('#tutorEditAdvanceProfileForm').formValidation({
        message: 'This value is not valid',
        fields: {
            'brief_intro': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please enter brief introduction."
                    },

                }
            },
            // 'resume_url': {
            //     row: '.form-group',

            //     validators: {
            //         notEmpty: {
            //             message: "Please enter resume url."
            //         },

            //     }
            // },
           'tutor_languages[]': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please select the language."
                    },

                }
            },
	'tutor_grades[]': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please select the grade."
                    },

                }
            },
	'tutor_expertise[]': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please select the area of expertise."
                    },

                }
            },
         'reference_name_1': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please enter the reference name."
                    },

                }
            },
	'reference_name_2': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please enter the reference name."
                    },

                }
            },
	'reference_name_3': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please enter the reference name."
                    },

                }
            },
	'contact_number_1': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please enter the contact number."
                    },

                }
            },
	'contact_number_2': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please enter the contact number."
                    },

                }
            },
	'contact_number_3': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please enter the contact number."
                    },

                }
            },
	'designation_1': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please enter the designation."
                    },

                }
            },
	'designation_2': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please enter the designation."
                    },

                }
            },
	'designation_3': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please enter the designation."
                    },

                }
            },
	'organisation_1': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please enter the organisation name."
                    },

                }
            },
	'organisation_2': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please enter the organisation name."
                    },

                }
            },
	'organisation_3': {
                row: '.form-group',

                validators: {
                    notEmpty: {
                        message: "Please enter the organisation name."
                    },

                }
            },
        }
    });
});