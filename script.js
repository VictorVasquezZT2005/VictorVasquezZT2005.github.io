var typed = new Typed('#element', {
    strings: [
    '<i class="dev">Apps Android</i>',
    '<i class="dev">Custom Roms</i>',
    '<i class="dev">Paginas Web</i>'
  ],
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 150, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 150, // Velocidad en milisegundos para borrrar una letra,
    //smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: true, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
  });

const body = document.body;

function toggleMode() {
    // Alternamos entre los modos claro y oscuro en el cuerpo
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    // Guardamos la preferencia del usuario en localStorage
    const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('preferred-mode', currentMode);
}

// Detectamos la preferencia del sistema operativo del usuario
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Configuramos el modo predeterminado según la preferencia del sistema
if (prefersDarkMode) {
    body.classList.add('dark-mode');
} else {
    body.classList.add('light-mode');
}

// Si el usuario ya ha interactuado y seleccionado un modo, aplicamos esa preferencia
const userPreferredMode = localStorage.getItem('preferred-mode');
if (userPreferredMode) {
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(userPreferredMode + '-mode');
}