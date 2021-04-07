//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes31=Array("Media/Numeros/carta31.png","Media/31.jpg");
	var imagenVisible31=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar31(img)
	{
		imagenVisible31++;
		if(imagenVisible31>=imagenes31.length)
		{
			imagenVisible31=0;
		}
		img.src=imagenes31[imagenVisible31];
		cargarSiguienteImagen31();

		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen31()
	{
		if((imagenVisible31+1)<imagenes31.length)
		{
			console.log(imagenVisible31+1);
			var imgTmp31=new Image();
			imgTmp31.src=imagenes31[imagenVisible31+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
