<template>
  <div class="center">
    <div>
      <h1>{{ post.id }}</h1>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { reactive } from 'vue';
import * as db from '@/data/db.js';

const route = useRoute();

const post = reactive(db.get(route.params.id));
</script>

<style scoped></style>
