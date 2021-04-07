//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes5=Array("Media/Numeros/carta5.png","Media/5.jpg");
	var imagenVisible5=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar5(img)
	{
		imagenVisible5++;
		if(imagenVisible5>=imagenes5.length)
		{
			imagenVisible5=0;
		}
		img.src=imagenes5[imagenVisible5];
		cargarSiguienteImagen5();

		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen5()
	{
		if((imagenVisible5+1)<imagenes5.length)
		{
			console.log(imagenVisible5+1);
			var imgTmp5=new Image();
			imgTmp5.src=imagenes5[imagenVisible5+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
