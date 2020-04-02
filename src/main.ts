import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Element from "element-ui";
// element custom
import "@/styles/element-variables.scss"

// components
import iComponents from "@/components";

Vue.use(Element, {
  size: 'small'
});
Vue.use(iComponents);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
