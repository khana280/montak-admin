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
    path: '/mahasiswa/usulan-judul/kerja-praktek',
    name: 'Usulan Judul Kerja Praktek',
    meta: {
      title: 'Usulan Judul Kerja Praktek'
    },
    component: () => import('../views/administrator/PPWT.vue')
  },
  {
    path: '/mahasiswa/usulan-judul/tugas-akhir',
    name: 'Usulan Judul Tugas Akhir',
    meta: {
      title: 'Usulan Judul Tugas Akhir'
    },
    component: () => import('../views/administrator/PPFT.vue')
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