module.exports = {
    devServer: {
      proxy: {
        //配置跨域
        "/api": {
          target: "http://www.bestqingshan.top/movie/", //这里后台的地址模拟的;应该填写你们真实的后台接口
          ws: true,
          changOrigin: true, //允许跨域
          pathRewrite: {
            "^/api": "" //请求的时候使用这个api就可以
          }
        }
      }
    }
  };
  