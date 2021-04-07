//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes8=Array("Media/Numeros/carta8.png","Media/8.jpg");
	var imagenVisible8=0;
 
	var bazinga = document.getElementById("bazinga");
	// Función que cambia la imagen actual por la siguiente
	function cambiar8(img)
	{
		imagenVisible8++;	
		if(imagenVisible8>=imagenes8.length)
		{
			imagenVisible8=0;
		}
		img.src=imagenes8[imagenVisible8];
		cargarSiguienteImagen8();
		bazinga.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen8()
	{
		if((imagenVisible8+1)<imagenes8.length)
		{
			console.log(imagenVisible8+1);
			var imgTmp8=new Image();
			imgTmp8.src=imagenes8[imagenVisible8+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
