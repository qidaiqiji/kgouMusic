<template>
	<div class="plist">
		<mt-cell
		  class="plist-wrap"
		  is-link
		  v-for="item in list"
		  :key="item.id"
		  :title = "item.specialname"

		>
		<img :src="item.user_avatar" class="plist-img" slot="icon">
		</mt-cell>

	</div>
</template>

<script>
	import {getPlist} from '@/server'
	export default{
		name:"plist",
		data(){
			return {
				list:[],
				size:400
			}
		},
		async created(){
			let o = await getPlist();
			let {data} = await getPlist();
			console.log(data);
			this.list = data.data;
			
		}
	}
	
</script>

<style>
	.plist-wrap{
		line-height: 8rem;
		font-size: 14px;
	}
	.plist-wrap .mint-cell-title .mint-cell-text{
		font-size: 12px;

	}
	.mint-cell-wrapper{
		padding: 10px 10px;
	}
	.plist-img{
		width: 4rem;
		height: 4rem;
	}
</style>