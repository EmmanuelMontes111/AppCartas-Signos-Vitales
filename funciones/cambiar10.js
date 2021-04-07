//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes10=Array("Media/Numeros/carta10.png","Media/10.jpg");
	var imagenVisible10=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar10(img)
	{
		imagenVisible10++;
		if(imagenVisible10>=imagenes10.length)
		{
			imagenVisible10=0;
		}
		img.src=imagenes10[imagenVisible10];
		cargarSiguienteImagen10();
		carta.play(); 
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen10()
	{
		if((imagenVisible10+1)<imagenes10.length)
		{
			console.log(imagenVisible10+1);
			var imgTmp10=new Image();
			imgTmp10.src=imagenes10[imagenVisible10+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
