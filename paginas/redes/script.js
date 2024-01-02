var typed = new Typed('#element', {
    strings: [
    '<i class="dev">Telgram</i>',
    '<i class="dev">Whatsapp</i>',
    '<i class="dev">Github</i>'
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
const colorButton = document.getElementById('colorButton');
const icon = document.getElementById('icon');
const nav = document.querySelector('nav');
const liLinks = document.querySelectorAll('li a');

function toggleMode() {
    // Alternamos entre los modos claro y oscuro en el cuerpo
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    // Alternamos entre los modos claro y oscuro para el color del botón
    changeButtonColor();

    // Cambiamos el color del icono según el modo actual
    changeIconColor();

    // Cambiar los estilos del menú según el tema actual
    updateMenuStyles();

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

// Aplicamos el color del botón según el modo actual
changeButtonColor();

// Aplicamos el color del icono según el modo actual
changeIconColor();

// Aplicamos los estilos del menú según el tema actual
updateMenuStyles();

function changeButtonColor() {
    colorButton.style.color = body.classList.contains('dark-mode') ? '#fff' : '#000';
}

function changeIconColor() {
    icon.style.color = body.classList.contains('dark-mode') ? '#EAEAEA' : '#181818';
}

function updateMenuStyles() {
    // Removemos todas las clases relacionadas con el tema en el menú
    liLinks.forEach(link => link.classList.remove('light-mode', 'dark-mode'));

    // Agregamos la clase correspondiente al tema actual en cada enlace del menú
    liLinks.forEach(link => link.classList.add(body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode'));
}

function seleccionarElemento(elemento) {
    // Remover la clase 'selected' de todos los elementos
    var lista = document.getElementById('miLista');
    var elementos = lista.getElementsByClassName('elemento');
    for (var i = 0; i < elementos.length; i++) {
      elementos[i].classList.remove('selected');
    }

    // Agregar la clase 'selected' al elemento clicado
    elemento.classList.add('selected');
}

function seleccionarElemento(elemento) {
    // Obtén la URL del atributo data
    var url = elemento.getAttribute('data-url');

    // Abre la URL en la misma ventana
    window.location.href = url;
}