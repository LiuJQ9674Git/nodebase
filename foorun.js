function getFoo (x) {
    return new Promise(function (resolve, reject){
        resolve(x+2);
    });
}

var g = function* () {
    try {
        var foo = yield getFoo(3);
        console.log(foo);
        var foo = yield getFoo(5);
        console.log(foo);
        var foo = yield getFoo(8);
        console.log(foo);
    } catch (e) {
        console.log("catch",e);
    }
};

function run (generator) {
    var it = generator();

    /**
     * next方法的作用是分阶段执行Generator函数。每次调用next方法，会返回一个对象，表示当前阶段的信息（value属性和done属性）。
     * value属性是yield语句后面表达式的值，表示当前阶段的值；
     * done属性是一个布尔值，表示Generator函数是否执行完毕，即是否还有下一个阶段。
     * @param result
     * @returns {*}
     */
    function go(result) {
        if (result.done) return result.value;

        return result.value.then(function (value) {
            return go(it.next(value));
        }, function (error) {
            return go(it.throw(error));
        });
    }
    //执行生成器generator
    go(it.next());
}

run(g);
