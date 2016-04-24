'use strict';

function Playlist() {
	this.songs = [];
	this.nowPlayingIndex = 0;
	this.tracks = []; // track numbers
	this.artist = [];
}

Playlist.prototype = {

	add: function(song, artistInfo) {
		this.songs.push(song);
		// push method adds song to songs array
		this.artist.push(artistInfo); 
		// push method adds artist info to artist array
		playlist.countTracks();
	},

	play: function () {
		var currentSong = this.songs[this.nowPlayingIndex]; 
		// song object at index whatever is added to currentSong variable

		currentSong.audioPlay();
		// add src and audio path to <audio> tag and play audio

		currentSong.nowPlaying();
		// updates nowplaying info
	},

	stop: function () {
		var currentSong = this.songs[this.nowPlayingIndex]; 

		currentSong.audioStop();
		// removes src from audio <audio> tag and stop audio
	},

	next: function () {
		playlist.stop(); 
		// stop the current song using existing stop method on playlist object
	
		this.nowPlayingIndex += 1; 
		// move to next song in songs array
	
		if (this.nowPlayingIndex === this.songs.length) {
			this.nowPlayingIndex = 0;
		} // if end of playlist is reached, start back at the top

		playlist.play(); 
		// play the next song in the songs array using existing play method on playlist object
	},

	back: function () {
		playlist.stop(); 
		// stop the current song using existing stop method on playlist object
		
		this.nowPlayingIndex -= 1; 
		// move backwards to the previous song in songs array
		
		if (this.nowPlayingIndex === -1) {
			this.nowPlayingIndex = this.songs.length -1;
		}
		// if the first song is selected and playing and the user clicks the back button, start playing from end of playlist

		playlist.play(); 
		// play the next song in the songs array using existing play method on playlist object
	},

	countTracks: function () {
		// count number of items 'objects' in songs array and gives each a number
		
		var count = this.songs.length; 
		// checks the length of each time an item is added to songs array
		this.tracks.push(count);
	},

	renderInElement: function(playlistElement) { // the call for this function is in app.js
		playlistElement.innerHTML = "";

		// console.log(this.tracks);

		var numOfSongs = playlist.songs.length;
		
		for (var i = 0; i < numOfSongs; i += 1) {	
			
			var trackNumber, index;
			
			trackNumber = this.tracks[i];
			
			index = this.tracks[i] - 1;	

			playlistElement.innerHTML += this.songs[i].toHTML(trackNumber, index); 
			// trackNumber and index is passed as an argument to toHTML()
			} // updates HTML with track #, title, artist, duration and album
		}

};







