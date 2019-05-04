//Tipos de datos

	//Numerico
	var edad = 20; //Integer
	var age = 20.12; //Float

	//String - Cadena de Texto
	var nombre = "Fernando";
	var apellido = "Sánchez";
	var texto = "Los mejores videos son de \"Falcon Masters\"";

	//<br> -> salto de línea
	document.write(nombre + " " + apellido + "<br/>");
	document.write(texto + "<br/>");

	//Array - Arreglo
	var amigos = ["Antonio","Gabriel","Yuno"];
	//Se accede al primer elemnto del arreglo
	document.write(amigos[0] + "<br/>");

	//Object Objeto
	var objeto = {
		color: "Black",
		size: 12
	}

	//Boolean - Boleano
	var bool = true;
	var b2 = false;

	//Undefined
	//valores no definidos
	var charmander;
	document.write(charmander);

	//Null
	var numero = 10;
	var numero = null; //Se establece el valor a nulo

	//NaN
	//Valores invalidos -> en gral. indican errores con los datos
	var texto2 = "Hola como estas?";
	document.write(texto2 * 2);