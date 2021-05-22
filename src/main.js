import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store';
import  router from './router';
import {firebaseApp} from './firebaseApp';
import './assets/global.css';




Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  firebaseApp,
  render: h => h(App)
}).$mount('#app')
