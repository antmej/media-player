'use strict';

// TRACK INFO
var playlist = new Playlist();
var miracle, everyBreakingWave, california, songForSomeone, iris, volcano, raisedByWolves, cedarwoodRoad, sleepLikeABabyTonight, thisIsWhereYouCanReachMeNow, troubles;


miracle = new Song('The Miracle (Of Joey Ramone)', 'U2', '4:15', 'Songs of Innocence', 'audio/the-miracle-(of joey-ramone).m4a');

everyBreakingWave = new Song('Every Breaking Wave', 'U2', '4:12', 'Songs of Innocence', 'audio/every-breaking-wave.m4a');

california = new Song('California (There Is No End to Love)', 'U2', '3:59', 'Songs of Innocence', 'audio/california-(there-is-no-end-to-love).m4a');

songForSomeone = new Song('Song For Someone', 'U2', '3:46', 'Songs of Innocence', 'audio/song-for-someone.m4a');

iris = new Song('Iris (Hold Me Close)', 'U2', '5:19', 'Songs of Innocence', 'audio/iris-(hold-me-close).m4a');

volcano = new Song('Volcano', 'U2', '3:14', 'Songs of Innocence', 'audio/volcano.m4a');

raisedByWolves = new Song('Raised By Wolves', 'U2', '4:05', 'Songs of Innocence', 'audio/raised-by-wolves.m4a');

cedarwoodRoad = new Song('Cedarwood Road', 'U2', '4:25', 'Songs of Innocence', 'audio/cedarwood-road.m4a');

sleepLikeABabyTonight = new Song('Sleep Like a Baby Tonight', 'U2', '5:01', 'Songs of Innocence', 'audio/sleep-like-a-baby-tonight.m4a');

thisIsWhereYouCanReachMeNow = new Song('This Is Where You Can Reach Me Now', 'U2', '5:05', 'Songs of Innocence', 'audio/this-is-where-you-can-reach-me-now.m4a');

troubles = new Song('The Troubles', 'U2', '4:45', 'Songs of Innocence', 'audio/the-troubles.m4a');



// ARTIST INFO
var artist = new Artist();
var u2Miracle, u2EveryBreakingWave, u2California, u2SongForSomeone, u2Iris, u2Volcano, u2RaisedByWolves, u2CedarwoodRoad, u2SleepLikeABabyTonight, u2ThisIsWhereYouCanReachMeNow, u2Troubles;

u2Miracle = new Artist('U2', 'https://upload.wikimedia.org/wikipedia/en/9/94/U2_Songs_of_Innocence_cover.jpg', 'Songs of Innocence is the thirteenth studio album by Irish rock band U2. Released on 9 September 2014, it was produced by Danger Mouse, with additional production from Paul Epworth, Ryan Tedder, Declan Gaffney and Flood. The album was announced at an Apple Inc. product launch event and released the same day to all iTunes Store customers at no cost.', 'https://en.wikipedia.org/wiki/Songs_of_Innocence_(U2_album)', 'No Line On The Horizon (2009)', 'How to Dismantle An Atomic Bomb (2004)');

 u2EveryBreakingWave = new Artist('U2', 'https://upload.wikimedia.org/wikipedia/en/9/94/U2_Songs_of_Innocence_cover.jpg', 'Songs of Innocence is the thirteenth studio album by Irish rock band U2. Released on 9 September 2014, it was produced by Danger Mouse, with additional production from Paul Epworth, Ryan Tedder, Declan Gaffney and Flood. The album was announced at an Apple Inc. product launch event and released the same day to all iTunes Store customers at no cost.', 'https://en.wikipedia.org/wiki/Songs_of_Innocence_(U2_album)', 'No Line On The Horizon (2009)', 'How to Dismantle An Atomic Bomb (2004)');

u2California = new Artist('U2', 'https://upload.wikimedia.org/wikipedia/en/9/94/U2_Songs_of_Innocence_cover.jpg', 'Songs of Innocence is the thirteenth studio album by Irish rock band U2. Released on 9 September 2014, it was produced by Danger Mouse, with additional production from Paul Epworth, Ryan Tedder, Declan Gaffney and Flood. The album was announced at an Apple Inc. product launch event and released the same day to all iTunes Store customers at no cost.', 'https://en.wikipedia.org/wiki/Songs_of_Innocence_(U2_album)', 'No Line On The Horizon (2009)', 'How to Dismantle An Atomic Bomb (2004)');

u2SongForSomeone = new Artist('U2', 'https://upload.wikimedia.org/wikipedia/en/9/94/U2_Songs_of_Innocence_cover.jpg', 'Songs of Innocence is the thirteenth studio album by Irish rock band U2. Released on 9 September 2014, it was produced by Danger Mouse, with additional production from Paul Epworth, Ryan Tedder, Declan Gaffney and Flood. The album was announced at an Apple Inc. product launch event and released the same day to all iTunes Store customers at no cost.', 'https://en.wikipedia.org/wiki/Songs_of_Innocence_(U2_album)', 'No Line On The Horizon (2009)', 'How to Dismantle An Atomic Bomb (2004)');

u2Iris = new Artist('U2', 'https://upload.wikimedia.org/wikipedia/en/9/94/U2_Songs_of_Innocence_cover.jpg', 'Songs of Innocence is the thirteenth studio album by Irish rock band U2. Released on 9 September 2014, it was produced by Danger Mouse, with additional production from Paul Epworth, Ryan Tedder, Declan Gaffney and Flood. The album was announced at an Apple Inc. product launch event and released the same day to all iTunes Store customers at no cost.', 'https://en.wikipedia.org/wiki/Songs_of_Innocence_(U2_album)', 'No Line On The Horizon (2009)', 'How to Dismantle An Atomic Bomb (2004)');

u2Volcano = new Artist('U2', 'https://upload.wikimedia.org/wikipedia/en/9/94/U2_Songs_of_Innocence_cover.jpg', 'Songs of Innocence is the thirteenth studio album by Irish rock band U2. Released on 9 September 2014, it was produced by Danger Mouse, with additional production from Paul Epworth, Ryan Tedder, Declan Gaffney and Flood. The album was announced at an Apple Inc. product launch event and released the same day to all iTunes Store customers at no cost.', 'https://en.wikipedia.org/wiki/Songs_of_Innocence_(U2_album)', 'No Line On The Horizon (2009)', 'How to Dismantle An Atomic Bomb (2004)');

u2RaisedByWolves = new Artist('U2', 'https://upload.wikimedia.org/wikipedia/en/9/94/U2_Songs_of_Innocence_cover.jpg', 'Songs of Innocence is the thirteenth studio album by Irish rock band U2. Released on 9 September 2014, it was produced by Danger Mouse, with additional production from Paul Epworth, Ryan Tedder, Declan Gaffney and Flood. The album was announced at an Apple Inc. product launch event and released the same day to all iTunes Store customers at no cost.', 'https://en.wikipedia.org/wiki/Songs_of_Innocence_(U2_album)', 'No Line On The Horizon (2009)', 'How to Dismantle An Atomic Bomb (2004)');

u2CedarwoodRoad = new Artist('U2', 'https://upload.wikimedia.org/wikipedia/en/9/94/U2_Songs_of_Innocence_cover.jpg', 'Songs of Innocence is the thirteenth studio album by Irish rock band U2. Released on 9 September 2014, it was produced by Danger Mouse, with additional production from Paul Epworth, Ryan Tedder, Declan Gaffney and Flood. The album was announced at an Apple Inc. product launch event and released the same day to all iTunes Store customers at no cost.', 'https://en.wikipedia.org/wiki/Songs_of_Innocence_(U2_album)', 'No Line On The Horizon (2009)', 'How to Dismantle An Atomic Bomb (2004)');

u2SleepLikeABabyTonight = new Artist('U2', 'https://upload.wikimedia.org/wikipedia/en/9/94/U2_Songs_of_Innocence_cover.jpg', 'Songs of Innocence is the thirteenth studio album by Irish rock band U2. Released on 9 September 2014, it was produced by Danger Mouse, with additional production from Paul Epworth, Ryan Tedder, Declan Gaffney and Flood. The album was announced at an Apple Inc. product launch event and released the same day to all iTunes Store customers at no cost.', 'https://en.wikipedia.org/wiki/Songs_of_Innocence_(U2_album)', 'No Line On The Horizon (2009)', 'How to Dismantle An Atomic Bomb (2004)');

u2ThisIsWhereYouCanReachMeNow = new Artist('U2', 'https://upload.wikimedia.org/wikipedia/en/9/94/U2_Songs_of_Innocence_cover.jpg', 'Songs of Innocence is the thirteenth studio album by Irish rock band U2. Released on 9 September 2014, it was produced by Danger Mouse, with additional production from Paul Epworth, Ryan Tedder, Declan Gaffney and Flood. The album was announced at an Apple Inc. product launch event and released the same day to all iTunes Store customers at no cost.', 'https://en.wikipedia.org/wiki/Songs_of_Innocence_(U2_album)', 'No Line On The Horizon (2009)', 'How to Dismantle An Atomic Bomb (2004)');

u2Troubles = new Artist('U2', 'https://upload.wikimedia.org/wikipedia/en/9/94/U2_Songs_of_Innocence_cover.jpg', 'Songs of Innocence is the thirteenth studio album by Irish rock band U2. Released on 9 September 2014, it was produced by Danger Mouse, with additional production from Paul Epworth, Ryan Tedder, Declan Gaffney and Flood. The album was announced at an Apple Inc. product launch event and released the same day to all iTunes Store customers at no cost.', 'https://en.wikipedia.org/wiki/Songs_of_Innocence_(U2_album)', 'No Line On The Horizon (2009)', 'How to Dismantle An Atomic Bomb (2004)');

// TRACK AND ARTIST INFO ADDED TO PLAYLIST
playlist.add(miracle); // TRACK
playlist.addArtist(u2Miracle); // ARTIST INFO

playlist.add(everyBreakingWave);
playlist.addArtist(u2EveryBreakingWave);

playlist.add(california);
playlist.addArtist(u2EveryBreakingWave);

playlist.add(songForSomeone);
playlist.addArtist(u2SongForSomeone);

playlist.add(iris);
playlist.addArtist(u2Iris);

playlist.add(volcano);
playlist.addArtist(u2Volcano);

playlist.add(raisedByWolves);
playlist.addArtist(u2RaisedByWolves);

playlist.add(cedarwoodRoad);
playlist.addArtist(u2CedarwoodRoad);

playlist.add(thisIsWhereYouCanReachMeNow);
playlist.addArtist(u2ThisIsWhereYouCanReachMeNow);

playlist.add(troubles);
playlist.addArtist(u2Troubles);


// PLAYLIST ELEMENT
var playlistElement = document.getElementById('playlist');
playlist.renderInElement(playlistElement);

// AUDIO ELEMENT
var audio = document.getElementById('audio');
audio.onended = function () { // once audio ends run this function
	// alert(audio.currentTime);
	playlist.stop();
	playlist.nowPlayingIndex += 1;
		if (playlist.nowPlayingIndex === playlist.songs.length) {
			playlist.nowPlayingIndex = 0;
		} 
		// if end of playlist is reached, start back at the top
	playlist.play();
	playlist.renderInElement(playlistElement);
};

// PLAY BUTTON
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

// NEXT BUTTON
var nextButton = document.getElementById('next');
nextButton.onclick = function () {
	playlist.next();
	playlist.renderInElement(playlistElement);
	
	if (playButton.innerHTML === '<i class="fa fa-play"></i>') {
		return playButton.innerHTML = '<i class="fa fa-stop"></i>';
	}
};

// BACK BUTTON
var backButton = document.getElementById('back');
backButton.onclick = function () {
	playlist.back();
	playlist.renderInElement(playlistElement);

	if (playButton.innerHTML === '<i class="fa fa-play"></i>') {
		return playButton.innerHTML = '<i class="fa fa-stop"></i>';
	}
};

// THE FUNCTION THAT RUNS WHEN ONE OF THE ARTIST INFO BUTTONS IS CLICKED
function runToggle(index) {
	var infoButton = [];
	infoButton = document.getElementsByClassName('info');

	var toggleWindow, parentElement, childElement;
	toggleWindow = document.getElementById('toggle');
	if (toggleWindow) {
		parentElement = document.getElementById("playlist");
		childElement = document.getElementById("toggle");
		parentElement.removeChild(childElement);
	} // if toggle window already exist within the document, remove it

	var tracks = [], sel = [], i;
	tracks = document.getElementsByClassName('track');
	i = index; // the data-index being passed in from runToggle() function
	i = parseInt(i); // converts the data-index from a string to a number

	// creates the toggle window
	var ul, li, menu;
	ul = document.createElement('ul');
	li = document.createElement('li');
	menu;
	ul.id = 'toggle';
	menu = ul;

	if (infoButton[index].className === 'info fa fa-caret-down square') {
		infoButton[index].className = 'info fa fa-caret-up square';
		
		var x, reference, parent, artistInfoToggle, track1, track2;	
		
		x = i + 1;
		reference = tracks[x];
		parent = document.getElementById('playlist');
		parent.insertBefore(menu, reference);

		// updates each toggle window with the appropriate artist information
		artistInfoToggle = document.getElementById('toggle');
		artistInfoToggle.innerHTML += '<li>' + '<img src=\"' + playlist.artist[i].img + '\" alt="artist album cover">' + '</li>';
		artistInfoToggle.innerHTML += '<li><h1>' + playlist.artist[i].name + '</h1>' + '<p>' + playlist.artist[i].bio + '<a href=\"' + playlist.artist[i].link + '\" target="_blank">(more)</a> </p></li>';

		track1 = '<span>' + playlist.artist[i].album1 + '</span><hr><br>';
		track2 = '<span>' + playlist.artist[i].album2 + '</span><hr><br>';
		artistInfoToggle.innerHTML += '<li>' + '<h3>Albums</h3>' + track1 + track2 + '</li>';
		//

		var foo, len = infoButton.length;
		for (foo = 0; foo < len; foo += 1) {
			infoButton[foo].className = 'info fa fa-caret-down square';
			infoButton[index].className = 'info fa fa-caret-up square';
		} // loop through each infoButton in the document and set each one to 'down', except for the one that's displaying artist info
		return;

	} else if (infoButton[index].className === 'info fa fa-caret-up square') {
		infoButton[index].className = 'info fa fa-caret-down square';
		return;
		// if artist info button is clicked again change the direction of the arrow from 'up' to 'down'
	}
};














