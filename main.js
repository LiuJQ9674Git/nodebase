var Q=require("./qbase/q");
var messages=["one","two","three"];
/**
Q.array_reduce(//{message,function,void 0}
	messages,//message的数组的每个值调用promiseDispatch方法
	function (undefined, message) {//回调函数
		//Q.nextTick(function () {//
			//Modified by LiuJQ
			//console.log("prev message->" ,prev);
		    console.log(" message\n",message);
		//});
	},
	"one"
);
**/


console.log("Q start");
console.log("Promise start");

/**
const ppp = new Q.Promise(function(resolve, reject,notify) {
	console.log("Promise resolve before");
	resolve("Bejing");
	//resolve("hello world");
	console.log("Promise resolve over");
}).done();


const q= Q.fcall(function () {
	return 10;
}).then(function (str) {
	console.log("then first:",str);
}).done();
**/
var pp = new Q.Promise((resolve, reject) => {
	resolve(function (){
		{
			new Error("出错了");
		}
	});
});
pp.then(null, function (s){
	console.log(s)
});
/**
pp.then(function(str) {
	console.log(str);
	return str+"OK-Sech";
}).then(function (str) {
	console.log(str);
	return str+"OK-Finish"
}).done(function(str){
	console.log(str);
});
**/
console.log("Promise over");

/**
function f(a,b,c){
	console.log("固定参数为：");
	console.log(a,b,c);
	//获取参数
	var arg=arguments;
	console.log("全部参数为：");
	console.log(arg);

}
var f_Extend = f.bind(null,"extend_A")
f("A","B","C")  //这里会输出--> A B C
f_Extend("A","B","C")  //这里会输出-->extend_A A B
f_Extend("B","C")  //这里会输出-->extend_A B C
f.call(null,"extend_A") //这里会输出-->extend_A undefined undefined
**/

/**
define(function(){
//通过return直接提供接口
	return {
		foo: 'bar',
		doSomething: function() {}
	};
});
**/
/**
define(function(){
//通过return直接提供接口

	return function(title){
		return  title+' Def';
	}
});
**/

/**
define(function(require, exports) {
	//对外提供foo属性
	exports.foo = 'bar';
	//对外提供doSomething方法
	exports.doSomething = function() {};
});
**/

/**
define(function(require, exports, module) {
	console.log('require module: main');

	var mod1 = require('./mod1');
	mod1.hello();
	var mod2 = require('./mod2');
	mod2.hello();

	return {
		hello: function() {
			console.log('hello main');
		}
	};
});
**/
//以下是AMD协议代码实现
/**
(require(['alpha'],function(alpha){
	var a=alpha.verb();
	console.log("a is ",a);
}))();
**/


/*
var foo=require(["./foo"],function(foo){
	console.log(foo.foo);

});
foo;

var A=require(["B","C"],function(B,C){
	var A = {};
	A.say = B.say;
	A.run = C.run;
	A.run();
	return A;
});

A;

var mainfunc=require( ['alpha', 'bar'], function( alpha, bar ){
	alpha.func();
	bar.func();
} );
mainfunc();
*/









