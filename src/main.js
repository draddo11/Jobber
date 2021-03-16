import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueStore from './store';
import  router from './router';
import {firebaseApp} from './firebaseApp';

Vue.config.productionTip = false

new Vue({
  vuetify,
  VueStore,
  router,
  firebaseApp,
  render: h => h(App)
}).$mount('#app')
