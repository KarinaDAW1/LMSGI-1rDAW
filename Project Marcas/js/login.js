const BASE_URL = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? "" : "/LMSGI-1rDAW";


window.addEventListener("DOMContentLoaded", () => {

		const loginRegisterContainer = document.querySelector("#login-register-container");
		const registerContainer = document.querySelector("#register-container");
		const loginLink = document.querySelector("#login-link");

		// Mostrar el contenedor de inicio de sesión al hacer clic en el enlace de inicio de sesión
    loginLink.addEventListener("click", () => {
        registerContainer.style.display = "none";
        loginRegisterContainer.style.display = "flex";
    });
});