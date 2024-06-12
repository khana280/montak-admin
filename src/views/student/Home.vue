<template>
  <div id="layout-wrapper">
    <TheHeader/>
    <TheStudentSideBar/>
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <BreadCrumb/>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import TheHeader from '../../components/TheHeader.vue';
  import TheStudentSideBar from '../../components/TheStudentSideBar.vue';
  import BreadCrumb from '../../components/BreadCrumb.vue';
  import { onMounted } from 'vue';

  onMounted(() => {
    document.documentElement.setAttribute('data-sidebar', 'light');
  })
</script>