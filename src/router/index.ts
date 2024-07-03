import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import useToken from "../composables/token";
import { useSession } from "../stores/session";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "After Login",
    meta: {
      title: "After Login",
    },
    component: () => import("../views/authentication/AfterLogin.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "Login",
    },
    component: () => import("../views/authentication/index.vue"),
  },
  {
    path: "/administrator",
    name: "Beranda",
    meta: {
      title: "Beranda",
    },
    component: () => import("../views/administrator/Dashboard.vue"),
  },
  {
    path: "/administrator/pendaftaran",
    name: "Pendaftaran",
    meta: {
      title: "Pendaftaran",
    },
    component: () => import("../views/administrator/Registration.vue"),
  },
  {
    path: "/administrator/verifikasi-persyaratan",
    name: "Verifikasi Persyaratan",
    meta: {
      title: "Verifikasi Persyaratan",
    },
    component: () =>
      import("../views/administrator/RegistrationRequirement.vue"),
  },
  {
    path: "/administrator/jadwal",
    name: "Plotting Jadwal Ujian",
    meta: {
      title: "Plotting Jadwal Ujian",
    },
    component: () => import("../views/administrator/Schedule.vue"),
  },
  {
    path: "/administrator/pengaturan/batas-pendaftaran",
    name: "Pengaturan Batas Pendaftaran",
    meta: {
      title: "Pengaturan Batas Pendaftaran",
    },
    component: () =>
      import("../views/administrator/Settings/RegistrationTime.vue"),
  },
  {
    path: "/administrator/pengaturan/jenis-ujian",
    name: "Pengaturan Jenis Ujian",
    meta: {
      title: "Pengaturan Jenis Ujian",
    },
    component: () => import("../views/administrator/Settings/TypeTask.vue"),
  },
  {
    path: "/administrator/pengaturan/nilai",
    name: "Pengaturan Persentase Nilai",
    meta: {
      title: "Pengaturan Persentase Nilai",
    },
    component: () =>
      import("../views/administrator/Settings/PercentageValue.vue"),
  },
  {
    path: "/administrator/pengaturan/biaya",
    name: "Pengaturan Biaya",
    meta: {
      title: "Pengaturan Biaya",
    },
    component: () => import("../views/administrator/Settings/Cost.vue"),
  },
  {
    path: "/administrator/pengaturan/syarat-kelulusan",
    name: "Pengaturan Syarat Kelulusan",
    meta: {
      title: "Pengaturan Syarat Kelulusan",
    },
    component: () =>
      import("../views/administrator/Settings/GradulationRequirement.vue"),
  },
  {
    path: "/mahasiswa",
    name: "Dashboard Mahasiswa",
    meta: {
      title: "Dashboard",
    },
    beforeEnter: (to, _from, next) => {
      if(to.meta.admintendik) {
        next('/administrator');
      }
      if(to.meta.admin) {
        next('/administrator');
      }
      next()
    },
    component: () => import("../views/student/Dashboard.vue"),
  },
  {
    path: "/mahasiswa/usulan-judul",
    name: "Usulan Judul",
    meta: {
      title: "Usulan Judul",
    },
    component: () => import("../views/student/Submission.vue"),
  },
  {
    path: "/mahasiswa/bimbingan",
    name: "Bimbingan",
    meta: {
      title: "Bimbingan",
    },
    component: () => import("../views/student/Mentoring.vue"),
  },
  {
    path: "/mahasiswa/jadwal",
    name: "Jadwal Ujian",
    meta: {
      title: "Jadwal Ujian",
    },
    component: () => import("../views/student/Schedule.vue"),
  },
  {
    path: "/mahasiswa/data-keuangan",
    name: "Data Keuangan",
    meta: {
      title: "Data Keuangan",
    },
    component: () => import("../views/student/FinancialData.vue"),
  },
  {
    // error 404
    path: "/:pathMatch(.*)*",
    name: "Error",
    meta: {
      title: "Error",
    },
    component: () => import("../views/Error.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

router.beforeEach(async (to, _from, next) => {
  const { decodeToken, getToken } = useToken();
  const session = useSession();

  if (to.path === "/login" && getToken() === null) {
    next();
  } 

  if(to.path === '/login' && getToken() !== null) {
    next('/administrator');
  }

  if (to.path !== "/login" && getToken() !== null) {
    if (session.getUser().id === "") {
      const data = await decodeToken();
      session.setUser(data);
    }
    next();
  }

  if (to.path !== "/login" && getToken() === null) {
    next("/login");
  }
});

export default router;
