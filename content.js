
window.onload = function () 
{ 
	'use strict';
	var video = document.getElementsByTagName('video')[0];
	var toggleMute=0;
	window.addEventListener('keydown',function(event){
		
		if ("37" == event.keyCode) {
			backward(video);
		}
		
		if ("39" == event.keyCode) {
			forward(video);
		}
		
		if ("38" == event.keyCode) {
			volumeUp(video);
		}
		
		if ("40" == event.keyCode) {
			volumeDown(video);
		}
		
		if ("77" == event.keyCode) {
			toggleMute = mute(video,toggleMute);
		}
	},false);
}

var mute = function(video,toggleMute)
{
	if(toggleMute == 0){
		video.volume = 0;
		toggleMute = 1;
	}
	else{
		video.volume = 1;
		toggleMute = 0;
	}
	return toggleMute;
}


var volumeUp = function(video)
{
	if(video.volume+0.05 < 1)
		video.volume += 0.05;
	else
		video.volume = 1;
}


var volumeDown = function(video)
{
	if(video.volume-0.05 > 0)
		video.volume -= 0.05;
	else
		video.volume = 0;
}

var forward = function(video)
{
	if(video.currentTime+10 < video.duration)
		video.currentTime += 10;
	else
		video.currentTime = video.duration;
}

var backward = function(video)
{
	if(video.currentTime-10 >0)
		video.currentTime -= 10;
	else
		video.currentTime = 0;
}
