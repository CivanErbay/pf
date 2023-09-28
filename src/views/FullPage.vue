<template>
  <div>
    <SvgScroll class="rotate-180"></SvgScroll>
    <div class="relative">
      <Landing></Landing>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import SvgScroll from "../components/SvgScroll.vue";
import Landing from "./../components/Landing.vue";
import Projects from "./../components/Projects.vue";
import Skills from "./../components/Skills.vue";
import Contact from "./../components/Contact.vue";
import Footer from "./../components/Footer.vue";

</script>

<style scoped></style>
