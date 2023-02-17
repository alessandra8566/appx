<template>
    <a-layout-header 
        :class="{'top': !isTop}"
    >
        <div class="flex jcsb">
            <div class="flex aic">
                <a-input-search
                    v-model:value="searchValue" 
                    placeholder="Search here..."
                    style="width: 245px"
                    size="large"
                    class="search_input"
                />
                <a-select
                    ref="select"
                    v-model:value="selectValue"
                    class="select_input"
                >
                    <a-select-option 
                        v-for="item in selectOption" 
                        :value="item.value"
                        :key="item.value"
                        size="large"
                    >
                        {{ item.label }}
                    </a-select-option>
                </a-select>
            </div>
            <div class="flex aic">
                <Icon url="/images/icon/weather.svg" class="marr_1" />
                <span class="text-llg marr_2">09:54 am</span>
                <a-select
                    ref="select"
                    v-model:value="weatherSelectValue"
                    class="weather_select_input marr_3"
                >
                    <a-select-option 
                        v-for="item in weatherSelectOption" 
                        :value="item.value"
                        :key="item.value"
                        size="large"
                    >
                        {{ item.label }}
                    </a-select-option>
                </a-select>
                <Icon url="/images/icon/setting.svg" :width="26" class="marr_2 marl_2 " />
                <Icon url="/images/icon/notifications.svg" :width="26" class="marr_2 marl_2" />
                <img src="/images/person.png" class="marr_1 marl_2" alt="">
                <Icon url="/images/icon/dropdown.svg" :width="8"/>
            </div>
        </div>
    </a-layout-header>
</template>

<script setup>
    import { ref } from 'vue';
    import Icon from "@/components/Tools/Icon.vue"

    const searchValue = ref("");
    const selectValue = ref("all");
    const weatherSelectValue = ref("antananarivo");
    const selectOption = ref([
        {
            value: "all",
            label: "By All"
        },
        {
            value: "station",
            label: "By Station"
        },
        {
            value: "country",
            label: "By Country"
        }
    ]); 
    const weatherSelectOption = ref([
        {
            value: "antananarivo",
            label: "Antananarivo"
        },
        {
            value: "hongkong",
            label: "HongKong"
        },
        {
            value: "taipei",
            label: "Taipei"
        },
        {
            value: "Tokyo",
            label: "tokyo"
        }
    ]);
    const isTop = ref(true);
    
    window.onscroll = function() {
        isTop.value = !!!window.pageYOffset
    };
</script>