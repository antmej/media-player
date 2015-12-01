
'use strict';

function Song(title, artist, duration, album, path) { // parameters/arguments being passed in by line 3 in app.js
	Media.call(this, title, duration); // Media object handles title and duration
	this.artist = artist; // Song object is handles artist
	this.album = album;
	this.path = path; // path to audio file
	this.trackNumber = 1;
}

Song.prototype = Object.create(Media.prototype);
// copies the references to Media's prototype properties and methods to Song's prototype properties

Song.prototype.toHTML = function () {

	// var document.getElementById('playlist'); // MIGHT HAVE TO DELETE

	var track, artist, duration, album, addToPlaylist;

	track = "<li>" + "<span class='tracknumber'>" + this.trackNumber + "</span>" + this.title + "</li>";
	artist = "<li>" + this.artist + "</li>";
	duration = "<li>" + this.duration + "</li>";
	album = "<li>" + this.album + "</li>";

	// trackNumber += 1;
	// "<span class='tracknumber'>" + trackNumber + "</span>" +

	addToPlaylist = "<ul class='tracklist'>" + "<i class='fa fa-play circle'></i>" + track + artist + duration + album + "</ul>";
	
	if (this.isPlaying) {
		addToPlaylist = "<ul class='tracklist current'>" + "<i class='fa fa-stop circle'></i>" + track + artist + duration + album + "</ul>";
	}; // adds current class to currently playing song

	this.trackNum(); // increment track number

	return addToPlaylist;
};

Song.prototype.trackNum = function () {
	return this.trackNumber += 1;
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
