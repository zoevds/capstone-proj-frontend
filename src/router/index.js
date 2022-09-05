import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "landing",
    component: () => import("../views/landing.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/about.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/products.vue"),
  },
  {
    path: "/products/:id",
    name: "singleproduct",
    component: () => import("../views/singleproduct.vue"),
    props: true,
  },
  {
    path: "/flavours/:id",
    name: "singleflavour",
    component: () => import("../views/singleflavour.vue"),
    props: true,
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/contact.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue"),
  },
  {
    path: "/alladmintables",
    name: "alladmintables",
    component: () => import("../views/allAdminTables.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/cart.vue"),
  },
  {
    path: "/userprofile",
    name: "userprofile",
    component: () => import("../views/userprofile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
