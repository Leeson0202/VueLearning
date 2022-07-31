<template>
    <div class="text">
        <span>消息编号:{{ id }}</span><br>
        <span>消息标题:{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: "Detail",
    props: ['id', 'title'],
    // mounted() {
    //     console.log(this.$route);
    // },


}
</script>

<style scoped>
.text {
    position: relative;
    left: 10px;
    text-align: left;
}
</style>