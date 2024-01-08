/*
Copyright (C) 2024 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
*/

import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LandingPage },
    { path: "/about", component: AboutPage },
    { path: "/contact", component: ContactPage },
  ],
});

export default router;
