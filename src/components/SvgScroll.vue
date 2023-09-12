<template>
  <div class="svg-container">
    <svg
      class="h-[900px] md:h-[1855px] md:w-[733] mr-3"
      viewBox="0 0 733 1355"
      fill="none"
    >
      <!--  <svg width="1900" height="1000" viewBox="0 0 150 1920" fill="none">  -->
      <!--   mobile -->

      <path
        ref="path"
        id="svgPath"
        d="M573 8V151H7.5V419H725V731H153V925H622V1075H261.5V1247H489"
        stroke-width="15"
        stroke="rgb(44, 62, 80)"
        stroke-dasharray="0"
        stroke-dashoffset="0"
      />
    </svg>
    <!--    <img
      alt="civan erbay"
      class="me"
      :class="{ 'visible-me': visibleMe }"
      src="../assets/pixel_me.png"
    /> -->


  </div>
</template>

<script>
import Journey from "./Journey.vue";

export default {
  data() {
    return {
      visibleMe: false,
    };
  },
  components: { Journey },
  methods: {
    fillingSVGPaths() {
      let scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      console.log(scrollPercentage);

      let path = document.getElementById("svgPath");

      let pathLength = path.getTotalLength();

      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;

      let drawLength = pathLength * scrollPercentage;
      console.log(drawLength);
      console.log(pathLength);
      path.style.strokeDashoffset = pathLength - drawLength;

      scrollPercentage > 0.6
        ? (this.visibleMe = true)
        : (this.visibleMe = false);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.fillingSVGPaths);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.fillingSVGPaths);
  },
};
</script>

<style scoped>
.svg-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute
}

.me {
  position: absolute;
  height: 520px;
  opacity: 0;
  margin-bottom: 133px;
  margin-right: 92px;
  transition: all 0.5s ease-in-out;
}

.visible-me {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}
</style>
