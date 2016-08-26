// This program should read a file /usr/share/dict/words
const { createReadStream } = require('fs');

const es = require('event-stream');

const readStream = createReadStream('/usr/share/dict/words');

const limiter = require('./limit-ten');

// Allow an argument to be passed to this program which should be used as a search term. The case of the search term should not matter. If no argument is passed, respond only with a simple usage message.

const [,, ...searchTerm] = process.argv;

if (searchTerm[0] === undefined ) {
	console.log("Usage: word-search.js [searchterm]");
}


// readStream.on('data', (buffer) => {
// 	console.log("reading?");
// 	// process.stdout.write(buffer.toString());
// })

// readStream.on('end', () => {
// 	console.log("end");
// })




// Limit the results to only ten words and case should not matter.


// Start with a createReadStream and use the event-stream module's split and map methods to manipulate the stream.


// createReadStream('test.txt')
// 	.pipe(limiter)
// 	.pipe(process.stdout);

