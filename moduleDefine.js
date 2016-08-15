require(['common/lib'], function(lib){
    console.log("main module require");
    var result=lib.say("Hello Beijing");
    console.log("main module require,result is ",result);
});