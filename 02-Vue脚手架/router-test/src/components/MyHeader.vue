<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <el-button-group>
                <div>
                    <el-button @click="back" size="mini" icon="el-icon-arrow-left"></el-button>
                    <el-button @click="forward" size="mini"><i class="el-icon-arrow-right el-icon--right"></i>
                    </el-button>
                </div>
            </el-button-group>
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
        </el-header>
        <slot></slot>
    </el-container>
</template>

<script>
export default {
    name: "MyHeader",
    methods: {
        back() {
            this.$router.back() //后退
        },
        forward() {
            this.$router.forward() //前进
        }
    }

}
</script>

<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    width: 100%;
}


.el-button-group {
    height: 100%;
    position: relative;
    float: left;
    vertical-align: middle;
}
</style>