import axios from 'axios'
import store from '@/store'

let oneLeve = axios.create({
	responseType: 'json',
	transformRequest(data){
		// 在发送请求的时候把是否加载中的状态设置为true，表示加载中
		store.commit("updatedIsLoading",{
			isLoading:true
		})
		return data;
	},
	transformResponse(data){
		// console.log(data); //请求到的数据
		// 在收到响应时再把是否加载的状态改为已加载完成
		store.commit("updatedIsLoading",{
			isLoading:false
		})
		let o = {};
		
		if(data.list){
			o.data = data.list; // 歌手的数据字段在list中
			o.origin = "singer"
			console.log(o.data);
		}else if(data.rank){
			o.data = data.rank.list;  //排行的字段在rank.list
			o.origin = "rank"
		}else if(data.plist){
			o.data = data.plist.list.info  //歌单的字段在plist/list/info
			o.origin = "plist"
		}else if(data.banner){
			o.data = data.data;  //新歌的字段在data
			o.banner = data.banner;
			o.origin = "new-song"
		}
		return o;
	}

})

//获取banner和新歌
export const getNewSong = ()=>{
	return oneLeve('/proxy/?json=true')
}

// 获取排行数据
export const getRank = ()=>{
	return oneLeve('/proxy/rank/list?json=true')
}

// 获取歌单
export const getPlist = ()=>{
	return oneLeve('/proxy/plist/index?json=true')
}

// 获取歌手
export const getSingers = ()=>{
	return oneLeve('/proxy/singer/class?json=true')
}