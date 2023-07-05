<script setup lang="ts"></script>

<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  border: 7px solid var(--secondary);
  border-top: 7px solid var(--main);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  z-index: 1000;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
