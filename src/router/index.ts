import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";



const routes: Array<RouteRecordRaw> = [
  {
    path: '/mahasiswa',
    name: 'Beranda',
    meta: {
      title: 'Beranda'
    },
    component: () => import('../views/student/Dashboard.vue')
  },
  {
    path: '/mahasiswa/usulan-judul',
    name: 'Usulan Judul',
    meta: {
      title: 'Usulan Judul'
    },
    component: () => import('../views/student/SubmissionTitle.vue')
  },
  {
    path: '/mahasiswa/pembimbingan',
    name: 'Pembimbingan',
    meta: {
      title: 'Pembimbingan'
    },
    component: () => import('../views/student/Mentoring.vue')
  },
  {
    path: '/mahasiswa/jadwal-ujian',
    name: 'Jadwal Ujian',
    meta: {
      title: 'Jadwal Ujian'
    },
    component: () => import('../views/student/Schedule.vue')
  },
  {
    path: '/mahasiswa/data-keuangan',
    name: 'Data Keuangan',
    meta: {
      title: 'Data Keuangan'
    },
    component: () => import('../views/student/FinancialData.vue')
  },
  {
    path: '/administrator',
    name: 'Administrator',
    meta: {
      title: 'Administrator'
    },
    component: () => import('../views/administrator/Dashboard.vue')
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