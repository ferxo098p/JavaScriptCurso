var video = document.getElementById("video1");

function volver(){
	history.go(-1);
}

function play(){
	video1.play();
}

function pause(){
	video1.pause();
}

function silenciar(){
	video1.muted = true;
}

function sonido(){
	video1.muted = false;
}

function aumentarVolumen(){
	video.volume = 1.0;
}

function disminuirVolumen(){
	video.volume = 0.3;
}