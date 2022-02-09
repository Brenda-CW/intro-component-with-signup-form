const btn = document.getElementById("btn");
const firstName = document.getElementById("first-name");
const firstError = document.querySelector(".first-name-alert");
const lastName = document.getElementById("last-name");
const lastError = document.querySelector(".last-name-alert");
const emailAddress = document.getElementById("email");
const emailError = document.getElementById("email-error");
const password = document.getElementById("password");
const passwordError = document.querySelector(".password-alert");

const submit = () => {
    const first = firstName.value;
    const last = lastName.value;
    const pass = password.value;
    const email = emailAddress.value;
    console.log({first});
    console.log({last});
    console.log({pass})
    console.log({email})
    if (first === "") {
        first.innerHTML = "Hey<img src='./images/icon-error.svg' class='error-icon'>"
        firstError.classList.remove("hide") 
        console.log("First Name Error!")
    } if (last === "") {
        lastError.classList.remove("hide") 
        console.log("Last Name Error!")
    } if (pass === "") {
        console.log("Password Error!")
        passwordError.classList.remove("hide") 
    } 
}

btn.addEventListener("click", function(event) {
    event.preventDefault()
    submit();
});