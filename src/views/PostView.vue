<template>
  <article>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </article>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { findPost } from '@/data/db.js';

const route = useRoute();

const post = ref({});

onMounted(async () => {
  post.value = await findPost(route.params.id);
});
</script>

<style scoped></style>
