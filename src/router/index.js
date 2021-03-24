import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { auth } from "../firebaseConfig";
import store from "../store/index";
// import firebase from "firebase"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
    component: Home,
  },

  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/stafflogin",
    name: "StaffLogin",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/StaffLogin.vue"),
  },

  {
    path: "/staff",
    redirect: "/staff/dashboard",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // beforeEnter() {
    //   location.href =
    //     "https://staffdashboard.vercel.app/#/dashboard/basic-dashboard";

    component: () =>
      import(/* webpackChunkName: "about" */ "../layouts/Layout"),
    children: [
      // Components
      {
        name: "Staff",
        path: "dashboard",
        component: () => import("@/views/Staff"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  // console.log(auth.currentUser);
  new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        store.commit("setCurrentUser", user.providerData[0]);
      }
      resolve(user);
    });
  }).then((user) => {
    if (requiresAuth && user == null) {
      next("/login");
    } else {
      next();
    }
  });
});

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
//    const currentUser = firebase.auth().currentUser;

//     if (requiresAuth && !currentUser) {
//       next("/da");
//     } else if (requiresAuth && currentUser) {
//       next();
//    } else {
//      next();
//     }
//   });

export default router;
