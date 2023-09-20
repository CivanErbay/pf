import { createRouter, createWebHistory } from "vue-router";
import Project from "./../Project.vue";
import MailSuccess from "./../MailSuccess.vue";
import Impressum from "./../Impressum.vue";
import { pageTransition } from "../../util/transitionAnimation";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../../views/FullPage.vue"),
    },
    {
      path: "/project/:projectId",
      name: "Project",
      component: Project,
    },
    {
      path: "/impressum",
      name: "Impressum",
      component: Impressum,
    },
  ],
  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      const el = window.location.href.split("#")[1];
      if (el.length) {
        document.getElementById(el).scrollIntoView({ behavior: "smooth" });
      }
    } else if (SavedPosition) {
      return SavedPosition;
    } else {
      document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    }
  },
});

export default router;
