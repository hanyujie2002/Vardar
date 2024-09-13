<template>
  <div class="m-auto flex flex-col">
    <div>
      <img
        class="mx-auto w-48 rounded-full object-cover shadow-2xl shadow-themeColor-100 md:hover:animate-spinSlow"
        src="~/assets/img/avatar.png"
      >
    </div>
    <div
      class="mx-auto mt-5 text-center font-serif text-3xl font-bold text-themeColor-100"
    >
      Vardar's example site
    </div>

    <div class="mx-auto my-3 space-x-5 text-3xl">
      <NuxtLink to="https://github.com/hanyujie2002/Vardar" target="_blank">
        <Icon
          name="mdi:github-face"
          class="bg-themeColor-200 transition-all hover:bg-neutral-900"
        />
      </NuxtLink>

      <NuxtLink to="mailto:example@example.com" target="_blank">
        <Icon
          name="mdi:email"
          class="bg-themeColor-200 transition-colors hover:bg-yellow-200"
        />
      </NuxtLink>

      <NuxtLink to="https://twitter.com/Twitter" target="_blank">
        <Icon
          name="mdi:twitter"
          class="bg-themeColor-200 transition-colors hover:bg-sky-300"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>
