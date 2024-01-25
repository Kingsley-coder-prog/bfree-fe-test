<template>
  <div>
    <!-- <login-page></login-page> -->
    <router-view></router-view>
    <!-- <user-page></user-page> -->
  </div>
</template>

<script>
// import LoginPage from "./views/login/LoginPage.vue";
import UserPage from "./pages/UserPage.vue";

export default {
  components: {
    // LoginPage
    UserPage
  }
};
</script>

<style scoped></style>
