<template>
  <article>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </article>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { getProductById } from '@/services/db.js';

const route = useRoute();

const post = await getProductById(route.params.id);
</script>

<!-- 
  Utan experimentella Suspense 
-->

<!-- <script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getProductById } from '@/services/db.js';

const route = useRoute();

const post = ref({});

onMounted(async () => {
  post.value = await getProductById(route.params.id);
});
</script> -->

<style scoped></style>
