module.exports = thunkify;

function thunkify(fn){
     //返回匿名函数
      return function(){
        //获取多个  
        var args = new Array(arguments.length);
        var ctx = this;

        for(var i = 0; i < args.length; ++i) {
            args[i] = arguments[i];
        }
        //thunkify function
        return function(done){
            var called;

            args.push(function(){//回调函数
                if (called) return;
                called = true;
                done.apply(null, arguments);//异步回调方法，执行回调函数之后
            });

            try {
                fn.apply(ctx, args);//第一次调用，原函数调用，包括回调函数
            } catch (err) {
                done(err);
            }
        }//return over
    }
};

/**
 var Thunk = function(fn){
  return function (){
    var args = Array.prototype.slice.call(arguments);
    return function (callback){
      args.push(callback);
      return fn.apply(this, args);
    }
  };
};
**/