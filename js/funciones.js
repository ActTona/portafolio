	function sobremi(){
		if (document.getElementById('informacion_sobre_mi').classList.length==3){
		desbloquea_informacion();
		bloquea_proyectos();
		}
		else{
		document.getElementById('Sobremi').style.display = 'block';
		document.getElementById('Proyectos').style.display = 'none';
		document.getElementById('Servicio').style.display = 'none';
		}

		document.getElementById('informacion_sobre_mi').classList.toggle("open");
		document.getElementById('informacion_proyectos').classList.remove("open");
		document.getElementById('informacion_servicio').classList.remove("open");  
	}
	function proyectos(){
		if (document.getElementById('informacion_proyectos').classList.length==3){
		desbloquea_informacion();
		bloquea_proyectos();
		}
		else{
		document.getElementById('Sobremi').style.display = 'none';
		document.getElementById('Proyectos').style.display = 'block';
		document.getElementById('Servicio').style.display = 'none';
		}	

		document.getElementById('informacion_sobre_mi').classList.remove("open");
		document.getElementById('informacion_proyectos').classList.toggle("open");
		document.getElementById('informacion_servicio').classList.remove("open");  
	}
	function servicio(){
		if (document.getElementById('informacion_servicio').classList.length==3){
		desbloquea_informacion();
		bloquea_proyectos();
		}
		else{
		document.getElementById('Proyectos').style.display = 'none';
		document.getElementById('Servicio').style.display = 'block';
		document.getElementById('Sobremi').style.display = 'none';
		}
		
		document.getElementById('informacion_sobre_mi').classList.remove("open");
		document.getElementById('informacion_proyectos').classList.remove("open");
		document.getElementById('informacion_servicio').classList.toggle("open"); 
		
	}
	function contacto(){
		 const posicionY = document.getElementById("Contacto").getBoundingClientRect().top;
  			window.scroll(0, posicionY);
	}

	function desbloquea_informacion(){
		document.getElementById('Proyectos').style.display = 'block';
		document.getElementById('Servicio').style.display = 'block';
		document.getElementById('Sobremi').style.display = 'block';
	}

	function muestra_buscador(){
		document.getElementById('informacion_buscador').style.display = 'block';
		document.getElementById('Formulario_consultas').style.display = 'none';
		document.getElementById('Automatizacion_reportes').style.display = 'none';
		document.getElementById('informacion_buscador').scrollIntoView();
	}

	function muestra_formulario_consultas(){
		document.getElementById('informacion_buscador').style.display = 'none';
		document.getElementById('Formulario_consultas').style.display = 'block';
		document.getElementById('Automatizacion_reportes').style.display = 'none';
		document.getElementById('Formulario_consultas').scrollIntoView();
	}

	function muestra_automatizador(){
		document.getElementById('informacion_buscador').style.display = 'none';
		document.getElementById('Formulario_consultas').style.display = 'none';
		document.getElementById('Automatizacion_reportes').style.display = 'block';
		document.getElementById('Automatizacion_reportes').scrollIntoView();
	}

	function bloquea_proyectos(){
		document.getElementById('informacion_buscador').style.display = 'none';
		document.getElementById('Formulario_consultas').style.display = 'none';
		document.getElementById('Automatizacion_reportes').style.display = 'none';
	}

