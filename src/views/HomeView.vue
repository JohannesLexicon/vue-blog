<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post.id"
    >
      <header>
        <router-link :to="'/' + post.id">
          {{ post.title }}
        </router-link>
      </header>
      <p>{{ post.snippet }}...</p>
    </li>
  </ul>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import * as db from '@/data/db.js';

const posts = ref(db.getAll(20));
</script>

<style scoped></style>
