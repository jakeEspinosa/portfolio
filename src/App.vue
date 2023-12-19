<!-- 
Copyright (C) 2023 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
 -->

<script setup lang="ts">
  import FooterComponent from "@/components/main-view/footer/FooterComponent.vue";
  import constants from "@/utilities/constants";
</script>

<template>
  <div class="dvh-15">
    <div>Header</div>
  </div>
  <div class="min-dvh-75">
    <div>Main</div>
  </div>
  <div class="dvh-10">
    <FooterComponent :copyright-string="constants.copyrightString" />
  </div>
</template>
