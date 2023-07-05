<script setup lang="ts"></script>

<template>
  <button class="btn">
    <IconView width="23px" svgName="send" />
  </button>
</template>

<style scoped>
.btn {
  background-color: var(--main);
  border: none;
  padding: 10px;
  line-height: 10px;
  border-radius: 100px;

  display: grid;
  align-items: center;
  justify-items: center;

  cursor: pointer;
}
.btn:disabled {
  opacity: 0.5;
}
</style>
