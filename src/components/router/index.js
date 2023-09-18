import { createRouter, createWebHistory } from "vue-router";
import Project from "./../Project.vue";
import MailSuccess from "./../MailSuccess.vue";

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
      path: "/mailsuccess",
      name: "Successful mail",
      component: MailSuccess,
    },
  ],
});

export default router;
