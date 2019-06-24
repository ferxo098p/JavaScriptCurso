var tabla = document.getElementById("tabla");

function volver(){
	history.go(-1);
}

function agregarFila(){
	/*Obtenemos el valor de las secciones del formulario y los guardamos en tres variables*/
	var cancion = document.getElementById("lbl_Cancion").value;
	var artista = document.getElementById("lbl_Artista").value;
	var album = document.getElementById("lbl_Album").value;

	/*Se crea una <tr> vacia y se añade a la segunda 
	posición de la tabla*/
	var row = tabla.insertRow(1);

	/*Insertamos nuevas celdas en la primera y segunda posición
	del nuevo <tr>*/
	var c1 = row.insertCell(0);
	var c2 = row.insertCell(1);
	var c3 = row.insertCell(2);

	/*Agremos la clase "celda" a los nuevos <th>*/
	c1.classList.add("celda");
	c2.classList.add("celda");
	c3.classList.add("celda");

	/*Agregamos el texto correspondiente a las <th>*/
	c1.innerHTML = cancion;
	c2.innerHTML = artista;
	c3.innerHTML = album;

	alert("Canción añadida XD");
}

function borrarFila(){
	tabla.deleteRow(1);
	alert("Canción eliminada 7u7");
}

function limpiarFormulario(){
	document.getElementById("formulario").reset();
}