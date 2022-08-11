<template>
  <div>
    <input type="text" v-model="keyword" />
    <baidu-map
      class="bm-view"
      :center="{ lng: 91.10930092318766, lat: 29.6697692458220175 }"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      :continuous-zoom="true"
      :pinch-to-zoom="true"
      @click="mclick"
    >
      <!-- 比例控件 -->
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <!-- 缩放控件 -->
      <bm-navigation
        anchor="BMAP_ANCHOR_TOP_RIGHT"
        type="BMAP_NAVIGATION_CONTROL_ZOOM"
      >
      </bm-navigation>
      <!-- 地图类型 -->
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
        type="BMAP_NAVIGATION_CONTROL_ZOOM"
      ></bm-map-type>

      <!-- 缩略图 -->
      <bm-overview-map
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :isOpen="true"
      ></bm-overview-map>
      <!-- 定位控件 -->
      <bm-geolocation
        anchor="BMAP_ANCHOR_TOP_RIGHT"
        :offset="{}"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>
      <!-- 城市列表控件 -->
      <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list> -->
      <!-- 行政区划分 -->
      <bm-boundary
        :name="keyword"
        :strokeWeight="2"
        strokeColor="blue"
      ></bm-boundary>
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: "VBaidu",
  //   props: [""],
  data() {
    return {
      zoom: 15,
      keyword: "",
      keyword1: "",
    };
  },
  methods: {
    mclick(a) {
      console.log(a);
    },
  },
};
</script>

<style >
.bm-view {
  width: 100%;
  height: 600px;
}
.BMap_cpyCtrl,
.anchorBL {
  display: none;
}
</style>
