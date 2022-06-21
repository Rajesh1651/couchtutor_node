/** Function is used for blog repy box **/
function openBlogRepyBox(blog_slug){
	$('#replyModalBox').modal('show');
	$('#blog_slug').val(blog_slug);
}

/* Sign up form of student User */
	$('#replyBlogForm').formValidation({
		message: 'This value is not valid',
		fields: {
			 
			'description': {
				row: '.form-group',
				err : '.description_err',
				validators: {
					notEmpty: {
						message: ERROR_ENTER_DESCRIPTION_NAME
					}
				}
			},
			
        }
	}).on('success.form.fv', function(e) { 
		e.preventDefault(); 
		var reply_url = blog_reply_url;
		blogReply("replyBlogForm",reply_url);
		
	});
	
	function blogReply(formId,reply_url){
		/* signup function */
		$.ajax({
				type:'POST',
				url:reply_url,
				data:$("#"+formId).serialize()+ "&modal=modal",
				beforeSend:function(){
					blockedUI();
				},
				success:function(r){ 
					unblockedUI();
					if(r.status == 'success'){
						window.location.href = r.url;
					}   
					if(r.status == "error"){ 
						$( ".error-message").empty();
						$.each(r.errors, function( index, value ) { console.log(index+"--"+value);
							  $( "."+index+"_err").html(value);
						}); 
					}
					
				}
		}); 
	
	}
