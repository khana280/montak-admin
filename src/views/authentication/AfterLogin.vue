<template>
  <div class="d-flex justify-content-center align-items-center h-100 w-100 flex-column gap-3" style="background-image: url('https://rafikapamekasan.com/assets/images/cover.svg');">
    <div class="w-30 d-flex flex-column gap-3">
      <img src="https://simat.unira.ac.id/img/unira.png" alt="Logo UNIRA" width="60" class="mt-3">
      <h2 class="fw-bold text-dark mt-4 mb-0">Monitoring Tugas Akhir & Kerja Praktek</h2>
      <p class="text-muted fs-14 mb-0">
        Silahkan pilih role dan kategori untuk masuk ke sistem.
      </p>
      <div>
        <label for="" class="form-label fw-bold">Role: </label>
        <select name="role" id="role" class="form-select" v-model="activeRole" @change="">
          <option value="" disabled>Pilih Role</option>
          <option v-for="(item, i) in roles" :key="i" :value="item.value">{{ item.label }}</option>
        </select>
      </div>
      <div>
        <label for="kategori" class="form-label fw-bold">Kategori: </label>
        <select name="role" id="role" class="form-select" @change="getSelect" v-model="activeCategory">
          <option value="" disabled>Pilih Kategori</option>
          <option value="kp">Kerja Praktek</option>
          <option value="ta">Tugas Akhir</option>
        </select>
      </div>
      <div class="d-grid mt-3">
        <button type="button" class="btn btn-blue text-white icon-shadow" @click="goToDashboard" :disabled="!meta.valid">
          <i class="bx bx-log-in"></i>
          Masuk
        </button>
      </div>
      <div class="d-flex justify-content-between">
        <a href="https://simat.unira.ac.id/login">
          Sistem Informasi Manajemen Terpadu
        </a>
        <a href="https://silab.unira.ac.id/login" class="text-end">
          Sistem Informasi Laboratorium Komputer
        </a>
      </div>
      <div>
        <p class="text-center">© 2024 Universitas Madura</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue';
  import { useSession } from '../../stores/session';
  import { roles, setTheRole} from '../../helpers/roles';
  import useCategory from '../../composables/category';
  import router from '../../router';
  import * as yup from 'yup';
  import { useField, useForm } from 'vee-validate';

  const schema = yup.object({
    activeRole: yup.string().required(),
    activeCategory: yup.string().required()
  });

  const { meta } = useForm({
    validationSchema: schema,
    initialValues: {
      activeRole: '',
      activeCategory: ''
    }
  });

  const { value: activeRole } = useField<string>('activeRole');
  const { value: activeCategory } = useField<string>('activeCategory');

  
  const session = useSession();
  const { setCategory } = useCategory();

  onMounted(() => {
    if (session.getUser().roles.length > 0) {
      session.getUser().roles.forEach((role: string) => {
        setTheRole(role);
      });
    }
  });

  onUnmounted(() => {
    document.title = 'MONTAK'
    document.body.style.backgroundColor = '#f3f3f9'
  });

  const getSelect = () => {
    setCategory(activeCategory.value);
  }

  const goToDashboard = () => {
    session.setRoleActive(activeRole.value);
    router.push(session.roleActive);
  }


</script>

<style scoped>
  .gap-3 {
    gap: 1rem;
  }

  @media screen and (min-width: 768px) {
    .w-30 {
      width: 30%;
    }
  }

  @media screen and (max-width: 768px) {
    .w-30 {
      width: 90%;
    }
  }

  .btn-blue {
    background-color: rgb(28 100 242 / 1) !important;
  }

  .h-100 {
    height: 100vh !important;
  }


  .w-100 {
    width: 100vw !important;
  }

  .icon-shadow {
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
  }

</style>
