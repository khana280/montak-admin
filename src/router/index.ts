import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";



const routes: Array<RouteRecordRaw> = [
  {
    path: '/administrator',
    name: 'Beranda',
    meta: {
      title: 'Beranda'
    },
    component: () => import('../views/administrator/Dashboard.vue')
  },
  {
    path: '/administrator/pendaftaran',
    name: 'Pendaftaran',
    meta: {
      title: 'Pendaftaran'
    },
    component: () => import('../views/administrator/Registration.vue')
  },
  {
    path: '/administrator/verifikasi-persyaratan',
    name: 'Verifikasi Persyaratan',
    meta: {
      title: 'Verifikasi Persyaratan'
    },
    component: () => import('../views/administrator/RegistrationRequirement.vue')
  },
  {
    path: '/administrator/jadwal',
    name: 'Plotting Jadwal Ujian',
    meta: {
      title: 'Plotting Jadwal Ujian'
    },
    component: () => import('../views/administrator/Schedule.vue')
  },
  {
    path: '/administrator/pengaturan/batas-pendaftaran',
    name: 'Pengaturan Batas Pendaftaran',
    meta: {
      title: 'Pengaturan Batas Pendaftaran'
    },
    component: () => import('../views/administrator/Settings/RegistrationTime.vue')
  },
  {
    path: '/administrator/pengaturan/jenis-ujian',
    name: 'Pengaturan Jenis Ujian',
    meta: {
      title: 'Pengaturan Jenis Ujian'
    },
    component: () => import('../views/administrator/Settings/TypeTask.vue')
  },
  {
    path: '/administrator/pengaturan/nilai',
    name: 'Pengaturan Persentase Nilai',
    meta: {
      title: 'Pengaturan Persentase Nilai'
    },
    component: () => import('../views/administrator/Settings/PercentageValue.vue')
  },
  {
    path: '/administrator/pengaturan/biaya',
    name: 'Pengaturan Biaya',
    meta: {
      title: 'Pengaturan Biaya'
    },
    component: () => import('../views/administrator/Settings/Cost.vue')
  },
  {
    path: '/administrator/pengaturan/syarat-kelulusan',
    name: 'Pengaturan Syarat Kelulusan',
    meta: {
      title: 'Pengaturan Syarat Kelulusan'
    },
    component: () => import('../views/administrator/Settings/GradulationRequirement.vue')
  },
  {
    path: '/mahasiswa',
    name: 'Dashboard Mahasiswa',
    meta: {
      title: 'Dashboard'
    },
    component: () => import('../views/student/Dashboard.vue')
  },
  {
    path: '/mahasiswa/usulan-judul',
    name: 'Usulan Judul',
    meta: {
      title: 'Usulan Judul'
    },
    component: () => import('../views/student/Submission.vue')
  }


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