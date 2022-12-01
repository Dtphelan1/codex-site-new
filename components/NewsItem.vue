<template>
  <div class="bg-backgroundgrey border-t-4 border-lightbrown news-card">
    <h1 tabindex="1" class="satoshi-bold font-black font-16px underline">
      <a target="_blank" :href="item.link">{{ item.title }}</a>
    </h1>
    <h2
      tabindex="1"
      :class="'flex py-2 font-bold text-newsgrey sm:text-[16px] ' + textSize"
    >
      {{ item.source }}
      <img class="px-2" src="~/assets/img/diamond-bullet.svg" />
      {{ item.date }}
    </h2>
    <p tabindex="1">{{ item.summary }}</p>
  </div>
</template>
<script>
export default {
  props: {
    item: { type: Object, required: true },
  },
  computed: {
    textSize() {
      return (this.item.source + this.item.date).length > 27
        ? 'text-[10px]'
        : 'text-[12px]'
    },
  },
}
</script>
