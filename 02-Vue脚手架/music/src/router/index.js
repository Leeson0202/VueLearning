import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/Index'
import Login from '../components/Login'
import Register from '../components/Register'
import Search from '../pages/Search'
import Hot from '../pages/Hot'
import Song from '../pages/Song'

Vue.use(Router)

export default new Router({
    routes: [
        {

            path: "/login",
            component: Login
        },
        {
            path: "/",
            component: Index,
            children: [
                {
                    name: 'search',
                    path: 'search',
                    component: Search
                },
                {
                    name: 'hot',
                    path: '/',
                    component: Hot
                },
                {
                    name: 'song',
                    path: 'song',
                    component: Song,
                    props($route) {
                        return {
                            id: $route.query.id
                        }
                    }
                },
            ]
        },
        {
            name: "login",
            path: "/login",
            component: Login
        },
        {
            name: "register",
            path: "/register",
            component: Register

        },
    ]
})
