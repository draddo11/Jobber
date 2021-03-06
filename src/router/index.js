import Vue from "vue";
import VueRouter from "vue-router";
 import {firebaseApp} from '../firebaseApp';

import Postjob from '../views/Postjob.vue'
import App from "../App.vue";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Home from "../containers/Home.vue";
import store from "../store";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    // redirect: "/"
    name: "App",
    component: App,
    children: [
      {
        path: "/signin",
        name: "signin",
        component: SignIn
      },
      {
        path: "/signup",
        name: "signup",
        component: SignUp
      },
      {
        path: "/home",
        name: "home",
        component: Home
      },
      {
        path: "/post",
        name: "post",
        component: Postjob
      },
    ]
  }
];

 firebaseApp.auth().onAuthStateChanged(user => {
   if (user) {
     store.dispatch('signin',user)
     router.push('/signup')
   }else{
     router.replace('/home')
   }
 })
 
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
