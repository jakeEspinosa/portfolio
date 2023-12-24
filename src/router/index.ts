/*
Copyright (C) 2023 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
*/

import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "@/views/AboutPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/about", component: AboutPage }],
});

export default router;
