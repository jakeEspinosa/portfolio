<!-- 
Copyright (C) 2024 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
-->

<script setup lang="ts">
  import { ref } from "vue";
  import BlogPostsSkeleton from "@/components/blog/BlogPostsSkeleton.vue";

  const isLoaded = ref(false);
</script>

<template>
  <h2 class="main-text pt-3">Blog Articles</h2>
  <div v-if="!isLoaded">
    <hr class="main-text" />
    <BlogPostsSkeleton />
    <hr class="main-text" />
    <BlogPostsSkeleton />
    <hr class="main-text" />
    <BlogPostsSkeleton />
    <hr class="main-text" />
  </div>
</template>
