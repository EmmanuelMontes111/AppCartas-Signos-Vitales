//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes21=Array("Media/Numeros/carta21.png","Media/21.jpg");
	var imagenVisible21=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar21(img)
	{
		imagenVisible21++;
		if(imagenVisible21>=imagenes21.length)
		{
			imagenVisible21=0;
		}
		img.src=imagenes21[imagenVisible21];
		cargarSiguienteImagen21();

		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen21()
	{
		if((imagenVisible21+1)<imagenes21.length)
		{
			console.log(imagenVisible21+1);
			var imgTmp21=new Image();
			imgTmp21.src=imagenes21[imagenVisible21+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
