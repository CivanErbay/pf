<script setup></script>

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
