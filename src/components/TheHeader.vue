<template>
  <header id="page-topbar">
    <div class="layout-width">
      <div class="navbar-header">
        <div class="d-flex">
          <div class="navbar-brand-box horizontal-logo">
            <a href="/" class="logo logo-dark">
              <span class="logo-sm">
                <img src="/assets/images/logo.png" alt="" height="22">
              </span>
              <span class="logo-lg">
                <img src="/assets/images/logo.png" alt="" height="17">
              </span>
            </a>
            <a href="/" class="logo logo-light">
              <span class="logo-sm">
                <img src="/assets/images/logo.png" alt="" height="22">
              </span>
              <span class="logo-lg">
                <img src="/assets/images/logo.png" alt="" height="17">
              </span>
            </a>
          </div>
          <button type="button" class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger material-shadow-none" id="topnav-hamburger-icon" aria-expanded="false" aria-label="Toggle navigation" @click="toggleMenu">
              <span class="hamburger-icon" :class="{'open' : isClick}">
                  <span></span>
                  <span></span>
                  <span></span>
              </span>
          </button>
        </div>
        <div class="d-flex align-items-center">
          <div class="dropdown ms-sm-3 header-item topbar-user">
            <button type="button" class="btn material-shadow-none" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="d-flex align-items-center">
                <img src="https://api.unira.ac.id/img/profil/mhs/8e35dc4c9c4b61b341800d1ef1f10eba.jpg" alt="header-thumbnail" class="rounded-circle header-profile-user">
                <span class="text-start ms xl-2">
                  <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                    Khana Zulfana Imam
                  </span>
                  <span class="d-none d-xl-block ms-1 fs-12 user-name-sub-text">Administrator</span>
                </span>
              </span>
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <h6 class="dropdown-header">Welcome Khana Zulfana Imam!</h6>
              <RouterLink to="" class="dropdown-item">
                <i class="mdi mdi-account-cash-outline text-muted fs-16 align-middle me-1"></i>
                <span>Admin Keuangan</span>
              </RouterLink>
              <RouterLink to="" class="dropdown-item">
                <i class="mdi mdi-account-lock-open-outline text-muted fs-16 align-middle me-1"></i>
                <span>Adminisrator </span>
              </RouterLink>
              <div class="dropdown-divider"></div>
              <RouterLink to="" class="dropdown-item">
                <i class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>
                <span class="align-middle">Logout</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

  </header>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';
  const isClick = ref(false);
  const toggleMenu = () => {
    if(window.innerWidth > 992) {
      if(document.documentElement.getAttribute('data-sidebar-size') === 'lg') {
        document.documentElement.setAttribute('data-sidebar-size', 'sm');
      } else {
        document.documentElement.setAttribute('data-sidebar-size', 'lg');
        isClick.value = !isClick.value;
      }
    } else {
      document.body.classList.toggle('vertical-sidebar-enable');
    }
  }
  onMounted(() => {
    if(window.innerWidth < 768) {
      document.body.classList.add('two-column-panel');
      isClick.value = true;
    }
  })
</script>