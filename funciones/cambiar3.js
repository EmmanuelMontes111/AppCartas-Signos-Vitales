//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes3=Array("Media/Numeros/carta3.png","Media/3.jpg");
	var imagenVisible3=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar3(img)
	{
		imagenVisible3++;
		if(imagenVisible3>=imagenes3.length)
		{
			imagenVisible3=0;
		}
		img.src=imagenes3[imagenVisible3];
		cargarSiguienteImagen3();

		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen3()
	{
		if((imagenVisible3+1)<imagenes3.length)
		{
			console.log(imagenVisible3+1);
			var imgTmp3=new Image();
			imgTmp3.src=imagenes3[imagenVisible3+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
