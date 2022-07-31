
import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pags/Home'
import About from '../pags/About'
import News from '../pags/News'
import Message from '../pags/Message'
import Detail from '../pags/Detail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "news",
                    component: News
                },
                {
                    path: "message",
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title', //使用占位符声明接收params参数
                            component: Detail,
                            props($route) {
                                return {
                                    id: $route.params.id,
                                    title: $route.params.title,
                                    a: 1,
                                    b: 'hello'
                                }
                            }

                        }
                    ]
                },
            ]
        },
        {
            path: "/about",
            component: About
        },
    ]
})
