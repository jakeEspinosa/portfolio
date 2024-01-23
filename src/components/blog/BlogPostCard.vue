<!-- 
Copyright (C) 2024 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
-->

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
    },
    id: {
      type: String,
    },
  });
</script>

<template>
  <div class="container-fluid d-flex justify-content-center">
    <h3 class="main-text fs-2 pb-2">
      {{ props.title }}
    </h3>
  </div>
</template>
