//Global - Podemos acceder a ellas desde cualquier parte del codigo.
//Local - Variables creadas dentro de una función, solo pueden ser accedidas desde su fucnción o una función anidada.

//Funcion para proteger el código, función autoinvocada
//todo lo que este afuera de esta funcion no podra acceder a los datos
//de la función autoinvocada

(function(argu) {
	var variableGlobal = "Esta es Global";

	var miFuncion = function(argument) {
		//Si se quita el var antes de la definición de una variable dentro de una función
		//esta pasará a ser global
		var variableLocal = "Esta es local";
		alert(variableLocal);

		//Funcion local
		var funcionLocal = function(){
			var variableLocal = "Esta es variable local, dentro de función local";
			alert(variableLocal);
		}

		funcionLocal();
	}

	miFuncion();
}())