<template>
  <article>
    <header>
      <h1>{{ post.title }}</h1>
    </header>
    <div>
      <p>{{ post.body }}</p>
    </div>
  </article>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import * as db from '@/data/db.js';

const route = useRoute();

const post = ref({});

onMounted(async () => {
  post.value = await db.get(route.params.id);
});
</script>

<style scoped></style>
