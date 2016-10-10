var path = require('path');

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'asynSampleES7');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
module.exports = {
//项目的文件夹可以直接用文件夹名称
//默认会找index.js也可以确定是哪个文件名字
  entry: APP_PATH,
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  //添加我们的插件 会自动生成一个html文件
	 module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: "babel",
	      query: {
	        presets: ['es2015', 'stage-3']
	      }
	    },
	  ]
	}
};
