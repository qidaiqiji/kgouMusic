<template>
  <div id="app">
    <mt-header>
      <router-link to="/" slot="left" class="logo">
        <img src="http://m.kugou.com/v3/static/images/index/logo.png">
      </router-link>
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
    <router-view name="nav"></router-view>
    <router-view></router-view>
  </div>
</template>
<!-- 1rem = 14px -->
<script>
import axios from 'axios'
export default {
  name: 'App',
  created(){
    // 这里的/proxy/表示http://m.kugou.com,在config中已经配置过
    // axios('/proxy/rank/list?json=true').then(({data})=>{
    //   console.log(data);
    // })
  }
}
</script>

<style>
body{
  margin: 0;
}
.mint-header{
  height: 3.1rem;
}
.logo img{
  width: 8rem;
  display: inline-block;
  vertical-align: middle;
}
.mint-button{
  vertical-align: middle;
}
</style>
