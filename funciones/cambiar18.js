//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes18=Array("Media/Numeros/carta18.png","Media/18.jpg");
	var imagenVisible18=0;
 
	var zorro = document.getElementById("zorro");
	// Función que cambia la imagen actual por la siguiente
	function cambiar18(img)
	{
		imagenVisible18++;
		if(imagenVisible18>=imagenes18.length)
		{
			imagenVisible18=0;
		}
		img.src=imagenes18[imagenVisible18];
		cargarSiguienteImagen18();

		zorro.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen18()
	{
		if((imagenVisible18+1)<imagenes18.length)
		{
			console.log(imagenVisible18+1);
			var imgTmp18=new Image();
			imgTmp18.src=imagenes18[imagenVisible18+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
