//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes20=Array("Media/Numeros/carta20.png","Media/20.jpg");
	var imagenVisible20=0;
 
	var nanana = document.getElementById("nanana");
	// Función que cambia la imagen actual por la siguiente
	function cambiar20(img)
	{
		imagenVisible20++;
		if(imagenVisible20>=imagenes20.length)
		{
			imagenVisible20=0;
		}
		img.src=imagenes20[imagenVisible20];
		cargarSiguienteImagen20();
		
		nanana.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen20()
	{
		if((imagenVisible20+1)<imagenes20.length)
		{
			console.log(imagenVisible20+1);
			var imgTmp20=new Image();
			imgTmp20.src=imagenes20[imagenVisible20+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
