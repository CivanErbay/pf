<template>
  <div class="p-4 flex">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(image, index) in currProject.images" :key="index">
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-40 h-40 object-cover rounded-lg cursor-pointer"
          @click="openImage(image)"
        />
      </div>
    </div>

    <div class="mt-4 ml-8">
      <h2 class="text-2xl font-semibold">{{ currProject.name }}</h2>
      <p class="text-gray-600 mt-2">{{ currProject.description }}</p>
    </div>
  </div>

  <div
    v-if="isImageModalOpen"
    class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50 overflow-scroll cursor-pointer"
    @click="closeImage"
  >
    <div class="relative max-w-4xl max-h-4xl">
      <!-- <button
        class="absolute top-4 right-4 text-white text-xl"
        @click="closeImage"
      >
        &times;
      </button> -->
      <img
        :src="selectedImage.src"
        :alt="selectedImage.alt"
        class="max-w-full max-h-full mx-auto"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import kappesKimchiImageFirst from "@/assets/project-img/kappes/kappes-5.png";
import kappesKimchiImageSecond from "@/assets/project-img/kappes/kappes-1.png";
import kappesKimchiImageThird from "@/assets/project-img/kappes/kappes-2.png";
import kappesKimchiImageFourth from "@/assets/project-img/kappes/kappes-3.png";
import kappesKimchiImageFifth from "@/assets/project-img/kappes/kappes-4.png";

import schwarmplanerImageFirst from "@/assets/project-img/schwarmplaner/schwarm-5.png";
import schwarmplanerImageSecond from "@/assets/project-img/schwarmplaner/schwarm-1.png";
import schwarmplanerImageThird from "@/assets/project-img/schwarmplaner/schwarm-2.png";
import schwarmplanerImageFourth from "@/assets/project-img/schwarmplaner/schwarm-3.png";
import schwarmplanerImageFifth from "@/assets/project-img/schwarmplaner/schwarm-4.png";

import meineSwmImageFirst from "@/assets/project-img/mswm/mswm-1.png";
import meineSwmImageSecond from "@/assets/project-img/mswm/mswm-2.png";
import meineSwmImageThird from "@/assets/project-img/mswm/mswm-3.png";

import swmImageFirst from "@/assets/project-img/swm/swm-1.png";
import swmImageSecond from "@/assets/project-img/swm/swm-2.png";
import swmImageThird from "@/assets/project-img/swm/swm-3.png";
import swmImageFourth from "@/assets/project-img/swm/swm-4.png";

import mzmFirst from "@/assets/project-img/mzm/mzm-1.png";
import mzmSecond from "@/assets/project-img/mzm/mzm-2.png";
import mzmThird from "@/assets/project-img/mzm/mzm-3.png";
import mzmFourth from "@/assets/project-img/mzm/mzm-4.png";

import dekaFirst from "@/assets/project-img/deka/deka-1.png";
import dekaSecond from "@/assets/project-img/deka/deka-2.png";
import dekaThird from "@/assets/project-img/deka/deka-3.png";
import dekaFourth from "@/assets/project-img/deka/deka-4.png";

const route = useRoute();
const projectId = computed(() => route.params.projectId);

const projects = [
  {
    name: "kappes-kimchi.de",
    path: "kappes-kimchi",
    link: "https://kappes-kimchi.de/",
    description:
      "Creation of a feature-rich webshop for Kappes-Kimchi, enabling an online presentation of high-quality products.",
    images: [
      {
        src: kappesKimchiImageFirst,
        alt: "kappes kimchi project photo 1",
      },
      {
        src: kappesKimchiImageSecond,
        alt: "kappes kimchi project photo 2",
      },
      {
        src: kappesKimchiImageThird,
        alt: "kappes kimchi project photo 3",
      },
      {
        src: kappesKimchiImageFourth,
        alt: "kappes kimchi project photo 4",
      },

      {
        src: kappesKimchiImageFifth,
        alt: "kappes kimchi project photo 5",
      },
    ],
  },
  {
    name: "schwarmplaner.zugvoegelfestival.org",
    path: "schwarmplaner-zugvoegel",
    link: "https://schwarmplaner.zugvoegelfestival.org/",
    description: "lorem",
    images: [
      {
        src: schwarmplanerImageFirst,
        alt: "schwarmplaner project photo 1",
      },
      {
        src: schwarmplanerImageSecond,
        alt: "schwarmplaner project photo 2",
      },
      {
        src: schwarmplanerImageThird,
        alt: "schwarmplaner project photo 3",
      },
      {
        src: schwarmplanerImageFourth,
        alt: "schwarmplaner project photo 4",
      },

      {
        src: schwarmplanerImageFifth,
        alt: "schwarmplaner project photo 5",
      },
    ],
  },
  {
    name: "meine.swm.de",
    path: "meine-swm",
    link: "https://meine.swm.de/",
    description: "lorem",
    images: [
      {
        src: meineSwmImageFirst,
        alt: "meine SWM project photo 1",
      },
      {
        src: meineSwmImageSecond,
        alt: "meine SWM project photo 2",
      },
      {
        src: meineSwmImageThird,
        alt: "meine SWM project photo 3",
      },
    ],
  },
  {
    name: "swm.de",
    path: "swm",
    link: "https://www.swm.de/",
    description: "lorem",
    images: [
      {
        src: swmImageFirst,
        alt: "swm project photo 1",
      },
      {
        src: swmImageSecond,
        alt: "swm project photo 2",
      },
      {
        src: swmImageThird,
        alt: "swm project photo 3",
      },
      {
        src: swmImageFourth,
        alt: "swm project photo 4",
      },
    ],
  },
  {
    name: "mundzumund.org",
    path: "mundzumund-festival",
    link: "https://mundzumund.org/",
    description: "lorem",
    images: [
      {
        src: mzmFirst,
        alt: "mundzumund project photo 1",
      },
      {
        src: mzmSecond,
        alt: "mundzumund project photo 2",
      },
      {
        src: mzmThird,
        alt: "mundzumund project photo 3",
      },
      {
        src: mzmFourth,
        alt: "mundzumundproject photo 4",
      },
    ],
  },
  {
    name: "deka.de",
    path: "deka",
    link: "https://www.deka.de/",
    description: "lorem",
    images: [
      {
        src: dekaFirst,
        alt: "deka project photo 1",
      },
      {
        src: dekaSecond,
        alt: "deka project photo 2",
      },
      {
        src: dekaThird,
        alt: "deka project photo 3",
      },
      {
        src: dekaFourth,
        alt: "deka project photo 4",
      },
    ],
  },
];

const currProject = computed(() => {
  return projects.find((project) => project.path === projectId.value) || null;
});

const isImageModalOpen = ref(false);
const selectedImage = ref(null);

function openImage(image) {
  selectedImage.value = image;
  isImageModalOpen.value = true;
}

function closeImage() {
  selectedImage.value = null;
  isImageModalOpen.value = false;
}
</script>
