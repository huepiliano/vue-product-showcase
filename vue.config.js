const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/vue-product-showcase/',
  css: {
    extract: true
  },
  configureWebpack: {
    optimization: {
      minimize: false
    }
  }
})