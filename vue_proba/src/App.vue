<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
</script>

<template>
  <Header headerText="Vue.js" />
  <Menu />
  
  <RouterView />
</template>


