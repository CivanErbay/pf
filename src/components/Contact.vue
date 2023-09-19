<template>
  <div>
    <section class="scroll-hidden flex">
      <div class="w-full sm:w-1/2 md:w-[600px]">
        <h3 class="font-rubik text-4xl md:text-7xl mb-9">Contact</h3>

        <form
          action="https://formsubmit.co/d330320b176d4ace6fe30656c0275f61"
          method="POST"
          ref="contactForm"
          @submit.prevent="handleFormSubmit"
          v-if="!hasBeenSubmitted"
        >
          <div class="mb-4">
            <label for="name" class="block font-bold mb-2">Name:</label>
            <input
              type="text"
              name="name"
              class="w-full px-3 py-2 border border-gray-400 font-rubik text-black"
              required
              v-model="formData.name"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block font-bold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              class="w-full px-3 py-2 border border-gray-400 font-rubik text-black"
              required
              v-model="formData.email"
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block font-bold mb-2">Message:</label>
            <textarea
              name="message"
              rows="4"
              class="w-full px-3 py-2 border border-gray-400 font-rubik text-black"
              required
              v-model="formData.message"
            ></textarea>
          </div>
          <button
            type="button"
            class="relative inline-flex items-center justify-start px-5 py-3 font-bold group w-fit"
            @click="validateAndSubmit"
            :disabled="isSubmitting"
          >
            <div class="flex" v-if="isSubmitting">
              <div class="relative overflow-visible">
                <div
                  class="w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200"
                ></div>

                <div
                  class="w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-gray-500 border-t-transparent"
                ></div>
              </div>
              <p class="ml-16 mt-3">This might take a while ...</p>
            </div>
            <span
              class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-gray-900"
              :class="{ hidden: isSubmitting }"
              >SEND MESSAGE</span
            >
            <span
              class="absolute inset-0 border-2 border-sky-200"
              :class="{ hidden: isSubmitting }"
            ></span>
          </button>
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://www.civan-erbay.de/mailsuccess"
          />
        </form>
        <img
          v-show="hasBeenSubmitted"
          alt="back button"
          class="h-[440px]"
          src="../assets/checkmark.svg"
        />
      </div>
    </section>
    <!-- SectionsAboutUs component goes here -->
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const isSubmitting = ref(false);
    const hasBeenSubmitted = ref(false);
    const contactForm = ref(null);
    const router = useRouter();
    const formData = ref({
      name: "",
      email: "",
      message: "",
    });

    const validateAndSubmit = () => {
      if (validateForm()) {
        handleFormSubmit();
      }
    };

    const validateForm = () => {
      const { name, email, message } = formData.value;
      if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return false;
      }
      return true;
    };

    const handleFormSubmit = async () => {
      isSubmitting.value = true;
      try {
        // Send the POST request using the Fetch API or another method.
        // Replace this with your actual POST request code.
        const response = await fetch(
          "https://formsubmit.co/d330320b176d4ace6fe30656c0275f61",
          {
            method: "POST",
            body: new FormData(contactForm.value),
          }
        );

        /*      if (response.ok) { */
        // Success! Handle the successful response or redirection here.

        /*    } else {
          // Handle errors here.
          console.error("Error submitting the form:", response.statusText); */
        /*   } */
      } catch (error) {
        console.error("Error submitting the form:", error);
      } finally {
        /* router.push("/mailsuccess"); */
        const routeData = router.resolve({ name: "mailsuccess" });
        window.open(routeData.href, "_blank");
        isSubmitting.value = false;
      }
    };

    return {
      isSubmitting,
      hasBeenSubmitted,
      contactForm,
      formData,
      validateAndSubmit,
    };
  },
};
</script>
