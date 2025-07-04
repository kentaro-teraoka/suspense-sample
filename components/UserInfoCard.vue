<template>
  <NuxtCard variant="subtle">
    <template #header>
      <div class="flex items-center gap-4">
        <NuxtAvatar size="3xl" :src="userInfo?.iconSrc" />
        <div class="space-y-2">
          <h2 class="text-xl font-bold m-0">{{ userInfo?.name }}</h2>
          <p class="text-gray-500 m-0">{{ userInfo?.description }}</p>
        </div>
      </div>
    </template>
    <p>{{ userInfo?.comment }}</p>
  </NuxtCard>
</template>

<script lang="ts" setup>
import { type UserInfoType, fetchUserInfo } from "~/api/user";

const userInfo = ref<UserInfoType | null>(null)
userInfo.value = await fetchUserInfo() // 2000ms遅延
</script>