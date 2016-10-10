/**
function* gen(x){
    var y = yield x + 2;
    return y;
}
var g = gen(1);
var v1=g.next() // { value: 3, done: false }
console.log(v1);
var v2=g.next() // { value: undefined, done: true }
console.log(v2);
**/

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
**/

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

/**
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