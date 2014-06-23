var word = prompt("Please enter a word");

alert("Your word: " + word + "\n"
	+ "It is " + word.length + " characters long." + "\n"
	+ "The third character is " + word.charAt(2) + ".\n"
	+ "Your word in lowercase is " + word.toLowerCase() + ".\n"
	+ "Your word in uppercase is " + word.toUpperCase() + ".\n"
	+ "Example: I would really like a " + word + " right now.\n"
	+ "Subword: " + word.substring(1,4));