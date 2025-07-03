<template>
  <CardGrid :items="greetings">
    <template #default="{item}">
      <NuxtCard variant="subtle" class="h-full">
        <template #header>
          <div class="flex items-center gap-4">
            <NuxtAvatar :src="item.iconSrc" />
            <h2 class="font-bold">{{ item.userName }}</h2>
          </div>
        </template>
        <p>{{ item.message }}</p>
      </NuxtCard>
    </template>
  </CardGrid>
</template>

<script lang="ts" setup>
import { fetchGreetings, type GreetingType } from '~/api';
import CardGrid from '~/components/CardGrid.vue';

const greetings = ref<GreetingType[]>([])
greetings.value = await fetchGreetings()
</script>