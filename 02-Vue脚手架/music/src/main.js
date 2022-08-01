import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import plugin from './plugins/plugin'

Vue.config.productionTip = false
Vue.use(plugin)  // 使用插件
// Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
  },
}).$mount('#app')
