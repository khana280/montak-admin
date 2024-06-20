<template>
  <div class="app-menu navbar-menu">
    <NavbarBox/>
    <div id="scrollbar">
      <div class="container-fluid">
        <ul class="navbar-nav" id="navbar-nav">
          <li class="menu-title">
            <span>Menu</span>
          </li>
          <li class="nav-item">
            <RouterLink to="/mahasiswa" class="nav-link menu-link">
              <i class="ri-home-smile-2-line"></i>
              <span>Beranda</span>
            </RouterLink>
          </li>
          <li class="menu-title">
            <span>Administrasi</span>
          </li>
          <li class="nav-item">
            <RouterLink to="/mahasiswa/usulan-judul" class="nav-link menu-link">
              <i class="ri-todo-line"></i>
              <span>Usulan Judul</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/mahasiswa/bimbingan" class="nav-link menu-link">
              <i class="ri-task-line"></i>
              <span>Bimbingan</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/mahasiswa/jadwal" class="nav-link menu-link">
              <i class=" ri-calendar-check-line"></i>
              <span>Jadwal Ujian</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/mahasiswa/data-keuangan" class="nav-link menu-link">
              <i class=" ri-calendar-check-line"></i>
              <span>Data Keuangan</span>
            </RouterLink>
          </li>
         
        </ul>
      </div>
    </div>
    <div class="sidebar-background"></div>
  </div>
  <div class="vertical-overlay" @click="toggleMenu"></div>
</template>

<script setup lang="ts">
  import NavbarBox from './NavbarBox.vue'
  const toggleMenu = () => {
    document.body.classList.toggle('vertical-sidebar-enable');
  }
</script>