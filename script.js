const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");
const password_error_msg = document.querySelector("#password_error_msg");

let doPasswordsMatch = () => {
    if(password.value !== confirm_password.value) {
        password_error_msg.textContent = "Passwords must match";
    } else {
        password_error_msg.textContent = "";
    }  

}

password.addEventListener("input", doPasswordsMatch);
confirm_password.addEventListener("input", doPasswordsMatch);







