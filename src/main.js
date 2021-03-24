import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueStore from './store';
import Store from './store/index';
import  router from './router';
import {firebaseApp} from './firebaseApp';

Vue.config.productionTip = false

new Vue({
  vuetify,
  VueStore,
  router,
  Store,
  firebaseApp,
  render: h => h(App)
}).$mount('#app')
