<template>
  <div>
    <SvgScroll class="rotate-180"></SvgScroll>
    <div class="relative">
      <Landing id="landing"></Landing>
      <Skills id="skills"></Skills>
      <Projects id="projects"></Projects>
      <Contact id="contact"></Contact>
      <Footer id="footer"></Footer>
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
