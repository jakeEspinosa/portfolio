<!-- 
Copyright (C) 2024 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
-->

<script setup lang="ts">
  import FooterComponent from "@/components/main-view/footer/FooterComponent.vue";
  import MainContent from "@/components/main-view/MainContent.vue";
  import HeaderComponent from "./components/main-view/HeaderComponent.vue";
  import constants from "@/utilities/constants";
</script>

<template>
  <header class="dvh-15">
    <HeaderComponent />
  </header>
  <main>
    <MainContent />
  </main>
  <footer class="dvh-10">
    <FooterComponent :copyright-string="constants.copyrightString" />
  </footer>
</template>
