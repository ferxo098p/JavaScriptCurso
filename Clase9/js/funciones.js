/**
Declaración de una funcíon 
function function_name(arguments) {
	// body...
}*/


function saludo(nombre) {
	document.write("Hola " + nombre + " ten un lindo día ;) <br/>");
}

//Se invoca a la función
saludo("Shavo");

/**function suma(numero1,numero2) {
	var numero1 = numero1;
	var numero2 = numero2;
	return (numero1 + numero2);
}
}*/

//Función anonima, se le asigna a una variable
/**var suma = function(numero1,numero2) {
	var numero1 = numero1;
	var numero2 = numero2;

	return (numero1 + numero2);
}

document.write(suma(26,9));

document.write("<br/>");

document.write(suma(26,15));
*/

var numeroMaximo = function(num1,num2) {
	if (num1 > num2){
		return num1;
	} else{
		return num2;
	}
}


document.write("Num. máximo: " + numeroMaximo(10,20));