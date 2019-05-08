//Ciclo for
/**for( i=0; i<10; i++ ){
	document.write(i + ": Hooooolaaaaaa XD" + "<br/>");
}*/

var dias = ["Lunes","Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var numDias = dias.length;

document.write("Cilo for <br/>");

for ( i = 0; i < dias.length; i++) {
	document.write( dias[i] + "<br/>");
}

//Ciclo while
document.write("<br/> <br/> Cilo while <br/>");
var i = 0;

while (i < numDias) {
	document.write("dias[" + i + "]: " + dias[i] + "<br/>");
	i++;
}