<!-- 
Copyright (C) 2023 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
-->

<script setup lang="ts">
  import FooterComponent from "@/components/main-view/footer/FooterComponent.vue";
  import MainContent from "@/components/main-view/MainContent.vue";
  import NavBarComponent from "@/components/main-view/NavBarComponent.vue";
  import constants from "@/utilities/constants";
</script>

<template>
  <header class="dvh-15">
    <NavBarComponent />
  </header>
  <main>
    <MainContent />
  </main>
  <footer class="dvh-10">
    <FooterComponent :copyright-string="constants.copyrightString" />
  </footer>
</template>
