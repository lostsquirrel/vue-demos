import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Foo from "../components/Foo.vue";
import Bar from "../components/Bar.vue";
import Counter from "../components/Counter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/foo",
    name: "Foo",
    component: Foo
  },
  {
    path: "/bar",
    name: "Bar",
    component: Bar
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
