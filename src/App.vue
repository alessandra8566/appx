<template>
    <!-- <component :is="layout"> -->
        <router-view />
    <!-- </component> -->
</template>

<script setup>
// import { computed, ref, shallowRef } from "vue";
// import { useRoute } from "vue-router";
// import Dashboard from "@/layouts/Dashboard.vue";
// import Default from "@/layouts/Default.vue";

// const route = useRoute();
// const layoutObj = { 
//     "dashboard": Dashboard,
//     "default": Default
// };
// const currentCom = shallowRef(Dashboard)
// const layout = computed(() => currentCom.value = layoutObj[route.meta.layout])
</script>
