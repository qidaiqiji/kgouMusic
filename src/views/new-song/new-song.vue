<template>
	<div>
		<div class="new-song-swipe">
			<mt-swipe :auto="4000">
			  <mt-swipe-item v-for="item in banner" :key="item.id">
			  	<img :src="item.imgurl">
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="song-list">
			<mt-cell class="song-cell" is-link  v-for = "item in list" :title="item.filename" :key="item.id">
			</mt-cell>
		</div>
	</div>
	
</template>

<script>
	import {getNewSong} from '@/server'
	export default{
		name:"newSong",
		data(){
			return {
				banner:[],
				list:[]
			}
		},
		async created(){
			let {data} = await getNewSong();
			this.banner = data.banner;
			this.list = data.data
		}
	}
</script> 

<style>
	.new-song-swipe{
		height: 8.6rem
	}
	.new-song-swipe img{
		width: 100%;
		height: 100%;
	}
	.mint-tab-item-label{
		font-size: 16px;
	}
	.mint-cell-title{
		font-size: 14px;
		color: rgb(51, 51, 51);
	}
</style>