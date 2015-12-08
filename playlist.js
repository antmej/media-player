
function Playlist() {
	this.songs = [];
	this.nowPlayingIndex = 0;
	this.tracks = [];
	this.songIdArray = [];
}

Playlist.prototype.add = function(song) {
	this.songs.push(song); 
	// push method adds song object and movie object to songs array	

	playlist.numberEachTrack();

	playlist.createID();
};

Playlist.prototype.numberEachTrack = function () {
	// count number of items 'objects' in songs array and give each a number
	var count = this.songs.length; // checks the length of each time an item is added to songs array
	this.tracks.push(count);
};

Playlist.prototype.createID = function () {
	var songID = this.songs.length - 1; // substracts 1 so index can start at 0
	this.songIdArray.push(songID); // creates the id's that will be added to each audio play icon
};

Playlist.prototype.play = function() {
	var currentSong = this.songs[this.nowPlayingIndex]; 
	// song object at index whatever is added to currentSong variable

	currentSong.play(); // highlights the current song playing

	currentSong.audioPlay();
	// add src and audio path to <audio> tag and play audio

	currentSong.nowPlaying();
	// updates nowplaying info
};

Playlist.prototype.stop = function(){
	var currentSong = this.songs[this.nowPlayingIndex]; 
	
	currentSong.stop(); // removes highlight

	currentSong.audioStop();
	// removes src from audio <audio> tag and stop audio
};

Playlist.prototype.next = function() {
	playlist.stop(); // stop the current song using existing stop method on playlist object
	this.nowPlayingIndex += 1; // move to next song in songs array
	
	if (this.nowPlayingIndex === this.songs.length) {
		this.nowPlayingIndex = 0;
		// if nowPlayingIndex is the same length as the songs array start back at the beginning of the songs array
	}

	playlist.play(); // play the next song in the songs array using existing play method on playlist object
};

Playlist.prototype.renderInElement = function(playlistElement) {
	playlistElement.innerHTML = "";

	var numOfTracks = playlist.tracks.length;
	var numOfSongs = playlist.songs.length;
	var numOfIDs = playlist.songIdArray.length;

	for (var i = 0; i < numOfTracks; i += 1) { // rewrite this, it's too confusing
		playlist.songs[i].trackNumber = this.tracks[i]; 
	} // numbers each track 1, 2, 3 ...

	for (var i = 0; i < numOfIDs; i += 1) { // rewrite this, it's too confusing
		playlist.songs[i].identification = this.songIdArray[i];
	} // console.log(playlist.songs[i].identification = this.songIdArray[i]);
	
	for (var i = 0; i < numOfSongs; i += 1) {
		playlistElement.innerHTML += this.songs[i].toHTML(); 
	} // updates HTML with track #, title, artist, duration and album
};






