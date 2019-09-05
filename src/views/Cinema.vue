<template>
    <transition :name="transition">
        <div class="cinema">
            <mt-header title="选择影院" style="background:#fff;color:black;border-bottom:1px solid black;height:60px;font-size:2rem">
                <mt-button icon="back" slot="left" @click="goback"></mt-button>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <div class='cinema_content'>
                <div class="cur_city">
                    <span>{{cityname}}  </span>
                    <span class="fa fa-angle-down"></span>
                </div>
                <div class="cinema_list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                    <div class="single_cinema" v-for="item of cinema" :key="item.id" @click="gotoIndex">
                        <div class="cinema_name">{{item.cinemaName}}</div>
                        <div class="cinema_address">{{item.address}}</div>
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
export default {
    name:'cinema',
    data:function(){
        return{
            transition:'t_cinema_rtl',
            id:this.$route.params.cityid,
            cityname:'',
            cinema:[],
            curPage:0,
            totalpage:0,
            loading:true
        }
    },
    methods:{
        gotoIndex(data){
            this.$router.push('home',{params:data})
        },
        goback(){
            this.$router.go(-1)
        },
        getCinema(page){
            Http.cinemas(page,rst=>{
                let { data, totalpage } = rst.data
                let moreCinema=[]
                moreCinema=moreCinema.concat(this.cinema,data)
                if(this.curPage == 0){
                    this.loading=false
                }
                this.curPage=this.curPage + 1,
                this.totalpage=totalpage,
                this.cinema= moreCinema
                console.log(this.curPage)
            })
        },
        loadMore(){
            // console.log('加载更多')
            if(this.curPage >= 4){
                this.loading = true;
                return;
            }
             this.getCinema(this.curPage)
        }
    },
    beforeRouteEnter(to,from,next){
        console.log('cinema进入')
        next(vm=>{})
    },
    beforeRouteLeave(to,from,next){
        console.log('cinema离开')
        next(vm=>{})
    },
    mounted(){
        //console.log(this.id)
        this.cityname=Store.get('localcity')
        this.getCinema(this.curPage)
    }
}
</script>
<style lang="less">
.t_cinema_rtl-enter-active, .t_cinema_rtl-leave-active {
  transition: all 0.25s;
}
.t_cinema_rtl-enter, .t_cinema_rtl-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.t_cinema_ltr-enter-active, .t_cinema_ltr-leave-active {
  transition: all 0.25s;
}
.t_cinema_ltr-enter, .t_cinema_ltr-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.cur_city{
    width: 100%;
    height: 3rem;
    background: #eee;
    font-size: 1.6rem;
    line-height: 3rem;
    padding-left: 10px;
}
.cinema_content{
    width:100%;
    height:calc(100% - 60px);
    .cinema_list{
        width: 100%;
        height: calc(100% - 60px - 3rem);
        background:#fff;
        overflow-y: scroll;
        .single_cinema{
            height:8rem;
            border-bottom: 1px solid #ccc;
            display: flex;
            flex-direction: column;
            padding-left:10px;
            justify-content: space-around;
            .cinema_name{
                font-size:2rem;
            }
            .cinema_address{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size:1.8rem;
                color: #999;
            }
        }
    }
}
</style>