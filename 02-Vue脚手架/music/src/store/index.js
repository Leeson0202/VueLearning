//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import PlayerAbout from './PlayerAbout'
import MusicAbout from './MusicAbout'
import UserAbout from './UserAbout'
//应用Vuex插件
Vue.use(Vuex)







export default new Vuex.Store({
    modules: {
        PlayerAbout,
        MusicAbout,
        UserAbout
    }
})