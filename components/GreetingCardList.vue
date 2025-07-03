<template>
  <ul class="flex flex-wrap -mx-2">
    <li v-for="greeting in greetings" class="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
      <NuxtCard variant="subtle" class="h-full">
        <template #header>
          <div class="flex items-center gap-4">
            <NuxtAvatar :src="greeting.iconSrc" />
            <h2 class="font-bold">{{ greeting.userName }}</h2>
          </div>
        </template>
        <p>{{ greeting.message }}</p>
      </NuxtCard>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { fetchGreetings, type GreetingType } from '~/api';

const greetings = ref<GreetingType[]>([])

greetings.value = await fetchGreetings()
</script>