<!--
Copyright (C) 2024 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
-->

<script setup lang="ts">
  import { useRoute } from "vue-router";
  import { ref, watch } from "vue";
  import ArticleSkeleton from "@/components/blog/ArticleSkeleton.vue";
  import markdownit from "markdown-it";
  import api from "@/utilities/api";
  import constants from "@/utilities/constants";

  const route = useRoute();
  const isLoaded = ref(false);
  const post = ref();
  const URL = constants.blogPostUrl + `?id=${route.params.id}`;
  const md = markdownit();
  const content = ref();

  const getPosts = async (url: string) => {
    const data = await api.get(url);
    post.value = data;
    isLoaded.value = true;
  };

  getPosts(URL);
  watch(post, (newPost) => {
    content.value = md.render(newPost.content);
  });
</script>

<template>
  <div class="container-fluid d-flex flex-column align-items-center w-80ch">
    <ArticleSkeleton v-if="isLoaded === false" />
    <article v-else>
      <h2 v-html="post.title" class="main-text pt-3"></h2>
      <div class="container-fluid d-flex justify-content-between">
        <p class="main-text fs-3">Author: {{ post.author }}</p>
        <p class="main-text fs-3">Published: {{ post.publish_date }}</p>
      </div>
      <div v-html="content" class="main-text"></div>
    </article>
  </div>
</template>
