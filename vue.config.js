const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/global.scss";',
      },
    },
    sourceMap: process.env.NODE_ENV === 'production',
  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/'

})
