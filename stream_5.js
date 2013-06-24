var Model = require('scuttlebutt/model'),
    net = require('net');

var m = new Model,
    s = m.createStream();

s.pipe(net.connect(8888, 'localhost')).pipe(s);

m.on('update', function cb (key) {
    if (key !== 'count') return;

    m.removeListener('update', cb);


    setInterval(function () {
        m.set('count', Number(m.get('count')) + 1);
    }, 100);
});

m.on('update', function (key, value) {
    console.log(key + '=' + value);
});