//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes19=Array("Media/Numeros/carta19.png","Media/19.jpg");
	var imagenVisible19=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar19(img)
	{
		imagenVisible19++;
		if(imagenVisible19>=imagenes19.length)
		{
			imagenVisible19=0;
		}
		img.src=imagenes19[imagenVisible19];
		cargarSiguienteImagen19();

		carta.play(); 
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen19()
	{
		if((imagenVisible19+1)<imagenes19.length)
		{
			console.log(imagenVisible19+1);
			var imgTmp19=new Image();
			imgTmp19.src=imagenes19[imagenVisible19+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
