const path = require('path');
module.exports = { //多页面打包
  lintOnSave:false, //关闭eslint检查
  publicPath: './',
  pages: {
    main: {
      // page 的入口
      entry: 'src/modules/main/main.js',
      // 模板来源
      template: 'public/main.html',
      // 在 dist/index.html 的输出
      filename: 'main.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Main Page'
    },
    remind: {
      entry: 'src/modules/remind/remind.js',
      template: 'public/remind.html',
      filename: 'remind.html',
      title: 'Remind Page'
    },
    second: {
      entry: 'src/modules/second/second.js',
      template: 'public/second.html',
      filename: 'second.html',
      title: 'Second Page'
    }
  },
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', path.join(__dirname,'src'))
      // .set('components', path.join(__dirname,'src/components'))
      // .set('mixins', path.join(__dirname,'src/mixins'))
      // .set('store', path.join(__dirname,'src/store'))
  },
  devServer: {
    //open: true, //是否自动弹出浏览器页面，默认未开启
    host: "0.0.0.0",  //表示启动的时候使用的域名，默认可以不写，则是使用localhost和本机IP，
    disableHostCheck: true,//有些公司出于安全考虑，要求页面和接口必须同主域，这时自己定义的域名，不被浏览器认可，需要设置此项
    //port: '8081', // 设置端口号，默认8080
    //https: false,  //是否使用https协议
    //hotOnly: false, //是否开启热更新，默认开启的
    proxy: {
        '/todo': {
          target: 'http://127.0.0.1:8500/todo/', //API服务器的地址
          ws: true, //代理websockets
          changeOrigin: true, // 是否跨域
          pathRewrite: {
            // '^/api5'是一个正则表达式，表示要匹配请求的url中，全部'http://localhost:8081/api5' 转接为 http://localhost:8081/api/
            '^/todo5': '/todo5',
            //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
            '^/todo': '',
          }
        },
    },
  }
}
