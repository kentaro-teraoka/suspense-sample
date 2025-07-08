<template>
  <div v-if="isLoggedIn" class="space-y-10">
    <h1 class="text-4xl font-bold">Your Profile</h1>
    <Suspense>
      <template #default>
        <UserInfoCard />
      </template>
      <template #fallback>
        <NuxtSkeleton class="w-full h-40 rounded-md" />
      </template>
    </Suspense>
  </div>
  <div v-else>
    <h1 class="text-4xl font-bold">You need login</h1>
  </div>
</template>

<script lang="ts" setup>
import UserInfoCard from '~/components/UserInfoCard.vue';
import { fetchIsLoggedIn } from "~/api/auth";

const isLoggedIn = ref<boolean | null>(null)

// ERROR①: 一部にcustom UIを表示(mypage.vueでhandling)
// isLoggedIn.value = await fetchIsLoggedIn() // 2000ms遅延

// ERROR②: error.vueを表示
try {
  isLoggedIn.value = await fetchIsLoggedIn() // 2000ms遅延
} catch (err: any) {
  console.log("err", err)
  throw createError({ statusCode: 401, statusMessage: "ログイン失敗", fatal: true })
}
</script>