const BASE_URL = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? "" : "/LMSGI-1rDAW";
//window.location.href = BASE_URL + "/views/login.html";

/* Botones interactivos del menú*/
const navMenu = document.querySelector("#nav");
const btnOpen = document.querySelector("#abrir");
const btnClose = document.querySelector("#cerrar");
const menuItemInicio = document.querySelector("#menu-inicio");
const menuItemHistory = document.querySelector("#menu-history");
const menuItemLogin = document.querySelector("#menu-login");
const btnLogin = document.querySelector("#btnLogin");
const btnRegister = document.querySelector("#btnRegister");

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

/* Parte botón/CSS de visualizar login/register */
const loginRegisterContainer = document.querySelector("#login-register-container");
const registerContainer = document.querySelector("#register-container");
const loginLink = document.querySelector("#login-link");
const registerLink = document.querySelector("#register-link");
const formRegister = document.querySelector("#register-form");
const confirmOverlay = document.querySelector("#overlay");


//const menuQs = document.querySelector("#menu-qs");
//const menuContact = document.querySelector("#menu-contact");

window.addEventListener("DOMContentLoaded", () => {

    /* Utilidad para abrir y cerrar el menú hamburgesa */
    btnOpen.addEventListener("click", () => {
        navMenu.classList.add("visible");
    });

    btnClose.addEventListener("click", () => {
        navMenu.classList.remove("visible");
    });

    /* Redirección de los enlaces del menú */
    menuItemLogin.addEventListener("click", () => {
        window.location.href = "login.html";
    });

    menuItemInicio.addEventListener("click", () => {
        window.location.href = "inicio.html";
    });

    menuItemHistory.addEventListener("click", () => {
        window.location.href = "articulo.html";
    });

    /* Botones Login(Submit)*/
    btnLogin.addEventListener("click", () => {

    });
    /* Register(Submit) */
    btnRegister.addEventListener("click", (e) => {
        
    });

    registerLink.addEventListener("click", () => {
        loginRegisterContainer.style.display = "none";
        registerContainer.style.display = "flex";
    });

    // Mostrar el contenedor de inicio de sesión al hacer clic en el enlace de inicio de sesión
    loginLink.addEventListener("click", () => {
        registerContainer.style.display = "none";
        loginRegisterContainer.style.display = "flex";
    });

    // Requisitos de longitud del userNameInput
    userNameInput.addEventListener("input", (event) => {
        const name = userNameInput.value.length;
        if (name === 0) {
            eventUsername.style.display = "none";
        } else if (name < 8) {
            eventUsername.style.display = "flex";
            eventUsername.style.color = "red";
            event.preventDefault();
            userNameInput.focus();
            return;
        } else if (name >= 8) {
            eventUsername.style.display = "none";
        }
    });

    // Requisitos de Mayus, Minus, Signos y longitud
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
    });

    // Funcion para validar la contraseña.
    function validateRePassword() {
        if (passwordInput.value === confirmPasswordInput.value && confirmPasswordInput.value.length > 0) {
            iconoMatch.style.display = "inline";
        } else {
            iconoMatch.style.display = "none";
        }
    }
    // Evitar que se pueda copiar, cortar o pegar en el PasswordInput.
    passwordInput.addEventListener('copy', (e) => e.preventDefault());
    passwordInput.addEventListener('paste', (e) => e.preventDefault());
    passwordInput.addEventListener('cut', (e) => e.preventDefault());
    // Evitar que se pueda copiar, cortar o pegar en el ConfirmPasswordInput
    confirmPasswordInput.addEventListener('copy', (e) => e.preventDefault());
    confirmPasswordInput.addEventListener('paste', (e) => e.preventDefault());
    confirmPasswordInput.addEventListener('cut', (e) => e.preventDefault());

    

    passwordInput.addEventListener("input", validateRePassword);
    confirmPasswordInput.addEventListener("input", validateRePassword);

    // Botón de mostrar contraseña u ocultar.
    showPassword.addEventListener("change", () => {
        if (showPassword.checked) {
            passwordInput.type = "text";
            confirmPasswordInput.type = "text";
        } else {
            passwordInput.type = "password";
            confirmPasswordInput.type = "password";
        }
    });

    // Validación de inputs y activación del botón submit.
    function validateForm() {
        const usernameValid = userNameInput.value.length >= 8;
        const password = passwordInput.value;
        const mayus = /[A-Z]/.test(password);
        const minus = /[a-z]/.test(password);
        const signo = /[\W_]/.test(password);
        const longitud = password.length >= 8;
        const passwordsMatch = password === confirmPasswordInput.value && confirmPasswordInput.value.length > 0;

        return usernameValid && mayus && minus && signo && longitud && passwordsMatch;
    }

    // Habilitar o deshabilitar el botón según la validación
    function toggleSubmitButton() {
        btnRegister.disabled = !validateForm();
    }

    // Deshabilitar botón al iniciar
    btnRegister.disabled = true;

    // Agregar eventos para validar en cada cambio de inputs
    userNameInput.addEventListener("input", toggleSubmitButton);
    passwordInput.addEventListener("input", toggleSubmitButton);
    confirmPasswordInput.addEventListener("input", toggleSubmitButton);

    // Funciona tanto haciendo click en el botón como apretando enter.
    formRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    //Mostrará la confirmación y quitará la pestaña de register.
    registerContainer.style.display = "none";
    confirmOverlay.style.display = "flex";

    //Le damos unos 3 segundos para desaparecer y que nos muestre la página de login.html
    setTimeout(() => {
        confirmOverlay.style.display = "none";
        window.location.href = "login.html";
    }, 3000);
    });
});


