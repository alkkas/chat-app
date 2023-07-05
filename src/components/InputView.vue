<script setup lang="ts">
defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue', 'addNewMsg'])

const pressBtn = (event: KeyboardEvent) => {
  if (event.keyCode === 13) {
    emit('addNewMsg')
  }
}
</script>

<template>
  <input
    placeholder="Введите сообщение..."
    class="input"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    v-on:keyup="pressBtn"
  />
</template>

<style scoped>
.input {
  border: 1px solid var(--stroke);
  resize: none;
  border-radius: 10px;
  padding: 8px;
}
</style>
