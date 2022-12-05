<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post.id"
    >
      <header>
        <h2>
          <router-link :to="'/' + post.id">{{ post.title }}</router-link>
        </h2>
        <p>
          <span>{{ post.snippet }}</span>
          <span>...</span>
        </p>
      </header>
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import * as db from '@/data/db.js';

const posts = ref([]);

onMounted(async () => {
  posts.value = await db.getAllSnippets(20);
});
</script>

<style scoped></style>
