var Stream = require('stream');
var s = new Stream;
s.writeable = true;

var bytes = 0;

s.write = function (buf) {
    bytes += buf.length;
}

s.end = function (buf) {
    if (arguments.length) s.write(buf);

    s.writeable = false;
    console.log(bytes, 'bytes written');
}

s.destroy = function () {
    s.writeable = false;
}

var fs = require('fs');
fs.createReadStream('data.txt').pipe(s);