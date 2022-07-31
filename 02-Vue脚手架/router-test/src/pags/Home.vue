<template>
    <div>
        <h1>Home 组件内容</h1>
        <router-link :to="{ path: '/home/news' }">news</router-link>
        <router-link :to="{ path: '/home/message' }">Message</router-link>
        <br>
        <hr>
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>
* {
    justify-content: space-between;
    vertical-align: middle;
    text-align: center;

}

a {
    margin-right: 10px;
}
</style>