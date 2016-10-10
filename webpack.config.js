var path = require('path');

//������һЩ�ļ��е�·��
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'asynSampleES7');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
module.exports = {
//��Ŀ���ļ��п���ֱ�����ļ�������
//Ĭ�ϻ���index.jsҲ����ȷ�����ĸ��ļ�����
  entry: APP_PATH,
  //������ļ��� �ϲ��Ժ��js������Ϊbundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  //������ǵĲ�� ���Զ�����һ��html�ļ�
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
