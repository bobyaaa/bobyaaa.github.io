$(document).ready(function() {

	songindex = 0;
	var bobyaaa = new Audio('bobyaaa.mp3'); 
	var playlist = [
		{ song: 'sundaymorning.mp3', bpm: 88 },
		{ song: 'DancingIntheMoonlight.mp3', bpm: 136 },
		{ song: 'IWantYouBack.mp3', bpm: 98 },
		{ song: 'RippleEffect.mp3', bpm: 87.8 }
	];
	var audio = new Audio(playlist[songindex].song);

	$("#play").click(function() { 

		if (document.getElementById("play").textContent == "play_arrow") {
			$("#play").html("replay"); 	
			audio.play();
			bobyaaa.play(); 
		} else {
			audio.currentTime = 0; 
			audio.play(); 
		}
		neonflash(playlist[songindex].bpm);
	});

	$("#volume").click(function() {
		if (document.getElementById("volume").textContent == "volume_up") {
			$("#volume").html("volume_off"); 	
			audio.volume = 0;  	
		} else if (document.getElementById("volume").textContent == "volume_off") {
			$("#volume").html("volume_down"); 
			audio.volume = 0.5; 
		} else {
			$("#volume").html("volume_up"); 
			audio.volume = 1; 			
		}
	});

	$("#skip").click(function() {
		playnextsong();
	});

	audio.addEventListener("ended", function(){
    	playnextsong(); 
	});

	function playnextsong() {
		songindex += 1; 
		if (songindex == playlist.length) {
			songindex = 0; 
		}
		audio.pause(); 
		audio = new Audio(playlist[songindex].song);
		audio.play(); 

		if (document.getElementById("play").textContent == "play_arrow") {
			$("#play").html("replay"); 
			audio.play();
		} 
		neonflash(playlist[songindex].bpm); 
	}

	function neonflash(bpm) {
		frequency = 60.0/bpm;
		$(".enter").css('animation', 'removeglow ' + frequency + 's' +' infinite'); 		
	}

});