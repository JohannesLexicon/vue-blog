<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post.id"
    >
      <header>
        <router-link :to="'/' + post.id">{{ post.title }}</router-link>
      </header>
      <p>
        {{ post.content }}
      </p>
    </li>
  </ul>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { reactive } from 'vue';
import * as db from '@/data/db.js';

const posts = reactive(db.getAll(2));
</script>

<style scoped></style>
