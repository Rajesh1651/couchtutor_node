$(document).on('click', '.open_send_message_popup', function () {
	var tutorSlug = $(this).data('id');
	$.ajax({
		type: "POST",		
		beforeSend: function () {
			blockedUI();
		},
		url: message_popup_url,
		data: { tutorSlug: tutorSlug },
		success: function (result) {

			/* If user is logged-out then redirect to login page **/
			if (typeof (result.status) != "undefined" && result.status !== null && result.status == 'no_logged_in') {
				window.location.href = login_url;
			}

			if (result.status == "error") {
				location.reload(true);
			}

			unblockedUI();
			if (result) {
				$("#messageModal").html(result);
				$("#messageModal").modal();
			}
		}
	});
});



$(document).on('click', '.open_subject_popup', function () {
	var tutorSlug = $(this).data('id');

	if (typeof searchSubject !== 'undefined' && searchSubject != '') {
		$.ajax({
			type: "POST",
			url: "subject-for-session/" + tutorSlug,
			data: { tutor_subject: searchSubject },
			headers: {
				'X-CSRF-TOKEN': csrf_token
			},
			beforeSend: function () {
				blockedUI();
			},
			success: function (result) {

				/* If user is logged-out then redirect to login page **/
				if (typeof (result.status) != "undefined" && result.status !== null && result.status == 'no_logged_in') {
					window.location.href = login_url;
				}

				unblockedUI();

				if (result.status == "success") {
					window.location.href = result.redirecUrl;
				}
				else {
					location.reload(true);
				}
			}
		});
	}
	else {

		var page_type = $(this).attr('data-type');

		if (typeof page_type !== 'undefined' && page_type != '') {
			var page_types = page_type;
		} else {
			page_types = '';
		}

		$.ajax({
			type: "POST",
			headers: {
				'X-CSRF-TOKEN': csrf_token
			},
			beforeSend: function () {
				blockedUI();
			},
			url: subject_popup_url,
			data: { tutorSlug: tutorSlug, page_types :page_types},
			success: function (result) {

				/* If user is logged-out then redirect to login page **/
				if (typeof (result.status) != "undefined" && result.status !== null && result.status == 'no_logged_in') {
					window.location.href = login_url;
				}

				if (result.status == "error") {
					location.reload(true);
				}

				unblockedUI();
				if (result) {
					$("#subjectModal").html(result);
					$("#subjectModal").modal();
				}
			}
		});
	}
});


if ($('.multi_select_check_grade').length) {
	$('.multi_select_check_grade').multiselect({
		columns: 1,
		placeholder: select_grade_placeholder,
		search: true,
		searchOptions: {
			'default': select_grade_placeholder
		},
		selectAll: false
	});
}

