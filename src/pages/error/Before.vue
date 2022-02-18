<template>
  <section class="before">
    <section class="empty"></section>
    <p>活动还未开始</p>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.before {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .empty {
    width: 220px;
    height: 180px;
    background-image: url("assets/img/empty.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  p {
  }
}
</style>