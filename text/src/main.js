
//引入vue
import Vue from 'vue'
//引入组件
import App from './App.vue'
//插件
import Plugins from './plugins'
//关闭vue生产提示
Vue.config.productionTip = false 
Vue.use(Plugins)
new Vue({
  el:"#app",
  render: h => h(App),
})
