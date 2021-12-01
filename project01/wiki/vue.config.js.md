**라우터의 prefetch 기본값을 삭제**

`module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  }
}`