<script setup lang="ts">
defineEmits(['closeError'])
</script>

<template>
  <p class="error">
    <slot></slot>
    <CloseBtn style="position: absolute; top: -5px; right: -5px" @click="$emit('closeError')" />
  </p>
</template>

<style scoped>
.error {
  color: var(--error);
  text-align: center;
  z-index: 1000;
  background: var(--secondary);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 5px 5px 19px -14px rgba(34, 60, 80, 0.23);
  width: 80%;
  max-width: 450px;
  position: relative;
}
</style>
