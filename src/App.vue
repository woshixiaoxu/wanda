<template>
  <div id="app">
    <keep-alive include="city">
      <router-view class="pages"></router-view>
    </keep-alive>
  </div>
</template>
<style lang="less">
  #app,.pages{
    height: 100%;
  }
  .pages{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
</style>
