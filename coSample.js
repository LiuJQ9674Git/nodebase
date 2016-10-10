var co=require("./qbase/co");
var Q=require("./qbase/q");

co(function* () {
    var res = yield [
        Q.Promise.resolve(1),
        Q.Promise.resolve(2),
        Q.Promise.resolve(3),
    ];
    console.log(res); // => [1, 2, 3]
});

co(function* () {
    var res = yield {
        1: Q.Promise.resolve(1),
        2: Q.Promise.resolve(2),
    };
    console.log(res); // => { 1: 1, 2: 2 }
});

co(function* () {
    return yield Promise.resolve(true);
}).then(function (val) {
    console.log(val);
}, function (err) {
    console.error(err.stack);
});

var fn = co.wrap(function* (val) {
    return yield Promise.resolve(val);
});

fn(false).then(function (val) {
    console.log(val);
});