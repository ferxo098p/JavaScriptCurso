var amigos = ["Carlos", "Cesar", "Alex", "Ruben"];
var amigos2 = ["Luis","Julio","Miguel"];

var amigos3 = amigos.concat(amigos2);

//nombre_arreglo.length; -> devuelve el # de elementos que tiene el arreglo
document.write("Tienes " + amigos.length + " amigos: " + amigos + "<br/>");
document.write("Accediendo a elementos del arreglo... <br/>");
document.write("amigos[0]: " + amigos[0] + "<br/>");
document.write("amigos[10]: " + amigos[10] + "<br/>");

//Cambiamos el valor de la posición 0
document.write("Cambiando el valor del elemento amigos[0] <br/>");
amigos[0] = "Arturo";
document.write("amigos[0]: " +amigos[0] + "<br/>");

//En la última posición agregaremos un nuevo elemento
document.write("Agregando elemento en la última posición <br/>");
amigos[amigos.length] = "Israel";
document.write("amigos[amigos.length]: " + amigos[amigos.length] + "<br/>");

//Otra forma de agregar elementos al arreglo es con push(), este añadira el elemento al final del arreglo
document.write("Agregando elementos haciendo uso de push <br/>");
amigos.push("Daniela","Fernando","Yoeli");
document.write("amigos: " + amigos + "<br/>");

//Eliminar el último elemento
document.write("Eliminando el último elemento haciendo uso de pop <br/>");
amigos.pop();
document.write("amigos: " + amigos + "<br/>");

document.write("Arreglo creado a partir de la concatenacion de dos arreglos " + amigos3 + "<br/>");
//Obtiene todo el arreglo y separa a cada elemento por el caracter especificado dentro del join
//amigos.join(" : ");
document.write(amigos.join(" : ") + "<br/>");

//Ordenar elementos
var ordenados = amigos.sort();
document.write("Arreglo ordenado: " + ordenados);