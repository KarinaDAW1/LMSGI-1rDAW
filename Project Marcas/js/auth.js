const BASE_URL = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? "" : "/LMSGI-1rDAW";

window.addEventListener("DOMContentLoaded", () => {
/* Inputs del registro */
const userNameInput = document.querySelector("#username-register");
const eventUsername = document.querySelector("#eventUsername");
const emailInput = document.querySelector("#email-register");
const passwordInput = document.querySelector("#password-register");
const confirmPasswordInput = document.querySelector("#re-password-register");
const iconoMatch = document.getElementById("password-match-icon");
const showPassword = document.getElementById("showPassword");

/* Variables para requisitos de cumplimiento del registro */
const May = document.querySelector("#req-mayus");
const Min = document.querySelector("#req-minus");
const Sig = document.querySelector("#req-signo");
const Long = document.querySelector("#req-long");
const RequerimentPassList = document.getElementById("password-requirements");

/* Parte visual login/register */
const loginRegisterContainer = document.querySelector("#login-register-container");
const registerContainer = document.querySelector("#register-container");
const loginLink = document.querySelector("#login-link");
const registerLink = document.querySelector("#register-link");
const formRegister = document.querySelector("#register-form");
const confirmOverlay = document.querySelector("#overlay");

const btnLogin = document.querySelector("#btnLogin");
const btnRegister = document.querySelector("#btnRegister");

registerLink.addEventListener("click", () => {
    loginRegisterContainer.style.display = "none";
    registerContainer.style.display = "flex";
});

loginLink.addEventListener("click", () => {
    registerContainer.style.display = "none";
    loginRegisterContainer.style.display = "flex";
});

userNameInput.addEventListener("input", (event) => {
    const name = userNameInput.value.length;
    if (name === 0) {
        eventUsername.style.display = "none";
    } else if (name < 8) {
        eventUsername.style.display = "flex";
        eventUsername.style.color = "red";
        event.preventDefault();
        userNameInput.focus();
    } else {
        eventUsername.style.display = "none";
    }
});

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;

    const PassMayus = /[A-Z]/.test(password);
    const PassMinus = /[a-z]/.test(password);
    const PassSigno = /[\W_]/.test(password);
    const PassLongitud = password.length >= 8;

    // Si hay contenido en el input de Pass, muestra los requisitos, sino los oculta.
        if (password.length > 0) {
            May.style.display = "block";
            Min.style.display = "block";
            Sig.style.display = "block";
            Long.style.display = "block";
        } else {
            May.style.display = "none";
            Min.style.display = "none";
            Sig.style.display = "none";
            Long.style.display = "none";
        }

        // Si cumple el requisito de Mayus, lo pinta de verde, sino en rojo.
        if (PassMayus) {
            May.style.color = "green";
        } else {
            May.style.color = "red";
        }

        // Si cumple el requisito de Minus, lo pinta en verde, sino en rojo
        if (PassMinus) {
            Min.style.color = "green";
        } else {
            Min.style.color = "red";
        }

        // Si cumple el requisito de signos, lo pinta en verde, sino en rojo
        if (PassSigno) {
            Sig.style.color = "green";
        } else {
            Sig.style.color = "red";
        }

        // Si cumple el requisito de longitud, lo pinta en verde, sino en rojo
        if (PassLongitud) {
            Long.style.color = "green";
        } else {
            Long.style.color = "red";
        }

        // Mostrar u ocultar la lista de requisitos según si hay contenido en password
        if (password.length === 0) {
            RequerimentPassList.style.display = "none";
        } else {
            RequerimentPassList.style.display = "block";
        }

    RequerimentPassList.style.display = password.length === 0 ? "none" : "block";
});

function validateRePassword() {
    if (passwordInput.value === confirmPasswordInput.value && confirmPasswordInput.value.length > 0) {
        iconoMatch.style.display = "inline";
    } else {
        iconoMatch.style.display = "none";
    }
}

passwordInput.addEventListener('copy', (e) => e.preventDefault());
passwordInput.addEventListener('paste', (e) => e.preventDefault());
passwordInput.addEventListener('cut', (e) => e.preventDefault());
confirmPasswordInput.addEventListener('copy', (e) => e.preventDefault());
confirmPasswordInput.addEventListener('paste', (e) => e.preventDefault());
confirmPasswordInput.addEventListener('cut', (e) => e.preventDefault());

passwordInput.addEventListener("input", validateRePassword);
confirmPasswordInput.addEventListener("input", validateRePassword);

showPassword.addEventListener("change", () => {
    const type = showPassword.checked ? "text" : "password";
    passwordInput.type = type;
    confirmPasswordInput.type = type;
});

function validateForm() {
    const usernameValid = userNameInput.value.length >= 8;
    const password = passwordInput.value;
	const email = emailInput.value.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const mayus = /[A-Z]/.test(password);
    const minus = /[a-z]/.test(password);
    const signo = /[\W_]/.test(password);
    const longitud = password.length >= 8;
    const passwordsMatch = password === confirmPasswordInput.value && confirmPasswordInput.value.length > 0;

    return usernameValid && emailValid && mayus && minus && signo && longitud && passwordsMatch;
}

function toggleSubmitButton() {
    btnRegister.disabled = !validateForm();
}

btnRegister.disabled = true;
userNameInput.addEventListener("input", toggleSubmitButton);
emailInput.addEventListener("input", toggleSubmitButton);
passwordInput.addEventListener("input", toggleSubmitButton);
confirmPasswordInput.addEventListener("input", toggleSubmitButton);

formRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    registerContainer.style.display = "none";
    confirmOverlay.style.display = "flex";

    setTimeout(() => {
        confirmOverlay.style.display = "none";
        window.location.href = "login.html";
    }, 3000);
	});

});