// Header y Navbar

// Mostrar menú
const mostrarMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () =>{
        // Agregar la clase mostrarMenu al menu nav
        nav.classList.toggle('mostrar-menu');
        // Agregar mostrarIcono para mostrar y esconder el menú
        toggle.classList.toggle('mostrar-icono');
    });
}

mostrarMenu('nav-toggle', 'nav-menu');

// Función para manejar dropdowns en móvil y desktop
const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
    const link = item.querySelector('.nav-link');

    // Detecta el click/tap
    link.addEventListener('click', (e) => {
        const isMobile = window.innerWidth <= 1023; // Ajusta según el breakpoint

        if(isMobile){
            e.preventDefault(); // Evita que el link navegue
            item.classList.toggle('open'); // Agrega o quita clase open
        }
    });
});

// Carrusel Infinito
const tracks = document.querySelectorAll('.contenido-carrusel-infinito')

tracks.forEach(track => {
    const cards = [...track.children]

    // Duplicar cards una vez
    for (const card of cards) {
        track.appendChild(card.cloneNode(true))
    }
});