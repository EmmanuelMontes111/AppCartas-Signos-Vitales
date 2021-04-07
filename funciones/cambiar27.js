//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes27=Array("Media/Numeros/carta27.png","Media/27.jpg");
	var imagenVisible27=0;
 
	var nanana = document.getElementById("nanana");
	// Función que cambia la imagen actual por la siguiente
	function cambiar27(img)
	{
		imagenVisible27++;
		if(imagenVisible27>=imagenes27.length)
		{
			imagenVisible27=0;
		}
		img.src=imagenes27[imagenVisible27];
		cargarSiguienteImagen27();

		nanana.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen27()
	{
		if((imagenVisible27+1)<imagenes27.length)
		{
			console.log(imagenVisible27+1);
			var imgTmp27=new Image();
			imgTmp27.src=imagenes27[imagenVisible27+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
