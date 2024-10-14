<template>
  <main class="mx-auto flex min-h-full w-full flex-col pt-4">
     <NuxtLink :to="`/tags/${tag}`" class="px-4 dark:text-slate-200 font-serif text-5xl tracking-wide mt-4 mb-8 font-extralight">{{ tag }}</NuxtLink>

    <ul
      class="mx-auto mb-auto flex w-full max-w-4xl flex-col divide-y divide-dashed"
    >
      <li
        v-for="article in articles"
        :key="article._path"
        data-aos="fade-in"
      >
        <div
          class="flex flex-col h-44 rounded px-4 py-2 font-sans font-extralight transition-all hover:backdrop-brightness-95 has-[a:active]:backdrop-brightness-90 sm:tracking-wide dark:text-slate-300 dark:hover:text-slate-200 dark:hover:backdrop-brightness-105 dark:has-[a:active]:backdrop-brightness-110"
        >
          <NuxtLink :to="article._path" class="line-clamp-2 font-serif text-xl [text-shadow:_0px_1px_1px_rgba(0,0,0,0.1)]">{{ article.title }}</NuxtLink>
          <div class="flex my-auto space-x-2">
            <Icon name="mdi:calendar-clock" class="text-slate-500 size-6" />
            <p>{{ new Date(article.date).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'}) }}</p>
          </div>
          <div class="flex my-auto space-x-2">
            <div v-for="tag in article.tags" :key="tag" class="text-blue-400 hover:brightness-75 dark:text-blue-600 dark:hover:brightness-125">
              <NuxtLink :to='`/tags/${tag}`'>#{{ tag }}</NuxtLink>
            </div>
          </div>

          <p class="mt-auto line-clamp-2">{{ article.description }}</p>
        </div>
      </li>
    </ul>
  </main>
</template>

<script setup>
const route = useRoute()
const tag = route.params.tag;

const { data: articles } = await useAsyncData('articles', () =>
  queryContent('/blog').only(['title', '_path', 'tags', 'date', 'description']).where({ tags: { $contains: tag } }).find()
);
</script>