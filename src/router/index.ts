import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Beranda',
    meta: {
      title  : 'Beranda'
    },
    component: () => import('../views/administrator/Home.vue')
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  next();
})


export default router;