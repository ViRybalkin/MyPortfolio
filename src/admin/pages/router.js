import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import header from "../components/header/header";
import about from "../pages/about/about";
import login from "../pages/login/login";

const routes = [
  { path: "/",
    components:{
      default:about,
      header:header
    }
      },
  { path: "/login", component: login },
];

export default new VueRouter({routes});
