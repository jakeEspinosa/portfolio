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
  <hr class="main-text mb-0" />
  <div v-if="!isLoaded">
    <BlogPostsSkeleton />
    <hr class="main-text m-0" />
    <BlogPostsSkeleton />
    <hr class="main-text m-0" />
    <BlogPostsSkeleton />
    <hr class="main-text m-0" />
  </div>
  <div v-else>
    <div v-for="(post, index) in posts" :key="index">
      <BlogPostCard :title="post.title" :id="post.id" />
      <hr class="main-text m-0" />
    </div>
  </div>
</template>
