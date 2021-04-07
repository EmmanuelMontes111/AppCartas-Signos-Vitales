//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes30=Array("Media/Numeros/carta30.png","Media/30.jpg");
	var imagenVisible30=0;
 
	var bazinga = document.getElementById("bazinga");
	// Función que cambia la imagen actual por la siguiente
	function cambiar30(img)
	{
		imagenVisible30++;
		if(imagenVisible30>=imagenes30.length)
		{
			imagenVisible30=0;
		}
		img.src=imagenes30[imagenVisible30];
		cargarSiguienteImagen30();

		bazinga.play(); 
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen30()
	{
		if((imagenVisible30+1)<imagenes30.length)
		{
			console.log(imagenVisible30+1);
			var imgTmp30=new Image();
			imgTmp30.src=imagenes30[imagenVisible30+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
