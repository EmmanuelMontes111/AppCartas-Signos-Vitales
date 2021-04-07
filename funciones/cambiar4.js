//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes4=Array("Media/Numeros/carta4.png","Media/4.jpg");
	var imagenVisible4=0;
 
	var nelson = document.getElementById("nelson");
	// Función que cambia la imagen actual por la siguiente
	function cambiar4(img)
	{
		imagenVisible4++;
		if(imagenVisible4>=imagenes4.length)
		{
			imagenVisible4=0;
		}
		img.src=imagenes4[imagenVisible4];
		cargarSiguienteImagen4();

		nelson.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen4()
	{
		if((imagenVisible4+1)<imagenes4.length)
		{
			console.log(imagenVisible4+1);
			var imgTmp4=new Image();
			imgTmp4.src=imagenes4[imagenVisible4+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
