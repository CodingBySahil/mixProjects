let username = document.querySelector("#username"); // store run time user name
let password = document.querySelector("#password"); // store run time password
let userflag = false, passflag = false; // validation flag for password & username

// form validation function
function formValidation(){

    // Check username for empty
    if (username.value == "") {
        document.querySelector("#user-error").innerHTML = "User name is epmty";
        userflag = false;
    }
    
    // Check username for less than 4 character
    else if (username.value.length < 4) {
        document.querySelector("#user-error").innerHTML = "User name must have min 4 characters";
        userflag = false;
    }
    
    // reset error string to none
    else{
        document.querySelector("#user-error").innerHTML = "";
        userflag = true;
    }

    // check for password if empty
    if (password.value == "") {
        document.querySelector("#pass-error").innerHTML = "Password required!"
        passflag = false;
    }
    
    // Reset password to none
    else{
        document.querySelector("#pass-error").innerHTML = ""
        passflag = true;
    }

    // return true if password and username is same as required and false if password and username is not same as required. As we know that if we submit false to form, then the form will not be submitted and if we submit true to form, then the form will be submitted
    if (userflag & passflag) {
        return true;
    }else{
        return false;
    }
}