//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes13=Array("Media/Numeros/carta13.png","Media/13.jpg");
	var imagenVisible13=0;
 
	var whatSap = document.getElementById("whatSap");
	// Función que cambia la imagen actual por la siguiente
	function cambiar13(img)
	{
		imagenVisible13++;
		if(imagenVisible13>=imagenes13.length)
		{
			imagenVisible13=0;
		}
		img.src=imagenes13[imagenVisible13];
		cargarSiguienteImagen13();

		whatSap.play(); 
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen13()
	{
		if((imagenVisible13+1)<imagenes13.length)
		{
			console.log(imagenVisible13+1);
			var imgTmp13=new Image();
			imgTmp13.src=imagenes13[imagenVisible13+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
