import LoginPage from "../pages/LoginPage.vue";
import UserPage from "../pages/UserPage.vue";
import UserDetails from "../pages/UserDetails.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LoginPage
    },
    {
      path: "/userpage",
      component: UserPage
    },
    {
      path: "/userdetails/:id",
      component: UserDetails
    }
  ]
});

export default router;
