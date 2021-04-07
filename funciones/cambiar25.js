//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes25=Array("Media/Numeros/carta25.png","Media/25.jpg");
	var imagenVisible25=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar25(img)
	{
		imagenVisible25++;
		if(imagenVisible25>=imagenes25.length)
		{
			imagenVisible25=0;
		}
		img.src=imagenes25[imagenVisible25];
		cargarSiguienteImagen25();

		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen25()
	{
		if((imagenVisible25+1)<imagenes25.length)
		{
			console.log(imagenVisible25+1);
			var imgTmp25=new Image();
			imgTmp25.src=imagenes25[imagenVisible25+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
