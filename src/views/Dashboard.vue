<template>
    <section class="dashboard">
        <div class="search_bar flex aic">
            <div>
                <p class="text-muted">Category</p>
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
            <div>
                <p class="text-muted">Subtitle</p>
                <a-input
                    v-model:value="searchValue" 
                    placeholder=""
                    size="large"
                    class="search_input"
                />
                <a-button 
                    class="search_btn"
                    size="large"
                >
                    Search
                </a-button>
            </div>
        </div>

        <div class="appx_list">
            <div class="appx_list_header flex jcsb">
                <h3>My Collection</h3>
                <div class="pagination">
                    <span class="marr_2">Total {{ listDataLength }} |</span>
                    <Icon 
                        url="/images/icon/leftarrow.svg" 
                        :width="10" 
                        class="marr_1 marl_1"
                        @click="pagination.onChange(-1)"
                    />
                    <a-select
                        ref="select"
                        v-model:value="currentPage"
                        class="page_select marr_1 marl_1"
                        >
                            <a-select-option 
                                v-for="item in Math.ceil(listDataLength / pagination.pageSize)" 
                                :value="item"
                                :key="item"
                                size="large"
                            >
                                {{ item }}
                            </a-select-option>
                        </a-select>
                    <Icon 
                        url="/images/icon/rightarrow.svg" 
                        :width="10" 
                        class="marr_1 marl_1"
                        @click="pagination.onChange(1)"
                    />
                </div>
            </div>
            <a-list item-layout="vertical" :data-source="showList">
                <template #renderItem="{ item }">
                    <a-list-item :key="item.id" v-if="item.collect">
                        <a-list-item-meta>
                            <template #title>
                                <a href="#">{{ item.title }}</a>
                            </template>
                            <template #avatar>
                                <Icon 
                                    url="/images/icon/collect.svg"
                                    @click="unCollected(item)"
                                />
                            </template>
                        </a-list-item-meta>
                        <template #actions>
                            <div class="flex" style="margin-left: 42px;">
                                <div class="flex aic marr_4"><Icon url="/images/icon/like.svg" class="marr_1"/> <span>150 Likes</span></div>
                                <div class="flex aic marr_4"><Icon url="/images/icon/comment.svg" class="marr_1"/><span>10 Comments</span></div>
                                <div class="flex aic marr_4"><Icon url="/images/icon/share.svg" class="marr_1"/><span>5 Shares</span></div>
                            </div>
                        </template>
                        <template #extra>
                            <div class="flex fdc jcsb aie height100">
                                <a-tag>News</a-tag>
                                <span class="text-muted text-sm">Dec 19, 2022</span>
                            </div>
                        </template>
                    </a-list-item>
                </template>
            </a-list>
        </div>

    </section>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import Icon from "@/components/Tools/Icon.vue"
    const searchValue = ref("");
    const selectValue = ref("hr_announcement");
    const selectOption = ref([
        {
            value: "hr_announcement",
            label: "Hr Announcement"
        },
        {
            value: "news",
            label: "News"
        },
        {
            value: "all",
            label: "All"
        }
    ]); 
    const listData = ref([]);
    const currentPage = ref(1);
    const pagination = {
        onChange: page => {
            if (currentPage.value == 1 && page == -1) return
            if (currentPage.value ==  listDataLength / pagination.pageSize && page == 1) return
            currentPage.value += page;
        },
        pageSize: 10
    };
    for (let i = 0; i < 480; i++ ) {
        listData.value.push({
            id: i,
            title: `Appx System New Version Release Announce on 14th Dec...`,
            like: 150,
            comment: 10,
            share: 5,
            collect: true
        });
    }
    const unCollected = (collect) => listData.value = listData.value.filter(c => c.id !== collect.id);
    const showList = computed(() => listData.value.slice((currentPage.value - 1) * pagination.pageSize, (currentPage.value - 1) * pagination.pageSize + 10));
    const listDataLength = computed(() => listData.value.length);
</script>