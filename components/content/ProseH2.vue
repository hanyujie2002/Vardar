<template>
    <h2 :id="id" class="text-xl scroll-mt-[--header-height]">
            <slot />
    </h2>
</template>

<style scoped></style>

<script setup>
const props = defineProps({
    id: {
        type: String
    }
})
</script>
