<template>
  <TheNavbar />
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Suspense>
        <component :is="Component"></component>
        <template #fallback>Loading...</template>
      </Suspense>
    </template>
  </RouterView>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheNavbar from '@/components/TheNavbar.vue';
</script>

<style scoped></style>
