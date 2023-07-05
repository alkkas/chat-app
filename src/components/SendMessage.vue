<script setup lang="ts">
const emit = defineEmits(['addNewMsg'])
import { ref } from 'vue'

const inputValue = ref('')

const createMsg = () => {
  emit('addNewMsg', inputValue)
  inputValue.value = ''
}
</script>

<template>
  <div class="send-message-container">
    <InputView v-model.trim="inputValue" style="flex-grow: 1" @addNewMsg="createMsg" />
    <ButtonView @click="createMsg" :disabled="!inputValue.trim()" />
  </div>
</template>

<style scoped>
.send-message-container {
  display: flex;
  height: 40px;
  gap: 7px;
}
</style>
