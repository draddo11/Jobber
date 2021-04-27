import Vue from "vue";
import VueRouter from "vue-router";
 import {firebaseApp} from '../firebaseApp';

// import Main from "../containers/Main";
import App from "../App.vue";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Home from "../containers/Home.vue";
import store from "../store";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    redirect: "/home",
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
    ]
  }
];

 firebaseApp.auth().onAuthStateChanged(user => {
   if (user) {
     store.dispatch('signIn',user)
     router.push('/')
   }else{
    //  router.replace('/signin')
   }
 })
 
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
