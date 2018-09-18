import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
	state:{
		isLoading:true
	},
	mutations:{
		updatedIsLoading(state,payload){
			state.isLoading = payload.isLoading
		}

	}
})

export default store;