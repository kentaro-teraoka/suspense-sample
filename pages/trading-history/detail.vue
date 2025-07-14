<template>
  <!-- Head -->
  <NuxtErrorBoundary @error="logError">
    <Suspense>
      <DetailHead :invoice-id="invoiceId"/>
      <template #fallback>
        <p>DetailHead is getting...</p>
      </template>
    </Suspense>
    <template #error="{error}">
      <div>
        {{ error.statusCode }}
        {{ error.message }}
      </div>
    </template>
  </NuxtErrorBoundary>

  <!-- Body -->
  <NuxtErrorBoundary @error="logError">
    <Suspense>
      <DetailBody :invoice-id="invoiceId" />
      <template #fallback>
        <p>DetailBody is getting...</p>
      </template>
    </Suspense>
    <template #error="{error}">
      <div>
        {{ error.statusCode }}
        {{ error.message }}
      </div>
    </template>
  </NuxtErrorBoundary>
</template>

<script lang="ts" setup>
import DetailHead from '~/components/trading-history/DetailHead.vue';
import DetailBody from '~/components/trading-history/DetailBody.vue';

const route = useRoute()

const invoiceId = ref<string | null>(route.query.invoiceId as string || null)

const logError = (err: any) => {
  console.log("err", err)
}
</script>