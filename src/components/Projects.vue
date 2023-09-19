<template>
  <section class="scroll-hidden relative z-10">
    <h3 class="font-rubik text-4xl md:text-7xl mb-9 mx-auto">My Experience</h3>
    <p class="p-1 md:text-xl">
      Relevant projects I was allowed to participate in
    </p>
    <div class="flex flex-wrap items-center gap-10 py-[36px]">
      <div
        v-for="project in projects"
        class="relative cursor-pointer overflow-hidden group"
      >
        <router-link
          :to="{ name: 'Project', params: { projectId: project.path } }"
        >
          <img
            alt=""
            class="h-[300px] w-[450px] object-cover z-10 transition-transform duration-300 hover:scale-105"
            :src="project.imgPath"
          />
        </router-link>
        <a
          :href="project.link"
          target="_blank"
          :alt="`${project.name} website link`"
          class="absolute bg-white text-base font-bold bottom-10 left-0 px-4 py-2 z-10 group-hover:bg-white group/link"
        >
          {{ project.name }}
          <div
            class="absolute bg-blue-100 h-0 bottom-1 group-hover/link:h-7 -z-10 transition-all inset-x-4"
          ></div>
        </a>
        <p
          class="absolute bottom-0 md:-bottom-12 py-3 px-4 bg-white text-base font-bold group-hover:bottom-0 transition-bottom duration-300"
        >
          {{ project.year }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: "kappes-kimchi.de",
    path: "kappes-kimchi",
    link: "https://kappes-kimchi.de/",
    imgPath: "./projectImgs/kappes-5.png",
    year: "2022-2023",
  },
  {
    name: "schwarmplaner.zugvoegelfestival.org",
    path: "schwarmplaner-zugvoegel",
    link: "https://schwarmplaner.zugvoegelfestival.org/",
    imgPath: "./projectImgs/schwarm-1.png",
    year: "2022-2023",
  },
  {
    name: "meine.swm.de",
    path: "meine-swm",
    link: "https://meine.swm.de/",
    imgPath: "./projectImgs/mswm-1.png",
    year: "2022-2023",
  },
  {
    name: "swm.de",
    path: "swm",
    link: "https://www.swm.de/",
    imgPath: "./projectImgs/swm-1.png",
    year: "2021-2023",
  },
  {
    name: "mundzumund.org",
    path: "mundzumund-festival",
    link: "https://mundzumund.org/",
    imgPath: "./projectImgs/mzm-1.png",
    year: "2021-2022",
  },
  {
    name: "deka.de",
    path: "deka",
    link: "https://www.deka.de/",
    imgPath: "./projectImgs/deka-1.png",
    year: "2020-2021",
  },
];
</script>
