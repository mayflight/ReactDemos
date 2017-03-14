var Webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var Config = require('./webpack.config.js')

var server = new WebpackDevServer(Webpack(Config),{
	publicPath:Config.output.publicPath
})

server.listen(3142,'localhost',function(err,result) {
	if (err) {
		return console.log('err')
	}
	return console.log('listening at localhost:3142')
})