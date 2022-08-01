<template>
    <div id="index">
        <MyHeader />
        <div id="main-body">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <MyFooter />
    </div>
</template>

<script>

import MyHeader from './MyHeader.vue'
import MyFooter from './MyFooter.vue'

export default {
    name: 'Index',
    components: {
        MyFooter,
        MyHeader,
    },
}
</script>

<style dcoped>
#index {
    height: 100%;
}

#main-body {
    display: block;
    height: 100%;
    width: 84%;
    min-width: 375px;
    padding-top: 52px;
    background-color: #777;
    margin: auto;
    text-align: center;
    overflow: auto;
}

@media screen and (max-width:900px) {
    #main-body {
        width: 100%;
        transition: 0.4s linear;
    }
}
</style>