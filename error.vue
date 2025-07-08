<template>
  <div class="min-h-screen flex flex-col gap-10 items-center justify-center">
    <h1 class="text-8xl font-bold text-error-500">
      {{ error?.statusCode }}
    </h1>
    <p class="text-xl text-gray-500">
      {{ error?.statusMessage || '予期せぬエラーが発生しました' }}
    </p>
    <NuxtButton @click="goHome">
      トップに戻る
    </NuxtButton>
  </div>
</template>

<script lang="ts" setup>
defineProps({ error: Object });

const goHome = () => {
  window.location.href = '/'
}
</script>