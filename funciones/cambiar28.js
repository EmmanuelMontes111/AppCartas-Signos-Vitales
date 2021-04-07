//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes28=Array("Media/Numeros/carta28.png","Media/28.jpg");
	var imagenVisible28=0;
 
	var zorro = document.getElementById("zorro");
	// Función que cambia la imagen actual por la siguiente
	function cambiar28(img)
	{
		imagenVisible28++;
		if(imagenVisible28>=imagenes28.length)
		{
			imagenVisible28=0;
		}
		img.src=imagenes28[imagenVisible28];
		cargarSiguienteImagen28();

		zorro.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen28()
	{
		if((imagenVisible28+1)<imagenes28.length)
		{
			console.log(imagenVisible28+1);
			var imgTmp28=new Image();
			imgTmp28.src=imagenes28[imagenVisible28+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
