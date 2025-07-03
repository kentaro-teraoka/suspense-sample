<template>
  <div class="space-y-10">
    <RandomGreeting class="pb-10 border-b border-gray-800" />
    
    <Suspense>
      <GreetingCardList />
      <template #fallback>
        <CardGrid :items="Array(5)">
          <NuxtSkeleton class="w-full h-30" />
        </CardGrid>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import RandomGreeting from '~/components/RandomGreeting.vue';
import GreetingCardList from '~/components/GreetingCardList.vue';
import CardGrid from '~/components/CardGrid.vue';
</script>
