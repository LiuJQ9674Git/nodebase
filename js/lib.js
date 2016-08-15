define( [ "require", "exports","./util"],function(require,exports,Util){
    // do sth
    console.log("lib module define");
    exports.hello=function () {
        console.log("hello method in lib");
    }
    exports.say=function(msg){
        console.log("say method in lib: " ,msg);
        return Util.say(msg);
    }
});
