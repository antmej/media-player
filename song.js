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

		var i, 
		num, 
		artist, 
		duration, 
		album, 
		track, 
		moreInfo, 
		addToPlaylist;

		i = parseInt(index);	
		num = "<li>" + "<span class='tracknumber'>" + trackNumber + "</span>" + this.title + "</li>";
		artist = "<li>" + this.artist + "</li>";
		duration = "<li>" + this.duration + "</li>";
		album = "<li>" + this.album + "</li>";

		track = "<ul class=\'track\'";
		track += "data-index=\'" + index + "\'";
		track += "onclick=\'selectTrack(this.getAttribute(\"data-index\"));\'";
		track += "ondblclick=\'doubleClickTrack(this.getAttribute(\"data-index\"));\'>";
		track += "<li><i class=\'fa fa-play circle\' data-index=\'" + index + "\' onclick=\'playIcon(this.getAttribute(\"data-index\"));\'></i></li>";
		track += num + artist + duration + album;
		track += "<li><i class=\'info fa fa-caret-down square\' data-index=\'" + index + "\' onclick=\'runToggle(this.getAttribute(\"data-index\"));\'></i></li>";
		track += "</ul>"


		if (this.isPlaying === true) { 
			track = "<ul class=\'track select\'"; 
			track += "data-index=\'" + index + "\'";
			track += "onclick=\'selectTrack(this.getAttribute(\"data-index\"));\'";
			track += "ondblclick=\'doubleClickTrack(this.getAttribute(\"data-index\"));\'>";
			track += "<li><i class=\'fa fa-volume-up circle\'";
			track += "data-index=\'" + index + "\'";
			track += "onclick=\'stopIcon();\'></i></li>";
			track += num + artist + duration + album;
			track += "<li><i class=\'info fa fa-caret-down square\' data-index=\'" + index + "\' onclick=\'runToggle(this.getAttribute(\"data-index\"));\'></i></li>";
			track += "</ul>"
		} // if track audio is playing change highlight track and show play icon
			// <ul class='track select'>
			// <i class='fa fa-volume-up circle'>

		moreInfo = "<ul id=\'toggle" + index + "\'>";
		moreInfo += "<li>" + "<img src=\'" + playlist.artist[i].img + "\'" + " alt=\'artist album cover\'" + ">" + "</li>";
		moreInfo += "<li>" + "<h1>" + playlist.artist[i].name + "</h1>";
		moreInfo += "<p>" + playlist.artist[i].bio + "<a href=\'" + playlist.artist[i].link + "\'";
		moreInfo += " target=\'_blank\'>(more)" + "</a>" + "</p>" + "</li>";
		moreInfo += "<li>" + "<h3>Albums</h3>";
		moreInfo += "<span>" + playlist.artist[i].album1 + "</span>" + "<hr>" + "<br>";
		moreInfo += "<span>" + playlist.artist[i].album2 + "</span>" + "<hr>" + "<br>" + "</li>";
		moreInfo += "</ul>";


		// *create fragment and then return addToPlaylist

		return addToPlaylist = track + moreInfo;
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




