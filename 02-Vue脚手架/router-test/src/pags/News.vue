<template>
    <div>
        <li v-for="n in news" :key="n">
            {{ n }}<br>
        </li>
    </div>
</template>

<script>
export default {
    name: "News",
    data() {
        return {
            news: [
                "需求分析",
                "数据字典",
                "数据库设计",
                "功能设计"
            ]
        }
    }
}
</script>

<style scoped>
li {
    text-align: left;
}
</style>