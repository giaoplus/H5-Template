<template>
  <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o" to="/home">主页</TabbarItem>
    <TabbarItem name="create" icon="add-o" to="/create">创作</TabbarItem>
    <TabbarItem name="my" icon="user-o" to="/user">我的</TabbarItem>
  </Tabbar>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { Tabbar, TabbarItem } from 'vant'

const active = ref('home')
</script>