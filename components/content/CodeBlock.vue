<template>
  <div
    class="my-4 flex flex-col sm:shadow-lg sm:shadow-themeColor-100 sm:dark:shadow-themeColor-900"
  >
    <div
      v-if="language || filename"
      class="flex h-12 items-center gap-1.5 rounded-t border-b border-themeColor-100 bg-white dark:border-themeColor-900 dark:bg-themeColor-950"
      role="group"
      aria-label="Code block header"
    >
      <Icon
        v-if="language"
        :name="getIconName(language)"
        class="ml-1 text-2xl sm:ml-3"
        :aria-label="`Programming language: ${language}`"
      />
      <span
        v-if="filename"
        class="ml-3 text-themeColor-400 dark:text-themeColor-200"
        aria-label="Filename"
        >{{ filename }}</span
      >
      <button
        :class="`ml-auto mr-1 flex gap-1 rounded p-1 transition-all hover:backdrop-brightness-95 sm:mr-3 dark:hover:backdrop-brightness-125 ${isCopyButtonActive ? 'backdrop-brightness-95 dark:backdrop-brightness-125' : ''}`"
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
        'flex overflow-x-auto bg-white py-3 text-black scrollbar:h-1.5 scrollbar:w-1.5 scrollbar-track:rounded scrollbar-track:bg-slate-100 scrollbar-thumb:rounded scrollbar-thumb:bg-slate-300 dark:bg-themeColor-950 dark:text-slate-200 dark:scrollbar-track:bg-slate-500/[0.16] dark:scrollbar-thumb:bg-slate-500/50',
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

<style>
pre code span.line {
  @apply block before:sticky before:left-0 before:inline-block before:w-10 before:bg-white before:text-right before:text-slate-400 before:content-[attr(line)_'\00A0'] dark:before:bg-themeColor-950;
}

pre code span.line.highlight {
  @apply bg-yellow-100 before:bg-yellow-100 dark:bg-green-800 dark:before:bg-green-800;
}
</style>
