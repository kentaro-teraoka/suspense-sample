<template>
  <div>
    detail: {{ tradingHistory?.detail }}
  </div>
</template>

<script lang="ts" setup>
import { fetchInvoiceTradingHistory } from '~/api/trading-history/history';

const props = defineProps<{
  invoiceId: string | null;
}>()

const tradingHistory = ref(null)
try {
  if(props.invoiceId) {
    tradingHistory.value = await fetchInvoiceTradingHistory(props.invoiceId, 2000)
  }
} catch (err) {
  throw createError({
    statusCode: 404,
    statusMessage: "Bodyデータの取得に失敗しました。",
  })
}
</script>