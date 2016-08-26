// You will also create your own Transform stream as a module called limit-ten.js. This Transform should be a limiter before finally pipeing the results to stdout.

const { Transform } = require('stream');
let counter = 0;

module.exports = Transform({
	transform (buff, enc, cb) { //enhanced object literal
		counter ++;
		// console.log("counter: ", counter);
		counter < 11 ? cb(null, buff) : cb(null, null); // Limit the results to only ten words
	}
});
