function validate()
{
    var fname=document.forms.form1.f_name.value;
    var lname=document.forms.form1.l_name.value;
    var uname=document.forms.form1.u_name.value;
    var ph=document.forms.form1.p_no.value;
    var em=document.forms.form1.email.value;
    var fpass=document.forms.form1.f_pass.value;
    var cpass=document.forms.form1.c_pass.value;
    var gender=document.forms.form1.gen.value;

    var a = /^[0-9]+$/;
    var b = /^[a-zA-Z0-9]+$/;
    var c = /^[a-zA-Z]+$/;
    var d = /^([0-9])\1+$/;
    var atpos = em.indexOf("@");       
    var dotpos = em.lastIndexOf(".");

    if(fname == null || fname == "")
    {
        alert("First name cannot be blank");
        document.forms.form1.f_name.focus();
        return false;
    }
    if(c.test(document.forms.form1.f_name.value)==false)
            {
                alert("First name is alphabetic only....");
                document.forms.form1.f_name.focus();
                return false;
            }
            if(lname == null || lname == "")
            {
                alert("Last name cannot be blank");
                document.forms.form1.l_name.focus();
                return false;
            }
            if(c.test(document.forms.form1.l_name.value)==false)
            {
                alert("Last name is alphabetic only....");
                document.forms.form1.l_name.focus();
                return false;
            }
            if(em == null || em == "")
            {
                alert("Email ID cannot be blank");
                document.forms.form1.email.focus();
                return false;

            }
            if(atpos<1||dotpos<atpos+2||dotpos+2>=em.length)
            {
                alert("Not a valid email address");
                document.forms.form1.email.focus();
                return false;
            }
            if(uname == null || uname == "")
            {
                alert("Username cannot be blank");
                document.forms.form1.u_name.focus();
                return false;
            }
            if(b.test(document.forms.form1.u_name.value)==false)
            {
                alert("Username should contain alphanumeric characters");
                document.forms.form1.u_name.focus();
                return false;
            }
            if(uname.length<5)
            {
                alert("Username have less than 5 characters");
                document.forms.form1.u_name.focus();
                return false;
            }
            if(ph.match(null))
            {
                alert("Phone number should not be blank");
                document.forms.form1.p_no.focus();
                return false;
            }
            if(d.test(document.forms.form1.p_no.value)==true)
            {
                alert("Phone number should not contain all the digits being repeated");
                document.forms.form1.p_no.focus();
                return false;
            }
           
            if((ph.toString().length==10)==false)
            {
                alert("Phone number should be only 10 digits");
                document.forms.form1.p_no.focus();
                return false;
            }
            if(a.test(document.forms.form1.p_no.value)==false)
            {
                alert("Phone number should be only digits");
                document.forms.form1.p_no.focus();
                return false;
            }

            
            
            
            if((cpass==fpass)==false)
            {
                alert("please type the same password");
                document.forms.form1.c_pass.focus();
                return false;
            }
            
}