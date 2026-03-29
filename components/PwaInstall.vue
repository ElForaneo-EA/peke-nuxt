<template>
  <ClientOnly>
    <Transition name="install-btn">
      <button
        v-if="canInstall"
        @click="installPWA"
        class="fixed right-6 top-6 z-50 flex items-center gap-2 rounded-full border border-accent-ceruleo/40 bg-surface-50/90 px-4 py-2.5 font-heading text-xs font-600 uppercase tracking-[0.15em] text-accent-ceruleo shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-accent-ceruleo hover:bg-accent-ceruleo/10 hover:shadow-md"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Instalar App
      </button>
    </Transition>
  </ClientOnly>
</template>

<script setup lang="ts">
const canInstall = ref(false)
let deferredPrompt: any = null

onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault()
    deferredPrompt = e
    canInstall.value = true
  })
})

async function installPWA() {
  if (!deferredPrompt) return

  deferredPrompt.prompt()
  const { outcome } = await deferredPrompt.userChoice

  if (outcome === 'accepted') {
    canInstall.value = false
  }

  deferredPrompt = null
}
</script>

<style scoped>
.install-btn-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.install-btn-leave-active {
  transition: all 0.2s ease;
}
.install-btn-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.install-btn-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
