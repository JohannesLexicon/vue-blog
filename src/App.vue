<template>
  <TheNavbar />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheNavbar from '@/components/TheNavbar.vue';
</script>

<style scoped></style>
