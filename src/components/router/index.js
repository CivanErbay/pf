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
  async scrollBehavior(to, from) {
    if (to.name === "index" && isContentPage(from)) {
      await pageTransition();
      return { el: "#projects" };
    }

    return undefined;
  },
});

export default router;
