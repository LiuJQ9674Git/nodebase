/**
 //同步执行
function f1(){
    console.log("f1");
}

function f2(){
    console.log("f2");
}

f1();

f2();
 **/
/**
//回调函数
//如果f1是一个很耗时的任务，可以考虑改写f1，把f2写成f1的回调函数。
function f1(callback){
    console.log("f1");
    setTimeout(function () {
        // f1的任务代码
        callback();

    }, 1000);

}

function f2(){
    console.log("f2");
}
f1(f2);
**/
/**
function finder(records, cb) {
    setTimeout(function () {
        records.push(3, 4);
        cb(records);
    }, 500);
}
function processor(records, cb) {
    setTimeout(function () {
        records.push(5, 6);
        cb(records);
    }, 500);
}

// using the callbacks
finder([1, 2], function (records) {
    processor(records, function(records) {
        console.log(records);
    });
});

// or
function onProcessorDone(records){
    console.log(records);
}
function onFinderDone(records) {
    processor(records, onProcessorDone);
}

finder([1, 2], onFinderDone);
**/
function isFunction(source){
     return typeof(source) === "function";
}

// using listeners
var eventable = {
    on: function(event, cb) {
        //$(this).on(event, cb);
        //console.log("on" ,event, cb);

    },
    trigger: function (event, args) {
        //$(this).trigger(event, args);
        console.log("trigger" ,event, args);
     }
}

var finder = {
    run: function (records) {
        var self = this;
        setTimeout(function () {
            records.push(3, 4);
            self.trigger('done', [records]);
        }, 5000);
    }
};

var processor = {

    run: function (records) {
        var self = this;
        setTimeout(function () {
            records.push(5, 6);
            self.trigger('done', [records]);
        }, 500);
    }
}

Object.assign(finder, eventable);
Object.assign(processor, eventable);
console.log("start on");
finder.on('done', function (event, records) {
    console.log("finder.on in ",records);
    processor.run(records);
    console.log("finder.on in ",records);
});
console.log("on processor");
processor.on('done', function (event, records) {
    console.log("processor.on in ",records);
});
console.log("finder.run");
finder.run([1,2]);
console.log("over");


/**
var util = require("util");

var events = require("events");

EventEmitter = events.EventEmitter;

var Ticker = function() {

    var self = this;

    setInterval(function() {

        self.emit('tick');//

    }, 1000);

};
util.inherits(Ticker, EventEmitter);//继承

var ticker = new Ticker();

ticker.on("tick", function() {

    console.log("tick");

});
**/