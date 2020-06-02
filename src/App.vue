<template>
  <div id="app">
    <LoginUser msg="Welcome to Your Vue.js App" />
    <font-awesome-icon icon="" />
  </div>
</template>

<script>
import LoginUser from "./components/LoginUser.vue";

export default {
  name: "App",
  components: {
    LoginUser,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
