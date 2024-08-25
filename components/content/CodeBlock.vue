<template>
    <pre class="flex flex-col my-4">
        <div v-if="language || filename" class="flex h-12 gap-1.5 items-center rounded-t bg-violet-800">
            <Icon v-if="language" :name="getIconName(language)" class="ml-3 text-2xl"></Icon>
            <span v-if="filename" class="ml-3 text-violet-200">{{ filename }}</span>
            <button @click="copyButtonHandleClick" :class="`transition-all flex ml-auto mr-3 p-1 gap-1 rounded hover:backdrop-brightness-125 ${isCopyButtonActive ? 'backdrop-brightness-125' : ''}`"><span v-show="isCopyButtonActive">Copied</span><Icon :name="copyButtonIconName" class="text-2xl"></Icon></button>
        </div>
        <div :class="[$props.class, 'flex bg-violet-900 px-4 py-3 overflow-x-auto text-white shadow-xl', filename || language ? 'rounded-b' : 'rounded']">
            <slot />
        </div>
    </pre>

</template>

<script setup lang="ts">
const props = defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array as () => number[],
        default: () => []
    },
    meta: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: null
    }
})

const copyButtonIconName = ref<string>("tabler:copy")
const isCopyButtonActive = ref<boolean>(false)

const copyButtonHandleClick = async (): Promise<void> => {
    await navigator.clipboard.writeText(props.code);

    copyButtonIconName.value = 'tabler:copy-check'
    isCopyButtonActive.value = true

    setTimeout(() => {
        copyButtonIconName.value = 'tabler:copy'
        isCopyButtonActive.value = false
    }, 2000);
}

function getIconName(language: string | null): string {
    if (!language) return '';
    const langMap: { [key: string]: string } = {
        py: 'catppuccin:python',
        python: 'catppuccin:python',
        js: 'catppuccin:javascript',
        javascript: 'catppuccin:javascript',
        ts: 'catppuccin:typescript',
        typescript: 'catppuccin:typescript',
        bash: 'catppuccin:bash',
        sh: 'catppuccin:bash',
        java: 'catppuccin:java-alt-2',
        json: 'catppuccin:json',
        c: 'catppuccin:c',
        cpp: 'catppuccin:cpp',
        vue: 'catppuccin:vue',
        react: 'catppuccin:javascript-react'
    };
    return langMap[language.toLowerCase()] || '';
}
</script>
