var childProcess = require('child_process');
var n = childProcess.fork('./mainSonProcess.js');

n.on('message', function(m) {
    console.log('Main Listen: ', m);
});
n.send({ hello: 'son' });
