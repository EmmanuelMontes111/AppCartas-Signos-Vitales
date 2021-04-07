//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes2=Array("Media/Numeros/carta2.png","Media/2.jpg");
	var imagenVisible2=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar2(img)
	{
		imagenVisible2++;
		if(imagenVisible2>=imagenes2.length)
		{
			imagenVisible2=0;
		}
		img.src=imagenes2[imagenVisible2];
		cargarSiguienteImagen2();

		carta.play();
	}

	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen2()
	{
		if((imagenVisible2+1)<imagenes2.length)
		{
			console.log(imagenVisible2+1);
			var imgTmp2=new Image();
			imgTmp2.src=imagenes2[imagenVisible2+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
