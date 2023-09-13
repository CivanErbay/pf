<script setup>
import SvgScroll from "./components/SvgScroll.vue";
import Landing from "./components/Landing.vue";
import Journey from "./components/Journey.vue";
import Skills from "./components/Skills.vue";
</script>

<template>
  <main>
    <!-- <img alt="Vue logo" class="logo" src="./assets/cvline.svg" /> -->

    <Landing></Landing>
    <!-- <SvgScroll></SvgScroll> -->

    <Skills></Skills>
    <Journey></Journey>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  /*   header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  .logo {
    height: 200vh;
  }

  /*   header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
