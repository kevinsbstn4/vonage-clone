<template>
  <div class="main">
    <!-- NAVBAR -->
    <div class="nav1">
      <div class="d-flex justify-content-end">
        <div class="p-2 bd-highlight">Vonage for Home</div>
        <div class="p-2 bd-highlight">Log In</div>
        <div class="p-2 bd-highlight">Support</div>
      </div>
    </div>

    <div class="nav2">
      <nav class="navbar navbar-expand-lg ">
        <img
          style="width: 15%"
          src="https://image4.owler.com/logo/vonage_owler_20191212_183242_original.jpg"
        />
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a style="color: black;" class="nav-link" href="#">Products</a>
            </li>
            <li class="nav-item">
              <a style="color: black;" class="nav-link" href="#">Resources</a>
            </li>
            <li class="nav-item">
              <a style="color: black;" class="nav-link" href="#"
                >Developer Center</a
              >
            </li>
            <li class="nav-item">
              <a style="color: black;" class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a style="color: black;" class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- NAVBAR END -->
    <!-- JUMBOTRON -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
