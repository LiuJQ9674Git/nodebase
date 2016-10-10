var Q=require("./qbase/q");
console.log("Q.Promise-start");
var p1 = new Q.Promise(function (resolve, reject) {
    console.log("Q-1-enter");
    //当执行resolve时继续进行，then、catch等程序
    setTimeout(() => reject(new Error('fail')), 3000);
    console.log("Q-1-over");
});
var p2 = new Q.Promise(function (resolve, reject) {
    console.log("Q-2-enter");
    //当执行resolve时继续进行，then、catch等程序
    setTimeout(() => resolve(p1), 1000);
    console.log("Q-2-over");
})
p2
    .then(
        result => {
            console.log("Q-then-enter");
            console.log(result);
            console.log("Q-then-over");
        }
    )
    .catch(error => {
        console.log("Q-catch-enter");
        console.log(error);
        console.log("Q-catch-over");
    });
// Error: fail
console.log("Q.Promise-over");