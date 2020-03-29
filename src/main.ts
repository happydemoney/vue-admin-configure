import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// components
import iComponents from '@/components'

Vue.use(element)
Vue.use(iComponents)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
