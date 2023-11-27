import { createApp } from "vue";
import toast from "vue-toast-notification";
import { createPinia } from "pinia";

import App from "@/App.vue";
import i18n from "@/lib/i18n";
import "@/styles/global.css";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(toast);
app.use(i18n);

app.mount("#app");
