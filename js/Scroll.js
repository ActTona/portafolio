$(document).ready(function(){
	const contenido= document.getElementById('Barra_contenido');
	const distancia = $('#Barra_contenido').offset().top;
	const distancias= contenido.getBoundingClientRect();

	window.addEventListener('scroll', function(){
		contenido.classList.toggle('Activo', window.scrollY>distancia);
		console.log(distancia);
	} )
});
