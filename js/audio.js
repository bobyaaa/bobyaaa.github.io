$(document).ready(function() {

	songindex = 0;
	var bobyaaa = new Audio('bobyaaa.mp3'); 
	var playlist = [
		{ song: 'assets/sundaymorning.mp3', bpm: 88, display: 'Sunday Morning - Maroon 5'},
		{ song: 'assets/DancingIntheMoonlight.mp3', bpm: 136, display: 'Dancing In the Moonlight - King Harvest' },
		{ song: 'assets/IWantYouBack.mp3', bpm: 98, display: 'I Want You Back - Jackson 5'},
		{ song: 'assets/HopelessOpus.mp3', bpm: 139.5, display: 'Hopeless Opus - Imagine Dragons'}, 
		{ song: 'assets/RippleEffect.mp3', bpm: 87.8, display: 'Ripple Effect - Scott Helman'},
		{ song: 'assets/bobyaaa.mp3', bpm: 1000, display: 'bobyaaaletsgo.tk'}
	];

	var audio = new Audio(playlist[songindex].song);

	$("#play").click(function() { 

		if (document.getElementById("play").textContent == "play_arrow") {
			$("#play").html("pause"); 	
			audio.play(); 
		} else {
			audio.pause(); 
			$("#play").html("play_arrow");
		}
		neonflash(playlist[songindex].bpm);
	});

	$("#replay").click(function() {
		audio.currentTime = 0;
		audio.play();
		$("#play").html("pause"); 
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
			$("#play").html("pause"); 
			audio.play();
		} 
		neonflash(playlist[songindex].bpm); 
	}

	function neonflash(bpm) {
		frequency = 60.0/bpm;
		$(".enter").css('animation', 'removeglow ' + frequency + 's' +' infinite'); 		
	}

});