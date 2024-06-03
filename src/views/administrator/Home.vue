<template>
  <div id="layout-wrapper">
    <TheHeader />
    <TheSideBar />
    <div class="main-content">

      <div class="page-content">
        <div class="container-fluid">
          <TheBreadCrumb />


        </div> <!-- container-fluid -->
      </div>
      <!-- End Page-content -->
    </div>
  </div>
</template>
<script setup lang="ts">
import TheHeader from '../../components/TheHeader.vue';
import TheSideBar from '../../components/TheSideBar.vue';
import TheBreadCrumb from '../../components/TheBreadCrumb.vue';
</script>