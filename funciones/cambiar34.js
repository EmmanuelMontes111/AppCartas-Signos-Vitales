//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes34=Array("Media/Numeros/carta34.png","Media/34.jpg");
	var imagenVisible34=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar34(img)
	{
		imagenVisible34++;
		if(imagenVisible34>=imagenes34.length)
		{
			imagenVisible34=0;
		}
		img.src=imagenes34[imagenVisible34];
		cargarSiguienteImagen34();

		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen34()
	{
		if((imagenVisible34+1)<imagenes34.length)
		{
			console.log(imagenVisible34+1);
			var imgTmp34=new Image();
			imgTmp34.src=imagenes34[imagenVisible34+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
