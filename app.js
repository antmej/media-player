
// TRACK INFO
var playlist = new Playlist();

// var midnightCity =  new Song('Midnight City', 'M83', '4:04', "Hurry Up, We're Dreaming", 'audio/midnight-city.mp3');
var sweetDreams = new Song('Sweet Dreams', 'Beyonce Knowles', '3:28', 'I Am... Sasha Fierce', 'audio/sweet-dreams.mp3');
var allOfTheLights = new Song('All of the Lights', 'Kanye West', '5:00', 'My Beautiful Dark Twisted Fantasy', 'audio/all-of-the-lights.mp3');
var showGoesOn = new Song('The Show Goes On', 'Lupe Fiasco', '3:52', 'Lasers', 'audio/show-goes-on.mp3');
var feelSoClose = new Song('Feel So Close (Radio Edit)', 'Calvin Harris', '3:28', 'Feel So Close - Single', 'audio/feel-so-close.mp3');
var danzaKuduro = new Song('Danza Kuduro', 'Don Omar', '3:19', 'Meet the Orphans', 'audio/danza-kuduro.mp3');
var goodLife = new Song('Good Life', 'Kanye West', '3:27', 'Graduation', 'audio/good-life.mp3');
var mirrors = new Song('Mirrors', 'Justin Timberlake', '8:04', 'The 20/20 Experience', 'audio/mirrors.mp3');
var nirvana = new Song('Nirvana', 'Sam Smith', '3:23', 'Nirvana EP', 'audio/nirvana.mp3');
var soundtrack2MyLife = new Song('Soundtrack 2 My Life', 'Kid Cudi', '3:56', 'Man On the Moon - End of Day', 'audio/soundtrack-2-my-life.mp3');
var rayBands = new Song('Ray Bands', 'B.o.B', '3:48', 'Strange Clouds', 'audio/ray-bands.mp3');
var talkThatTalk = new Song('Talk That Talk', 'Rihanna', '3:30', 'Talk That Talk', 'audio/talk-that-talk.mp3');
var cudiZone = new Song('Cudi Zone', 'Kid Cudi', '4:19', 'Man On the Moon - End of Day', 'audio/cudi-zone.mp3');
var summer = new Song("Summer", 'Calvin Harris', '3:38', "Motion", "audio/summer.mp3");
// var cantHave = new Song("Can't Have (Ape Drums Remix)", 'Steven A. Clark', '4:01', "Can't Have (Ape Drums Remix)", "audio/can't-have.mp3");

// var empty = new Song('empty', 'empty', 'empty', 'empty', 'empty');


// ARTIST INFO
var artist = new Artist();

var calvinHarrisSummer = new Artist('Calvin Harris', 'https://upload.wikimedia.org/wikipedia/en/f/fb/Calvin_Harris_-_Motion.png', 'Harris rose to international prominence in 2012 with the release of his third studio album, 18 Months. Topping the UK charts, the album became his first to chart on the Billboard 200 in the US, reaching number 19. All eight of the album\'s singles; "Bounce", "Let\'s Go", "We\'ll Be Coming Back", "Sweet Nothing", "Drinking from the Bottle", "I Need Your Love", "Thinking About You" and "Feel So Close", along with "We Found Love" reached the top 10 of the UK Singles Chart.', 'https://en.wikipedia.org/wiki/Calvin_Harris', 'Motion (2014)', '18 Months (2012)');

var samSmith = new Artist('Sam Smith', 'https://upload.wikimedia.org/wikipedia/en/5/52/Sam_Smith_-_Nirvana.png', 'Samuel Frederick "Sam" Smith born 19 May 1992 is an English singer-songwriter. He rose to fame in October 2012 when he was featured on Disclosure\'s breakthrough single "Latch", which peaked at number eleven on the UK Singles Chart. His subsequent feature on Naughty Boy\'s "La La La"- earned him his first number one single in May 2013', 'https://en.wikipedia.org/wiki/Sam_Smith_(singer)', 'The Lost Tapes Remixed (2015)', 'In the Lonely Hour (2014)');

var bob = new Artist('B.o.B', 'https://upload.wikimedia.org/wikipedia/en/6/69/B.o.B_-_Strange_Clouds_-_LP_Cover.jpg', 'B.o.B quickly rose to fame after his commercial debut single "Nothin\' on You", reached number one in both the United States and the United Kingdom. He would later release his third single "Airplanes", which also topped several major music charts. His fifth single "Magic", became his third top ten hit on the Billboard Hot 100.', 'https://en.wikipedia.org/wiki/B.o.B', 'Psycadelik Thoughtz (2015)', 'No Genre 2 (2014)');

// var m83 = new Artist('M83', 'http://mute.com/wp-content/uploads/2011/08/M83.HUWD_.Cover_1-906x906.jpg', 'M83 are a French electronic music band led by Anthony Gonzalez and currently based in Los Angeles, California, United States. Formed in 2001 in Antibes, France, they have released six albums and two soundtracks, including the Grammy Award-nominated Hurry Up, We\'re Dreaming.', 'https://en.wikipedia.org/wiki/B.o.B', 'Holes in the Sky (2015)', 'You and the Night (2013)');

var kanyeWest = new Artist('Kanye West', 'https://upload.wikimedia.org/wikipedia/en/f/f0/My_Beautiful_Dark_Twisted_Fantasy.jpg', 'Kanye Omari West is an American hip hop recording artist and record producer. He is the founder of the record label GOOD Music and creative content company DONDA. West is one of the most acclaimed musicians of the 21st century. He has attracted both praise and criticism for his work and his controversial, outspoken public persona.', 'https://en.wikipedia.org/wiki/Kanye_West', 'The Life of Pablo (2016)', 'Yeezus (2013)');

var lupeFiasco = new Artist('Lupe Fiasco', 'https://upload.wikimedia.org/wikipedia/en/b/b2/Lupe_Fiasco_Lasers.jpg', 'Raised in Chicago, Jaco developed an interest in hip hop after initially disliking the genre for its use of vulgarity and misogyny. After adopting the name Lupe Fiasco and recording songs in his father\'s basement, 19-year-old Fiasco joined a group called Da Pak. The group disbanded shortly after its inception, and Fiasco soon met rapper Jay-Z who helped him sign a record deal with Atlantic Records.', 'https://en.wikipedia.org/wiki/Lupe_Fiasco', 'Pharaoh Height EP (2015)', 'Tetsuo & Youth (2015)');

var calvinHarris = new Artist('Calvin Harris', 'https://upload.wikimedia.org/wikipedia/en/0/07/Calvin_Harris_-_Feel_So_Close.png', 'Harris rose to international prominence in 2012 with the release of his third studio album, 18 Months. Topping the UK charts, the album became his first to chart on the Billboard 200 in the US, reaching number 19. All eight of the album\'s singles; "Bounce", "Let\'s Go", "We\'ll Be Coming Back", "Sweet Nothing", "Drinking from the Bottle", "I Need Your Love", "Thinking About You" and "Feel So Close", along with "We Found Love" reached the top 10 of the UK Singles Chart.', 'https://en.wikipedia.org/wiki/Calvin_Harris', 'Motion (2014)', '18 Months (2012)');

var donOmar = new Artist('Don Omar', 'https://upload.wikimedia.org/wikipedia/en/8/81/Meet_the_Orphans_album_cover.jpg', 'Don Omar (born William Omar Landrón Rivera; February 10, 1978) is a Puerto Rican reggaeton recording artist and actor. He is sometimes referred to by his nickname El Rey (In Spanish: "The King").', 'https://en.wikipedia.org/wiki/Don_Omar', 'The Last Don 2 (2015)', 'Don Omar Presents MTO: New Generation (2012)');

var kanyeWestGraduation = new Artist('Kanye West', 'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_(album).jpg', 'Kanye Omari West is an American hip hop recording artist and record producer. He is the founder of the record label GOOD Music and creative content company DONDA. West is one of the most acclaimed musicians of the 21st century. He has attracted both praise and criticism for his work and his controversial, outspoken public persona.', 'https://en.wikipedia.org/wiki/Kanye_West', 'The Life of Pablo (2016)', 'Yeezus (2013)');

var justinTimberlake = new Artist('Justin Timberlake', 'https://upload.wikimedia.org/wikipedia/en/e/ed/Justin_Timberlake_-_The_2020_Experience.png', 'Justin Randall Timberlake born January 31, 1981 is an American singer, songwriter, actor, and record producer. He appeared on the television shows Star Search and The All-New Mickey Mouse Club as a child. In the late 1990s, Timberlake rose to prominence as one of the two lead vocalists and youngest member of NSYNC, which eventually became one of the best-selling boy bands of all time.', 'https://en.wikipedia.org/wiki/Justin_Timberlake', 'FutureSex/LoveSounds (2006)', 'Justified (2002)');

var kidCudi = new Artist('Kid Cudi', 'https://upload.wikimedia.org/wikipedia/en/2/26/ManonTheMoonTheEndofDay.jpg', 'Scott Ramon Seguro Mescudi is an American recording artist and actor from Cleveland, Ohio. Cudi first gained major recognition following the release of his first official full-length project, a mixtape titled A Kid Named Cudi (2008). The mixtape caught the attention of American rapper-producer Kanye West, who subsequently signed Cudi to his GOOD Music label imprint in late 2008.', 'https://en.wikipedia.org/wiki/Kid_Cudi', 'Speedin\' Bullet 2 Heaven (2015)', 'Indicud (2013)');

var kidCudiManOnTheMoon = new Artist('Kid Cudi', 'https://upload.wikimedia.org/wikipedia/en/2/26/ManonTheMoonTheEndofDay.jpg', 'Scott Ramon Seguro Mescudi is an American recording artist and actor from Cleveland, Ohio. Cudi first gained major recognition following the release of his first official full-length project, a mixtape titled A Kid Named Cudi (2008). The mixtape caught the attention of American rapper-producer Kanye West, who subsequently signed Cudi to his GOOD Music label imprint in late 2008.', 'https://en.wikipedia.org/wiki/Kid_Cudi', 'Speedin\' Bullet 2 Heaven (2015)', 'Indicud (2013)');

var beyonceKnowles = new Artist('Beyonce Knowles', 'https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png', 'Beyonce Giselle Knowles-Carter is an American singer, songwriter, record producer and actress. Born and raised in Houston, Texas, she performed in various singing and dancing competitions as a child, and rose to fame in the late 1990s as lead singer of R&B girl-group Destiny\'s Child. Managed by her father, Mathew Knowles, the group became one of the world\'s best-selling girl groups of all time. Their hiatus saw the release of Beyonce\'s debut album, Dangerously in Love (2003), which established her as a solo artist worldwide.', 'https://en.wikipedia.org/wiki/Beyonc%C3%A9', 'BEYONCE (2013)', '4 (2011)');

var rihanna = new Artist('Rihanna', 'https://upload.wikimedia.org/wikipedia/en/7/7a/Rihanna_-_Talk_That_Talk_(deluxe).png', 'With sales exceeding 200 million records worldwide, Rihanna is one of the best-selling artists of all time.  Rihanna is the youngest and fastest solo artist to earn thirteen number-one singles on the Billboard Hot 100, and was named the Digital Songs Artist of the 2000s decade and the top Hot 100 artist of the 2010s decade by Billboard.', 'https://en.wikipedia.org/wiki/Rihanna', 'Anti (2016)', 'Unapologetic (2012)');

// var stevenClark = new Artist('Steven A. Clark', 'https://i1.sndcdn.com/artworks-000129228527-q9bl13-t500x500.jpg', 'Steven A. Clark is an American pop artist based in Miami, Florida. Hailing originally from North Carolina, he signed with Secretly Canadian in 2014.', 'https://en.wikipedia.org/wiki/Steven_A._Clark', 'The Lonely Roller (2015)', 'Late EP (2014)');


// TRACK AND ARTIST INFO ADDED TO PLAYLIST
playlist.add(summer); // TRACK 
playlist.addArtist(calvinHarrisSummer); //  ARTIST INFO

playlist.add(nirvana);
playlist.addArtist(samSmith);

playlist.add(rayBands);
playlist.addArtist(bob);

// playlist.add(midnightCity);
// playlist.addArtist(m83);

playlist.add(allOfTheLights);
playlist.addArtist(kanyeWest);

playlist.add(showGoesOn);
playlist.addArtist(lupeFiasco);

playlist.add(feelSoClose);
playlist.addArtist(calvinHarris);

playlist.add(danzaKuduro);
playlist.addArtist(donOmar);

playlist.add(goodLife);
playlist.addArtist(kanyeWestGraduation);

playlist.add(mirrors);
playlist.addArtist(justinTimberlake);

// playlist.add(soundtrack2MyLife);
// playlist.addArtist(kidCudi);

// playlist.add(cudiZone);
// playlist.addArtist(kidCudiManOnTheMoon);

playlist.add(sweetDreams);
playlist.addArtist(beyonceKnowles);

playlist.add(talkThatTalk);
playlist.addArtist(rihanna);

// playlist.add(empty);


var playlistElement = document.getElementById('playlist');
playlist.renderInElement(playlistElement);


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
	
	if (playButton.innerHTML === '<i class="fa fa-play"></i>') {
		return playButton.innerHTML = '<i class="fa fa-stop"></i>';
	}
};

var backButton = document.getElementById('back');
backButton.onclick = function () {
	playlist.back();
	playlist.renderInElement(playlistElement);

	if (playButton.innerHTML === '<i class="fa fa-play"></i>') {
		return playButton.innerHTML = '<i class="fa fa-stop"></i>';
	}
};

function runToggle(index) {
	var infoButton = [];
	infoButton = document.getElementsByClassName('info');

		// yoop yoop yoop 
		var yoop = document.getElementById('boop');
		if (yoop) {
			var p = document.getElementById("playlist");
			var c = document.getElementById("boop");
			p.removeChild(c);
		} // if boop already exist within the document, remove it


		var tracks = [], sel = [], i;
		tracks = document.getElementsByClassName('track');
		i = index;
		i = parseInt(i);


		var ul = document.createElement('ul');
		var li = document.createElement('li');
		var menu;
		ul.id = 'boop';
		menu = ul;

		if (infoButton[index].className === 'info fa fa-caret-down square') {
			infoButton[index].className = 'info fa fa-caret-up square';
			var x = i + 1;
			console.log('info: ' + x);

			var reference = tracks[x];
			var parent = document.getElementById('playlist');
			parent.insertBefore(menu, reference);

			var b00p = document.getElementById('boop');
			b00p.innerHTML += '<li>' + '<img src=\"' + playlist.artist[i].img + '\" alt="artist album cover">' + '</li>';
			b00p.innerHTML += '<li><h1>' + playlist.artist[i].name + '</h1>' + '<p>' + playlist.artist[i].bio + '<a href=\"' + playlist.artist[i].link + '\" target="_blank">(more)</a> </p></li>';

			var track1 = '<span>' + playlist.artist[i].album1 + '</span><hr><br>';
			var track2 = '<span>' + playlist.artist[i].album2 + '</span><hr><br>';
			b00p.innerHTML += '<li>' + '<h3>Albums</h3>' + track1 + track2 + '</li>';


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
	// };
};














