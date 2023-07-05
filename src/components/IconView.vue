<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps<{ svgName: string; width: number; height?: number }>()

const Icon = defineAsyncComponent(() => import(`../assets/imgs/${props.svgName}.svg`))
</script>

<template>
  <div :style="{ width, height: height ?? width }">
    <Icon class="svg-icon" />
  </div>
</template>

<style scoped>
.svg-icon {
  width: 100%;
  height: auto;
}
</style>
