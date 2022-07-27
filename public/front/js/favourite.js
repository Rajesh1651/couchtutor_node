/**
 * Function for mark tutor as favourite/ unfavourite
 * param id as link id
 * param status as 1/0 (add/remove)
 * param postUrl as url of function
 * param imageId as id of image tag
 * param page as on which page action is performed
 **/
function markFavouriteTutor(id, status, postUrl, imageId, page, myWishlist) {
	$.ajax({
		data: { 'status': status, 'linkId': id, 'imageId': imageId, 'page': page },
		url: postUrl,
		beforeSend: function (e) {
			blockedUI();
		},
		success: function (data) {
			unblockedUI();
			if (data.status == "success") {


				if (typeof myWishlist !== "undefined" && myWishlist === 1) {
					window.location.reload();
				} else {

					$('#' + id).attr('onClick', data.dataFunction);
					 

					if (data.state) {
						$('#' + imageId).parent().addClass('in_list');
					} else {
						$('#' + imageId).parent().removeClass('in_list');
					}

					showSuccessMessageTopRight(data.message);
				}
			}
			else {
				showErrorMessageTopRight(data.message);
			}
		}
	});
}

