<template>
  <div class="space-y-10">
    <h1 class="text-4xl font-bold">Invoice Form</h1>
    <NuxtForm
      :state="form"
      class="space-y-6">
      <NuxtFormField label="利用区分" name="usage" size="xl">
        <NuxtRadioGroup
          v-model="form.usage"
          :items="usageOptions" />
      </NuxtFormField>

      <NuxtFormField label="請求書" name="invoice" size="xl">
        <NuxtInput
          type="file"
          v-model="form.invoice" />
      </NuxtFormField>
  
      <NuxtFormField label="買取希望額" name="amount" size="xl">
        <NuxtInput type="number" v-model="form.amount" />
      </NuxtFormField>
  
      <NuxtFormField label="取引先会社" name="company" size="xl">
        <NuxtInput type="text" v-model="form.company" />
      </NuxtFormField>
  
      <NuxtFormField label="担当者名" name="person" size="xl">
        <NuxtInput type="text" v-model="form.person" />
      </NuxtFormField>
  
      <NuxtFormField label="電話番号" name="phone" size="xl">
        <NuxtInput type="tel" v-model="form.phone" />
      </NuxtFormField>
  
      <NuxtFormField label="ご利用目的" name="purpose" size="xl">
        <NuxtSelect
          v-model="form.purpose"
          :items="purposeOptions"
          placeholder="選択してください" />
      </NuxtFormField>
  
      <NuxtFormField label="エビデンス" name="evidence" size="xl">
        <NuxtInput
          type="file"
          v-model="form.evidence" />
      </NuxtFormField>
    </NuxtForm>
  </div>
</template>

<script lang="ts" setup>
import { type InvoiceType, fetchInvoiceHistory, fetchPurposeOptions } from '~/api/invoice/history'

const route = useRoute()

const invoiceId = ref<string | null>(route.query.invoiceId as string || null)
const form = reactive<InvoiceType>({
  id: '',
  usage: '',
  invoice: null,
  amount: null,
  company: '',
  person: '',
  phone: '',
  purpose: '',
  evidence: null,
})
const usageOptions = ref<string[]>(["個人", "法人"])
const purposeOptions = ref<string[]>([])

// form取得
try {
  if(invoiceId.value) {
    const data = await fetchInvoiceHistory(invoiceId.value);
    Object.assign(form, data);
  }
} catch (err) {
  console.error('請求書の取得に失敗しました', err);
}

// ご利用目的選択肢取得
try {
  purposeOptions.value = await fetchPurposeOptions();
} catch (err) {
  console.error('ご利用目的の取得に失敗しました:', err);
}
</script>