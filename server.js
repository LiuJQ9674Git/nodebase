/**
 server.js
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var COMMENTS_FILE = path.join(__dirname, 'comments.json');

var findLargest = require('./routes/findlargest');

findLargest('./js', function (er, filename) {
  if (er) return console.error(er)
    console.log('largest file was:', filename)
})


var findlargestmodulized = require('./routes/findlargestmodulized');
findlargestmodulized('./es6', function (er, filename) {
  if (er) return console.error(er)
  console.log('largest file was:', filename)
})

var findlargestasynced = require('./routes/findlargestasynced');
findlargestasynced('./es6', function (er, filename) {
  if (er) return console.error(er)
  console.log('findlargestasynced file was:', filename)
})


var q = require('q');
/**
var p = new Promise(function(resolve, reject) {
  resolve("hello world 北京");//
});

p.then(function(str) {
  console.log( 'then is',str);
});
**/

/**
new Promise(function(resolve, reject) {
  resolve("hello world");
})
  .then(
    function(str) {//成功
      throw new Error("uh oh");
    },
    undefined//拒绝
  )
  .then(
    undefined,//成功
    function(error) {//拒绝
      alert(error);
    }
  );
**/
// Exhibit B
/**
new Promise(function(resolve, reject) {
  resolve("hello world hi hi");
})
  .then(
    function(str) {
      console.log( 'then is',str);
      throw new Error("uh oh");
    },
    function(error) {
      console.log( 'error is',error);
      alert(error);
    }
  );
**/
//var res=function(){};
//var rej=function(){};
new Promise(function(res, rej) {
  console.log(Date.now() + " start setTimeout");
  setTimeout(res, 20);
}).then(function() {
  console.log(Date.now() + " timeout call back");
});
/**
var readFile = Q.denodeify(fs.readFile);
var promise = readFile('./es6/App.js');


var findlargestQ = require('./routes/findlargestQ');

findlargestQ('./es6')
  .then(function (filename) {
    console.log('findlargestQ file was:', filename)
  })
  .fail(function(err){
    console.error(err);
  });

**/

/**
var findlargestGenerator = require('./routes/findlargestGenerator');

findlargestGenerator('./es6').then(function (filename) {
    console.log('findlargestQ file was:', filename)
  })
  .fail(function(err){
    console.error(err);
  });
**/

var computeCommon = function* (a, b) {
  var sum = a + b;
  console.log(sum);
  var c = a - b;
  console.log(c);
  var d = a * b;
  console.log(d);
  var e = a / b;
  console.log(e);
};

var generatorCommon = computeCommon(4, 2);
generatorCommon.next();

var compute = function* (a, b) {
  var sum = a + b;
  yield console.log(sum);
  var c = a - b;
  yield console.log(c);
  var d = a * b;
  yield console.log(d);
  var e = a / b;
  console.log(e);
};

var generator = compute(4, 2);
generator.next();
generator.next();
generator.next();


var computeHello = function* (a, b) {
  var foo = yield a + b;
  console.log(foo);
};

var generatorHello  = computeHello (4, 2);
generatorHello .next();
generatorHello .next("Hello world!"); // Hello world!


fs.readFile('README.md', 'utf8', function (err, txt) {
  if (err) {
    throw err;
  }
  fs.readFile('index.js', 'utf8', function (err, content) {
    if (err) {
      throw err;
    }
    console.log(content);
  });
});

var flow = function* () {
  var txt = yield fs.readFile('README.md', 'utf8');
  console.log('README.md',txt);
  var content = yield fs.readFile('index.js', 'utf8');
  console.log('index.js',content);
};

var generatorFlow  = flow();
generatorFlow.next();
generatorFlow.next();

//优化的异步方法
var helper = function (fn) {
  return function () {
    var args = [].slice.call(arguments);
    var pass;
    args.push(function () { // 在回调函数中植入收集逻辑
      if (pass) {
        pass.apply(null, arguments);
      }
    });
    fn.apply(null, args);

    return function (fn) { // 传入一个收集函数
      pass = fn;
    };
  };
};

var readFileAsynHelpter = helper(fs.readFile);

var flowAsynHelpter = function* () {
  var txt = yield readFileAsynHelpter('README.md', 'utf8');
  console.log('README.md is',txt);
};

var generatorAsynHelpter = flowAsynHelpter();
var ret = generatorAsynHelpter.next(); // 执行readFile('file1.txt', 'utf8');
ret.value(function (err, data) {
  if (err) {
    throw err;
  }
  generatorAsynHelpter.next(data);
});

var co = function (fn) {
  var generator = fn();
  var next = function (data) {
    var result = generator.next(data);
    if (!result.done) {
      result.value(function (err, data) {
        if (err) {
          throw err;
        }
        next(data);
      });
    }
  };
  next();
};

co(function* () {
  var txt = yield readFileAsynHelpter('README.md', 'utf8');
  console.log(txt);
  var txt2 = yield readFileAsynHelpter('index.js', 'utf8');
  console.log(txt2);
});

