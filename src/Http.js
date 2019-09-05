const CITYS ='citys.php'
const CINEMAS='cinemas.php'
// const GETSWIPER='getSwiper.php'
// const MOVIE_LIST='cinemasmovies.php'
// const MOVIE_INFO='movieInfo.php'
// const PRODUCT='product.php'
import Vue from 'vue'
class Http{
  static baseUrl = '/api/'
  static common(url,data){
    return Vue.axios.get(`${this.baseUrl}${url}`,{params:data})
  }
  static citys(callback){
    this.common(CITYS,{}).then(rst=>{
        callback(rst)
    }).catch(err=>{
        callback(err)
    })
  }

  static cinemas(page,callback){
    this.common(CINEMAS,{page,size:15})
    .then((rst) => {
      callback(rst)
    }).catch((err) => {
      callback(err)
    })
  }

//   static swiper(callback) {
//     this.common(GETSWIPER, {}, (rst) => {
//       callback(rst)
//     })
//   }

//   static movies(callback) {
//     this.common(MOVIE_LIST, {}, (rst) => {
//       callback(rst)
//     })
//   }

//   static movieInfo(callback) {
//     this.common(MOVIE_INFO, {}, (rst) => {
//       callback(rst)
//     })
//   }

//   static salerInfo(callback) {
//     this.common(PRODUCT, {}, (rst) => {
//       callback(rst)
//     })
//   }
}
export default Http
