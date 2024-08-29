// Comprobar qué día está habilitado
function checkDaysEnabled() {
    for (let i = 2; i <= 7; i++) {
        if (localStorage.getItem(`dia${i}`) === "true") {
            document.getElementById(`link-dia${i}`).classList.remove("disabled");
        }
    }
}

// Llamar a la función cuando se carga la página
document.addEventListener("DOMContentLoaded", checkDaysEnabled);

// Esta función se llama cuando el usuario completa un día
function completeDay(day) {
    if (day < 7) {
        localStorage.setItem(`dia${day + 1}`, "true");
    }
}
