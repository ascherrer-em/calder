<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <HeaderBar></HeaderBar>

  <main class="flex-shrink-0">
    <div class="container">
      <RouterView />
    </div>
  </main>

  <FooterBar></FooterBar>
</template>

<style scoped></style>
