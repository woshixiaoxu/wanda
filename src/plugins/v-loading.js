import vloading from '@/components/loading.vue'
export default{
    install(Vue){
        let Loading=Vue.extend(vloading) //创建一个Vue的子类，除了具备Vue的一切功能外，还具备加载动作的DOM
        let loading=new Loading({
            el:document.createElement('div')
        })
        document.body.appendChild(loading.$el)  //手动挂载
        let spinner=document.getElementsByClassName('spinner')[0]  //获取DOM
        Vue.showLoading=function(){
            spinner.style.display='block'  //显示
        }
        Vue.hideLoading=function(){
            spinner.style.display='none'   //隐藏
        }
    }
}