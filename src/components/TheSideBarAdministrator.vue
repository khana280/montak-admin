<template>
  <div class="vertical-menu">
    <div data-simplebar class="h-100">
      <div id="sidebar-menu">
        <div class="text-center p-3 mt-2" id="sidebar-thumbnail">
          <h5 id="sidebar-name">MUHAMMAD UMAR MANSYUR</h5>
          <img src="https://api.unira.ac.id/img/profil/mhs/d9674b9d198eecaa13f3f057d5390a12.jpg" alt="logo"
            class="border border-5 rounded-circle" width="90" />
          <hr class="text-white">
        </div>
        <ul class="metismenu list-unstyled " id="side-menu">
          <li>
            <RouterLink to="/" :class="$route.path == '/' ? 'mm-active' : ''">
              <i data-feather="home"></i>
              <span data-key="t-dashboard">Beranda</span>
            </RouterLink>
          </li>
          <li :class="$route.path.includes('usulan-judul') ? 'mm-active' : ''">
            <RouterLink to="/mahasiswa/usulan-judul">
              <i data-feather="upload-cloud"></i>
              <span data-key="t-dashboard">Usulan Judul</span>
            </RouterLink>
          </li>
          <li :class="$route.path.includes('pembimbingan') ? 'mm-active' : ''">
            <RouterLink to="/mahasiswa/pembimbingan">
              <i data-feather="check-square"></i>
              <span data-key="t-dashboard">Pembimbingan</span>
            </RouterLink>
          </li>
          <li :class="$route.path.includes('ujian') ? 'mm-active' : ''">
            <RouterLink to="/mahasiswa/jadwal-ujian">
              <i data-feather="calendar"></i>
              <span data-key="t-dashboard">Jadwal Ujian</span>
            </RouterLink>
          </li>
          <li :class="$route.path.includes('data-keuangan') ? 'mm-active' : ''">
            <RouterLink to="/mahasiswa/data-keuangan">
              <i data-feather="credit-card"></i>
              <span data-key="t-dashboard">Data Keuangan</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

declare const feather: any;
declare const $: any;

onMounted(() => {
  feather.replace();
  $('#side-menu').metisMenu();
  document.body.setAttribute('data-sidebar', 'dark');
});

</script>

<style lang="css">
#sidebar-name {
  color: #e6e6e6;
  font-size: 14px;
  font-weight: 600;
}
</style>