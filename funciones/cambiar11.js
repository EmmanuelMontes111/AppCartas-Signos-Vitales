//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes11=Array("Media/Numeros/carta11.png","Media/11.jpg");
	var imagenVisible11=0;
 
	var bobEsponja = document.getElementById("bobEsponja");
	// Función que cambia la imagen actual por la siguiente
	function cambiar11(img)
	{
		imagenVisible11++;
		if(imagenVisible11>=imagenes11.length)
		{
			imagenVisible11=0;
		}
		img.src=imagenes11[imagenVisible11];
		cargarSiguienteImagen11();

		bobEsponja.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen11()
	{
		if((imagenVisible11+1)<imagenes11.length)
		{
			console.log(imagenVisible11+1);
			var imgTmp11=new Image();
			imgTmp11.src=imagenes11[imagenVisible11+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
