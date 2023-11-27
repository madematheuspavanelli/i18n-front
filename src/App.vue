<template>
  <div class="container mx-auto px-5 pt-8">
    <h1 class="mb-8 text-2xl">{{ $t("home.pageTitle") }}</h1>

    <form @submit.prevent="handleSubmit" class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-1">
        <label for="title" class="text-sm font-semibold text-gray-700">{{
          $t("home.fields.title.label")
        }}</label>
        <input
          type="text"
          placeholder="Título da página"
          class="rounded border px-2.5 py-2 text-sm"
          v-model="title"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label for="title" class="text-sm font-semibold text-gray-700">{{
          $t("home.fields.description.label")
        }}</label>
        <input
          type="text"
          placeholder="Idioma"
          class="rounded border px-2.5 py-2 text-sm"
          v-model="language"
        />
      </div>
      <button
        type="submit"
        class="mt-4 w-52 cursor-pointer rounded bg-green-600 px-8 py-1.5 text-white active:brightness-110"
      >
        Enviar
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import { useDashboardStore } from "@/store/dashboard";

const $toast = useToast();

export default {
  name: "App",
  computed: {
    ...mapState(useDashboardStore, ["fields"]),
    title: {
      get() {
        return this.fields.title;
      },
      set(value) {
        this.fields.title = value;
      },
    },
    language: {
      get() {
        return this.fields.language;
      },
      set(value) {
        this.fields.language = value;
      },
    },
  },
  created() {
    this.getDashboardData();
  },
  methods: {
    ...mapActions(useDashboardStore, [
      "getDashboardData",
      "updateDashboardData",
    ]),
    handleSubmit() {
      const payload = {
        title: this.title,
        language: this.language,
      };

      this.updateDashboardData(payload).then((response) => {
        $toast.success("Atualizado!");
        this.getDashboardData();
      });
    },
  },
};
</script>
