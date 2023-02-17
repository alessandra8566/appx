<template>
    <a-layout
        class="layout-dashboard"
        id="layout-dashboard"
    >
        <!-- Main Sidebar -->
        <DashboardSidebar />
        <!-- / Main Sidebar -->

        <!-- layout-content -->
        <a-layout 
            :style="{
                'margin-left': sideBarCollapsed ? '60px' : '300px',
                'padding-right': '26px',
                'padding-left': '26px',
                'padding-bottom': '26px',
                'position': 'relative'
            }"
        >
            <DashboardHeader 
                :style="{
                    'width': `calc(100% - ${sideBarCollapsed ? '86px' : '326px'})`
                }"
            />
            <a-layout-content
            :style="{
                'margin-top': '116px'
            }"
            >
                <Breadcrumb />
                <router-view />
            </a-layout-content>
        </a-layout>
        <!-- layout-content -->

    </a-layout>
</template>

<script setup>
    import DashboardSidebar from '@/components/Sidebars/DashboardSidebar.vue';
    import DashboardHeader from '@/components/Headers/DashboardHeader.vue';
    import Breadcrumb from '@/components/Headers/Breadcrumb.vue';
    import { useCommonStore } from "@/store/common"
    import { storeToRefs } from "pinia";


    const store = useCommonStore();
    const { sideBarCollapsed } = storeToRefs(store);
</script>