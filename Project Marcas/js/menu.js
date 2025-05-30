const BASE_URL = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? "" : "/LMSGI-1rDAW";

const navMenu = document.querySelector("#nav");
const btnOpen = document.querySelector("#abrir");
const btnClose = document.querySelector("#cerrar");
const menuItemInicio = document.querySelector("#menu-inicio");
const menuItemHistory = document.querySelector("#menu-history");
const menuItemLogin = document.querySelector("#menu-login");

window.addEventListener("DOMContentLoaded", () => {
    btnOpen.addEventListener("click", () => {
        navMenu.classList.add("visible");
    });

    btnClose.addEventListener("click", () => {
        navMenu.classList.remove("visible");
    });

    menuItemLogin.addEventListener("click", () => {
        window.location.href = BASE_URL + "/login.html";
        //window.location.href = "login.html";
    });

    menuItemInicio.addEventListener("click", () => {
        window.location.href = BASE_URL + "/inicio.html";
        //window.location.href = "inicio.html";
    });

    menuItemHistory.addEventListener("click", () => {
        window.location.href = BASE_URL + "/articulo.html";
        //window.location.href = "articulo.html";
    });
});
