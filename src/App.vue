<!-- 
Copyright (C) 2023 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
 -->

<script setup lang="ts">
  import FooterComponent from "@/components/main-view/footer/FooterComponent.vue";
  import constants from "@/utilities/constants";
</script>

<template>
  <header class="dvh-15">
    <div>Header</div>
  </header>
  <main class="min-dvh-75">
    <div>Main</div>
  </main>
  <footer class="dvh-10">
    <FooterComponent :copyright-string="constants.copyrightString" />
  </footer>
</template>
