var Model = require('scuttlebutt/model'),
    net = require('net');

var m = new Model;
m.set('count', '0');
m.on('update', function (key, value) {
    console.log(key + '=' + m.get('count'));
});

var server = net.createServer(function(stream) {
    stream.pipe(m.createStream()).pipe(stream);
});

server.listen(8080);

setInterval(function () {
    m.set('count', Number(m.get('count')) + 1);
}, 320);