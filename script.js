// Seleccionamos el interruptor (checkbox) de nuestro HTML
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// Función que cambia el tema
function switchTheme(e) {
    if (e.target.checked) {
        // Si está marcado, aplica el tema oscuro
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        // Si no está marcado, aplica el tema claro
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Escuchamos el evento de cambio (clic) en el interruptor
toggleSwitch.addEventListener('change', switchTheme, false);