<template>
  <div class="space-y-10">
    <h1 class="text-4xl font-bold">Invoice Form</h1>
    <NuxtErrorBoundary @error="logError">
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
      <template #error="{error}">
        {{ error.statusCode }}
        {{ error.message }}
        <NuxtButton
          variant="outline"
          @click="reloadWindow">
          再試行する
        </NuxtButton>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script lang="ts" setup>
import FormGroup from '~/components/invoice/FormGroup.vue';

const logError = (err: any) => {
  console.log("err", err)
}

const reloadWindow = () => {
  window.location.reload()
}
</script>