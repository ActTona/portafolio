let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// ¿Activar estilo de modo oscuro?
if(darkMode) {
    location.href ='index.html';
} else {
    /*
     * Si el usuario no seleccionó modo oscuro en el navegador
     * aquí podrías incluir los botones y la lógica para manejarlo por localStorage
     */
}