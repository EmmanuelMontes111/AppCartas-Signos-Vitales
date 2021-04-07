//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes32=Array("Media/Numeros/carta32.png","Media/32.jpg");
	var imagenVisible32=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar32(img)
	{
		imagenVisible32++;
		if(imagenVisible32>=imagenes32.length)
		{
			imagenVisible32=0;
		}
		img.src=imagenes32[imagenVisible32];
		cargarSiguienteImagen32();

		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen32()
	{
		if((imagenVisible32+1)<imagenes32.length)
		{
			console.log(imagenVisible32+1);
			var imgTmp32=new Image();
			imgTmp32.src=imagenes32[imagenVisible32+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
