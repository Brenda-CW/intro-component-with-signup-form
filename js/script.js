const btn = document.getElementById("#btn"),
const firstName = document.getElementById("#firstName"),
const firstError = document.getElementById("firstNameError")
const lastName = document.getElementById("lastName"),
const lastError = document.getElementById("lastNameError"),
const email = document.getElementById("email"),
const emailError = document.getElementById("emailError"),
const password = document.getElementById("password"),
const passwordError = document.getElementById("passwordError"),

const submit = () => {
    console.log(firstName)
    if (firstName === "") {
        firstName.innerHTML = <img>"../icon-error.svg"</img>
        firstError.innerHTML = "<p>First Name cannot be empty.</p>"
        console.log("First Name Error!")
    } else if (lastName === "") {
        lastError.innerHTML = "<p>Last Name cannot be empty.</p>"
        console.log("Last Name Error!")
    }
}

btn.addEventListener("click", function() {
    submit();
});