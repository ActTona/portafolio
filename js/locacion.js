$(document).ready(function(){
       var locacion = getUrlParameter('locacion'); //Ver link para obtener ésta función
       if(locacion!=false){
              window.scroll(0, locacion);
       }

       let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
       var nombre = window.document.URL;
       nombre=subcadena2(nombre,"/");
       nombre=nombre.substring(1);
       console.log(nombre)
       if(darkMode && nombre=="index.html" ) {
              location.href ='modo_oscuro.html';
       }
       
});

function subcadena2(cadena,caracter){
   return cadena.substring(cadena.lastIndexOf(caracter));
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};