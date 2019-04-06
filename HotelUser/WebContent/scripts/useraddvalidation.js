function validateUserForm()
{
var uId=document.getElementById("uid").value;
var uName=document.getElementById("unm").value;
var uRole=document.getElementById("url").value;
var uPasswd=document.getElementById("ups").value;
var uConPass=document.getElementById("uconp").value;



if(uId==null || uId==""){
	window.alert("User Id can not be empty.!")
	return false;
}

if(uName==null || uName=="")
	{
	window.alert(" User Name can not be empty.!")
	
	return false;
	}

if(uPasswd==null || uPasswd=="")
{
window.alert(" Password can not be empty.!")

return false;
}

if(uConPass==null || uConPass=="")
{
window.alert(" Password Confirmation can not be empty.!")

return false;
}

if(uRole==null || uRole=="")
	{
	window.alert("User Role can not be empty.!")
	
	return false;
	}

	return true;


}