
'use strict';

function Song(title, artist, duration, album, path) { // parameters/arguments being passed in
	this.title = title;
	this.duration = duration;
	this.artist = artist; // Song object is handles artist
	this.album = album;
	this.path = path; // path to audio file
}

Song.prototype.highlight = function () {
	this.isPlaying = true;
};

Song.prototype.removeHighlight = function () {
	this.isPlaying = false;
};

Song.prototype.toHTML = function () {
	var track, artist, duration, album, addToPlaylist;

	track = "<li>" + "<span class='tracknumber'>" + this.trackNumber + "</span>" + this.title + "</li>";
	artist = "<li>" + this.artist + "</li>";
	duration = "<li>" + this.duration + "</li>";
	album = "<li>" + this.album + "</li>";

	addToPlaylist = "<ul class='track'>" + "<li><i  " + 'id=' + this.identification + " class='fa fa-play circle' onclick='Song.prototype.audioPlayIcon(this.id);'></i></li>" + track + artist + duration + album + "</ul>";
	
	if (this.isPlaying === true) {
		addToPlaylist = "<ul class='track current'>" + "<li><i  " + 'id=' + this.identification + " class='fa fa-volume-up circle' onclick='Song.prototype.audioStopIcon(this.id);'></i></li>" + track + artist + duration + album + "</ul>";
	} // adds current class to currently playing song

	return addToPlaylist;
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

Song.prototype.audioPlayIcon = function (id) { // from the parameter being passed in from the function call in index.html
	playlist.stop(); // removes highlight
	playlist.renderInElement(playlistElement); // updates HTML to show changes

	var index = parseInt(id); // parseInt to convert 'id' from String to Number
	playlist.nowPlayingIndex = index;

	playlist.play(); 
	playlist.renderInElement(playlistElement);
}; // PROBABLY COMMENT EVERYTHING AND SAVE CHANGES TO GIT! and figure out playlist constructor before git save

Song.prototype.audioStopIcon = function () {
	playlist.stop();
	playlist.renderInElement(playlistElement);
};






