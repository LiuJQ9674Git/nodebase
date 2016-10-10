var thunkify=require("./qbase/thunkify");
var Q=require("./qbase/q");
/**
var compute1 = function* (a, b) {
    var sum = a + b;
    yield sum;
    var c = a - b;
    yield c;
    var d = a * b;
    yield d;
    var e = a / b;
    return e;
};
var generator = compute1(4, 2);
console.log(generator.next()); // { value: 6, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 8, done: false }
console.log(generator.next()); // { value: 2, done: true }

var computevalue = function* (a, b) {
    var foo = yield a + b;
    console.log("foo->",foo);
};

var generatorvalue= computevalue(4, 2);
//生成器停顿
var data=generatorvalue.next();
console.log(data.value); // { value: 2, done: true }
//生成器继续
generatorvalue.next(data.value);
**/
/**
var compute = function* (a, b) {
    console.log("start...");

    var sum = yield  a + b;//1
    console.log("+->,",sum);

    var c =yield  a - b;//2
    console.log("-->,",c);

    var d =yield  a * b;//3
     console.log("*->,",d);

    var e =  yield a / b;//4
    console.log("/->,",e);
    return e;
};

var generator = compute(8, 2);//
//停止进行计算，并返回计算结构
var d=0;
d=generator.next(d.value);//1,进入生成器
//返回值,并继续
d=generator.next(d.value);//2
//
d=generator.next(d.value);//3

d=generator.next(d.value);//4

d=generator.next(d.value);//5
**/


function f(a,b, cb) {
    var sum=a+b;
    //setInterval(test,5000);
    cb(sum);//回调函数
    return sum;
}

function log(c){
    console.log("this log->",c);

}

 /**
var f_Q_t = thunkify(f_Promise);

var gen = function* (){
    var f1 = yield f_Promise(1,2);
    var f2 = yield f_Promise(3,4);
    log(f1);
    log(f2);
    console.log(f1);
    console.log(f2);
};

var g = gen();

g.next().value.then(function(data){
    g.next(data).value.then(function(data){
        g.next(data);
    });
});

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
/**
function f(a,b, callback) {//callback回调函数
    var sum=a+b;
    //setInterval(test,5000);
    callback(sum);//回调函数,回调函数定义在thunkify
    return sum;
}

function log(c){
    console.log("this log->",c);
}

var ft = thunkify(f);
//var f_f=ft(1,2);
//var r1=f_f(log) // 1
var genThunify = function* (){
    console.log("genThunify enter");
    var r1 = yield ft(1, 2);
    console.log("r1*->",r1);
    var r2 = yield ft(4, 6);
    console.log("r2*->",r2);
};

**/
/**
var generatorFlow  = genThunify();

var f1=generatorFlow.next();
console.log("f1->",f1);
f1.value(log);
**/

/**
f1.value(function (c){
    console.log("data->",c);
    //log(c);
    f1=generatorFlow.next(c);
    console.log("f1-f2->",f1);
    f1.value(function (c){
        //log(c);
        console.log("data->",c);
        f1=generatorFlow.next(c);
        console.log("f1-f2->",f1);
    });

});
 **/
/**
console.log("f1->",f1);
//f1.value(log);
f1.value(function (c){
    f1=generatorFlow.next(c);
});
**/
/**
//f1.value(log);
var d=f1.value(function (c){
    console.log("data->",c);
    log(c);
    f1=generatorFlow.next(c);
    console.log("f1-f2->",f1);
    f1.value(function (c){
        log(c);
        console.log("data->",c);
        f1=generatorFlow.next(c);
        console.log("f1-f2->",f1);
    });

});//执行Thunify的return function(done)
**/


/**
////////////////////////////////////
function run(fn) {
    var gen = fn();
    //
    function next(data) {
        var result = gen.next(data);//第一次进入，和回调函数
        if (result.done) return;
        result.value(log);//thunkify的第-步，fn方法执行，function(done)
    }

    next();
}

//run(genThunify);
**/

