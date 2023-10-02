<script setup>
import { transitionIn, transitionOut } from "./util/transitionAnimation.js";
</script>

<template>
  <main>
    <router-view v-slot="{ Component }">
      <!--       <keep-alive>
        <Transition
          name="page-slide"
          @before-leave="transitionOut"
          @enter="transitionIn"
        > -->
      <component :is="Component"></component>
      <!--        </Transition>
      </keep-alive> -->
    </router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.page-slide-enter-active,
.page-slide-leave-active {
  transition: 300ms ease-out all;
}

.page-slide-enter-from,
.page-slide-leave-to {
  transform: translateX(60px);
}

@media (min-width: 1024px) {
  .logo {
    height: 200vh;
  }
}
</style>
