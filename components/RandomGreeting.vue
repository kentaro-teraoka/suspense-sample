<template>
  <div class="flex gap-6 items-center">
    <NuxtButton
      size="xl"
      :loading="isLoading"
      @click="updateRandomGreeting">
      <span v-if="!isLoading">👋</span> Random Greeting
    </NuxtButton>

    <div>
      <div v-if="isLoading" class="flex gap-3 items-center">
        <NuxtSkeleton class="h-12 w-12 rounded-full" />
        <div class="space-y-2">
          <NuxtSkeleton class="h-5 w-64" />
          <NuxtSkeleton class="h-5 w-128" />
        </div>
      </div>
      <div v-else-if="!isLoading && randomGreeting" class="flex gap-3 items-center">
        <NuxtAvatar size="3xl" :src="randomGreeting.iconSrc" />
        <div>
          <p class="font-bold text-gray-500 m-0">{{ randomGreeting?.userName }}</p>
          <p class="font-medium m-0">{{ randomGreeting?.message }}</p>
        </div>
      </div>
      <p v-else class="text-2xl font-medium text-gray-500">ランダムな挨拶が返ってきます。</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fetchRandomGreeting, type GreetingType } from '~/api'


const isLoading = ref<boolean>(false)
const randomGreeting = ref<GreetingType | null>(null)

const updateRandomGreeting = async () => {
  isLoading.value = true
  randomGreeting.value = await fetchRandomGreeting()
  isLoading.value = false
}
</script>
