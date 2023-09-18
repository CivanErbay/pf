import { createRouter, createWebHistory } from "vue-router";
import Project from "./../Project.vue";

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
  ],
});


export default router;
