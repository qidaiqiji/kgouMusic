import navBar from '@/components/navBar'

import newSong from '@/views/new-song/new-song'
import rank from '@/views/rank/rank'
import plist from '@/views/plist/plist'
import singer from '@/views/singer/singer'

export let routers = [
    {
      path: '/',
      name: 'newSong',
      title:"新歌",
      components: {
      	nav:navBar,
      	default:newSong
      }
    },
    {
    	path:'/rank',
    	name:'rank',
      title:"排行",
    	components: {
	      	nav:navBar,
	      	default:rank
        }
    },
    {
    	path:'/plist',
    	name:'plist',
      title:"歌单",
    	components: {
	      	nav:navBar,
	      	default:plist
        }
    },
    {
    	path:'/singer',
    	name:'singer',
      title:"歌手",
    	components: {
	      	nav:navBar,
	      	default:singer
        }
    }
  ]

