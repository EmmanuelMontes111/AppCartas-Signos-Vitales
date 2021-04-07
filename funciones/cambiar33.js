//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes33=Array("Media/Numeros/carta33.png","Media/33.jpg");
	var imagenVisible33=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar33(img)
	{
		imagenVisible33++;
		if(imagenVisible33>=imagenes33.length)
		{
			imagenVisible33=0;
		}
		img.src=imagenes33[imagenVisible33];
		cargarSiguienteImagen33();

		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen33()
	{
		if((imagenVisible33+1)<imagenes33.length)
		{
			console.log(imagenVisible33+1);
			var imgTmp33=new Image();
			imgTmp33.src=imagenes33[imagenVisible33+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
