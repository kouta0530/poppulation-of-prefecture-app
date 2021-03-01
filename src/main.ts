import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_RESAS_BASE_URL;
axios.defaults.headers.common["X-API-KEY"] = process.env.VUE_APP_RESAS_API_KEY;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
