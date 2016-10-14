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

/**
function f(a,b, cb) {
    var sum=a+b;
    //setInterval(test,5000);
    cb(sum);//回调函数
    return sum;
}

function log(c){
    console.log("this log->",c);

}
**/
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
 var Thunk = function(fn){
     console.log("匿名函数包裹:",fn);
     return function (){
         //arguments为再次调用的参数
         //slice方法可从已有的数组中返回选定的元素。再次调用时的参数
         var args = Array.prototype.slice.call(arguments);
         console.log("参数:",args);
         return function (callback){
             //把上面的回调callback参数放入参数队列
             args.push(callback);
             //fn为原来输入的参数，执行原来的方法
             return fn.apply(this, args);
         }
     };
 };

//callback回调函数
function f(a,b, callback) {
    var sum=a+b;
    //setInterval(test,5000);
    //回调函数,回调函数定义在thunkify
    callback(sum);
    return sum;
}

function log(c){
    console.log("this log->",c);
}
//Thunk化
var ft = Thunk(f);
var f_f=ft(1,2);
var r1=f_f(log) ;
**/
/**
function dispatch() {
    console.log("dispatch");
}

function extraArgument(){
    console.log("extraArgument");
}
function next(action) {
    console.log("next");
    return action;
}
function  action(dispatch, initState,extraArgument) {
    console.log("action,state",initState);
    dispatch();
    extraArgument();
}

function createThunkMiddleware(extraArgument) {
    return function (_ref) {
        var dispatch = _ref.dispatch;
        var getState = _ref.getState;
        return function (next) {
            return function (action) {
                if (typeof action === 'function') {
                    return action(dispatch, getState, extraArgument);
                }
                return next(action);
            };
        };
    };
}

//Thunk化
var thunk_extraArgument = createThunkMiddleware(extraArgument);
var thunk_dispatch=thunk_extraArgument({dispatch:dispatch,getState:"initState"});
var thunk_next=thunk_dispatch(next) ;
var thunk_action=thunk_next("action") ;
createThunkMiddleware(extraArgument)({dispatch:dispatch,getState:"initState"})(next)(action);
//thunk_action();
**/
function compose() {
    for (var _len = arguments.length, funcs =
        Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
    }
    if (funcs.length === 0) {
        return function (arg) {
            return arg;
        };
    }
    if (funcs.length === 1) {
        return funcs[0];
    }

    var last = funcs[funcs.length - 1];
    var rest = funcs.slice(0, -1);
    return function () {
        //reduceRight()从数组的末尾向前将数组中的数组项做累加。
        //arr.reduceRight(function (preValue,curValue,index,array)
        return rest.reduceRight(function (composed, f) {//以前值，当前值
                 return f(composed);
            },
            last.apply(undefined, arguments)//此项为初始值
        );//右计算结束
    };
}

function first(composed) {
    return "first";
}
function second(composed) {
    return "second";
}
function third(composed) {
    return "third";
}
var f=compose(first,second,third);
f();
console.log("over")
/**
var genThunify = function* (){
    console.log("genThunify enter");
    var r1 = yield ft(1, 2);
    console.log("r1*->",r1);
    var r2 = yield ft(4, 6);
    console.log("r2*->",r2);
};



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

