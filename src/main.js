import Vue from 'vue'
import VueCesium from 'vue-cesium'
import lang from 'vue-cesium/lang/zh-hans'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueCesium, {
  cesiumPath: 'https://cdn.jsdelivr.net/npm/iclient3d-10i@1.2.0/vendor/Cesium/Cesium.js',
  lang: lang
})

new Vue({
  render: h => h(App),
}).$mount('#app')
