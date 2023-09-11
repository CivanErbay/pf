<script setup>
import SvgScroll from "./components/SvgScroll.vue";
</script>

<template>
  <!--   <header></header> -->

  <main>
    <!-- <img alt="Vue logo" class="logo" src="./assets/cvline.svg" /> -->
    <SvgScroll></SvgScroll>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
