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

    <!--     <router-view v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </Transition>
      ></router-view
    > -->
    <router-view v-slot="{ Component }">
      <Transition name="page-slide" mode="in">
        <component :is="Component"></component>
      </Transition>
    </router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.page-slide-enter-active,
.page-slide-leave-active {
  transition: 600ms ease all;
}

.page-slide-enter-from,
.page-slide-leave-to {
  transform: translateY(60px);
  opacity: 0;
}

@media (min-width: 1024px) {
  .logo {
    height: 200vh;
  }
}
</style>
