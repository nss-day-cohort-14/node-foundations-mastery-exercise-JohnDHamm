// You will also create your own Transform stream as a module called limit-ten.js. This Transform should be a limiter before finally pipeing the results to stdout.

const { Transform } = require('stream');

module.exports = Transform({
	transform (buff, enc, cb) { //enhanced object literal
		// cb(null, buff.toString().toUpperCase())
		// cb(null, buff?????)
	}
});
