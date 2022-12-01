<template>
  <header>
    <nav>
      <router-link to="/blog">blog</router-link>
    </nav>
  </header>

  <router-view></router-view>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped></style>
