import Vue from 'vue'
import Router from 'vue-router'
import searchBar from '@/components/searchBar'

Vue.use(Router)

import search from '@/views/search/search'

import {routers} from './router'

export default new Router({
  mode:'history',
  routes: [
    ...routers,
    {
    	path:'/search',
    	name:'search',
    	components: {
	      	nav:searchBar,
	      	default:search
        }

    }
  ]
})
