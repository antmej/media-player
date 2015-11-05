
function Song(title, artist, duration, path) { // parameters/arguments being passed in by line 3 in app.js
	Media.call(this, title, duration); // Media object handles title and duration
	this.artist = artist; // Song object is handles artist
	this.path = path; // path to audio file
}

Song.prototype = Object.create(Media.prototype);
// copies the references to Media's prototype properties and methods to Song's prototype properties

// LOOK UP .CALL METHOD AND PROTOTYPE INHERITANCE

Song.prototype.toHTML = function() {
	var htmlString = '<li';
	if (this.isPlaying) { // if true had a class of "current" to 
		htmlString += ' class="current"';
	}
	htmlString += '>';
	htmlString += this.title;
	htmlString += ' - ';
	htmlString += this.artist;
	htmlString += '<span class="duration">';
	htmlString += this.duration;
	htmlString += '</span></li>';
	// console.log(htmlString);
	return htmlString;
	// <li class="current"> Midnight City - M83 <span class="duration"> 4:04 </span></li>
};

Song.prototype.audioSource = function() {
	var audio = "<audio> <source src='midnight-city.mp3' type='audio/mpeg'> </audio>";
	return audio;
};


/*

var m83 = {
	title: "Midnight City",
	artist: "M83",
	duration: "4:04",
	isPlaying: false,
	play: function () {
		this.isPlaying = true;
	},
	stop: function () {
		this.isPlaying = false;
	},
	toHTML: function() {
		var htmlString = '<li';
		if(this.isPlaying) {
			htmlString += ' class="current"';
		}
		htmlString += '>';
		htmlString += this.title;
		htmlString += ' - ';
		htmlString += this.artist;
		htmlString += '<span class="duration">';
		htmlString += this.duration;
		htmlString += '</span></li>';
		// console.log(htmlString);
		return htmlString;
	}
}

var sweetDreams = {
	title: "Sweet Dreams",
	artist: "Beyonce",
	duration: "3:28",
	isPlaying: false,
	play: function () {
		this.isPlaying = true;
	},
	stop: function () {
		this.isPlaying = false;
	},
	toHTML: function() {
		var htmlString = '<li';
		if(this.isPlaying) {
			htmlString += ' class="current"';
		}
		htmlString += '>';
		htmlString += this.title;
		htmlString += ' - ';
		htmlString += this.artist;
		htmlString += '<span class="duration">';
		htmlString += this.duration;
		htmlString += '</span></li>';
		// console.log(htmlString);
		return htmlString;
	}
}

*/
