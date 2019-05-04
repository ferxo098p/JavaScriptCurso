/**
Estructura general de las condicionales
if( condicion ){
	//instrucciones
} else {
	//Instrucciones
}
*/

var nombre = "Arturo",
	edad = 18;

	/**if( nombre == "Carlos" ){
		document.write("Bienvenido " + nombre);
	} else {
		document.write("Bienvenido Anonimo");
	}*/

	/**if( edad == 18 ){
		document.write("Bienvenido, tienes 18 años");
	} else if ( nombre == "Arturo" ){
		document.write("Bienvenido " + nombre);
	} else{
		document.write("No tienes 18 años ");
	}*/

	/**if ( edad >= 18 || nombre == "Arturo" ) {
		document.write("Bienvenido eres mayor de edad");
	} else {
		document.write("No se te permite el acceso, por favor retirate");
	}*/

//=== -> compara que el valor de la variable sea igual al valor de comparación
// y que el tipo de variable también sea el mismo
	if( edad === "18" ){
		document.write("OK");
	} else {
		document.write("False");
	}