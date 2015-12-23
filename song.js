
'use strict';

function Song(title, artist, duration, album, path) { // parameters/arguments being passed in
	this.title = title;
	this.duration = duration;
	this.artist = artist; // Song object handles artist
	this.album = album;
	this.path = path; // path to audio file
	this.isPlaying = false;
}

Song.prototype.current = function () {
	this.isPlaying = true;
};

Song.prototype.removeCurrent = function () {
	this.isPlaying = false;
};

Song.prototype.toHTML = function (trackNumber, index, id) {
	var track, artist, duration, album, addToPlaylist;
	track = "<li>" + "<span class='tracknumber'>" + trackNumber + "</span>" + this.title + "</li>";
	artist = "<li>" + this.artist + "</li>";
	duration = "<li>" + this.duration + "</li>";
	album = "<li>" + this.album + "</li>";

	// console.log(this.isPlaying);

	addToPlaylist = "<ul class=\'track\'";
	addToPlaylist += "data-index=\'" + index + "\'";
	addToPlaylist += "onclick=\'Song.prototype.selectTrack(this.getAttribute(\"data-index\"));\'";
	addToPlaylist += "ondblclick=\'Song.prototype.doubleClickTrack(this.getAttribute(\"data-index\"));\'>";
	addToPlaylist += "<li><i id=\'" + id + "\' class=\'fa fa-play circle\' onclick=\'Song.prototype.audioPlayIcon(this.id);\'></i></li>";
	addToPlaylist += track + artist + duration + album + "</ul>";


	if (this.isPlaying === true) {
		addToPlaylist = "<ul class=\'track current class\'"; 
		addToPlaylist += "data-index\'" + index + "\'";
		addToPlaylist += "onclick=\'Song.prototype.selectTrack(this.getAttribute(\"data-index\"));\'>";
		addToPlaylist += "<li><i id=\'" + id + "\'";
		addToPlaylist += "class=\'fa fa-volume-up circle\'";
		addToPlaylist += "onclick=\'Song.prototype.audioStopIcon(this.id);\'></i></li>";
		addToPlaylist += track + artist + duration + album + "</ul>";
	}

	return addToPlaylist;
};

Song.prototype.nowPlaying = function () {
	var nowplaying = document.getElementById('nowplaying');
	nowplaying.innerHTML = '';
	nowplaying.innerHTML += '<span id="song-title">' + this.title + '</span>';
	nowplaying.innerHTML += '<span id="song-artist">' + this.artist + ' -' + '</span>';
	nowplaying.innerHTML += ' <span id="song-album">' + this.album + '</span>';
	// return nowplaying;
};

Song.prototype.audioPlay = function () {
	var audio = document.getElementById('audio');
	audio.src = this.path;
	audio.play(); // .play() method on audio element is built in method
	// return audio;
};

Song.prototype.audioStop = function () {
    var audio = document.getElementById('audio');
    audio.pause(); // .pause() method on audio element is built in method
    audio.src = ''; // removing the source is a trick to stop the audio instead of just pausing it
    // return audio;
};

Song.prototype.audioPlayIcon = function(id) { // from the parameter being passed in from the function call in index.html
	playlist.stop(); // removes highlight and stops audio

	var index = parseInt(id); // parseInt to convert 'id' from String to Number
	playlist.nowPlayingIndex = index;

	playlist.play(); 
	playlist.renderInElement(playlistElement); // updates HTML to show changes

	if (playButton.innerHTML === '<i class="fa fa-play"></i>') {
		return playButton.innerHTML = '<i class="fa fa-stop"></i>';
	}
};

Song.prototype.audioStopIcon = function () {
	playlist.stop();
	playlist.renderInElement(playlistElement);

	if (playButton.innerHTML === '<i class="fa fa-stop"></i>') {
		return playButton.innerHTML = '<i class="fa fa-play"></i>';
	}
};

Song.prototype.selectTrack = function(index) {
	var tracks = [], i, x, length;
	console.log(index);

	tracks = document.getElementsByClassName('track');
	i = index;
	length = tracks.length;

	for (x = 0; x < length; x += 1) { 
		if (tracks[x].className === 'track select' || 'track current select') { 
			tracks[x].className = 'track'; // change class name(s) to just 'track'
		}
	}

	if (tracks[i].className === 'track') { 
		tracks[i].className += ' select';
		console.log(i);
	}

	// loop through all tracks in 'tracks array'
	// 		if any track has 'track select' as class name(s)
	//  if any track in 'tracks array' has JUST 'track' as a class name add 'select' to it as well
};

Song.prototype.doubleClickTrack = function(index) {
	playlist.stop(); // removes highlight and stops audio

	var index = parseInt(index); // parseInt to convert 'index' from String to Number
	playlist.nowPlayingIndex = index;

	playlist.play(); 
	playlist.renderInElement(playlistElement); // updates HTML to show changes

	if (playButton.innerHTML === '<i class="fa fa-play"></i>') {
		return playButton.innerHTML = '<i class="fa fa-stop"></i>';
	}
};






