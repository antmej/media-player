
var playlist = new Playlist();

var m83 =  new Song('Midnight City', 'M83', '4:04', "Hurry Up, We're Dreaming", 'audio/midnight-city.mp3');
var sweetDreams = new Song('Sweet Dreams', 'Beyonce', '3:28', 'I Am... Sasha Fierce', 'audio/sweet-dreams.mp3');
var allOfTheLights = new Song('All of the Lights', 'Kanye West', '5:00', 'My Beautiful Dark Twisted Fantasy', 'audio/all-of-the-lights.mp3');
// var furious7 = new Movie('Furious 7', '2015', '2:30:00');

playlist.add(m83);
playlist.add(sweetDreams);
playlist.add(allOfTheLights);
// playlist.add(furious7);



var playlistElement = document.getElementById('playlist');
playlist.renderInElement(playlistElement);

// var audio = document.getElementById('audio');

var playButton = document.getElementById('play');
playButton.onclick = function () {
	playlist.play();
	playlist.renderInElement(playlistElement);
};

var nextButton = document.getElementById('next');
nextButton.onclick = function () {
	playlist.next();
	playlist.renderInElement(playlistElement);
};

var stopButton = document.getElementById('stop');
stopButton.onclick = function () {
	playlist.stop();
	playlist.renderInElement(playlistElement);
};

