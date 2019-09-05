<template>
  <transition name="t_citys">
    <div class="city">
        <mt-header title="选择城市" style="background:#fff;color:black;border-bottom:1px solid black;font-size:2rem;height:60px;">
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="citys">
          <div class="curCity">
              <span class="cityTitle">当前城市：</span>
              <span class="cityName">{{curCity}}</span>
          </div>
          <div class="city_list">
              <div class="city_item" v-for="(city,city_pre) in citys" :key="city_pre">
                  <!-- ABCD分类 -->
                  <div class="city_pre">{{city_pre}}</div>
                  <!-- 城市内容 -->
                  <div class="city_content">
                      <div class="city_info" v-for="item in city" :key="item.id" @click='gotoCinema($event,item)'>
                          {{item.city_name}}
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
import { Header } from 'mint-ui';
import Http from '@/Http.js'
import Store from 'store'
import Vue from 'vue'

export default {
  name: 'city',
  components: {},
  data:function(){
    return{
        curCity:'北京',
        citys:{}
    }
  },
  methods:{
    getCitys(){
      Vue.showLoading()
      Http.citys(rst => {
        Vue.hideLoading()
        //console.log(rst)
        let { data: { citys } } = rst
        let temCitys = {}
        for (let i=0;i<26;i++){
          let char=String.fromCharCode(65+i)
          //ES6的属性名表达式
          temCitys[char] = []
        }
        //遍历数据，将数据写成{A:[],B:[],C:[]......}
        citys.forEach(val => {
          temCitys[String(val.city_pre).toUpperCase()].push(val)
        })
        //console.log(temCitys)
        //当C/D项为空的时候，自动清除
        for(let key in temCitys){
          if(temCitys[key].length == 0){
            delete temCitys[key]
          }
        }
        this.citys = temCitys
      })
    },
    gotoCinema(event,item){
      //console.log(event,cityid,cityname)
      this.$router.push({name:'cinema',params:{cityid:item.id}})
      Store.set('localcity',item.city_name)
    }
  },
  beforeRouteEnter(to,from,next){
    console.log('city进入')
    next(vm=>{})
  },
  beforeRouteLeave(to,from,next){
    console.log('city离开')
    next(vm=>{})
  },
  mounted(){
    this.getCitys()
  }
}
</script>
<style lang="less">
.t_citys-enter-active, .t_citys-leave-active {
  transition: all 0.25s;
}
.t_citys-enter, .t_citys-leave-to {
  transform: translateX(-100%);
  opacity: 1;
}
.citys{
  width: 100%;
  position: absolute;
  top: 60px;
  height: calc(100% - 60px);
  overflow-y:scroll;
  .curCity{
    padding-top:10px;
    padding-bottom:10px;
    .cityTitle{
      font-size: 1.8rem;
      margin-left: 10px;
      color: gray;
    }
    .cityName{
      font-size: 2rem;
    }
  }
  .city_pre{
    font-size: 1.5rem;
    line-height: 3rem;
    height: 3rem;
    background: #ccc;
    padding-left: 10px;
  }
  .city_content{
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    justify-content: flex-start;
    flex-flow: wrap;
    padding-left: 10px;
    background-color: white;
    .city_info {
      flex: 0 0 12rem;
      font-size: 2rem;
      height: 3.5rem;
      line-height: 3.5rem;
    }
  }
}
</style>