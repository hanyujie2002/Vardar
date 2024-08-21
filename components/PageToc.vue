<template>
  <div class="flex mb-auto">
    <ul v-if="toc && toc.links" class="flex flex-col">
      <li v-for="link in toc.links" :key="link.text">
        <a :href="`#${link.id}`" :class="{ active: activeTocIds.includes(link.id) || link.id === lastVisibleHeading }">{{ link.text }}</a>
        <ul v-if="link.children && link.children.length">
          <li v-for="child in link.children" :key="child.id" class="ml-3">
            <a :href="`#${child.id}`" :class="{ active: activeTocIds.includes(child.id) || child.id === lastVisibleHeading }"> {{child.text}}</a>
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
const toc = doc.body.toc;

const activeTocIds = ref<string[]>([]);
const lastVisibleHeading = ref<string>('');

const observeSections = () => {
  const options = {
    root: null,
    rootMargin: '0px 0px -80% 0px',
    threshold: [0.1, 0.5, 1.0]
  };

  const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry) => {
      const id: string = entry.target.id;
      if (entry.intersectionRatio > 0) {
        lastVisibleHeading.value = id;
        if (!activeTocIds.value.includes(id)) {
          activeTocIds.value.push(id);
        }
      } else {
        activeTocIds.value = activeTocIds.value.filter((element: string) => {
          return element !== id;
        })
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
