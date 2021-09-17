<template>
  <router-view v-slot="{ Component }">
      <!-- <transition name="back"> -->
        <keep-alive :include="[]">
            <component :is="Component" />
        </keep-alive>
      <!-- </transition> -->
  </router-view>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useRoute } from 'vue-router'

const route = useRoute()
const key = computed(() => route.path)

watch(key, (a, b) => {
  console.log(a, route)
})
</script>

<style lang="scss"></style>