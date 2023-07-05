<script setup lang="ts">
import type { MessageType } from '@/types/msgs'

const msgTypeClass = {
  user: '',
  my: 'msg--my'
}

defineProps<{
  msg: string
  msgType: MessageType
}>()
</script>

<template>
  <p class="msg" :class="msgTypeClass[msgType]">{{ msg }}</p>
</template>

<style scoped>
.msg {
  background-color: var(--primary);
  padding: 5px 10px;
  border-radius: 10px;
  max-width: 60%;
  align-self: flex-start;
  position: relative;
  z-index: 1;
  margin-left: 7px;
}
.msg::before {
  content: '';
  display: block;
  position: absolute;
  left: -7px;
  bottom: 0;
  border: 15px solid transparent;
  border-bottom: 15px solid var(--primary);
  z-index: -1;
  word-break: break-all;
}

.msg--my {
  align-self: flex-end;
  background-color: var(--secondary);
  margin: 0 7px 0 0;
}
.msg--my::before {
  left: unset;
  right: -7px;
  border-bottom: 15px solid var(--secondary);
}
</style>
