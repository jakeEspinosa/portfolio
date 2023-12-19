import { createApp } from "vue";
import router from "@/router";
import App from "@/App.vue";

import "@/assets/scss/styles.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as bootstrap from "bootstrap";

const app = createApp(App);
app.use(router);
app.mount("#app");
