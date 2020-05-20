import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueSession from "vue-session";
import VueRouter from "vue-router";
import "jquery";
import "popper.js";
import "bootstrap";
import "./assets/app.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

library.add(faSpinner);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.config.productionTip = false;
Vue.use(axios);
Vue.use(VueSession);
Vue.use(VueRouter);

// if (process.env.NODE_ENV === "production") {
//   window.axios.defaults.baseURL = "http://157.245.206.206:9809/api/login";
// } else {
//   window.axios.defaults.baseURL = "http://localhost:9809/";
// }
new Vue({
  render: (h) => h(App),
}).$mount("#app");
