<template>
  <div class="main-login">
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
          <img
            style="width: 30%; padding-top: 5%"
            src="https://webstockreview.net/images/user-icon-png-5.png"
            id="icon"
            alt="User Icon"
          />
        </div>

        <!-- Login Form -->
        <form @submit.prevent="login">
          <input
            type="text"
            v-model="email"
            class="fadeIn second"
            name="login"
            placeholder="Email"
          />
          <input
            type="text"
            v-model="password"
            class="fadeIn third"
            name="login"
            placeholder="Password"
          />
          <input
            type="submit"
            class="fadeIn fourth"
            value="log In"
            @click="login"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "LoginUser",
  methods: {
    login: function() {
      Axios.post("http://157.245.206.206:9811/api/login", {
        email: "user@gmail.com",
        password: "rahasia123",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((resp) => {
          console.log(resp);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //MAY 19 2O2O
    // mounted() {
    //   const t = this;
    //   axios.get("http://157.245.206.206:9811/api/login").then((response) => {
    //     t.login = response;
    //     if (localStorage.response) {
    //       this.response = localStorage.response;
    //     }
    //   });
  },
};
</script>
