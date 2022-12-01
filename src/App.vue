<template>
  <header>
    <nav>
      <router-link to="/">home</router-link>
    </nav>
  </header>

  <router-view></router-view>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped></style>
