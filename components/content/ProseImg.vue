<template>
  <figure>
    <img :src="src" :alt="alt" :width="width" :height="height" />
    <figcaption v-if="$slots.caption">
      <slot name="caption" />
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
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
</script>

<style scoped>
  /* figure {
    display: flex;
    margin: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  img {
    display: block;
    max-width: 98%;
    margin: auto;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    border-radius: 0.25rem;
  }

  figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  } */
</style>
