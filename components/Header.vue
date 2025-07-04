<template>
  <header class="flex justify-between items-center p-4 border-b border-gray-800">
    <span class="font-bold text-xl">SUSPENSE SAMPLE</span>
    <NuxtNavigationMenu :items="navigations" />
    <NuxtSwitch
      v-model="isLoggedIn"
      unchecked-icon="i-lucide-x"
      checked-icon="i-lucide-check"
      size="xl"
      label="Login"
    />
  </header>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';

const navigations = ref<NavigationMenuItem[]>([
  {
    icon: "i-lucide-house",
    label: "Home",
    to: "/",
  },
  {
    icon: "i-lucide-user",
    label: "Mypage",
    to: "/mypage",
  },
])

const isLoggedIn = ref(false)
</script>