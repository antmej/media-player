
function Movie(title, year, duration) { // parameters/arguments being passed in by line 3 in app.js
	Media.call(this, title, duration); // Media object handles title and duration
	this.year = year; // Movie object is handles artist
}

Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function () {
	var htmlString = '<li';
	if (this.isPlaying) {
		htmlString += ' class="current"';
	}
	htmlString += '>';
	htmlString += this.title;
	htmlString += ' (';
	htmlString += this.year;
	htmlString += ') ';
	htmlString += '<span class="duration">';
	htmlString += this.duration;
	htmlString += '</span></li>';
	// console.log(htmlString);
	return htmlString;
};
