<template>
  <div id="layout-wrapper">
    <TheHeader/>
    <TheSideBar/>
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
  import TheSideBar from '../../components/TheSideBar.vue';
  import BreadCrumb from '../../components/BreadCrumb.vue';
</script>