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
  <div
    class="d-flex flex-column min-dvh-100 secondary-bg justify-content-between"
  >
    <div>
      <header>
        <HeaderComponent />
      </header>
      <main>
        <MainContent />
      </main>
    </div>
    <footer class="dvh-15">
      <FooterComponent :copyright-string="constants.copyrightString" />
    </footer>
  </div>
</template>
