const BASE_URL = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? "" : "/LMSGI-1rDAW";



window.addEventListener("DOMContentLoaded", () => {

const loginRegisterContainer = document.querySelector("#login-register-container");
const registerContainer = document.querySelector("#register-container");
const registerLink = document.querySelector("#register-link");

	registerLink.addEventListener("click", () => {
        loginRegisterContainer.style.display = "none";
        registerContainer.style.display = "flex";
    });

});