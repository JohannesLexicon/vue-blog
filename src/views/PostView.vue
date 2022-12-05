<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import * as db from '@/data/db.js';

const route = useRoute();

const post = db.get(route.params.id);
</script>

<style scoped></style>
