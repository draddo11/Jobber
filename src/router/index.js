import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../containers/Main";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp";
import Jobs from "../views/JobList"

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    redirect: "/home",
    name: "main",
    component: Main,
    children: [
      {
        path: "/home",
        name: "name",
        component: Home
      },
      {
        path: "/join",
        name: "signup",
        component: SignUp
      },
      {
        path: "/jobs",
        name: "jobs",
        component: Jobs
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
