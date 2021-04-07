//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes9=Array("Media/Numeros/carta9.png","Media/9.jpg");
	var imagenVisible9=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar9(img)
	{
		imagenVisible9++;
		if(imagenVisible9>=imagenes9.length)
		{
			imagenVisible9=0;
		}
		img.src=imagenes9[imagenVisible9];
		cargarSiguienteImagen9();

		carta.play(); 
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen9()
	{
		if((imagenVisible9+1)<imagenes9.length)
		{
			console.log(imagenVisible9+1);
			var imgTmp9=new Image();
			imgTmp9.src=imagenes9[imagenVisible9+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
