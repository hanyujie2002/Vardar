<template>
    <main>
        <ContentList v-slot="{ list }">
            <ul class="flex flex-col gap-4 w-full my-4">
                <li v-for="article in list" :key="article._path">
                    <NuxtLink :to="article._path" class="transition-colors block text-lg font-extrabold font-sans py-2 px-4 h-20 m-auto outline-dashed visited:block visited:text-lg visited:font-extrabold visited:font-sans visited:py-2 visited:px-4 visited:h-20 visited:m-auto visited:outline-dashed hover:bg-black hover:text-white active:bg-neutral-800">
                        {{ article.title }}
                    </NuxtLink>
                </li>
            </ul>
        </ContentList>
    </main>
</template>

<script setup lang="ts">
</script>
