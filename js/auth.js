const loginForm = document.querySelector(".login-card");
const nameInput = document.getElementById('name');
const emailInput = document.getElementById("email");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); //stops refreshing page

    const userProfile = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        classes: []
    };

    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    window.location.href = "pages/classes.html";
});