import { defineStore } from "pinia";

export const appMainStore = defineStore("data", {
    state: () => {
        return {
            user: null
        };
    }
});
