<template>
  <div id="app">
    <!-- <button @click="changeMap">改变</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    changeMap() {
      if (this.$router.currentRoute.fullPath == "/") {
        this.$router.push({
          name: "vuemap",
        });
      } else {
        this.$router.push({
          name: "bmap",
        });
      }
    },
  },
};
</script>

<style>
html {
  height: 100%;
  width: 100%;
}
body {
  height: calc(100% - 16px);
  width: calc(100% - 16px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /* margin-top: 60px; */
}
</style>
