<script setup lang="ts">
import { getMessages } from '@/api/api'
import MessageView from '@/components/MessageView.vue'
import SendMessage from '@/components/SendMessage.vue'
import { type Message } from '@/types/msgs'
import { generateMsg } from '@/utils/msgs'
import { nextTick, onMounted, onUpdated, ref } from 'vue'

const offset = ref(0)
const offsetValue = 20
const isLoading = ref(false)
const isError = ref(false)
const messages = ref<Message[]>([])

const bottomMessagesElement = ref<HTMLElement>()

const loadNewMessages = async () => {
  const element = document.querySelector(`[data-id="${messages.value[0]?.id}"]`)
  try {
    isLoading.value = true
    isError.value = false
    const msgs = await getMessages(offset.value)
    messages.value = [...msgs, ...messages.value]
    offset.value += offsetValue
  } catch (e) {
    isError.value = true
  }
  element?.scrollIntoView()
  isLoading.value = false
}

const addNewMsg = async (obj: any) => {
  messages.value.push(generateMsg(obj.value, 'my'))
  await nextTick()
  bottomMessagesElement.value?.scrollIntoView({ behavior: 'smooth' })
}

const closeError = () => {
  isError.value = false
}

onUpdated(() => {})

onMounted(() => {
  loadNewMessages()
})
</script>

<template>
  <div class="container">
    <main class="app">
      <section class="messages-container">
        <div class="messages">
          <div v-if="messages.length > 0" v-intersection="loadNewMessages"></div>
          <MessageView
            :msg="msg.value"
            :msg-type="msg.type"
            :key="msg.id"
            :data-id="msg.id"
            v-for="msg in messages"
          />
          <div ref="bottomMessagesElement"></div>
        </div>

        <ErrorView v-if="isError" style="position: fixed; top: 25px" @closeError="closeError"
          >Ошибка, попробуйте позже!</ErrorView
        >
        <SpinnerView v-if="isLoading" style="position: fixed; top: 25px" />
      </section>

      <SendMessage @addNewMsg="addNewMsg" />
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 650px;
  margin: 0 auto 0;
  padding: 15px;
  height: 100vh;

  display: flex;
  justify-content: center;
}
.app {
  background-color: var(--light);
  border-radius: 20px;
  padding: 20px 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.messages-container {
  height: 100%;
  overflow-y: scroll;

  display: flex;
  align-items: center;

  flex-direction: column;
  flex-grow: 1;

  position: relative;
  margin-bottom: 10px;
}
.messages {
  display: flex;

  gap: 10px;
  flex-direction: column;
}
</style>
