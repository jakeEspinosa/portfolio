<!-- 
Copyright (C) 2023 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
-->

<script setup lang="ts">
  import IconBar from "@/components/main-view/footer/IconBar.vue";
  const props = defineProps({
    copyrightString: {
      type: String,
      default: "2024 All Rights Reserved.",
    },
  });
</script>

<template>
  <div
    class="container-fluid d-flex flex-column align-items-center justify-content-center h-100 main-bg"
  >
    <IconBar />
    <p
      class="container-fluid d-flex justify-content-center align-items-center text-center main-text"
    >
      &copy; {{ props.copyrightString }}
    </p>
  </div>
</template>
