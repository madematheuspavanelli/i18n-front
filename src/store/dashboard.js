// store/dashboard.js
import { defineStore } from "pinia";
import { api } from "../lib/axios";

const defaultState = () => ({
  _fields: {
    title: "",
    language: "",
  },
});

export const useDashboardStore = defineStore("dashboard", {
  state: () => defaultState(),
  getters: {
    fields: (state) => state._fields,
  },
  actions: {
    async getDashboardData() {
      try {
        const response = await api.get("/dashboard");
        this._fields = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    updateDashboardData(payload) {
      return new Promise((resolve, reject) => {
        const purePayoad = {};

        for (const key in payload) {
          if (Boolean(payload[key])) {
            purePayoad[key] = payload[key];
          }
        }

        api
          .put("/dashboard", purePayoad)
          .then((response) => {
            this._fields = response.data;
            resolve(response.data);
          })
          .catch((error) => {
            console.error(error);
            this._fields = currentState;
            reject(error);
          });
      });
    },
  },
});
