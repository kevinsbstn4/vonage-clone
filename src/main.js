import Vue from "vue";
import App from "./App.vue";
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

new Vue({
  render: (h) => h(App),
}).$mount("#app");
