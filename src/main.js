import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './app/index.vue'
import router from "./router";
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
