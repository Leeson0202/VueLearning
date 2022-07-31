<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
      <!--aside-->
      <MyAside />

      <!--header and main -->
      <MyHeader>
        <router-view></router-view>
      </MyHeader>

    </el-container>
  </div>
</template>

<script>
import Home from './pags/Home.vue'
import About from './pags/About.vue'
import MyHeader from './components/MyHeader.vue';
import MyAside from './components/MyAside.vue'

export default {
  name: 'App',
  components: {
    Home,
    About,
    MyHeader,
    MyAside,
    MyAside
  },
  data() {
  },

}
</script>

<style>
body {
  width: 100%;
  height: 100%;

}

html {
  width: calc(100% - 16px);
  height: calc(100% - 16px);

}

#app {
  color: #2c3e50;
  margin-top: 0px;
  width: 100%;
  position: relative;
  height: 100%;
}
</style>
