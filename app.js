'use strict'; 

// PLAYLIST
var playlist = new Playlist();



// SONGS
var miracle = new Song('The Miracle (Of Joey Ramone)', 'U2', '4:15', 'Songs of Innocence', 'audio/the-miracle-(of joey-ramone).m4a');
var everyBreakingWave = new Song('Every Breaking Wave', 'U2', '4:12', 'Songs of Innocence', 'audio/every-breaking-wave.m4a');
var california = new Song('California (There Is No End to Love)', 'U2', '3:59', 'Songs of Innocence', 'audio/california-(there-is-no-end-to-love).m4a');
var songForSomeone = new Song('Song For Someone', 'U2', '3:46', 'Songs of Innocence', 'audio/song-for-someone.m4a');
var iris = new Song('Iris (Hold Me Close)', 'U2', '5:19', 'Songs of Innocence', 'audio/iris-(hold-me-close).m4a');
var volcano = new Song('Volcano', 'U2', '3:14', 'Songs of Innocence', 'audio/volcano.m4a');
var raisedByWolves = new Song('Raised By Wolves', 'U2', '4:05', 'Songs of Innocence', 'audio/raised-by-wolves.m4a');
var cedarwoodRoad = new Song('Cedarwood Road', 'U2', '4:25', 'Songs of Innocence', 'audio/cedarwood-road.m4a');
var sleepLikeABabyTonight = new Song('Sleep Like a Baby Tonight', 'U2', '5:01', 'Songs of Innocence', 'audio/sleep-like-a-baby-tonight.m4a');
var thisIsWhereYouCanReachMeNow = new Song('This Is Where You Can Reach Me Now', 'U2', '5:05', 'Songs of Innocence', 'audio/this-is-where-you-can-reach-me-now.m4a');
var troubles = new Song('The Troubles', 'U2', '4:45', 'Songs of Innocence', 'audio/the-troubles.m4a');


var songArray = [];
songArray.push(miracle, everyBreakingWave, california, songForSomeone, iris, volcano, raisedByWolves, cedarwoodRoad, sleepLikeABabyTonight, thisIsWhereYouCanReachMeNow, troubles);




// ARTIST
var info = new Artist('U2', 'https://upload.wikimedia.org/wikipedia/en/9/94/U2_Songs_of_Innocence_cover.jpg', 'Songs of Innocence is the thirteenth studio album by Irish rock band U2. Released on 9 September 2014, it was produced by Danger Mouse, with additional production from Paul Epworth, Ryan Tedder, Declan Gaffney and Flood. The album was announced at an Apple Inc. product launch event and released the same day to all iTunes Store customers at no cost.', 'https://en.wikipedia.org/wiki/Songs_of_Innocence_(U2_album)', 'No Line On The Horizon (2009)', 'How to Dismantle An Atomic Bomb (2004)');

var artistArray = [];
for (var i = 0; i < 11; i += 1) { 
	artistArray.push(info);
}



// SONG AND ARTIST INFO ADDED TO PLAYLIST
for (var i = 0; i < 11; i += 1) {
	playlist.add(songArray[i], artistArray[i]);
}



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

// PLAY AUDIO ICON BTN
function playIcon(index) {

	var i = parseInt(index);

	playlist.stop(); // removes highlight and stops audio

	playlist.nowPlayingIndex = i; 
	playlist.play(); 
	playlist.renderInElement(playlistElement); // updates HTML to show changes

	if (playButton.innerHTML === '<i class="fa fa-play"></i>') {
		return playButton.innerHTML = '<i class="fa fa-stop"></i>';
	}

};

// STOP AUDIO ICON BTN
function stopIcon() {

	playlist.stop();
	playlist.renderInElement(playlistElement);

	if (playButton.innerHTML === '<i class="fa fa-stop"></i>') {
		return playButton.innerHTML = '<i class="fa fa-play"></i>';
	}

};

// ADDS SELECT CLASS TO USER SELECTED TRACK
function selectTrack(index) {

	var i, tracks = [], length;
	i = parseInt(index);
	tracks = document.getElementsByClassName('track');
	length = tracks.length;

	// loop through all tracks in 'tracks array'
	// if any track has 'track select' as class name(s) change class name to just 'track'
	for (var x = 0; x < length; x += 1) { 
		if (tracks[x].className === 'track select') { 
			tracks[x].className = 'track'; // change class name(s) to just 'track'
		}
	}

	// if track in tracks array has a class name of just 'track' add 'select' to it
	if (tracks[i].className === 'track') { 
		tracks[i].className += ' select';
	}

};

// DOUBLE CLICK, PLAYS AUDIO AND UPDATES HTML
function doubleClickTrack(index) {

	var i = parseInt(index); // parseInt to convert 'index' from String to Number

	playlist.stop(); // removes highlight and stops audio

	playlist.nowPlayingIndex = i;
	playlist.play(); 
	playlist.renderInElement(playlistElement); // updates HTML to show changes

	if (playButton.innerHTML === '<i class="fa fa-play"></i>') {
		return playButton.innerHTML = '<i class="fa fa-stop"></i>';
	}

};

// TOGGLE WINDOW, PROVIDES ALBUM INFO FOR TRACK
function runToggle(index) {

	var i, infoButton = [], toggle, downArrow, upArrow;
	i = parseInt(index);
	infoButton = document.getElementsByClassName('info');
	toggle = document.getElementById('toggle' + i);
	// console.log(toggle);
	downArrow = 'info fa fa-caret-down square';
	upArrow = 'info fa fa-caret-up square';

	if (infoButton[i].className === downArrow) {	
		$(toggle).slideDown();
		infoButton[i].className = upArrow;

	} else if (infoButton[i].className === upArrow) {
		$(toggle).slideUp();
		infoButton[i].className = downArrow;	
	}

	// jQuery .slideDown and .slideUp methods
};















