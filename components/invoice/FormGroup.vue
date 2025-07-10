<template>
  <NuxtForm
    :state="form"
    class="space-y-6">
    <NuxtFormField v-if="isJuridicPerson" label="利用区分" name="usage" size="xl">
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

    <Suspense>
      <PurposeForm v-model="form.purpose" />
      <template #fallback>
        <div class="space-y-4">
          <NuxtSkeleton class="w-50 h-5 rounded-md" />
          <NuxtSkeleton class="w-80 h-10 rounded-md" />
        </div>
      </template>
    </Suspense>

    <NuxtFormField label="エビデンス" name="evidence" size="xl">
      <NuxtInput
        type="file"
        v-model="form.evidence" />
    </NuxtFormField>
  </NuxtForm>
</template>

<script lang="ts" setup>
import { type InvoiceType, fetchInvoiceHistory, fetchIsJuridicPerson } from '~/api/invoice/history'
import PurposeForm from '~/components/invoice/PurposeForm.vue'

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
const isJuridicPerson = ref<boolean>(false)
const usageOptions = ref<string[]>(["個人", "法人"])

// form取得
try {
  if(invoiceId.value) {
    const data = await fetchInvoiceHistory(invoiceId.value);
    Object.assign(form, data);
  }
} catch (err) {
  console.error('請求書の取得に失敗しました', err);
}

// 法人かどうか取得
try {
  isJuridicPerson.value = await fetchIsJuridicPerson()
} catch (err) {
  console.error('請求書の取得に失敗しました', err);
}
</script>