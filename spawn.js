var child = require('child_process');
var du = child.spawn('du', ['-ls', 'l']);
du.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});
du.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});
du.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});
