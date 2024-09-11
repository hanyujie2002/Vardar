<template>
  <div class="flex flex-col m-auto">
    <div>
      <img class="shadow-2xl shadow-green-100 w-48 object-cover rounded-full mx-auto md:hover:animate-spinSlow"
        src="../assets/img/avatar.png"></img>
    </div>
    <div class="mx-auto text-green-100 mt-5 font-bold font-serif text-3xl">Vardar's example site</div>

    <div class="mx-auto text-3xl space-x-5 my-3">
      <NuxtLink to="https://github.com/hanyujie2002/Vardar" target="_blank">
        <Icon name="mdi:github-face" class="transition-all bg-violet-200 hover:bg-neutral-900"></Icon>
      </NuxtLink>

      <NuxtLink to="mailto:example@example.com" target="_blank">
        <Icon name="material-symbols:alternate-email" class="transition-colors bg-violet-200 hover:bg-yellow-200"></Icon>
      </NuxtLink>

      <NuxtLink to="https://twitter.com/Twitter" target="_blank">
        <Icon name="mdi:twitter" class="transition-colors bg-violet-200 hover:bg-sky-300"></Icon>
      </NuxtLink>
    </div>
  </div>
</template>
