var n1;
var n2;
var opc;

function iniciar(){
	var resultado = document.getElementById("resultado");
	var reinicio = document.getElementById("clear");
	var suma = document.getElementById("suma");
	var resta = document.getElementById("resta");
	var mult = document.getElementById("multiplicacion");
	var division = document.getElementById("division");
	var igual = document.getElementById("igual");
	var num0 = document.getElementById("cero");
	var num1 = document.getElementById("uno");
	var num2 = document.getElementById("dos");
	var num3 = document.getElementById("tres");
	var num4 = document.getElementById("cuatro");
	var num5 = document.getElementById("cinco");
	var num6 = document.getElementById("seis");
	var num7 = document.getElementById("siete");
	var num8 = document.getElementById("ocho");
	var num9 = document.getElementById("nueve");
	var punto = document.getElementById("punto");

	//Eventos de click
	num1.onclick = function(){
		resultado.textContent = resultado.textContent  + "1";
	};

	num2.onclick = function(){
		resultado.textContent = resultado.textContent + "2";
	};

	num3.onclick = function(){
		resultado.textContent = resultado.textContent + "3";
	};

	num4.onclick = function(){
		resultado.textContent = resultado.textContent + "4";
	};

	num5.onclick = function(){
		resultado.textContent = resultado.textContent + "5";
	};

	num6.onclick = function(){
		resultado.textContent = resultado.textContent + "6";
	};

	num7.onclick = function(){
		resultado.textContent = resultado.textContent + "7";
	};

	num8.onclick = function(){
		resultado.textContent = resultado.textContent + "8";
	};

	num9.onclick = function(){
		resultado.textContent = resultado.textContent + "9";
	};

	num0.onclick = function(){
		resultado.textContent = resultado.textContent + "0";
	};

	punto.onclick = function(){
		resultado.textContent = resultado.textContent + ".";
	};

	reinicio.onclick = function(){
		resetear();
	};

	suma.onclick = function(){
		n1 = resultado.textContent;
		opc = "+";
		limpiar();
	};

	resta.onclick = function(){
		n1 = resultado.textContent;
		opc = "-";
		limpiar();
	};

	mult.onclick = function(){
		n1 = resultado.textContent;
		opc = "*";
		limpiar();
	};

	division.onclick = function(){
		n1 = resultado.textContent;
		opc = "/";
		limpiar();
	};

	igual.onclick = function(){
		n2 = resultado.textContent;
		resolver();
	};
};

function limpiar(){
	resultado.textContent = "";
};

function resetear(){
	resultado.textContent = "";
	n1 = 0;
	n2 = 0;
	opc = "";
};

function resolver(){
	var res = 0;
	switch(opc){
	  case "+":
		res = suma();
		break;
	  case "-":
		  res = resta();
		  break;
	  case "*":
		res = multiplicacion();
		break;
	  case "/":
		res = division();
		break;
	}
	resetear();
	resultado.textContent = res;
};

function suma(){
	return parseFloat(n1) + parseFloat(n2);
};

function resta(){
	return parseFloat(n1) - parseFloat(n2);
};

function multiplicacion(){
	return parseFloat(n1) * parseFloat(n2);
};

function division(){
	if(n2===0){
		return -1;
	}

	return parseFloat(n1) / parseFloat(n2);
};