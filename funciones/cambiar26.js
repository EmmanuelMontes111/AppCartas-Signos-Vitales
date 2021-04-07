//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes26=Array("Media/Numeros/carta26.png","Media/26.jpg");
	var imagenVisible26=0;
 
	var ohNou = document.getElementById("ohNou");
	// Función que cambia la imagen actual por la siguiente
	function cambiar26(img)
	{
		imagenVisible26++;
		if(imagenVisible26>=imagenes26.length)
		{
			imagenVisible26=0;
		}
		img.src=imagenes26[imagenVisible26];
		cargarSiguienteImagen26();

		ohNou.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen26()
	{
		if((imagenVisible26+1)<imagenes26.length)
		{
			console.log(imagenVisible26+1);
			var imgTmp26=new Image();
			imgTmp26.src=imagenes26[imagenVisible26+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
