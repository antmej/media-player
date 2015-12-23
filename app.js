
var playlist = new Playlist();

var m83 =  new Song('Midnight City', 'M83', '4:04', "Hurry Up, We're Dreaming", 'audio/midnight-city.mp3');
var sweetDreams = new Song('Sweet Dreams', 'Beyonce', '3:28', 'I Am... Sasha Fierce', 'audio/sweet-dreams.mp3');
var allOfTheLights = new Song('All of the Lights', 'Kanye West', '5:00', 'My Beautiful Dark Twisted Fantasy', 'audio/all-of-the-lights.mp3');
var beautifulLasers = new Song('Beautiful Lasers', 'Lupe Fiasco', '4:02', 'Lasers', 'audio/beautiful-lasers.mp3');
var feelSoClose = new Song('Feel So Close (Radio Edit)', 'Calvin Harris', '3:28', 'Feel So Close', 'audio/feel-so-close.mp3');
var danzaKuduro = new Song('Danza Kuduro', 'Don Omar', '3:19', 'Meet the Orphans', 'audio/danza-kuduro.mp3');
var goodLife = new Song('Good Life', 'Kanye West', '3:27', 'Graduation', 'audio/good-life.mp3');
var mirrors = new Song('Mirrors', 'Justin Timberlake', '8:04', 'The 20/20 Experience', 'audio/mirrors.mp3');
var nirvana = new Song('Nirvana', 'Sam Smith', '3:23', 'Nirvana EP', 'audio/nirvana.mp3');
var soundtrack2MyLife = new Song('Soundtrack 2 My Life', 'Kid Cudi', '3:56', 'Man On the Moon - End of Day', 'audio/soundtrack-2-my-life.mp3');
var rayBands = new Song('Ray Bands', 'B.o.B', '3:48', 'Strange Clouds', 'audio/ray-bands.mp3');
var talkThatTalk = new Song('Talk That Talk', 'Rihanna', '3:30', 'Talk That Talk', 'audio/talk-that-talk.mp3');
var cudiZone = new Song('Cudi Zone', 'Kid Cudi', '4:19', 'Man On the Moon - End of Day', 'audio/cudi-zone.mp3');
var cantHave = new Song("Can't Have (Ape Drums Remix)", 'Steven A. Clark', '4:01', "Can't Have (Ape Drums Remix)", "audio/can't-have.mp3");

var empty = new Song('empty', 'empty', 'empty', 'empty', 'empty');

// console.log(goodLife.constructor);

playlist.add(cantHave);
playlist.add(nirvana);
playlist.add(rayBands);
playlist.add(m83);
playlist.add(allOfTheLights);
playlist.add(beautifulLasers);
playlist.add(feelSoClose);
playlist.add(danzaKuduro);
playlist.add(goodLife);
playlist.add(mirrors);
playlist.add(soundtrack2MyLife);
playlist.add(cudiZone);
playlist.add(sweetDreams);
playlist.add(talkThatTalk);
// playlist.add(empty);



var playlistElement = document.getElementById('playlist');
playlist.renderInElement(playlistElement);

var playButton = document.getElementById('play');
playButton.onclick = function () {
	if (playButton.innerHTML === '<i class="fa fa-play"></i>') {
		playlist.play();
		playlist.renderInElement(playlistElement);
		playButton.innerHTML = '<i class="fa fa-stop"></i>';
		return;
	} else {
		playlist.stop();
		playlist.renderInElement(playlistElement);
		playButton.innerHTML = '<i class="fa fa-play"></i>';
		return;
	}
};

var nextButton = document.getElementById('next');
nextButton.onclick = function () {
	playlist.next();
	playlist.renderInElement(playlistElement);
};

var backButton = document.getElementById('back');
backButton.onclick = function () {
	playlist.back();
	playlist.renderInElement(playlistElement);
};




