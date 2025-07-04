<template>
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