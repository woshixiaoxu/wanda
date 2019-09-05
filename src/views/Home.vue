<template>
    <transition :name="transition">
        <div class="home">
            <h1>首页</h1>
            <button @click="goback">返回</button>
        </div>
    </transition>
</template>

<script>

export default {
    name:'home',
    components:{},
    data(){
        return{
            transition:'t_home_rtl'
        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less">
.t_home_rtl-enter-active, .t_home_rtl-leave-active {
  transition: all 0.25s;
}
.t_home_rtl-enter, .t_home_rtl-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.t_home_ltr-enter-active, .t_home_ltr-leave-active {
  transition: all 0.25s;
}
.t_home_ltr-enter, .t_home_ltr-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.home{
    height: 100%;
    background: red
}
</style>