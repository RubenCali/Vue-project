import Vue from "vue";
import App from "./App.vue";
import router from "./router";
require('@/assets/css/style.css')
require('@/assets/css/bootstrap.min.css')
require('@/assets/css/bookDetails.css')



Vue.config.productionTip = false;

new Vue({

 

  router,
  render: h => h(App)
}).$mount("#app");


