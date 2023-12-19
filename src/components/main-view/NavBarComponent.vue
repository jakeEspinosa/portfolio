<!-- 
Copyright (C) 2023 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
-->

<script setup lang="ts">
  import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-primary">
    <div class="container-fluid px-0 width-container">
      <router-link class="navbar-brand d-flex align-items-center gap-5" to="/">
        <i class="bi bi-cloud-lightning-rain" />
        <h1 class="d-inline-block font-italic">Jake E.</h1>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarToggler"
        class="collapse navbar-collapse justify-content-end"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/resume">Resume</router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/jakeEspinosa"
              target="_blank"
              >GitHub</a
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
