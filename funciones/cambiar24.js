//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes24=Array("Media/Numeros/carta24.png","Media/24.jpg");
	var imagenVisible24=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar24(img)
	{
		imagenVisible24++;
		if(imagenVisible24>=imagenes24.length)
		{
			imagenVisible24=0;
		}
		img.src=imagenes24[imagenVisible24];
		cargarSiguienteImagen24();

		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen24()
	{
		if((imagenVisible24+1)<imagenes24.length)
		{
			console.log(imagenVisible24+1);
			var imgTmp24=new Image();
			imgTmp24.src=imagenes24[imagenVisible24+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
