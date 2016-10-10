var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
console.log("start...");
var cjs=fs.readFile('C.js', 'utf8', function (err, txt) {
    console.log("step 1...");
    if (err) {
        throw err;
    }
    console.log("step 2...");
    var djs=fs.readFile('D.js', 'utf8', function (err, content) {
        console.log("step 3...");
        if (err) {
            throw err;
        }
        console.log("step 4...");
        console.log(content);
    });
    console.log("step 5...");
});

console.log("over...");