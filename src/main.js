// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
Vue.config.productionTip = false
// import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';
Vue.prototype.$preImg = 'http://localhost:3000'
Vue.use(ElementUI);
import './assets/css/reset.css'

import './assets/css/component.css';
import './assets/css/demo.css';
import './assets/css/login.css';
// Vue.prototype.event = new Vue();
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
