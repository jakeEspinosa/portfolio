<script setup lang="ts">
  import { useRoute } from "vue-router";
  import { ref, watch } from "vue";
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
  <h2 v-html="post.title" class="main-text pt-3"></h2>
  <div v-html="content" class="main-text"></div>
</template>
