<template>
  <div class="app-wrapper">
    <AppMain />
    <Tabbar />
  </div>
</template>

<script setup>
import AppMain from './components/AppMain.vue'
import Tabbar from './components/Tabbar.vue'
</script>

<style lang="scss">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>