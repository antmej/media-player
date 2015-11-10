
// Prototype Chain
// Media contains all the properties and the Song and Movie Object will inherit from

function Media(title, duration) {
	this.title = title;
	this.duration = duration;
	this.isPlaying = false;
}

Media.prototype.play = function () {
	this.isPlaying = true;
};

Media.prototype.stop = function () {
	this.isPlaying = false;
};