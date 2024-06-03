import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Beranda',
    meta: {
      title: 'Beranda'
    },
    component: () => import('../views/administrator/Dashboard.vue')
  },
  {
    path: '/mahasiswa/usulan-judul',
    name: 'Usulan Judul',
    meta: {
      title: 'Usulan Judul'
    },
    component: () => import('../views/administrator/SubmissionTitle.vue')
  },
  {
    path: '/mahasiswa/pembimbingan',
    name: 'Pembimbingan',
    meta: {
      title: 'Pembimbingan'
    },
    component: () => import('../views/administrator/Mentoring.vue')
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