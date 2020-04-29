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
      import(/* webpackChunkName: "interact" */ "../views/Interact/index"),
    children: [
      {
        path: "/interact",
        redirect: "/interact/protein-chain"
      },
      {
        path: "/interact/protein-chain",
        name: "protein_chain",
        component: () =>
          import(
            /* webpackChunkName: "interact" */ "../views/Interact/ResiduesItem"
          )
      },
      {
        path: "/interact/residues",
        name: "residues",
        component: () =>
          import(
            /* webpackChunkName: "interact" */ "../views/Interact/Residues"
          )
      }
    ]
  },
  {
    path: "/protein-manage",
    name: "protein-manage",
    component: () =>
      import(/* webpackChunkName: "protein" */ "../views/ProteinManage/index"),
    children: [
      {
        path: "/protein-manage",
        redirect: "/protein-manage/chain"
      },
      {
        path: "/protein-manage/chain",
        name: "chain",
        component: () =>
          import(
            /* webpackChunkName: "protein" */ "../views/ProteinManage/ProteinItem"
          )
      },
      {
        path: "/protein-manage/add",
        name: "props",
        component: () =>
          import(
            /* webpackChunkName: "protein" */ "../views/ProteinManage/ProteinAdd"
          )
      }
    ]
  },
  {
    path: "/user-manage",
    name: "user-manage",
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/UserManage/index"),
    children: [
      {
        path: "/user-manage",
        redirect: "/user-manage/change-pwd"
      },
      {
        path: "/user-manage/change-pwd",
        name: "change-pwd",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/UserManage/ChangePwd")
      },
      {
        path: "/user-manage/manage-user",
        name: "manage-user",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../views/UserManage/ManageUser"
          )
      }
    ]
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
