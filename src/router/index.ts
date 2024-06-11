import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";



const routes: Array<RouteRecordRaw> = [
  {
    path: '/administrator',
    name: 'Beranda',
    meta: {
      title: 'Beranda'
    },
    component: () => import('../views/Administrator/Dashboard.vue')
  },
  {
    path: '/administrator/pendaftaran',
    name: 'Pendaftaran',
    meta: {
      title: 'Pendaftaran'
    },
    component: () => import('../views/Administrator/Registration.vue')
  },
  {
    path: '/administrator/verifikasi-persyaratan',
    name: 'Verifikasi Persyaratan',
    meta: {
      title: 'Verifikasi Persyaratan'
    },
    component: () => import('../views/Administrator/RegistrationRequirement.vue')
  },
  {
    path: '/administrator/jadwal',
    name: 'Plotting Jadwal Ujian',
    meta: {
      title: 'Plotting Jadwal Ujian'
    },
    component: () => import('../views/Administrator/Schedule.vue')
  },
  {
    path: '/administrator/pengaturan/batas-pendaftaran',
    name: 'Pengaturan Batas Pendaftaran',
    meta: {
      title: 'Pengaturan Batas Pendaftaran'
    },
    component: () => import('../views/Administrator/Settings/RegistrationTime.vue')
  },
  {
    path: '/administrator/pengaturan/jenis-ujian',
    name: 'Pengaturan Jenis Ujian',
    meta: {
      title: 'Pengaturan Jenis Ujian'
    },
    component: () => import('../views/Administrator/Settings/TypeTask.vue')
  },
  {
    path: '/administrator/pengaturan/nilai',
    name: 'Pengaturan Persentase Nilai',
    meta: {
      title: 'Pengaturan Persentase Nilai'
    },
    component: () => import('../views/Administrator/Settings/TypeTask.vue')
  },


];


const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
});

router.beforeEach(async (to, from, next) => {
  next();
})


export default router;