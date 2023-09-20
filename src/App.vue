<script setup>
import { checkScroll } from "./util/showSectionAnimation.js";
import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScroll);
  window.removeEventListener("resize", checkScroll);
});
</script>

<template>
  <main>
    <router-view v-slot="{ Component }">
      <Transition name="page-slide">
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
  transform: translateX(60px);
  opacity: 0;
}

@media (min-width: 1024px) {
  .logo {
    height: 200vh;
  }
}
</style>
