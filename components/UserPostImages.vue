<template>
  <ImageGrid :items="images">
    <template #default="{item}">
      <img
        class="rounded-md"
        :src="item"
        alt="" />
    </template>
  </ImageGrid>
</template>

<script lang="ts" setup>
import { fetchUserPostImages } from '~/api/user';
import ImageGrid from '~/components/ImageGrid.vue';

const images = await fetchUserPostImages() // 4000ms遅延
</script>