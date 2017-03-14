# ReactDemos

##如果你想在你的本地运行这个工程可以如下操作：
#### 1、git clone git@github.com:mayflight/ReactDemos.git或者不使用git你也可以直接将工程下载到本地
#### 2、到工程的根目录下执行命令npm install 下载工程依赖
#### 3、因为本工程是使用webpack工具打包的如果你未全局安装webpack请执行命令：npm install webpack --g 安装工具
#### 4、执行命令：webpack 打包资源
#### 5、执行命令：open index.html 运行demo查看效果

##热更新
### 1、有种简单的方式可以实现热更新，直接在浏览器输入这种模式的URL<br>
`http://«host»:«port»/webpack-dev-server/«path»`
### 2、也可以下载热更新插件 :
       2.1 npm install react-hot-loader --save-dev 
       2.2 serve.js 里面配置 hot:true 
       2.3 webpack.config.js文件里面的entry中新增两个元素 "webpack-dev-server/client?http://localhost:3142/"和
		"webpack/hot/dev-server" 
	   2.4 webpack.config.js文件plugins中新增一个插件元素:new webpack.HotModuleReplacementPlugin()