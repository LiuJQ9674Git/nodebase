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
define(function(require, exports) {
	//对外提供foo属性
	exports.foo = 'bar';
	//对外提供doSomething方法
	exports.doSomething = function() {};
});


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