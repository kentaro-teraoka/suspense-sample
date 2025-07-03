<template>
  <UApp class="grid min-h-screen grid-rows-[auto_1fr_auto]">
    <header class="p-4 border-b border-gray-800">
      <span class="font-bold text-xl">SUSPENSE SAMPLE</span>
    </header>

    <NuxtContainer class="py-16">
      <slot />
    </NuxtContainer>

    <footer class="p-4 text-center text-sm text-gray-500">
      &copy; 2025 MyApp. All rights reserved.
    </footer>
  </UApp>
</template>
