import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import LoginPage from "../views/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "loginpage",
      component: LoginPage
    }
  ]
});

export default router;
