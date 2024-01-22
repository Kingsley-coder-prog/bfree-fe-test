import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import LoginPage from "../views/LoginPage.vue";
import UserDetails from "../views/UserDetails.vue";
import UserPage from "../views/UserPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "loginpage",
      component: LoginPage
    },
    {
      path: "/userdetails",
      name: "userdetails",
      component: UserDetails
    },
    {
      path: "/userpage",
      name: "userpage",
      component: UserPage
    }
  ]
});

export default router;
