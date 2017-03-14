//webpack config file
var path = require('path');
var webpack = require('webpack');

module.exports = {
	//webpack 打包入口文件
	entry:[
		'./src',
		"webpack-dev-server/client?http://localhost:3142/",
		"webpack/hot/dev-server"
	],
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'source-map', //配置source-map 方便在浏览器中debug
	module: {
		  loaders: [{
		    test: /\.js$/,
		    loader: 'babel-loader',
		    include: path.join(__dirname, 'src'),
		    query: {
         	 	presets: ['es2015', 'react']
        	}
		  }]
	},
	//webpack 打包后输出的文件
	output:{
		path: path.join(__dirname,'dist'), //打包文件放到dist文件夹
		filename:'bundle.js',
		publicPath:'/static/'
	},
}
