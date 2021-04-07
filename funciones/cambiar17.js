//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes17=Array("Media/Numeros/carta17.png","Media/17.jpg");
	var imagenVisible17=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar17(img)
	{
		imagenVisible17++;
		if(imagenVisible17>=imagenes17.length)
		{
			imagenVisible17=0;
		}
		img.src=imagenes17[imagenVisible17];
		cargarSiguienteImagen17();
		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen17()
	{
		if((imagenVisible17+1)<imagenes17.length)
		{
			console.log(imagenVisible17+1);
			var imgTmp17=new Image();
			imgTmp17.src=imagenes17[imagenVisible17+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
