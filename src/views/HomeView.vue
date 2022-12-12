<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post.id"
    >
      <h2>
        <router-link :to="'/' + post.id">{{ post.title }}</router-link>
      </h2>
      <p>{{ post.snippet }}...</p>
    </li>
  </ul>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { getAllSnippets } from '@/data/db.js';

const posts = getAllSnippets(20);
</script>

<style scoped></style>
