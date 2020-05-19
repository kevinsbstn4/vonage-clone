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
        <form>
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="login"
            placeholder="Username"
          />
          <input
            type="text"
            id="password"
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
export default {
  name: "LoginUser",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
