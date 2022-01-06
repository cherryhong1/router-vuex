import { createRouter, createWebHashHistory } from "vue-router";
//  配置映射
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName:"home-chunk" */ "../views/Home.vue"),
    meta: {
      name: "home",
    },
    children: [
      {
        path: "",
        redirect: "/home/shop",
      },
      {
        path: "shop",
        name: "Shop",
        component: () => import("../views/HomeShop.vue"),
      },
      {
        path: "manage",
        name: "Manage",
        component: () => import("../views/HomeManage.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/user/:name?",
    name: "User",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/:pathMath(.*)*",
    component: () => import("../views/NoFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
