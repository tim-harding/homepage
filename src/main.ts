import { createApp } from "vue";
import Site from "./Site.vue";
import router from "./router";
import "./assets/main.css";

const site = createApp(Site);
site.use(router);
site.mount("#app");
