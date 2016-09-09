'use strict';

function Song(title, artist, duration, album, path) { // parameters being passed in
	this.title = title;
	this.duration = duration;
	this.artist = artist; // Song object handles artist
	this.album = album;
	this.path = path; // path to audio file
	this.isPlaying = false;
}

Song.prototype = {

	toHTML: function(trackNumber, index) {

		var i = parseInt(index);
		var index = index;
		var trackNumber = trackNumber;
		
		var title = this.title;
		var	artist = this.artist;
		var duration = this.duration;
		var album = this.album; 



		if (this.isPlaying === true) { 	
			// updates HTML to show which track is playing
			return isPlaying(index, trackNumber, title, artist, duration, album, i);
		}


		// builds HTML for each track
		return buildTrack(index, trackNumber, title, artist, duration, album, i); 

	},

	nowPlaying: function () {
		var nowplaying = document.getElementById('nowplaying');
		nowplaying.innerHTML = '';
		nowplaying.innerHTML += '<span id="song-title">' + this.title + '</span>';
		nowplaying.innerHTML += '<span id="song-artist">' + this.artist + ' -' + '</span>';
		nowplaying.innerHTML += ' <span id="song-album">' + this.album + '</span>';
	},

	audioPlay: function () {
		this.isPlaying = true; // true updates HTML in toHTML()

		var audio = document.getElementById('audio');
		audio.src = this.path;
		audio.play(); // .play() method on audio element is built in method
	},

	audioStop: function () {
		this.isPlaying = false; // false, updates HTML in toHTML()

		var audio = document.getElementById('audio');
    	audio.pause(); // .pause() method on audio element is built in method
    	audio.src = ''; // removing the source is a trick to stop the audio instead of just pausing it
	}

};




