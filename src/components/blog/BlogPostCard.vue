<!-- 
Copyright (C) 2024 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
-->

<script setup lang="ts">
  import { useRouter } from "vue-router";

  const router = useRouter();
  const props = defineProps({
    title: {
      type: String,
    },
    id: {
      type: Number,
    },
  });

  const clickHandler = () => {
    router.push(`/blog/${props.id}`);
  };
</script>

<template>
  <div class="container-fluid d-flex justify-content-center">
    <button type="button" class="btn" @click="clickHandler">
      <h2 class="main-text fs-2 pb-2">
        {{ props.title }}
      </h2>
    </button>
  </div>
</template>

<style scoped>
  .btn:hover,
  .btn:focus {
    filter: brightness(0.6);
  }
</style>
