<template>
  <div class="space-y-10">
    <h1 class="text-4xl font-bold">Invoice Form</h1>
    <Suspense>
      <FormGroup />
      <template #fallback>
        <div class="space-y-6">
          <div class="space-y-4" v-for="i in 5">
            <NuxtSkeleton class="w-50 h-5 rounded-md" />
            <NuxtSkeleton class="w-80 h-10 rounded-md" />
          </div>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import FormGroup from '~/components/invoice/FormGroup.vue';
</script>