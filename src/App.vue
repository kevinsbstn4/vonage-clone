<template>
  <div id="app">
    <VideoDash msg="Welcome to Your Vue.js App" />
    <font-awesome-icon icon="" />
  </div>
</template>

<script>
import VideoDash from "./components/VideoDash.vue";

export default {
  name: "App",
  components: {
    VideoDash,
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
