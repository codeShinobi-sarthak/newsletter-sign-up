const form = document.querySelector(".container");
const successMessage = document.getElementById("successMessage")
const inputEmail = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const button = document.getElementById("sub-button");


function validateName() {
    var email = inputEmail.value;
    
    if (email.length == 0) {
        errorMsg.innerText = "Valid email required!";
        return false;
    }
    if (
        !email.match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)
        ) {
            errorMsg.innerText = "Valid email required!";
            return false;
        }
        errorMsg.innerText = "";
        return true;
    }
    
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if(validateName()){
         form.classList.add("hidden");
        successMessage.classList.remove("hidden");
      }
    });