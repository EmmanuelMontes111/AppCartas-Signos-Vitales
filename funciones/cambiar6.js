//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes6=Array("Media/Numeros/carta6.png","Media/6.jpg");
	var imagenVisible6=0;
 
 
	var ingles = document.getElementById("ingles");
	// Función que cambia la imagen actual por la siguiente
	function cambiar6(img)
	{
		imagenVisible6++;
		if(imagenVisible6>=imagenes6.length)
		{
			imagenVisible6=0;
		}
		img.src=imagenes6[imagenVisible6];
		cargarSiguienteImagen6();

		ingles.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen6()
	{
		if((imagenVisible6+1)<imagenes6.length)
		{
			console.log(imagenVisible6+1);
			var imgTmp6=new Image();
			imgTmp6.src=imagenes6[imagenVisible6+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
