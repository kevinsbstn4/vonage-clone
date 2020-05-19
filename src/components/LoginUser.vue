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
            required
            v-model="email"
            class="fadeIn second"
            name="login"
            placeholder="Username"
          />
          <input
            type="text"
            required
            v-model="password"
            class="fadeIn third"
            name="login"
            placeholder="Password"
          />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: "LoginUser",
  methods: {
    login: function() {
      this.$http
        .post("http://157.245.206.206:9811/api/login", {
          email: this.email,
          password: this.password,
        })
        .then(
          function(response) {
            if (response.status === 200 && "token" in response.body) {
              this.$session.start();
              this.$session.set("jwt", response.body.token);
              Vue.http.headers.common["Authorization"] =
                "Bearer " + response.body.token;
              this.$router.push({
                path: "/home",
                name: "HelloWorld",
                component: HelloWorld,
              });
            }
          },
          function(err) {
            console.log("err", err);
          }
        );
    },
  },
};
</script>
