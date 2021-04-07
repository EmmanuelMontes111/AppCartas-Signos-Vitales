//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes22=Array("Media/Numeros/carta22.png","Media/22.jpg");
	var imagenVisible22=0;
 
	var ohNou = document.getElementById("ohNou");
	// Función que cambia la imagen actual por la siguiente
	function cambiar22(img)
	{
		imagenVisible22++;
		if(imagenVisible22>=imagenes22.length)
		{
			imagenVisible22=0;
		}
		img.src=imagenes22[imagenVisible22];
		cargarSiguienteImagen22();

		ohNou.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen22()
	{
		if((imagenVisible22+1)<imagenes22.length)
		{
			console.log(imagenVisible22+1);
			var imgTmp22=new Image();
			imgTmp22.src=imagenes22[imagenVisible22+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
