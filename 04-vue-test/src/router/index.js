
import Vue from 'vue'
import Router from 'vue-router'

import BMap from '../pages/BMap'
import VueMap from '../pages/VueMap'
import VBaidu from '../pages/VBaidu'
import MapVGL from '../pages/MyMapVGL'

Vue.use(Router)

export default new Router({
    routes: [
        {
            name:"bmap",
            path: "/",
            component: BMap
        },
        {
            name:"vuemap",
            path: "/vueBMap",
            component: VueMap
        },
        {
            name:"vbaidu",
            path: "/vbaidu",
            component: VBaidu
        },
        {
            name:"mapvgl",
            path: "/mapvgl",
            component: MapVGL
        },
    ]
})
