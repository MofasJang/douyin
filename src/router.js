import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index/Index.vue'
import VideoList from './components/index/VideoList.vue'
import Follow from './views/follow/Follow.vue'
Vue.use(Router)
import Home from './views/Home.vue'
const router = new Router({
    routes:[
        {
            path:'/',
            redirect:'index'
        },
        {
            path:'/',
            name:'home',
            component:Home,
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index,
                    children:[
                        {
                            path:'/index',
                            name:'index',
                            component:VideoList,
                        }
                    ]
                },
                {
                    path:'/follow',
                    name:'follow',
                    component:Follow
                }
            ]
        }
    ]
})
export default router