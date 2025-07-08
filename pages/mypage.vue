<template>
  <!-- ERROR①: 一部にcustom UIを表示 -->
  <!-- <NuxtErrorBoundary>
    <template #default>
      <Suspense>
        <MypageContents />
        <template #fallback>
          checking login status ...
        </template>
      </Suspense>
    </template>

    <template #error="{ error }">
      {{ error }}
    </template>
  </NuxtErrorBoundary>   -->

  <!-- ERROR②: error.vueを表示(MypageContentsでhandling) -->
  <Suspense>
    <MypageContents />
    <template #fallback>
      checking login status ...
    </template>
  </Suspense>
</template>

<script lang="ts" setup>
import MypageContents from '~/components/MypageContents.vue';
</script>