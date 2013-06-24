var http = require('http'),
    fs = require('fs'),
    oppressor = require('oppressor');

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(__dirname + '/data.txt');
    stream.on('error', function(err) {
        res.statusCode = 500;
        res.send(String(err));
    });

    stream.pipe(oppressor(req)).pipe(res);
});

server.listen(8080);