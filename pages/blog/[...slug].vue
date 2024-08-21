<template>
    <div class="w-full lg:grid lg:grid-cols-10 lg:gap-8">
        <ContentDoc class="text-slate-200 text-wrap hyphens-auto lg:col-span-8" />

        <PageToc class="flex text-slate-200 text-sm/6 sticky top-[--header-height] max-h-[calc(100vh-var(--header-height))] overflow-y-auto lg:col-span-2" />
    </div>
</template>

<script setup lang="ts">
</script>
