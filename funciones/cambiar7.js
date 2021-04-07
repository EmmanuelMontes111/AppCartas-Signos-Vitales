//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes7=Array("Media/Numeros/carta7.png","Media/7.jpg");
	var imagenVisible7=0;

	var nelson = document.getElementById("nelson");
	// Función que cambia la imagen actual por la siguiente
	function cambiar7(img)
	{
		imagenVisible7++;
		if(imagenVisible7>=imagenes7.length)
		{
			imagenVisible7=0;
		}
		img.src=imagenes7[imagenVisible7];
		cargarSiguienteImagen7();

		nelson.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen7()
	{
		if((imagenVisible7+1)<imagenes7.length)
		{
			console.log(imagenVisible7+1);
			var imgTmp7=new Image();
			imgTmp7.src=imagenes7[imagenVisible7+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
