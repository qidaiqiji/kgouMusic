<template>
	<div class="rank">
		<mt-cell class="rank-cell" v-for="item in list" :title="item.rankname" :key="item.id" isLink>
			 <img class="rank-img" slot="icon" src="http://imge.kugou.com/mcommon/400/20150717/20150717100030907982.png" >
		</mt-cell>

	</div>
</template>

<script>
	import {getRank} from "@/server"

	export default{
		data(){
			return {
				list:[]
			}
		},
		async created(){
			let {data} = await getRank()
			console.log(data);
			this.list = data.data;

		}
	}
</script>

<style>
	
	.rank-cell .mint-cell-wrapper{
		line-height: 6.2rem;
	}
	.rank-img{
		width: 5rem;
		height: 5rem;
	}
	.rank-cell .mint-cell-allow-right:after{
		width: 10px;
		height: 10px;
		color: rgb(0, 0, 238);
		border-right-width: 1px;
		border-top-width: 1px;
	}
	
</style>