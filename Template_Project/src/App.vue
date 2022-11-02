<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/addfriend">addfriend</RouterLink>
      </nav>
  </header>
  <main>
    <RouterView />
  </main>

</template>

<style scoped>
</style>
