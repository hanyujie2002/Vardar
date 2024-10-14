<template>
    <div class="w-full font-extralight sm:tracking-wide">
        <div class="mt-8 flex flex-wrap space-x-3 max-w-3xl mx-auto overflow-x-auto px-3">
            <NuxtLink :to="`/tags/${tag}`" class="border border-themeColor-300/50 dark:text-white dark:hover:backdrop-brightness-105 dark:active:backdrop-brightness-110 space-x-2 hover:backdrop-brightness-95 active:backdrop-brightness-90 rounded-lg p-3 mx-4 my-2" v-for="(count, tag) in tagCounts" :key="tag">
                <span>{{ tag }}</span> <span>{{ count }}</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { data: tags } = await useAsyncData('tags', queryContent('/blog').only('tags').find)

const tagCounts = tags.value.reduce((acc, tagObj) => {
    tagObj.tags.forEach(tag => {
        if (acc[tag]) {
            acc[tag] += 1;
        } else {
            acc[tag] = 1;
        }
    });
    return acc;
}, {})
</script>
