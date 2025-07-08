<template>
  <div v-if="isLoggedIn" class="space-y-10">
    <h2 class="text-4xl font-bold">Your Profile</h2>
    <NuxtErrorBoundary>
      <Suspense>
        <UserInfoCard />
        <template #fallback>
          <NuxtSkeleton class="w-full h-40 rounded-md" />
        </template>
      </Suspense>
      <template #error="{error}">
        <NuxtCard variant="subtle">
          <div class="flex justify-between items-center">
            <p>{{error}}</p>
            <NuxtButton variant="outline">
              登録する
            </NuxtButton>
          </div>
        </NuxtCard>
      </template>
    </NuxtErrorBoundary>

    <h2 class="text-4xl font-bold">Your Images</h2>
    <NuxtErrorBoundary>
      <Suspense>
        <UserPostImages />
        <template #fallback>
          <ImageGrid :items="Array(5)">
            <NuxtSkeleton class="w-full aspect-square rounded-md" />
          </ImageGrid>
        </template>
      </Suspense>
      <template #error>
        <ImageGrid :items="Array(5)">
          <div class="grid place-content-center aspect-square rounded-md bg-elevated/50">
            <NuxtIcon name="i-lucide-image-off" class="size-12 bg-gray-500" />
          </div>
        </ImageGrid>
      </template>
    </NuxtErrorBoundary>
  </div>
  <div v-else>
    <h1 class="text-4xl font-bold">You need login</h1>
  </div>
</template>

<script lang="ts" setup>
import UserInfoCard from '~/components/UserInfoCard.vue';
import UserPostImages from '~/components/UserPostImages.vue';
import ImageGrid from '~/components/ImageGrid.vue';
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