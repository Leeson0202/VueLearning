const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/song': {// 匹配所有以 '/api1'开头的请求路径
        target: 'http://www.songe.cc/',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: { '^/song': '' }//代理服务器将请求地址转给真实服务器时会将 /api1 去掉
      },
      '/base': {// 匹配所有以 '/api1'开头的请求路径
        target: 'http://cloud-music.pl-fe.cn',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: { '^/base': '' }//代理服务器将请求地址转给真实服务器时会将 /api1 去掉
      },

    }
  }
})
