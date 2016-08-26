const { createReadStream } = require('fs');
const es = require('event-stream');

const limiter = require('./limit-ten');

// Allow an argument to be passed to this program which should be used as a search term. The case of the search term should not matter. If no argument is passed, respond only with a simple usage message.
const [,, ...searchTerm] = process.argv;

if (searchTerm[0] === undefined ) {
	console.log("Usage: word-search.js [searchterm]");
} else {
	// This program should read a file /usr/share/dict/words
	// Start with a createReadStream and use the event-stream module's split and map methods to manipulate the stream.
	createReadStream('/usr/share/dict/words')
		.pipe(es.split())                  //split stream to break on newlines
	  .pipe(es.map(function (data, cb) { //turn this async function into a stream
	    cb(null, checkWord(data))
	   }))
	  .pipe(limiter)   // Limit the results to only ten words
	  .pipe(process.stdout)
}


let checkWord = function(word) {
	if (word.slice(0, searchTerm[0].length).toLowerCase() === searchTerm[0].toLowerCase()) { // case should not matter
		return `${word}\n`;
	}
}




// ****** testing how to compare searchTerm to words, case-independent ******
// const testWord = ['apple', 'Appalachia', 'apart'];

// testWord.forEach((word) => {
// 	let checkWord =
// 	console.log("check: ", word.slice(0, searchTerm[0].length));
// 	if (word.slice(0, searchTerm[0].length).toLowerCase() === searchTerm[0].toLowerCase()) {
// 		console.log("match: ", word);
// 	}
// });
// ********* end test ********************
