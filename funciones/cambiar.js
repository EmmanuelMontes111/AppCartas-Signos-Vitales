
// Array con todas las imágenes que deseamos que se vayan cambiando a
// cada clic
var imagenes = Array("Media/Numeros/carta1.png", "Media/1.jpg");
var imagenVisible = 0;
var i = 0;
var j = 0;
var k = 0;
var x = 0;
var z = 0;

var numero = 0;


//Equipo 1
var win = document.getElementById("win");
var loser = document.getElementById("loser");
function punto() {

	i = i + 1;

	document.getElementById("total").value = parseFloat(i);
	numero = parseFloat(i);


		win.play();
		
}

function nopunto() {

	i = i - 1;

	document.getElementById("total").value = parseFloat(i);
	numero = parseFloat(i);

	loser.play();


}


//Equipo 2

function punto2() {

	j = j + 1;

	document.getElementById("total2").value = parseFloat(j);

	win.play();
}

function nopunto2() {
	j = j - 1;

	document.getElementById("total2").value = parseFloat(j);

	loser.play();
}


//Equipo 3

function punto3() {

	k = k + 1;

	document.getElementById("total3").value = parseFloat(k);

	win.play();
}

function nopunto3() {
	k = k - 1;

	document.getElementById("total3").value = parseFloat(k);

	loser.play();
}


//Equipo 4

function punto4() {

	x = x + 1;

	document.getElementById("total4").value = parseFloat(x);

	win.play();
}

function nopunto4() {
	x = x - 1;

	document.getElementById("total4").value = parseFloat(x);

	loser.play();
}


//Equipo 5

function punto5() {

	z = z + 1;

	document.getElementById("total5").value = parseFloat(z);

	win.play();
}

function nopunto5() {
	z = z - 1;

	document.getElementById("total5").value = parseFloat(z);

	loser.play();
}

var carta = document.getElementById("carta");

// Función que cambia la imagen actual por la siguiente
function cambiar(img) {
	imagenVisible++;
	if (imagenVisible >= imagenes.length) {
		imagenVisible = 0;
	}
	img.src = imagenes[imagenVisible];
	cargarSiguienteImagen();

	carta.play();
}

/**
 * Esta función carga la siguiente imagen para no tener que esperar su carga
 * en el momento de mostrarla.
 */
function cargarSiguienteImagen() {
	if ((imagenVisible + 1) < imagenes.length) {
		console.log(imagenVisible + 1);
		var imgTmp = new Image();
		imgTmp.src = imagenes[imagenVisible + 1];
	}
}

window.onload = function () {
	cargarSiguienteImagen();
}


