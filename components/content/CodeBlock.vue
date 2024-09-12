<template>
  <div class="my-4 flex flex-col">
    <div
      v-if="language || filename"
      class="flex h-12 items-center gap-1.5 rounded-t bg-themeColor-800"
    >
      <Icon
        v-if="language"
        :name="getIconName(language)"
        class="ml-3 text-2xl"
      />
      <span v-if="filename" class="ml-3 text-themeColor-200">{{
        filename
      }}</span>
      <button
        :class="`ml-auto mr-3 flex gap-1 rounded p-1 transition-all hover:backdrop-brightness-125 ${isCopyButtonActive ? 'backdrop-brightness-125' : ''}`"
        @click="copyButtonHandleClick"
      >
        <span v-show="isCopyButtonActive">Copied</span
        ><Icon :name="copyButtonIconName" class="text-2xl" />
      </button>
    </div>
    <pre
      :class="[
        $props.class,
        'overflow-x-auto bg-themeColor-900 px-4 py-3 text-white shadow-xl',
        filename || language ? 'rounded-b' : 'rounded',
      ]"
    ><slot /></pre>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});

const copyButtonIconName = ref<string>('tabler:copy');
const isCopyButtonActive = ref<boolean>(false);

const copyButtonHandleClick = async (): Promise<void> => {
  await navigator.clipboard.writeText(props.code);

  copyButtonIconName.value = 'tabler:copy-check';
  isCopyButtonActive.value = true;

  setTimeout(() => {
    copyButtonIconName.value = 'tabler:copy';
    isCopyButtonActive.value = false;
  }, 2000);
};

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
    react: 'catppuccin:javascript-react',
    go: 'catppuccin:go',
    golang: 'catppuccin:go',
  };
  return langMap[language.toLowerCase()] || '';
}
</script>
