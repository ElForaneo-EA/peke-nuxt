<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Chat window -->
    <Transition name="chat-slide">
      <div
        v-if="isOpen"
        class="fixed inset-4 bottom-20 right-4 flex flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-2xl sm:static sm:inset-auto sm:bottom-auto sm:right-auto sm:mb-4 sm:h-[500px] sm:w-[380px]"
      >
        <!-- Header -->
        <div class="flex shrink-0 items-center gap-3 border-b border-surface-200 bg-surface-50 px-5 py-4">
          <div class="flex h-9 w-9 items-center justify-center rounded-full bg-accent-ceruleo/15">
            <svg class="h-5 w-5 text-accent-ceruleo" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div>
            <p class="font-heading text-sm font-600 text-surface-900">PEKEMIND</p>
            <p class="text-xs text-surface-400">Tranquilidad para padres</p>
          </div>
          <button
            class="ml-auto text-surface-400 transition-colors hover:text-surface-700"
            @click="isOpen = false"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Messages -->
        <div ref="messagesContainer" class="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          <!-- Welcome message -->
          <div v-if="messages.length === 0" class="flex gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-ceruleo/15">
              <span class="text-xs font-600 text-accent-ceruleo">P</span>
            </div>
            <div class="rounded-2xl rounded-tl-sm bg-surface-100 px-4 py-3">
              <p class="text-sm leading-relaxed text-surface-600">
                ¡Hola! 👋 Soy el asistente de PEKEMIND. ¿Tienes preguntas sobre nuestra app? Estoy aquí para ayudarte.
              </p>
            </div>
          </div>

          <!-- Chat messages -->
          <div
            v-for="(msg, i) in messages"
            :key="i"
            class="flex gap-3"
            :class="msg.role === 'user' ? 'flex-row-reverse' : ''"
          >
            <div
              v-if="msg.role === 'bot'"
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-ceruleo/15"
            >
              <span class="text-xs font-600 text-accent-ceruleo">P</span>
            </div>
            <div
              class="max-w-[80%] rounded-2xl px-4 py-3"
              :class="
                msg.role === 'user'
                  ? 'rounded-tr-sm bg-accent-ceruleo text-surface-900'
                  : 'rounded-tl-sm bg-surface-100 text-surface-600'
              "
            >
              <p class="text-sm leading-relaxed">{{ msg.text }}</p>
            </div>
          </div>

          <!-- Typing indicator -->
          <div v-if="isLoading" class="flex gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-ceruleo/15">
              <span class="text-xs font-600 text-accent-ceruleo">P</span>
            </div>
            <div class="rounded-2xl rounded-tl-sm bg-surface-100 px-4 py-3">
              <div class="flex gap-1.5">
                <span class="h-2 w-2 animate-bounce rounded-full bg-surface-400" style="animation-delay: 0ms" />
                <span class="h-2 w-2 animate-bounce rounded-full bg-surface-400" style="animation-delay: 150ms" />
                <span class="h-2 w-2 animate-bounce rounded-full bg-surface-400" style="animation-delay: 300ms" />
              </div>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="shrink-0 border-t border-surface-200 bg-white px-4 py-3">
          <form @submit.prevent="sendMessage" class="flex items-center gap-2">
            <input
              ref="inputRef"
              v-model="input"
              type="text"
              placeholder="Escribe tu pregunta..."
              :disabled="isLoading"
              class="flex-1 rounded-full border border-surface-200 bg-surface-50 px-4 py-3 text-sm text-surface-900 outline-none transition-colors placeholder:text-surface-400 focus:border-accent-ceruleo focus:bg-white disabled:opacity-50 disabled:hover:bg-accent-ceruleo"
            />
            <button
              type="submit"
              :disabled="isLoading || !input.trim()"
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-ceruleo text-surface-900 transition-all hover:bg-accent disabled:opacity-40 disabled:hover:bg-accent-ceruleo"
            >
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </Transition>

    <!-- Floating button -->
    <button
      @click="isOpen = !isOpen"
      class="flex h-14 w-14 items-center justify-center rounded-full bg-accent-ceruleo shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <Transition mode="out-in" name="icon-fade">
        <svg v-if="!isOpen" key="chat" class="h-6 w-6 text-surface-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <svg v-else key="close" class="h-6 w-6 text-surface-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Transition>
    </button>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const input = ref('')
const isLoading = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)

interface Message {
  role: 'user' | 'bot'
  text: string
}

const messages = ref<Message[]>([])

const WEBHOOK_URL = 'https://erkckayala.app.n8n.cloud/webhook/chatbot'

function scrollToBottom() {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

watch(isOpen, (val) => {
  if (val) {
    nextTick(() => {
      inputRef.value?.focus()
    })
  }
})

async function sendMessage() {
  const text = input.value.trim()
  if (!text || isLoading.value) return

  messages.value.push({ role: 'user', text })
  input.value = ''
  isLoading.value = true
  scrollToBottom()

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text }),
    })

    const data = await res.json()
    const reply = data.reply || 'Lo siento, no pude procesar tu pregunta. Intenta de nuevo.'

    messages.value.push({ role: 'bot', text: reply })
  } catch {
    messages.value.push({
      role: 'bot',
      text: 'Hubo un problema de conexión. Por favor intenta de nuevo en unos momentos.',
    })
  } finally {
    isLoading.value = false
    scrollToBottom()
    nextTick(() => {
      inputRef.value?.focus()
    })
  }
}
</script>

<style scoped>
.chat-slide-enter-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.chat-slide-leave-active {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.chat-slide-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
.chat-slide-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: opacity 0.15s ease;
}
.icon-fade-enter-from,
.icon-fade-leave-to {
  opacity: 0;
}
</style>
