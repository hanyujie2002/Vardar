<template>
  <div class="flex mb-auto">
    <ul v-if="toc && toc.links" class="flex flex-col">
      <li v-for="link in toc.links" :key="link.text">
        <a :href="`#${link.id}`" :class="{ active: activeTocIds.has(link.id) || link.id === lastVisibleHeading }">{{ link.text }}</a>
        <ul v-if="link.children && link.children.length">
          <li v-for="child in link.children" :key="child.id" class="ml-3">
            <a :href="`#${child.id}`" :class="{ active: activeTocIds.has(child.id) || child.id === lastVisibleHeading }"> {{child.text}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const path: string = route.path;
const doc = await queryContent(path).findOne()
const toc = ref();

if (doc.body === null) {
  toc.value = null
} else {
  toc.value = doc.body.toc
}

const activeTocIds = ref<Set<string>>(new Set());
const lastVisibleHeading = ref<string>('');

const observeSections = () => {
  const options = {
    root: null,
    rootMargin: '0px 0px -80% 0px',
    threshold: [0, 0.25, 0.5, 0.75, 1]
  };

  const callback: IntersectionObserverCallback = async (entries: IntersectionObserverEntry[]): Promise<void> => {
    entries.forEach((entry) => {
      const id: string = entry.target.id;
      if (entry.isIntersecting) {
        lastVisibleHeading.value = id;
        activeTocIds.value.add(id);
      } else {
        activeTocIds.value.delete(id);
      }
    });
  };

  const observer: IntersectionObserver = new IntersectionObserver(callback, options);
  const sections: NodeListOf<HTMLElement> = document.querySelectorAll('h2, h3');

  sections.forEach((section: HTMLElement) =>
    observer.observe(section));

  onUnmounted((): void => {
    sections.forEach((section: HTMLElement) =>
      observer.unobserve(section));
  })
}

onMounted((): void => {
  observeSections();
})
</script>

<style scoped>
.active {
  @apply text-indigo-300;
}
</style>
