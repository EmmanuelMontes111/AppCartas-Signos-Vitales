//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes23=Array("Media/Numeros/carta23.png","Media/23.jpg");
	var imagenVisible23=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar23(img)
	{
		imagenVisible23++;
		if(imagenVisible23>=imagenes23.length)
		{
			imagenVisible23=0;
		}
		img.src=imagenes23[imagenVisible23];
		cargarSiguienteImagen23();

		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen23()
	{
		if((imagenVisible23+1)<imagenes23.length)
		{
			console.log(imagenVisible23+1);
			var imgTmp23=new Image();
			imgTmp23.src=imagenes23[imagenVisible23+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
