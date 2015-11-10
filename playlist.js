
function Playlist() {
	this.songs = [];
	this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
	this.songs.push(song); 
	// push method adds song object and movie object to songs array; lines 8-10 on app.js call this method
};

Playlist.prototype.play = function() {
	var currentSong = this.songs[this.nowPlayingIndex]; 
	// song object at index whatever is added to currentSong variable
	
	currentSong.play(); 
	// highlights the current song playing

	currentSong.audioPlay();
	// add src and audio path to <audio> tag and play audio
};

Playlist.prototype.stop = function(){
	var currentSong = this.songs[this.nowPlayingIndex]; 
	
	currentSong.stop(); // removes highlight

	currentSong.audioStop();
	// removes src from audio <audio> tag and stop audio
};

Playlist.prototype.next = function() {
	playlist.stop(); // stop the current song using existing stop method on playlist object
	this.nowPlayingIndex += 1; // move to next song in songs array
	
	if (this.nowPlayingIndex === this.songs.length) {
		this.nowPlayingIndex = 0;
		// if nowPlayingIndex is the same length as the songs array start back at the beginning of the songs array
	}

	playlist.play(); // play the next song in the songs array using existing play method on playlist object
};

Playlist.prototype.renderInElement = function(playlistElement) {
	playlistElement.innerHTML = "";
	for (var i = 0; i < this.songs.length; i+= 1) {
		playlistElement.innerHTML += this.songs[i].toHTML(); 
		/* i have access to the toHTML() method on the object thats inside the songs array at index whatever. 
		the toHTML() method creates the <li></li> that will be added to the  <ol id="playlist"></ol>
		*/
	}
};






/*

var playlist = {
	songs: [],
	nowPlayingIndex: 0,
	add: function(song) {
		this.songs.push(song);
	},
	play: function() {
		var currentSong = this.song[this.nowPlayingIndex];
		currentSong.play();
	},
	stop: function() {
		var currentSong = this.song[this.nowPlayingIndex];
		currentSong.stop();
	},
	next: function() {
		this.stop();
		this.nowPlayingIndex += 1;

		if(this.nowPlayingIndex === this.songs.length) {
			this.nowPlayingIndex = 0;
		}
		this.play();
	},
	renderIn: function() {
		playlistElement.innerHTML = "";
		for(var i = 0; i < this.songs.length; i+= 1) {
			playlistElement.innerHTML += this.songs[i].toHTML(); 
		}
	}
}

*/

/* 

songs = [
	var feedback = {
		title: "Feedback",
		artist: "Janet Jackson",
		duration: "3:38",
		isPlaying: false,
		play: function () {
			this.isPlaying = true;
		},
		stop: function () {
			this.isPlaying = false;
		},
		toHTML: function() {
			var htmlString = '<li';
			if(this.isPlaying) {
				htmlString += ' class="current"';
			}
			htmlString += '>';
			htmlString += this.title;
			htmlString += ' - ';
			htmlString += this.artist;
			htmlString += '<span class="duration">';
			htmlString += this.duration;
			htmlString += '</span></li>';
			return htmlString;
		}
	}
];

*/
