<template>
  <div class="my-4 flex flex-col">
    <div
      v-if="language || filename"
      class="flex h-12 items-center gap-1.5 rounded-t border-b border-themeColor-200 bg-themeColor-50 dark:border-none dark:bg-themeColor-800"
      role="group"
      aria-label="Code block header"
    >
      <Icon
        v-if="language"
        :name="getIconName(language)"
        class="ml-3 text-2xl"
        :aria-label="`Programming language: ${language}`"
      />
      <span
        v-if="filename"
        class="ml-3 text-themeColor-400 dark:text-themeColor-200"
        aria-label="Filename"
        >{{ filename }}</span
      >
      <button
        :class="`ml-auto mr-3 flex gap-1 rounded p-1 transition-all hover:backdrop-brightness-95 dark:hover:backdrop-brightness-125 ${isCopyButtonActive ? 'backdrop-brightness-95 dark:backdrop-brightness-125' : ''}`"
        aria-label="Copy code"
        @click="copyButtonHandleClick"
      >
        <span v-show="isCopyButtonActive" aria-live="polite">Copied</span
        ><Icon
          :name="copyButtonIconName"
          class="text-2xl"
          :aria-label="isCopyButtonActive ? 'Copy succesful' : 'Copy code'"
        />
      </button>
    </div>
    <pre
      :class="[
        $props.class,
        'overflow-x-auto bg-themeColor-50 px-4 py-3 text-black shadow-xl dark:bg-themeColor-900 dark:text-white',
        filename || language ? 'rounded-b' : 'rounded',
      ]"
      role="region"
      aria-label="Code block"
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
