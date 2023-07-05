<script setup lang="ts"></script>

<template>
  <button class="close-btn"></button>
</template>

<style scoped>
.close-btn {
  width: 25px;
  height: 25px;
  background: var(--light);
  border-radius: 15px;
  border: 0;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 19px -14px rgba(34, 60, 80, 0.23);
}

.close-btn::before,
.close-btn::after {
  content: '';
  display: block;

  position: absolute;
  transform: translate(-50%, -50%) rotate(45deg);
  top: 50%;
  left: 50%;

  width: 2px;
  height: 10px;
  background-color: var(--error);
}
.close-btn::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>
