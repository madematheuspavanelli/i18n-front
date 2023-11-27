import { createI18n } from "vue-i18n";
import messages from "@/lang/messages";

const currentLocale =
  // localStorage.getItem("systemLanguage") || "en-US" || "pt-BR";
  localStorage.getItem("systemLanguage") || "pt-BR";

const i18n = createI18n({
  locale: currentLocale,
  fallbackLocale: "en-US",
  messages,
});

export default i18n;

export const globali18nGlobal = i18n.global;
