import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/Index'
import Login from '../components/Login'
import Register from '../components/Register'
import Search from '../pages/Search'
import Hot from '../pages/Hot'

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

                }
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
