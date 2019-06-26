var tabla = document.getElementById("tabla");

//Esta funcíon nos regresa una página en el historial
function volver(){
	history.go(-1);
};

function agregarFila(){
	/*Obtenemos el valor de las secciones del formulario y los guardamos en tres variables*/
	var cancion = document.getElementById("lbl_Cancion").value;
	var artista = document.getElementById("lbl_Artista").value;
	var album = document.getElementById("lbl_Album").value;
	var posicion = document.getElementById("lbl_Posicion").value;
	var totalElementos = obtenerNumElementos();

	//Si la posición indicada es menor o igual al total de elementos (posiciones) se  crea e inserta la fila
	if(comparar(posicion,totalElementos)){
		/*Se crea una <tr> vacia y se añade a la segunda 
		posición de la tabla*/
		//Haciendo uso de insertRow
		var row = tabla.insertRow(posicion);
		//Haciendo uso de insertBefore()
		/*var newRow = document.createElement("tr")
		tabla.insertBefore(newRow,tabla.childNodes[-1]);*/


		/*Insertamos tres nuevas celdas en el nuevo <tr>*/
		var c1 = row.insertCell(0);
		var c2 = row.insertCell(1);
		var c3 = row.insertCell(2);

		//Siguiendo con insertBefore()
		/*var c1 = newRow.insertCell(0);
		var c2 = newRow.insertCell(1);
		var c3 = newRow.insertCell(2);*/

		/*Agremos la clase "celda" a los nuevos <th>
		funciona tanto con insertRow e insertBefore*/
		c1.classList.add("celda");
		c2.classList.add("celda");
		c3.classList.add("celda");

		/*Agregamos el texto correspondiente a las <th>*/
		c1.innerHTML = cancion;
		c2.innerHTML = artista;
		c3.innerHTML = album;

		alert("Canción añadida XD");
	}else{
		/*En caso contrario se le indica al usuario que no existe la posición indicada*/
		alert("La posición indicada no existe!!! Por favor ingrese otra");
	}
};

function borrarFila(){
	var posicion = prompt("¿Qué fila desea eliminar?");
	var totalElementos = obtenerNumElementos();
	//Invocamos a la función comparar, si el resultado de la función es true proseguimos a eliminar la fila
	if(comparar(posicion,totalElementos)){
		tabla.deleteRow(posicion);
		alert("Canción eliminada 7u7");
	}else{
		//Si comparar regresa false mandamos la siguiente alerta
		alert("La posición indicada no existe!!!");
	}
};

function limpiarFormulario(){
	document.getElementById("formulario").reset();
};

//Función que obtiene el total de elementos (filas) que tiene la tabla
function obtenerNumElementos(){
	//Variable que nos servirá para guardar el total de filas
	var numElementos = -1;
	// Recorremos todas las filas con contenido de la tabla
	for (var i = 0; i < tabla.rows.length; i++){
		//Guardamos el total de filas en numElementos
		numElementos = i;			
	}
	//Regresamos el total de filas que tiene la tabla
	return numElementos;
};

/*Función que compara dos elementos enteros
n1 y n2 corresponde a dichos elementos*/
function comparar(n1,n2){
	if(n1<=n2){
		//Si n1 es menor o igual a n2 la función retorna true
		return true;
	}
	//Si n1 es mayor a n2 la función retorna false
	return false;
};