<template>
    <img 
        :src="url"
        :style="{
            'width': `${width}px`,
            'height': `${height ? height : width}px`,
            'cursor': 'pointer'
        }"
    >
</template>

<script setup>
    const props = defineProps({
        url: { type: String, default: ""},
        width: { type: Number, default: 20 },
        height: { type: Number, default: 0 },
    });

    const { url, width, height } = props;
</script>