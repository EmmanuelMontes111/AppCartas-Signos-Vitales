//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes36=Array("Media/Numeros/carta36.png","Media/36.jpg");
	var imagenVisible36=0;
 
	var ingles = document.getElementById("ingles");
	// Función que cambia la imagen actual por la siguiente
	function cambiar36(img)
	{
		imagenVisible36++;
		if(imagenVisible36>=imagenes36.length)
		{
			imagenVisible36=0;
		}
		img.src=imagenes36[imagenVisible36];
		cargarSiguienteImagen36();

		ingles.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen36()
	{
		if((imagenVisible36+1)<imagenes36.length)
		{
			console.log(imagenVisible36+1);
			var imgTmp36=new Image();
			imgTmp36.src=imagenes36[imagenVisible36+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
