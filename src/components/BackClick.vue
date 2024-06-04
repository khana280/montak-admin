<template>
  <button type="button" class="btn btn-secondary float-start me-3" @click="backClick()">
    <i class="bx bx-arrow-back"></i>
  </button>
  <h6>
    {{ props.title?.toUpperCase() }}
    <br>
    <small>
      {{ props.subTitle?.toUpperCase() }}
    </small>
  </h6>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: String,
    subTitle: String
  });

  const emit = defineEmits(['isClick']);
  const backClick = () => {
    emit('isClick', false);
  }
</script>