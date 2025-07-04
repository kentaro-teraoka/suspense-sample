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
isLoggedIn.value = await fetchIsLoggedIn() // 2000ms遅延
</script>