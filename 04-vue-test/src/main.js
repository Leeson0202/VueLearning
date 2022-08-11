import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)

//引入百度地图相关依赖 ----------------
import VueBMap from 'vue-bmap-gl';
import 'vue-bmap-gl/dist/style.css'
import VueMapvgl  from 'vue-mapvgl';
Vue.use(VueBMap);
Vue.use(VueMapvgl);
VueBMap.initBMapApiLoader({
  ak: 'kivZrAXbbKu3e96FzKnknUSvs4ZE9bf3',
  // 默认百度 sdk 版本为 1.0
  v: '1.0'
});
// --Vue-百度-------------------
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'kivZrAXbbKu3e96FzKnknUSvs4ZE9bf3'
})




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
