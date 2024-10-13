<template>
  <component
    :is="imgComponent"
    data-aos="zoom-in"
    data-aos-delay="150"
    :src="refinedSrc"
    :alt="alt"
    :width="width"
    :height="height"
    placeholder
    class="mx-auto my-4 max-w-full rounded hover:cursor-zoom-in"
    loading="lazy"
    @click="showImg"
  />
  <VueEasyLightbox
    class=""
    :visible="visibleRef"
    :imgs="refinedSrc"
    @hide="onHide"
  />
</template>

<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo';
import { useRuntimeConfig, computed, resolveComponent } from '#imports';
const visibleRef = ref(false);
const showImg = () => {
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);

const imgComponent = useRuntimeConfig().public.mdc.useNuxtImage
  ? resolveComponent('NuxtImg')
  : 'img';

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(
      withTrailingSlash(useRuntimeConfig().app.baseURL)
    );
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src);
    }
  }
  return props.src;
});
</script>

<style>
.vel-modal {
  @apply bg-black sm:bg-[rgba(0,0,0,.5)];
}

.vel-img {
  @apply max-w-[100vw] lg:max-w-[80vw];
}
</style>
