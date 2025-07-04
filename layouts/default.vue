<template>
  <UApp class="grid min-h-screen grid-rows-[auto_1fr_auto]">
    <Header />

    <NuxtContainer class="py-16">
      <slot />
    </NuxtContainer>

    <footer class="p-4 text-center text-sm text-gray-500">
      &copy; 2025 MyApp. All rights reserved.
    </footer>
  </UApp>
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';
</script>