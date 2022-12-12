<template>
  <article>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </article>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { getPostById } from '@/data/db.js';

const route = useRoute();
const postId = route.params.id;
const post = getPostById(postId);
</script>

<style scoped></style>
