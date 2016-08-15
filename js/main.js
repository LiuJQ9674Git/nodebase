
/**
// main.js
requirejs.config({
    baseUrl: 'js/common'
});

//实际加载的路径为js/lib.js、js/common/lib.js
require(['../lib', 'lib'], function(lib,lib2){
    console.log("main module require");

    var result=lib.say("Hello Beijing");
    console.log("main module require,result is ",result);
    lib2.hello();
});
**/
/**
// main.js
requirejs.config({
    baseUrl: 'js'
});

//实际加载的路径为js/common/lib.js js/common/util.js
require(['./lib'], function(lib){
    console.log("main module require");

    var result=lib.say("Hello Beijing");
    console.log("main module require,result is ",result);

});
**/


// main.js
requirejs.config({
    baseUrl: 'js',
    paths: {
        common: 'common'
    }
});

//实际加载的路径为js/common/lib.js js/common/util.js
require(['common/lib'], function(lib){
    console.log("main module require");
    var result=lib.say("Hello Beijing");
    console.log("main module require,result is ",result);
});


/**
require(['util','lib'], function(util,lib){
    // do sth
    console.log("main module require");

    lib.hello();
});**/
