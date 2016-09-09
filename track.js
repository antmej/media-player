
function buildTrack(index, trackNumber, title, artist, duration, album, i) {

		var track = "<ul class=\'track\'";
			track += "data-index=\'" + index + "\'";
			track += "onclick=\'selectTrack(this.getAttribute(\"data-index\"));\'";
			track += "ondblclick=\'doubleClickTrack(this.getAttribute(\"data-index\"));\'>";
			track += "<li><i class=\'fa fa-play circle\' data-index=\'" + index + "\' onclick=\'playIcon(this.getAttribute(\"data-index\"));\'></i></li>";
			track += "<li><span class='tracknumber'>" + trackNumber + "</span>" + title + "</li>";
			track += "<li>" + artist + "</li>";
			track += "<li>" + duration + "</li>";
			track += "<li>" + album + "</li>";
			track += "<li><i class=\'info fa fa-caret-down square\' data-index=\'" + index + "\' onclick=\'runToggle(this.getAttribute(\"data-index\"));\'></i></li>";
			track += "</ul>"

		return track + songInfo(i, index);

};


function isPlaying(index, trackNumber, title, artist, duration, album, i) {

		var track = "<ul class=\'track select\'";
			track += "data-index=\'" + index + "\'";
			track += "onclick=\'selectTrack(this.getAttribute(\"data-index\"));\'";
			track += "ondblclick=\'doubleClickTrack(this.getAttribute(\"data-index\"));\'>";
			track += "<li><i class=\'fa fa-volume-up circle\' data-index=\'" + index + "\' onclick=\'stopIcon(this.getAttribute(\"data-index\"));\'></i></li>";
			track += "<li><span class='tracknumber'>" + trackNumber + "</span>" + title + "</li>";
			track += "<li>" + artist + "</li>";
			track += "<li>" + duration + "</li>";
			track += "<li>" + album + "</li>";
			track += "<li><i class=\'info fa fa-caret-down square\' data-index=\'" + index + "\' onclick=\'runToggle(this.getAttribute(\"data-index\"));\'></i></li>";
			track += "</ul>"

		return track + songInfo(i, index);
		// updates 
		// <ul class='track select'>
		// <i class='fa fa-volume-up circle'>
		// stopIcon()
};


function songInfo(i, index) {

	var info = "<ul id=\'toggle" + index + "\'>";
		info += "<li>" + "<img src=\'" + playlist.artist[i].img + "\'" + " alt=\'artist album cover\'" + ">" + "</li>";
		info += "<li>" + "<h1>" + playlist.artist[i].name + "</h1>";
		info += "<p>" + playlist.artist[i].bio + "<a href=\'" + playlist.artist[i].link + "\'";
		info += " target=\'_blank\'>(more)" + "</a>" + "</p>" + "</li>";
		info += "<li>" + "<h3>Albums</h3>";
		info += "<span>" + playlist.artist[i].album1 + "</span>" + "<hr>" + "<br>";
		info += "<span>" + playlist.artist[i].album2 + "</span>" + "<hr>" + "<br>" + "</li>";
		info += "</ul>";

	return info;

};







