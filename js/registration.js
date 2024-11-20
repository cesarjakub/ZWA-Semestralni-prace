const password1 = document.getElementById("password");
const password2 = document.getElementById("conf-password");

const error = document.querySelector(".alert");

const form = document.querySelector(".register-form");

function validatePassword(event){
    validatePasswordMatch(event);
}

function validatePasswordMatch(event){
    if(validatePasswordCheckForWhiteSpace()){
        if(password1.value == password2.value){
            error.style.display = "none";
        }else{
            error.innerHTML = "<p>Passwords do not match!</p>";
            error.style.display = "block";
            event.preventDefault();
        }
    }else{
        event.preventDefault();
    }
}

function validatePasswordCheckForWhiteSpace(){
    const regex = /\s+/;
    result = regex.test(password1.value);
    if(result){
        error.innerHTML = "<p>Password can't contain white spaces!</p>";
        error.style.display = "block";
        return false;
    }else{
        error.style.display = "none";
        return true;
    }
}

form.addEventListener("submit", validatePassword);