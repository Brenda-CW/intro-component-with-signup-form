const btn = document.getElementById("btn");
const firstName = document.getElementById("first-name");
const firstError = document.querySelector(".first-name-alert");
const lastName = document.getElementById("last-name");
const lastError = document.querySelector(".last-name-alert");
const emailAddress = document.getElementById("email");
const emailError = document.getElementById("email-error");
const password = document.getElementById("password");
const passwordError = document.querySelector(".password-alert");
const email = emailAddress.value;

const validate = () => {
    const first = firstName.value;
    const last = lastName.value;
    const pass = password.value;
    const email = emailAddress.value;

    if (first === "") {
        firstName.classList.add("invalid");
        firstError.classList.remove("hide") ;
    } if (last === "") {
        lastName.classList.add("invalid");
        lastError.classList.remove("hide") 
    } if (pass === "") {
        password.classList.add("invalid");
        passwordError.classList.remove("hide") ;
    } 
    // if (!email.includes("@") || !email.includes(".com")) {
    //     emailAddress.classList.add("invalid");
    //     emailError.classList.remove("hide");
    // } REMOVED BECAUSE THIS WOULD NOT HAVE ACCEPTED .NET, .ORG AND OTHER DOMAINS
}

const emailValidate= () => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailformat)) {
        emailAddress.classList.add("invalid");
        emailError.classList.remove("hide");
        console.log("Email error")
    }
}


btn.addEventListener("click", function(event) {
    event.preventDefault()
    validate();
    emailValidate();
});