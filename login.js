function validate()
{
    var uname1=document.forms.form2.uname.value;
    var pass=document.forms.form2.password.value;
    /*var b = /^[a-zA-Z0-9]+$/;*/
    var c = /^(?![0-9])(?![_.])(?!.*[_.]{2})[a-zA-Z0-9]+(?<![_.])$/;
    if(pass==null||pass==" ")
    {
        alert("Password cannot be blank");
        document.forms.form2.password.focus();
        return false;
    }
    if(uname1 == null || uname1 == "")
    {
        alert("Username cannot be blank");
        document.forms.form2.uname.focus();
        return false;
    }
    
    if(c.test(document.forms.form2.uname.value)==false)
    {
        alert("Username should contain alphanumeric characters and should not start with any digit,'_' or '.'");
        document.forms.form2.uname.focus();
        return false;
    }
    
}