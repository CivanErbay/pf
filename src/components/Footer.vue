<template>
  <footer class="py-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-sm flex">
        <router-link
          to="/impressum"
          class="hover:text-black transition duration-300"
          >Impressum</router-link
        >
        <a href="mailto:info@civan-erbay.de" class="ml-6"
          >info@civan-erbay.de</a
        >
        <p class="ml-6">2023 - Civan Erbay</p>
      </div>
      <div class="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/civan-erbay-009bb01ab/"
          target="_blank"
        >
          <img class="h-6" src="../assets/linkedin.svg" alt="linkedin link" />
        </a>
        <a href="https://www.instagram.com/cvn.001/" target="_blank">
          <img class="h-6" src="../assets/instagram.svg" alt="instagram link" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
