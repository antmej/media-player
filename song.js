'use strict';

function Song(title, artist, duration, album, path) { // parameters/arguments being passed in
	this.title = title;
	this.duration = duration;
	this.artist = artist; // Song object handles artist
	this.album = album;
	this.path = path; // path to audio file
	this.isPlaying = false;
}

Song.prototype = {

	current: function () {
		this.isPlaying = true; // highlights selected track with grey
	},

	removeCurrent: function () {
		this.isPlaying = false; // highlights selected track with grey
	},

	toHTML: function(trackNumber, index) {
		var track, artist, duration, album, addToPlaylist;
		track = "<li>" + "<span class='tracknumber'>" + trackNumber + "</span>" + this.title + "</li>";
		artist = "<li>" + this.artist + "</li>";
		duration = "<li>" + this.duration + "</li>";
		album = "<li>" + this.album + "</li>";

		addToPlaylist = "<ul class=\'track\'";
		addToPlaylist += "data-index=\'" + index + "\'";
		addToPlaylist += "onclick=\'Song.prototype.selectTrack(this.getAttribute(\"data-index\"));\'";
		addToPlaylist += "ondblclick=\'Song.prototype.doubleClickTrack(this.getAttribute(\"data-index\"));\'>";
		addToPlaylist += "<li><i class=\'fa fa-play circle\' data-index=\'" + index + "\' onclick=\'Song.prototype.audioPlayIcon(this.getAttribute(\"data-index\"));\'></i></li>";
		addToPlaylist += track + artist + duration + album;
		addToPlaylist += "<li><i class=\'info fa fa-caret-down square\' data-index=\'" + index + "\' onclick=\'runToggle(this.getAttribute(\"data-index\"));\'></i></li>";
		addToPlaylist += "</ul>"


		if (this.isPlaying === true) {
			addToPlaylist = "<ul class=\'track current select\'"; 
			addToPlaylist += "data-index=\'" + index + "\'";
			addToPlaylist += "onclick=\'Song.prototype.selectTrack(this.getAttribute(\"data-index\"));\'";
			addToPlaylist += "ondblclick=\'Song.prototype.doubleClickTrack(this.getAttribute(\"data-index\"));\'>";
			addToPlaylist += "<li><i class=\'fa fa-volume-up circle\'";
			addToPlaylist += "data-index=\'" + index + "\'";
			addToPlaylist += "onclick=\'Song.prototype.audioStopIcon(this.getAttribute(\"data-index\"));\'></i></li>";
			addToPlaylist += track + artist + duration + album;
			addToPlaylist += "<li><i class=\'info fa fa-caret-down square\' data-index=\'" + index + "\' onclick=\'runToggle(this.getAttribute(\"data-index\"));\'></i></li>";
			addToPlaylist += "</ul>"
		}

		return addToPlaylist;
	},

	nowPlaying: function () {
		var nowplaying = document.getElementById('nowplaying');
		nowplaying.innerHTML = '';
		nowplaying.innerHTML += '<span id="song-title">' + this.title + '</span>';
		nowplaying.innerHTML += '<span id="song-artist">' + this.artist + ' -' + '</span>';
		nowplaying.innerHTML += ' <span id="song-album">' + this.album + '</span>';
		// return nowplaying;
	},

	audioPlay: function () {
		var audio = document.getElementById('audio');
		audio.src = this.path;
		audio.play(); // .play() method on audio element is built in method
		// return audio;
	},

	audioStop: function () {
		var audio = document.getElementById('audio');
    	audio.pause(); // .pause() method on audio element is built in method
    	audio.src = ''; // removing the source is a trick to stop the audio instead of just pausing it
    	// return audio;
	},

	audioPlayIcon: function(index) {
		playlist.stop(); // removes highlight and stops audio

		var index = parseInt(index); // parseInt to convert 'index' from String to Number

		playlist.nowPlayingIndex = index;

		playlist.play(); 
		playlist.renderInElement(playlistElement); // updates HTML to show changes

		if (playButton.innerHTML === '<i class="fa fa-play"></i>') {
			return playButton.innerHTML = '<i class="fa fa-stop"></i>';
		}
	},

	audioStopIcon: function () {
		playlist.stop();
		playlist.renderInElement(playlistElement);

		if (playButton.innerHTML === '<i class="fa fa-stop"></i>') {
			return playButton.innerHTML = '<i class="fa fa-play"></i>';
		}
	},

	selectTrack: function(index) {
		var tracks = [], i, x, length;

		tracks = document.getElementsByClassName('track');
		i = parseInt(index); // parseInt to convert 'index' from String to Number
		// console.log(typeof i);
		length = tracks.length;

		for (x = 0; x < length; x += 1) { 
			if (tracks[x].className === 'track select' || 'track current select') { 
				tracks[x].className = 'track'; // change class name(s) to just 'track'
			}
		}


		if (tracks[i].className === 'track') { 
			tracks[i].className += ' select';
		}
		// loop through all tracks in 'tracks array'
		// 		if any track has 'track select' as class name(s) or 'track current select' change class name(s) to just 'track'
		//  if any track in 'tracks array' has JUST 'track' as a class name add 'select' to it as well
	},

	doubleClickTrack: function(index) {
		playlist.stop(); // removes highlight and stops audios
		var index = parseInt(index); // parseInt to convert 'index' from String to Number
		// console.log(typeof index);
		playlist.nowPlayingIndex = index;
		playlist.play(); 
		playlist.renderInElement(playlistElement); // updates HTML to show changes

		if (playButton.innerHTML === '<i class="fa fa-play"></i>') {
			return playButton.innerHTML = '<i class="fa fa-stop"></i>';
		}
	}

};






