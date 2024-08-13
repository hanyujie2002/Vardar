<template>
    这里是个人介绍页
    {{page}}
    <button @click="onClick">test</button>
</template>

<script setup>
    const route = useRoute()

    const page = ref(parseInt(route.query.page))

    watch(() => route.query.page, (newPage) => {
        page.value = newPage
    })

    const router = useRouter()
    const onClick = async () => {
        await navigateTo({
            path: '/about',
            query: {
                page: 3
            }
        })
    }

</script>