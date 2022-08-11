<template>
  <div>
    <div id="container"></div>
    <!-- <div class="info">
      <div class="selbox">
        <span>选择省份</span>
        <select name="sel-list" id="prolist" onchange="changeProvince(this)">
          <option value="-1">选择省份</option>
        </select>
      </div>
      <div class="selbox">
        <span>选择层级</span>
        <select name="sel-list" onchange="changeDepth(this)">
          <option value="0">省级行政区-0</option>
          <option selected value="1">市级行政区-1</option>
          <option value="2">区/县级行政区-2</option>
        </select>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "BMap",
  data() {
    return {
      map: null,
      center: [29.669769245822017, 91.10930092318766],
      zoom: 16,
      dist: null,

      proname: "西藏自治区",
      prokind: 1,
    };
  },
  methods: {
    init() {
      console.log("init");

      setTimeout(() => {
        this.map = new BMapGL.Map("container"); // 创建Map实例
        var map = this.map;
        var point = new BMapGL.Point(this.center[0], this.center[1]); // 创建点坐标
        map.centerAndZoom(point, this.zoom);
        map.enableScrollWheelZoom(); // 启用滚轮放大缩小
        map.setHeading(64.5);
        map.setTilt(73);
        // 添加缩放控件
        map.addControl(
          new BMapGL.ZoomControl({
            anchor: BMAP_ANCHOR_TOP_RIGHT,
            offset: new BMapGL.Size(25, 100),
          })
        ); // 右上角
        // 添加定位控件
        map.addControl(
          new BMapGL.LocationControl({
            anchor: BMAP_ANCHOR_TOP_RIGHT,
            offset: new BMapGL.Size(18, 30),
          })
        );

        // 地址解析服务--------------------------
        //创建地址解析器实例
        // var geoc = new BMapGL.Geocoder();
        // // 逆向地址解析
        // map.addEventListener("click", function (e) {
        //   var pt = e.latlng;
        //   console.log(e.latlng);
        //   geoc.getLocation(pt, function (rs) {
        //     var addComp = rs.addressComponents;
        //     console.log(rs);
        //     alert(
        //       "精度：" +
        //         rs.point.lat +
        //         "\n" +
        //         "维度：" +
        //         rs.point.lng +
        //         "\n" +
        //         addComp.province +
        //         ", " +
        //         addComp.city +
        //         ", " +
        //         addComp.district +
        //         ", " +
        //         addComp.street +
        //         ", " +
        //         addComp.streetNumber
        //     );
        //   });
        // });
      }, 200);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
#container {
  height: 600px;
  width: 100%;
}

.info {
  z-index: 999;
  width: auto;
  padding: 10px;
  margin-left: 10px;
  position: fixed;
  top: 10px;
  background-color: #fff;
  border-radius: 5px;
  font-size: 14px;
  color: #666;
  box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
}
.selbox {
  margin: 8px 0;
}
select {
  width: 180px;
  height: 30px;
  border: 1px solid #ddd;
}
</style>
