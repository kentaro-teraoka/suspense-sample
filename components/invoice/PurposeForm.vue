<template>
  <NuxtFormField label="ご利用目的" name="purpose" size="xl">
    <NuxtSelect
      v-model="modelValue"
      :items="purposeOptions"
      placeholder="選択してください" />
  </NuxtFormField>
</template>

<script lang="ts" setup>
import { type InvoiceType, fetchPurposeOptions } from '~/api/invoice/history';

const modelValue = defineModel<InvoiceType["purpose"]>()

const purposeOptions = ref<string[]>([])

// ご利用目的選択肢取得
try {
  purposeOptions.value = await fetchPurposeOptions();
} catch (err) {
  console.error('ご利用目的の取得に失敗しました:', err);
}
</script>