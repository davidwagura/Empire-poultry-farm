<template>
    <div>
      <NavbarPage />
      <RouterView />
      <FooterPage />
    </div>
</template>

<script setup>
import NavbarPage from './components/NavbarPage.vue';
import FooterPage from './components/FooterPage.vue';
</script>
