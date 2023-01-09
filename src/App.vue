<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

</script>

<template>
  <div class="wrapper">
    <HeaderComponent />
    <RouterView />
  </div>
  <FooterComponent/>
</template>

<style lang="scss">
.wrapper {
  min-height: 100vh;
  margin-bottom: -50px;
}
</style>
