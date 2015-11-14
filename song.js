'use strict';

function Song(title, artist, duration, album, path) { // parameters/arguments being passed in by line 3 in app.js
	Media.call(this, title, duration); // Media object handles title and duration
	this.artist = artist; // Song object is handles artist
	this.album = album;
	this.path = path; // path to audio file
}

Song.prototype = Object.create(Media.prototype);
// copies the references to Media's prototype properties and methods to Song's prototype properties

Song.prototype.toHTML = function () {
	var track, artist, duration, album, addToPlaylist;


	track = '<li';
	if (this.isPlaying) { // if true had a class of "current" to 
		track += ' class="current"';
	}
	track += '>'
	track += this.title;
	track += '</li>'

	artist = '<li'
	if (this.isPlaying) { // if true had a class of "current" to 
		artist += ' class="current"';
	}
	artist += '>'
	artist += this.artist;
	artist += '</li>'

	duration = '<li'
	if (this.isPlaying) { // if true had a class of "current" to 
		duration += ' class="current"';
	}
	duration += '>'
	duration += this.duration;
	duration += '</li>'

	album = '<li'
	if (this.isPlaying) { // if true had a class of "current" to 
		album += ' class="current"';
	}
	album += '>'
	album += this.album;
	album += '</li>'

	return addToPlaylist = track + artist + duration + album;
};

Song.prototype.nowPlaying = function () {
	var nowplaying = document.getElementById('nowplaying');
	nowplaying.innerHTML = '';
	nowplaying.innerHTML += '<span id="song-title">' + this.title + '</span>';
	nowplaying.innerHTML += '<span id="song-artist">' + this.artist + ' -' + '</span>';
	nowplaying.innerHTML += ' <span id="song-album">' + this.album + '</span>';
	return nowplaying;
};

Song.prototype.audioPlay = function () {
	var audio = document.getElementById('audio');
	audio.src = this.path;
	audio.play(); // .play() method on audio element is built in method
	return audio;
};

Song.prototype.audioStop = function () {
    var audio = document.getElementById('audio');
    audio.pause(); // .pause() method on audio element is built in method
    audio.src = ''; // removing the source is a trick to stop the audio instead of just pausing it
    return audio;
};
