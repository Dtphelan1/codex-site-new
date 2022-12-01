<template>
  <div class="news-container p-10 pb-16 flex flex-col">
    <div class="flex flex-col lg:flex-row justify-center items-center">
      <h1
        id="news"
        tabindex="1"
        class="satoshi-black font-black font-36px pb-5 place-self-center"
      >
        News & Updates
      </h1>
      <div tabindex="1" class="pb-5 pl-6">
        <a
          tabindex="1"
          class="underline"
          target="_blank"
          href="https://confluence.hl7.org/display/COD/CodeX+Home?desktop=true&macroName=confiform-entry-register#CodeXHome-News"
        >
          Read More </a
        ><img class="inline ml-2" src="~/assets/img/arrow.svg" />
      </div>
    </div>
    <MobileNews :news-items="newsItems" />
    <DesktopNews :news-items="newsItems" />
  </div>
</template>
<script>
export default {
  props: {
    newsItems: {
      type: Array,
      required: true,
    },
  },
}
</script>
