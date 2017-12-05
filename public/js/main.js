

//jQuery 
//calling deleteUser function 
//when clicked on "Delete" link in view
//link in the view has "deleteUser" class
//which is passed here
$(document).ready(function()
{
	$('.deleteUser').on('click', deleteUser);
}
);

//making an AJAX request
//in order to excange data with a server
function deleteUser()
{
	var confirmation = confirm('Are you sure want to delete this message?');

	if (confirmation) {
		$.ajax({
			//it is a DELETE request
			type: 'DELETE',
			url: '/messages/'+$(this).data('id') //adding the ID from the view

		}).done(function(response){

			window.location.replace('messages');
		});
		//redirecting to "getMessages" view 
		window.location.replace('messages');
	}
	else{
		return false;
	}

	
}

