/*
Copyright (C) 2024 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
*/

import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import BlogPosts from "@/views/BlogPosts.vue";
import ArticlePage from "@/views/ArticlePage.vue";
import InvalidPage from "@/views/InvalidPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LandingPage, meta: { title: "Home" } },
    { path: "/about", component: AboutPage, meta: { title: "About" } },
    { path: "/contact", component: ContactPage, meta: { title: "Contact" } },
    { path: "/blog", component: BlogPosts },
    { path: "/blog/:id", component: ArticlePage },
    {
      path: "/:notFound",
      component: InvalidPage,
      meta: { title: "404 - Page not found" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : "Jake E's Blog";
  next();
});

export default router;
