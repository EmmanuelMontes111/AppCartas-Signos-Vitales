//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes12=Array("Media/Numeros/carta12.png","Media/12.jpg");
	var imagenVisible12=0;
 
	var ingles = document.getElementById("ingles");
	// Función que cambia la imagen actual por la siguiente
	function cambiar12(img)
	{
		imagenVisible12++;
		if(imagenVisible12>=imagenes12.length)
		{
			imagenVisible12=0;
		}
		img.src=imagenes12[imagenVisible12];
		cargarSiguienteImagen12();

		ingles.play(); 
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen12()
	{
		if((imagenVisible12+1)<imagenes12.length)
		{
			console.log(imagenVisible12+1);
			var imgTmp12=new Image();
			imgTmp12.src=imagenes12[imagenVisible12+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
