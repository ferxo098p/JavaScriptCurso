//Obtenemos el video del HTML y lo guardamos en una variable
var video = document.getElementById("video1");

//Esta funcíon nos regresa una página en el historial
function volver(){
	history.go(-1);
};


function play(){
	//Haciendo uso del método play para audio/video reproducimos el video
	video1.play();
};

function pause(){
	//Haciendo uso del método pause para audio/video pausamos el video
	video1.pause();
};

function silenciar(){
	/*Haciendo uso del método muted para audio/video silenciamos el video
	true es para silenciar
	false es para regresar el audio y que se vuelva a escuvhar*/
	video1.muted = true;
};

function sonido(){
	/*Haciendo uso del método muted para audio/video silenciamos el video
	true es para silenciar
	false es para regresar el audio y que se vuelva a escuvhar*/
	video1.muted = false;
};

function aumentarVolumen(){
	/*Haciendo uso del método volume para audio/video modificamos el volumen del vídeo,
	dependiendo del valor dadod será lo alto/bajo que este sonará*/
	video.volume = 1.0;
};

function disminuirVolumen(){
	/*Haciendo uso del método volume para audio/video modificamos el volumen del vídeo,
	dependiendo del valor dadod será lo alto/bajo que este sonará*/
	video.volume = 0.3;
};