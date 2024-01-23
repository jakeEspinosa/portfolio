<!-- 
Copyright (C) 2024 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
-->

<script setup lang="ts">
  import { ref } from "vue";
  import BlogPostsSkeleton from "@/components/blog/BlogPostsSkeleton.vue";
  import BlogPostCard from "@/components/blog/BlogPostCard.vue";
  import api from "@/utilities/api";
  import constants from "@/utilities/constants";

  const isLoaded = ref(false);
  const posts = ref();

  const getPosts = async (url: string) => {
    const data = await api.get(url);
    posts.value = data;
    isLoaded.value = true;
  };

  getPosts(constants.blogEndpointUrl);
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
  <div v-else>
    <hr class="main-text" />
    <BlogPostCard :title="posts[0].title" :id="posts[0].id" />
  </div>
</template>
