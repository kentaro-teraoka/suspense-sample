<template>
  <ul class="flex flex-wrap -mx-2">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4"
    >
      <slot :item="item" :index="index" />
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: any[]
}>()
</script>