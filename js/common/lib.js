define( [ "require", "exports","./util"],function(require,exports,Util){
    // do sth
    console.log("lib module define in common package");
    exports.hello=function () {
        console.log("hello method in common package ");
    }
    exports.say=function(msg){
        console.log("say method in comonn package: " ,msg);
        return Util.say(msg);
    }
});
