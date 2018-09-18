<template>
  <div class="navBar">
  	<mt-navbar v-model="selected">
	  <mt-tab-item :id="item.path" v-for="item,index in routers" :key="index">
	  	<router-link :to="{path:item.path}" tag="div">{{item.title}}</router-link>
	  </mt-tab-item>
</mt-navbar>
   
  </div>
</template>

<script>
	import {routers} from '@/router/router'
	export default {
	  name: 'navBar',
	  data(){
	  	return {
	  		selected:'/',
	  		routers
	  	}
	  }
	 
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
