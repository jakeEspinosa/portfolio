<!--
Copyright (C) 2024 Jake Espinosa Under the MIT License
See LICENSE.txt for details.
-->

<template>
  <nav class="navbar navbar-expand-lg main-bg dvh-15">
    <div class="container-fluid w-80vw">
      <router-link to="/" class="navbar-brand main-text fs-2 brand" href="#"
        >Jake E.</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav me-auto mb-2 mb-lg-0 container-fluid justify-content-end"
        >
          <li class="nav-item">
            <a class="nav-link main-text fs-5" aria-current="page" href="#"
              >Blog</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link main-text fs-5" aria-current="page" href="#"
              >Resume</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link main-text fs-5"
              aria-current="page"
              href="https://github.com/jakeEspinosa"
              target="_blank"
              >GitHub</a
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              class="nav-link main-text fs-5 router-link"
              aria-current="page"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/contact"
              class="nav-link main-text fs-5 router-link"
              aria-current="page"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .router-link:hover,
  .router-link:focus {
    color: var(--secondary-text-color);
  }

  .brand:hover {
    color: var(--secondary-text-color);
  }
  .brand:focus {
    color: var(--main-text-color);
  }
</style>
