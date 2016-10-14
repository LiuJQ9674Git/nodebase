var process=require("process");
var http = require('http');
var cp = require('child_process');
/**
console.log("process.version:",process.version);
console.log("process.installPrefix:",process.installPrefix);
console.log("process.platform:",process.platform);
console.log("process.pid:",process.pid);
console.log("process.title:",process.title);
console.log("process.cwd:",process.cwd);

var s = http.createServer(function(req, res) {
    res.writeHead(200, {});
    res.end('foo');
    console.log('http response');
    process.nextTick(function(){
        console.log('tick')
    });
});
 s.listen(8000);

process.on('uncaughtException', function(e) {
    console.log(e);
});
process.nextTick(function() {
    console.log('tick');
});
process.nextTick(function() {
    iAmAMistake();
    console.log('tock');
});
process.nextTick(function() {
    console.log('tick tock');
});
console.log('End of 1st loop');
 **/

/**
cp.exec('ls -l', function(e, stdout, stderr) {
    if(!e) {
        console.log(stdout);
        console.log(stderr);
    }
});

var options = {
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM',
    setsid: false,
    cwd: null,
    env: null
};


cp.exec('ls -l', options, function(e, stdout, stderr) {
    if(!e) {
        console.log(stdout);
        console.log(stderr);
    }
});

var cat = cp.spawn('cat');//子进程
cat.stdout.on('data', function(d) {
    console.log(d.toString());
});
cat.on('exit', function() {
    console.log('kthxbai');
});
cat.stdin.write('meow');
cat.stdin.end();
 **/

cp.exec('ls -l', function(err, stdout , stderr ) {
    console.log(stdout);
});



