<template>
  <div class="flex gap-4 align-center">
    <NuxtButton
      size="xl"
      :loading="isLoading"
      @click="updateGreetingMessage">
      👋 Greeting
    </NuxtButton>

    <div>
      <div v-if="isLoading" class="space-y-2">
        <NuxtSkeleton class="h-4 w-128" />
        <NuxtSkeleton class="h-4 w-64" />
      </div>
      <p v-else class="text-2xl font-medium">
        <span v-if="greetingMessage">{{ greetingMessage }}</span>
        <span v-else class="text-gray-500">ランダムな挨拶が返ってきます。</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fetchGreetingMessage } from '~/api'

const isLoading = ref<boolean>(false)
const greetingMessage = ref<string>('')

const updateGreetingMessage = async () => {
  isLoading.value = true
  greetingMessage.value = await fetchGreetingMessage()
  isLoading.value = false
}
</script>
