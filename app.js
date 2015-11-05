
var playlist = new Playlist();

var m83 =  new Song('Midnight City', 'M83', '4:04', '../path/midnight-city.mp3');
var sweetDreams = new Song('Sweet Dreams', 'Beyonce', '3:28');
var furious7 = new Movie('Furious 7', '2015', '2:30:00');

playlist.add(m83);
playlist.add(sweetDreams);
playlist.add(furious7);



var playlistElement = document.getElementById('playlist');
playlist.renderInElement(playlistElement);



var playButton = document.getElementById('play');
playButton.onclick = function() {
	playlist.play();
	playlist.renderInElement(playlistElement);
	// console.log('playing');
}

var nextButton = document.getElementById('next');
nextButton.onclick = function() {
	playlist.next();
	playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById('stop');
stopButton.onclick = function() {
	playlist.stop();
	playlist.renderInElement(playlistElement);
}

