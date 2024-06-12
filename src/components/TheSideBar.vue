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
            <RouterLink to="/administrator" class="nav-link menu-link">
              <i class="ri-home-smile-2-line"></i>
              <span>Beranda</span>
            </RouterLink>
          </li>
          <li class="menu-title">
            <span>Administrasi</span>
          </li>
          <li class="nav-item">
            <RouterLink to="/administrator/pendaftaran" class="nav-link menu-link">
              <i class="ri-todo-line"></i>
              <span>Pendaftaran</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/administrator/verifikasi-persyaratan" class="nav-link menu-link">
              <i class="ri-task-line"></i>
              <span>Verifikasi Persyaratan</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/administrator/jadwal" class="nav-link menu-link">
              <i class=" ri-calendar-check-line"></i>
              <span>Plotting Jadwal Ujian</span>
            </RouterLink>
          </li>
          <li class="menu-title">
            <span>Setting</span>
          </li>
          <li class="nav-item">
            <a href="#setting-dropdown" class="nav-link menu-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="setting-dropdown" :class="{ 'active collapsed': $route.path.includes('/pengaturan') }">
              <i class="ri-settings-2-line"></i>
              <span>Pengaturan</span>
            </a>
            <div class="collapse menu-dropdown" id="setting-dropdown" :class="{ show: $route.path.includes('/pengaturan') }">
              <ul class="nav nav-sm flex-column">
                <li class="nav-item">
                  <RouterLink to="/administrator/pengaturan/batas-pendaftaran" class="nav-link menu-link">
                    Batas Pendaftaran
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/administrator/pengaturan/jenis-ujian" class="nav-link menu-link">
                    Jenis Ujian
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/administrator/pengaturan/nilai" class="nav-link menu-link">
                    Persentase Nilai
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/administrator/pengaturan/biaya" class="nav-link menu-link">
                    Biaya
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/administrator/pengaturan/syarat-kelulusan" class="nav-link menu-link">
                    Syarat Kelulusan
                  </RouterLink>
                </li>
              </ul>
            </div>
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