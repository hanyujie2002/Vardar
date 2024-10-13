<template>
  <div class="m-auto flex flex-col">
    <div data-aos="fade-down">
      <NuxtImg
        class="mx-auto rounded-full object-cover shadow-2xl shadow-themeColor-100 md:hover:animate-spinSlow"
        preload
        src="/img/avatar.png"
        alt="Profile image"
        width="192"
        height="192"
        quality="80"
        format="webp"
      />
    </div>
    <div
      data-aos="fade-down"
      data-aos-delay="150"
      class="mx-auto mt-5 text-center text-3xl font-thin tracking-widest text-slate-600 dark:text-slate-100"
    >
      Vardar's example site
    </div>

    <div data-aos="fade-down" data-aos-delay="300" class="mx-auto my-3 space-x-5 text-3xl">
      <NuxtLink
        to="https://github.com/hanyujie2002/Vardar"
        target="_blank"
        title="Github Profile"
        aria-label="GitHub Profile"
      >
        <Icon
          name="mdi:github-face"
          class="bg-themeColor-300 transition-all hover:bg-neutral-900 dark:bg-themeColor-200"
        />
      </NuxtLink>

      <NuxtLink
        to="mailto:example@example.com"
        target="_blank"
        title="Send Email"
        aria-label="Send Email"
      >
        <Icon
          name="mdi:email"
          class="bg-themeColor-300 transition-colors hover:bg-yellow-400 dark:bg-themeColor-200 dark:hover:bg-yellow-200"
        />
      </NuxtLink>

      <NuxtLink
        to="https://twitter.com/Twitter"
        target="_blank"
        title="Twitter Profile"
        aria-label="Twitter Profile"
      >
        <Icon
          name="mdi:twitter"
          class="bg-themeColor-300 transition-colors hover:bg-sky-300 dark:bg-themeColor-200"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>
