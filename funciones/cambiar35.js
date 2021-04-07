//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes35=Array("Media/Numeros/carta35.png","Media/35.jpg");
	var imagenVisible35=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar35(img)
	{
		imagenVisible35++;
		if(imagenVisible35>=imagenes35.length)
		{
			imagenVisible35=0;
		}
		img.src=imagenes35[imagenVisible35];
		cargarSiguienteImagen35();

		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen35()
	{
		if((imagenVisible35+1)<imagenes35.length)
		{
			console.log(imagenVisible35+1);
			var imgTmp35=new Image();
			imgTmp35.src=imagenes35[imagenVisible35+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
