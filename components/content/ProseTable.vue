<template>
  <div
    class="relative mt-10 max-h-96 w-full overflow-x-auto scrollbar:h-1.5 scrollbar:w-1.5 scrollbar:bg-transparent scrollbar-track:rounded scrollbar-track:bg-slate-100 scrollbar-thumb:rounded scrollbar-thumb:bg-slate-300 scrollbar-corner:hidden dark:scrollbar-track:bg-slate-500/[0.16] dark:scrollbar-thumb:bg-slate-500/50"
  >
    <table>
      <slot />
    </table>
  </div>
</template>
