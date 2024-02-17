var fs = require("fs");
var lz4 = require("lz4");

var encoder = lz4.createEncoderStream();

var input = fs.createReadStream("test");
var output = fs.createWriteStream("test.lz4");

input.pipe(encoder).pipe(output);
