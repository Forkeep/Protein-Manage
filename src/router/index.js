import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/404";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/user/login"
  },
  {
    path: "/test",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BaseLayout")
  },
  {
    path: "/user",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/UserLayout"),
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Login.vue")
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Register.vue")
      }
    ]
  },
  {
    path: "/interact",
    name: "interact",
    component: () =>
      import(/* webpackChunkName: "interact" */ "../views/Interact/index")
  },
  {
    path: "/protein-manage",
    name: "protein-manage",
    component: () =>
      import(/* webpackChunkName: "protein" */ "../views/ProteinManage/index")
  },
  {
    path: "/user-manage",
    name: "user-manage",
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/UserManage/index")
  },
  {
    path: "/system-introduce",
    name: "SystemIntroduce",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../views/SystemInro")
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
