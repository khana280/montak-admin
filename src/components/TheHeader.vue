<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a href="index.html" class="logo logo-dark">
            <span class="logo-sm">
              <img src="https://unira.ac.id/img/logo.png" alt="" height="24">
            </span>
            <span class="logo-lg">
              <img src="https://unira.ac.id/img/logo.png" alt="" height="24"> <span class="logo-txt">MONTAK</span>
            </span>
          </a>

          <a href="index.html" class="logo logo-light">
            <span class="logo-sm">
              <img src="https://unira.ac.id/img/logo.png" alt="" height="24">
            </span>
            <span class="logo-lg">
              <img src="https://unira.ac.id/img/logo.png" alt="" height="24"> <span class="logo-txt">MONTAK</span>
            </span>
          </a>
        </div>

        <button type="button" class="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn"
          @click="toggleSideBar()">
          <i class="fa fa-fw fa-bars"></i>
        </button>
      </div>

      <div class="d-flex">
        <div class="dropdown d-inline-block border-start">
          <button type="button" class="btn header-item right-bar-toggle mx-2">
            <i data-feather="power" class="icon-lg"></i>
          </button>
        </div>

        <div class="dropdown d-inline-block">
          <button type="button" class="btn header-item bg-light-subtle border-start border-end"
            id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img class="rounded-circle header-profile-user"
              src="https://api.unira.ac.id/img/profil/mhs/d9674b9d198eecaa13f3f057d5390a12.jpg" alt="Header Avatar">
            <span class="d-none d-xl-inline-block ms-1 fw-medium">MUHAMMAD UMAR MANSYUR</span>
          </button>
          <div class="dropdown-menu dropdown-menu-end">
            <!-- item-->
            <a class="dropdown-item" href="apps-contacts-profile.html"><i
                class="mdi mdi mdi-face-man font-size-16 align-middle me-1"></i> Profile</a>
            <a class="dropdown-item" href="auth-lock-screen.html"><i
                class="mdi mdi-lock font-size-16 align-middle me-1"></i> Lock Screen</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="auth-logout.html"><i
                class="mdi mdi-logout font-size-16 align-middle me-1"></i> Logout</a>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const width = window.innerWidth;
  if(width < 1024) {
    document.body.setAttribute('data-sidebar-size', 'sm');
  } else {
    document.body.setAttribute('data-sidebar-size', 'lg');
  }
});


function toggleSideBar() {
  const width = window.innerWidth;
  if(width >= 1024) {
    if(document.body.getAttribute('data-sidebar-size') === 'lg') {
      document.body.setAttribute('data-sidebar-size', 'sm');
    } else {
      document.body.setAttribute('data-sidebar-size', 'lg');
    }
  }
 
  if(width < 1024) {
    if(document.body.getAttribute('data-sidebar-size') === 'sm') {
      document.body.setAttribute('data-sidebar-size', 'lg');
    }
    document.body.classList.toggle('sidebar-enable');
    // berikan transition
  }
}
</script>