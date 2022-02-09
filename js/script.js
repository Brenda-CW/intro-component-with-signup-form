import"./styles.css";

const btn = document.getElementById("btn");
const firstName = document.getElementById("first-name");
const firstError = document.getElementById("first-name-error");
const lastName = document.getElementById("last-name");
const lastError = document.getElementById("last-name-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");

const submit = () => {
    const first = firstName.value;
    const last = lastName.value;
    console.log(first)
    console.log(last)
    if (first === "") {
        firstName.innerHTML = "<img>'./images/icon-error.svg'</img>"
        firstError.classList.remove(".hide") 
        console.log("First Name Error!")
    } else if (last === "") {
        lastError.classList.remove(".hide") 
        console.log("Last Name Error!")
    }
}

btn.addEventListener("click", function() {
    submit();
});