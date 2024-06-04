<template>
  <div id="layout-wrapper">
    <TheHeader />
    <TheSideBar />
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <TheBreadCrumb />
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TheHeader from '../../components/TheHeader.vue';
import TheSideBar from '../../components/TheSideBarStudent.vue';
import TheBreadCrumb from '../../components/TheBreadCrumb.vue';
import { onMounted } from 'vue';

onMounted(() => {
  document.body.setAttribute('data-sidebar', 'red');
});
</script>