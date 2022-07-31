<template>
    <div>
        <div class="msg">
            <li v-for="msg in msgs" :key="msg.id">
                <router-link :to="{
                
                    name: 'detail',
                    params: {
                        id: msg.id,
                        title: msg.title
                    }
                }">
                    {{ msg.title }}
                </router-link> <br>
            </li>
        </div>
        <router-view style="width: 30%; float: left;"></router-view>
    </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            msgs: [
                { id: "001", title: "消息1" },
                { id: "002", title: "消息2" },
                { id: "003", title: "消息3" },
            ]
        }
    }
}
</script>

<style scoped>
.msg {
    width: 30%;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    float: left;
}

li {
    text-align: left;
}
</style>