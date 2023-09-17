<script setup>
/* import SvgScroll from "./components/SvgScroll.vue";
import Landing from "./components/Landing.vue";
import Journey from "./components/Journey.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue"; */
</script>

<template>
  <main>
    <!-- <img alt="Vue logo" class="logo" src="./assets/cvline.svg" /> -->

    <!-- <Landing></Landing> -->
    <!-- <SvgScroll></SvgScroll> -->
    <router-view></router-view>
    <!--  <Skills></Skills>
    <Projects></Projects> -->
    <!-- <Journey></Journey> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  .logo {
    height: 200vh;
  }
}
</style>
