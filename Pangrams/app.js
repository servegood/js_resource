// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!


// Version using indexOf
function isPangram(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (lowerCased.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}

// Version using string.includes()
// Nice and clean, but not supported in IE
function isPangram(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (!lowerCased.includes(char)) {
			return false;
		}
	}
	return true;
}

alert(isPangram('The five boxing wizards jump quickly')) //true
alert(isPangram('The five boxing wizards jump quick')) //false
