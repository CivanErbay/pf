<script setup>

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
</style>
