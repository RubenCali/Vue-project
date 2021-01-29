import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);


const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/details/:id",
    name: "DestinationDetails",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails.vue")
  },
  {
    path: "/random/1",
    name: "random_1",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/1.vue")
  },
  {
    path: "/random/2",
    name: "random_2",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/2.vue")
  },
  {
    path: "/random/3",
    name: "random_3",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/3.vue")
  },
  {
    path: "/random/3",
    name: "random_3",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/3.vue")
  },
  {
    path: "/random/4",
    name: "random_4",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/4.vue")
  },
  {
    path: "/random/5",
    name: "random_5",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/5.vue")
  },
  {
    path: "/random/6",
    name: "random_6",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/6.vue")
  },
  {
    path: "/random/7",
    name: "random_7",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/7.vue")
  },
  {
    path: "/random/8",
    name: "random_8",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/8.vue")
  },
  {
    path: "/random/9",
    name: "random_9",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/9.vue")
  },
  {
    path: "/random/10",
    name: "random_10",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/10.vue")
  },
  {
    path: "/random/11",
    name: "random_11",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/11.vue")
  },
  {
    path: "/random/12",
    name: "random_12",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/12.vue")
  },
  {
    path: "/random/13",
    name: "random_13",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/13.vue")
  },
  {
    path: "/random/14",
    name: "random_14",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/14.vue")
  },
  {
    path: "/random/15",
    name: "random_15",
    props: true,
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */ "../views/random/15.vue")
  },


  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //    import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }component: () =>
  //    
];

const router = new VueRouter({
  routes
});


export default router;

