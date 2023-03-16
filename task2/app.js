/*const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const mno = document.getElementById("mno").value;
    const gend = document.getElementById("gend").value;
    const city = document.getElementById("city").value;

    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('mno', mno);
    localStorage.setItem('gend', gend);
    localStorage.setItem('city', city);
    if(fname == "" && lname == "" && email == "" && pass == "" && mno == "" && gend =="" && city ==""){
        Swal.fire(
            'Opps..!',
            'input field has no value!',
            'error'
        );
    }
    }
*/



function validate() {
    var fname = document.reg_form.FName;
    var lname = document.reg_form.LName;
    var mobile = document.reg_form.MNo;
    var email = document.reg_form.EMail;
    var gender = document.reg_form.gender;
    var passwd = document.reg_form.PWD;
    var city = document.reg_form.city;    
    
    


    if (fname.value.length <= 0) {
        alert("Name is required");
        fname.focus();
         return false;
    }
    if (lname.value.length <= 0) {
        alert("Last Name is required");
        lname.focus();
        return false;
    }
    if (mobile.value.length <= 0) {
        alert("Mobile number is required");
        mobile.focus();
        return false;
    }
    
    if (email.value.length <= 0) {
        alert("Email Id is required");
        email.focus();
        return false;
    }
    
    if (passwd.value.length <= 0) {
        alert("pwd  is required");
        passwd.focus();
        return false;
    }
    if (gender.value.length <= 0) {
        alert("Gender is required");
        gender.focus();
        return false;
    }
    if (city.value == "select city") {    
        alert("City is required");    
        city.focus();    
        return false;    
    }    
    return submit;
   
}  

