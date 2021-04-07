//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes16=Array("Media/Numeros/carta16.png","Media/16.jpg");
	var imagenVisible16=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar16(img)
	{
		imagenVisible16++;
		if(imagenVisible16>=imagenes16.length)
		{
			imagenVisible16=0;
		}
		img.src=imagenes16[imagenVisible16];
		cargarSiguienteImagen16();

		carta.play(); 
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen16()
	{
		if((imagenVisible16+1)<imagenes16.length)
		{
			console.log(imagenVisible16+1);
			var imgTmp16=new Image();
			imgTmp16.src=imagenes16[imagenVisible16+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
