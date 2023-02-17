import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCommonStore = defineStore("common", () => {
    const sideBarCollapsed = ref(true);

    const toggleSideBarCollapsed = () => {
        sideBarCollapsed.value = !sideBarCollapsed.value;
    }

    return {
        sideBarCollapsed,
        toggleSideBarCollapsed,
    }
});