<!-- 一番シンプルな設計 -->
<template>
  <NuxtErrorBoundary>
    <Suspense>
      <template #default>
        <!-- 非同期コンポーネント -->
        <AsyncComponent />
      </template>
      <template #fallback>
        <!-- ローディングUI -->
        loading...
      </template>
    </Suspense>
    <template #error>
      <!-- エラーUI -->
      error!
    </template>
  </NuxtErrorBoundary>
</template>

<script lang="ts" setup>
import AsyncComponent from '~/components/AsyncComponent.vue';
</script>