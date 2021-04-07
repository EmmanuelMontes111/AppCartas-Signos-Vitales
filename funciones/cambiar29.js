//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes29=Array("Media/Numeros/carta29.png","Media/29.jpg");
	var imagenVisible29=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar29(img)
	{
		imagenVisible29++;
		if(imagenVisible29>=imagenes29.length)
		{
			imagenVisible29=0;
		}
		img.src=imagenes29[imagenVisible29];
		cargarSiguienteImagen29();
		carta.play(); 
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen29()
	{
		if((imagenVisible29+1)<imagenes29.length)
		{
			console.log(imagenVisible29+1);
			var imgTmp29=new Image();
			imgTmp29.src=imagenes29[imagenVisible29+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
