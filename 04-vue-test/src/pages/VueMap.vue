<template>
  <div class="bmap-page-container">
    <el-bmap vid="bmapDemo" :zoom="zoom" :center="center" class="bmap-demo">
      <el-bmap-info-window
        :visible="current.visible"
        :position="current.position"
        :content="current.content"
      ></el-bmap-info-window>
      <el-bmapv-view>
        <el-bmapv-icon-layer
          :icon="icon"
          :width="width"
          :height="height"
          :data="data"
          :enable-picked="true"
          :on-click="
            (e) => {
              clickFunction(e);
            }
          "
        ></el-bmapv-icon-layer>
      </el-bmapv-view>
    </el-bmap>
  </div>
</template>

<script>
import VueBMap from "vue-bmap-gl";
import { BMapGL } from "vue-bmap-gl";
export default {
  name: "BMapGL",
  data: function () {
    return {
      count: 1,
      zoom: 18,
      center: [91.108614, 29.669575],
      width: 24,
      height: 40,
      icon: require("@/assets/logo.png"),
      current: {
        position: [91.108614, 29.669575],
        visible: true,
        content: "hello world",
      },
      data: [
        {
          geometry: {
            // type: "Point",
            coordinates: [91.108614, 29.669575],
          },
          properties: {
            // icon: "http://p1.music.126.net/84M0RS93OxgnPGA0Hel0KA==/109951167749560426.jpg?param=120y120",
          },
        },
      ],
    };
  },
  mounted() {},
  methods: {
    clickMarker(e) {
      console.log(e);
    },
    clickFunction(e) {
      // 逆向地址解析
      var pt = e.latlng;
      console.log(e.latlng);
      
    },
  },
};
</script>

<style scoped>
.bmap-demo {
  height: 600px;
}
</style>
