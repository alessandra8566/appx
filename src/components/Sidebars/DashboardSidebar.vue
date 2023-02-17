<template>
	<!-- Main Sidebar -->
    <a-layout-sider
        :collapsible="false"
		class="sider-primary"
		:reverseArrow="true"
        breakpoint="sm"
		collapsed-width="80"
		:collapsed="sideBarCollapsed"
        width="300"
    >
	    <div class="brand flex jcsb aic">
            <Icon 
                url="/images/icon/menu.svg" 
                class="sidebar-icon"
                @click="toggleSideBarCollapsed()"
            />
            <img src="/images/appx.png" v-if="!sideBarCollapsed">
        </div>

        <a-menu theme="light" mode="inline">
            <a-sub-menu key="Home_General">
                <template #title>
                    <span class="flex aic">
                        <Icon url="/images/icon/home.svg" class="sidebar-icon" />
                        <span class="sidebar-label text-lg">Home General</span>
                    </span>
                </template>
                <a-menu-item key="Home_General_1" class="text-md menu-item">Home General 1</a-menu-item>
                <a-menu-item key="Home_General_2" class="text-md menu-item">Home General 2</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="Marketing_Sales">
                <template #title>
                    <span class="flex aic">
                        <Icon url="/images/icon/market.svg" class="sidebar-icon" />
                        <span class="sidebar-label text-lg">Marketing & Sales</span>
                    </span>
                </template>
                <a-menu-item key="Option_1" class="menu-item">Option_1</a-menu-item>
                <a-sub-menu key="Option_2" class="menu-item" style="height: auto">
                    <template #title>
                        <span class="flex aic">
                            <span class="sidebar-label">Option_2</span>
                        </span>
                    </template>
                    <a-menu-item key="Suboption_1" class="font_200">Suboption_1</a-menu-item>
                    <a-menu-item key="Suboption_2" class="font_200">Suboption_2</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="Option_3" class="menu-item">Option_3</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="Customer_Service" class="customer_service">
                <template #title>
                    <span class="flex aic">
                        <Icon url="/images/icon/language.svg" class="sidebar-icon" />
                        <span class="sidebar-label text-lg wrap">Customer Service & Operation</span>
                    </span>
                </template>
                <a-menu-item key="Customer_Service_1" class="text-md menu-item">Customer Service & Operation 1</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="Carrier_Management">
                <template #title>
                    <span class="flex aic">
                        <Icon url="/images/icon/carrier.svg" class="sidebar-icon" />
                        <span class="sidebar-label text-lg">Carrier Management</span>
                    </span>
                </template>
                <a-menu-item key="Carrier_Management_1" class="text-md menu-item">Carrier Management 1</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="Finance_Accounting">
                <template #title>
                    <span class="flex aic">
                        <Icon url="/images/icon/finance.svg" class="sidebar-icon" />
                        <span class="sidebar-label text-lg">Finance & Accounting</span>
                    </span>
                </template>
                <a-menu-item key="Finance_Accounting_1" class="text-md menu-item">Finance & Accounting 1</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="HR_Development" class="hr_development" >
                <template #title>
                    <span class="flex aic">
                        <Icon url="/images/icon/group.svg" class="sidebar-icon" />
                        <span class="sidebar-label text-lg wrap">HR Development & Organization Setup</span>
                    </span>
                </template>
                <a-menu-item key="HR Development_1" class="text-md menu-item">HR Development</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
	<!-- Main Sidebar -->

</template>

<script setup>
    import { storeToRefs } from "pinia";
    import { useCommonStore } from "@/store/common"
    import Icon from "@/components/Tools/Icon.vue"
    const store = useCommonStore();
    const { toggleSideBarCollapsed } = store;
    const { sideBarCollapsed } = storeToRefs(store);
</script>