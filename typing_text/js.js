var myString = "Hi! My name is Alina Kravets! I will soon become a Backend developer! I wait for it!";
var myArray = myString.split("");
var loopTimer;

function frameLooper() {
	if (myArray.length > 0) {
	document.getElementById('myTypingText').innerHTML +=myArray.shift();
	} else {
		clearTimeout(loopTimer);
	}

	loopTimer = setTimeout('frameLooper()',70);
}

frameLooper();