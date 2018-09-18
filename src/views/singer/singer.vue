<template>
	<div class="singer-list">
		<mt-cell class="singer-cell" v-for="item in list" :title="item.classname" :key="item.id" isLink>
		</mt-cell>
	</div>
</template>

<script>
	import {getSingers} from '@/server'
	export default{
		data(){
			return {
				list:[]
			}
		},
		async created(){
			let o = await getSingers();
			let {data} = await getSingers();
			this.list = data.data;
			
		}
	}
</script>

<style>
	
</style>