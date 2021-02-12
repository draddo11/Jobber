import Vue from "vue";
import VueRouter from "vue-router";

// import Main from "../containers/Main";
import App from "../App.vue";
import SignIn from "../views/SignIn";
import Register from "../views/Register"

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    redirect: "/",
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
      
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
