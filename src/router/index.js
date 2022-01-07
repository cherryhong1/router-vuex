import { createRouter, createWebHashHistory } from "vue-router";
//  配置映射
const routes = [
  {
    path: "/",
    redirect: "/storeDemo/state",
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
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      // ...
      console.log("beforeEnter");
      console.log(to, from);
      next();
    },
  },
  {
    path: "/storeDemo",
    name: "StoreDemo",
    component: () => import("../views/StoreDemo/index.vue"),
    children: [
      {
        path: "state",
        name: "State",
        component: () => import("../views/StoreDemo/State.vue"),
      },
      {
        path: "getter",
        name: "Getter",
        component: () => import("../views/StoreDemo/Getter.vue")
      },
    ],
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
const message = {
  path: "/home/message",
  name: "Message",
  component: () => import("../views/HomeMessage.vue"),
};
// 二级路由
const removeRoute = router.addRoute("Home", message);
// 删除路由1
removeRoute();
const helloWorld = {
  path: "/helloWorld",
  name: "HelloWorld",
  component: () => import("../components/HelloWorld.vue"),
};
// console.log(router.hasRoute("Home"))
// console.log(router.getRoutes())
router.addRoute(helloWorld);
// 删除路由2
// router.removeRoute("HelloWorld")
// 替换路由
router.addRoute({
  path: "/helloWorldO",
  name: "HelloWorld",
  component: () => import("../components/Nav.vue"),
});
router.beforeEach((to, from) => {
  console.log("beforeEach");
  console.log(to, from);
  if (to.path !== "/login") {
    const token = window.localStorage.getItem("token");
    if (!token) {
      return "/login";
    }
  }
});
router.beforeResolve((to, from) => {
  console.log("beforeResolve");
  console.log(to, from);
});
router.afterEach((to, from) => {
  console.log("afterEach");
  console.log(to, from);
});
export default router;
