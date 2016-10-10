var fs = require('fs');
/**
var asyncReadFile = async function (){
    var f1 = await readFile('./foo.js');
    var f2 = await readFile('./foo.js');
    console.log(f1.toString());
    console.log(f2.toString());
};
var result = asyncReadFile();
**/
/**
var readFile = function (fileName){
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, function(error, data){
            if (error) return reject(error);
            resolve(data);
        });
    });
};
var gen = function* (){
    var f1 = yield readFile('./foo.js');
    var f2 = yield readFile('./foo.js');
    console.log(f1.toString());
    console.log(f2.toString());
};
function run(gen){
    var g = gen();

    function next(data){
        var result = g.next(data);
        if (result.done) return result.value;
        result.value.then(function(data){
            next(data);
        });
    }

    next();
}

run(gen);
**/
//////////////////////Generator完成文件读取/////////////////////////////
/**
var gen = function* (){
    var r1 = yield readFile('./foo.js');
    console.log(r1.toString());
    var r2 = yield readFile('./foorun.js');
    console.log(r2.toString());
    var r3 = yield readFile('./Demo.html');
    console.log(r3.toString());
};

var g = gen();

g.next().value.then(function(data){
    g.next(data).value.then(function(data){
        g.next(data);
    });
});
**/
///////////////////////////////自动处理//////////////////////////////

var thunkify=require("./qbase/thunkify");
var readF = thunkify(fs.readFile);
console.log("start....");
var genThunify = function* (){
    console.log("genThunify enter");
    var r1 = yield readF('./foo.js');
    console.log(r1.toString());
    var r2 = yield readF('./foorun.js');
    console.log(r2.toString());
    //var r3 = yield readF('./Demo.html');
    //console.log(r3.toString());
};
console.log("genThunify-1");


var g = genThunify();
console.log("g.next-2");
var r1 = g.next();// yield readF('./foo.js');
console.log("r1.value-3");
r1.value(function(err, data){
    console.log("r1.value-4 enter callback");
    if (err) throw err;
    console.log("r1.value-5 g.next(data) ");
    var r2 = g.next(data);// yield readF('./foorun.js');
    console.log("r1.value-6 r2.value");
    r2.value(function(err, data){
        if (err) throw err;
        console.log("r1.value-6 r2.value callback");
        g.next(data);//
    });
});

function run(fn) {
    var gen = fn();
    //
    function next(err, data) {
        var result = gen.next(data);//第一次进入，和回调函数
        if (result.done) return;
        result.value(next);//thunkify的第-步，fn方法执行，function(done)
    }

    next();
}
/**
run(genThunify);
**/
/////////////////////////////////////////////co处理//////////////////////////////////////////////////////
/**
var co = require('./qbase/co');
//co(genThunify).then(function (){
//    console.log('Generator 函数执行完成');
//});


co(function* () {
    var res = yield [
        readF('./foo.js'),
        readF('./foorun.js'),
        readF('./Demo.html')
    ];
    console.log(res); // => [1, 2, 3]
    return res;
}).then(function (val) {
    var files=val;
    files.map(function(file){
        console.log("文件内容为：")
        console.log(file.toString());
    });
    //console.log(val);
}, function (err) {
    console.error(err.stack);
});
 **/