import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faUserSecret);
library.add(faFacebookSquare);
library.add(faTwitterSquare);
library.add(faInstagramSquare);
library.add(faYoutubeSquare);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
