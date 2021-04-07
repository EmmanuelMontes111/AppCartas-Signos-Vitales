//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes15=Array("Media/Numeros/carta15.png","Media/15.jpg");
	var imagenVisible15=0;
 
 	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar15(img)
	{
		imagenVisible15++;
		if(imagenVisible15>=imagenes15.length)
		{
			imagenVisible15=0;
		}
		img.src=imagenes15[imagenVisible15];
		cargarSiguienteImagen15();

		carta.play(); 
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen15()
	{
		if((imagenVisible15+1)<imagenes15.length)
		{
			console.log(imagenVisible15+1);
			var imgTmp15=new Image();
			imgTmp15.src=imagenes15[imagenVisible15+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
