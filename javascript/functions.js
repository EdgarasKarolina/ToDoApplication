

exports.checkUserNames = function checkUserName(username)
{
    if(username.length > 3 && username.length <15)
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

}

exports.messageWasAdded = function messageWasAdded()
{

} 


exports.messageWasAdded = function messageWasDeleted()
{

} 