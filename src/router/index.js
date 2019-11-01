import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect:"/map",
    children: [
      {
        path: "/map",
        name: "Map",
        component: () => import("@/views/map.vue")
      },
      {
        path: "/economic",
        name: "Economic",
        component: () => import("@/views/economic.vue")
      },
      {
        path: "/market",
        name: "Market",
        component: () => import("@/views/market.vue")
      },
      {
        path: "/enterprise",
        name: "Enterprise",
        component: () => import("@/views/enterprise.vue")
      },
      {
        path: "/product",
        name: "Product",
        component: () => import("@/views/product.vue")
      },
      {
        path: "/area",
        name: "Area",
        component: () => import("@/views/area.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
