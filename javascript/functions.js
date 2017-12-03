

exports.checkUserNames = function checkUserName(username)
{
    if(username.length > 2 && username.length <16)
    {
        return true;
    }
    else {
        return false;
    }
}

var hasNumbers = /\d/;
exports.checkPasswords = function checkPassword(password)
{
    if(hasNumbers.test(password))
    {
        return true;
    }
    else{
        return false;
    }
}


exports.containsUpperCases = function containsUpperCase(password)
{
    var containsUpper = /[A-Z]/.test(password)
    if(containsUpper)
    {
        return true;
    }
    else{
        return false;
    }
}

exports.isNotEmpty = function isNotEmpty(message)
{
  if(message)
  {
      return true;
  }
  else{
      return false;
  }
}

exports.messageWasAdded = function messageWasAdded()
{

} 


exports.messageWasAdded = function messageWasDeleted()
{

} 

//making an AJAX request
//in order to excange data with a server
exports.userNameNotValid = function userNameNotValid()
{
	var confirmation = confirm('Username must be between 3-15 characters long');

	if (confirmation) {
		//redirecting to "getMessages" view 
		window.location.replace('index');
	}
	else{
		return false;
	}

	
}
