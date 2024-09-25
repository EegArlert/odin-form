const pwd = document.querySelector(".pwd");
const pwdConfirm = document.querySelector(".pwd-confirm");
const errorInfo = document.querySelector(".error-info");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");
const allInput = document.querySelectorAll("input")



pwdConfirm.addEventListener("focusout", function(){
    if(pwd.value !== pwdConfirm.value ){
        errorInfo.textContent = "Password does not match";
    }
    else {
        resetText();
    }
    
})

phone.addEventListener("focusout", function(){
    if(phone.checkValidity() == false){
        errorInfo.textContent = "Please input the right phone number format";
    }
    else {
        resetText();
    }
    
})

email.addEventListener("focusout", function(){
    if(email.checkValidity() == false){
        errorInfo.textContent = "Please input the right email format";
    }
    else {
        resetText();
    }
    
})

function resetText() {
    errorInfo.textContent = "";
}