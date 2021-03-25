import Vue from "vue";
import VueRouter from "vue-router";
import {firebaseApp} from '../firebaseApp';

// import Main from "../containers/Main";
import App from "../App.vue";
import SignIn from "../views/SignIn";
import Register from "../views/Register";
import Home from "../containers/Home.vue";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    // redirect: "/home",
    name: "App",
    component: App,
    children: [
      {
        path: "/signin",
        name: "signin",
        component: SignIn
      },
      {
        path: "/register",
        name: "register",
        component: Register
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
     router.push('/home')
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
