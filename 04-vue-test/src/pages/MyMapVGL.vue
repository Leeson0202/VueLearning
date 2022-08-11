<template>
  <div class="home">
    <div id="map_container"></div>
  </div>
</template>

<script>
export default {
  name: "MyMapVGL",
  data() {
    return {
      map: null,
      center: { lat: 29.669919215223423, lng: 91.10887216627975 },
      zoom: 18,
      view: null,
      layer: null,
      data: [],
      citys: [
        "北京",
        "天津",
        "上海",
        "重庆",
        "石家庄",
        "太原",
        "呼和浩特",
        "哈尔滨",
        "长春",
        "沈阳",
        "济南",
        "南京",
        "合肥",
        "杭州",
        "南昌",
        "福州",
        "郑州",
        "武汉",
        "长沙",
        "广州",
        "南宁",
        "西安",
        "银川",
        "兰州",
        "西宁",
        "乌鲁木齐",
        "成都",
        "贵阳",
        "昆明",
        "拉萨",
        "海口",
      ],
    };
  },
  components: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.map = initMap({
        tilt: 60,
        heading: 0,
        center: [this.center.lng, this.center.lat],
        zoom: this.zoom,
        style: purpleStyle,
        // skyColors: [
        //   // 地面颜色
        //   "rgba(226, 237, 248, 0)",
        //   // 天空颜色
        //   "rgba(186, 211, 252, 1)",
        // ],
      });
      //创建地址解析器实例
      var geoc = new BMapGL.Geocoder();
      // 逆向地址解析
      this.map.addEventListener("click", function (e) {
        var pt = e.latlng;
        // console.log(e.latlng);
        geoc.getLocation(pt, function (rs) {
          var addComp = rs.addressComponents;
          console.log(rs);
          alert(
            "精度：" +
              rs.point.lat +
              "\n" +
              "维度：" +
              rs.point.lng +
              "\n" +
              addComp.province +
              ", " +
              addComp.city +
              ", " +
              addComp.district +
              ", " +
              addComp.street +
              ", " +
              addComp.streetNumber
          );
        });
      });
      // 初始化视图层 VGL
      this.initVGL();
      this.map.setDefaultCursor("default");
    },
    initVGL() {
      // this.addData();
      console.log(this.map);
      this.view = new mapvgl.View({
        map: this.map,
      });

      this.layer = new mapvgl.IconLayer({
        width: 100 / 4,
        height: 153 / 4,
        offset: [0, -153 / 8],
        opacity: 0.8,
        // icon: require("../assets/logo.png"),
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        selectedColor: "#ffffff", // 选中项颜色
        autoSelect: true, // 根据鼠标位置来自动设置选中项
        onClick: (e) => {
          // 点击事件
          console.log("click", e);
        },
        onDblClick: (e) => {
          console.log("double click", e);
        },
        onRightClick: (e) => {
          console.log("right click", e);
        },
      });
      this.view.addLayer(this.layer);

      this.addData();
      this.layer.setData(this.data);
      this.data.push({
        geometry: {
          type: "Point",
          coordinates: [this.center.lng + 0.1, this.center.lat + 0.1],
        },
        properties: {
          icon: require("../assets/imgs/layer/blue.svg"),
        },
      });
      this.layer.setData(this.data);
    },
    addData() {
      this.data.push({
        geometry: {
          type: "Point",
          coordinates: [this.center.lng, this.center.lat],
        },
        properties: {
          icon: require("../assets/imgs/layer/blue.svg"),
        },
      });
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
#map_container {
  width: 100%;
  height: 100%;
}
</style>
