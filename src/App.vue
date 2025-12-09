<template>

  <div class="flex flex-col min-h-screen">
    <Navbar @toggle-menu="handleToggleMenu" :menu-aberto="menuAberto"/>
  
        <router-view @toggle-menu="handleToggleMenu" :menu-aberto="menuAberto" />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

const menuAberto = ref(false);

function handleToggleMenu() {
  menuAberto.value = !menuAberto.value;
}
</script>

<style scoped>

</style>
