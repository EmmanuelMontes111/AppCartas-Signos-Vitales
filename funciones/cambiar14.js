//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes14=Array("Media/Numeros/carta14.png","Media/14.jpg");
	var imagenVisible14=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar14(img)
	{
		imagenVisible14++;
		if(imagenVisible14>=imagenes14.length)
		{
			imagenVisible14=0;
		}
		img.src=imagenes14[imagenVisible14];
		cargarSiguienteImagen14();

		carta.play(); 
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen14()
	{
		if((imagenVisible14+1)<imagenes14.length)
		{
			console.log(imagenVisible14+1);
			var imgTmp14=new Image();
			imgTmp14.src=imagenes14[imagenVisible14+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
