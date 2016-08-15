/**
define({
    func: function(){console.log("alpha function")},
    method2: function(){}

});
 **/
/**
define("alpha", [ "require", "exports", "beta" ],
        function( require, exports, beta ){
    console.log("alpha");
    exports.verb = function(){
        return require("beta").verb()+1;
    }
});
**/
define(["beta"], function( beta ){
    console.log("alpha");
    return {
        verb : function(){
            return beta.verb() + 1 ;
        }
    }
});
