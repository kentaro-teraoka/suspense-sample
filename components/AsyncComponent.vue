<template>
  <p>message: {{ message }}</p>
</template>

<script lang="ts" setup>
const message = ref<string>("");

const fetchMessage = async () => {
  await new Promise(resolve => setTimeout(resolve, 1500)) // 疑似ローディング
  if (Math.random() < 0.5) {
    throw new Error('データ取得に失敗しました') // 50%の確率でエラーを発生
  }
  return "データ取得成功"
}

try {
  message.value = await fetchMessage(); // 非同期処理  
} catch (err) {
  console.error("err")
  throw createError(err)
}
</script>