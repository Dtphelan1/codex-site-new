<template>
  <div
    class="flex flex-col px-2 justify-center sm:px-16 md:px-32 lg:px-4 xl:px-16 lg:grid lg:grid-cols-3 lg:gap-x-4 xl:gap-x-6 hidden lg:block"
  >
    <div
      v-for="(item, index) in newsItems"
      :key="index"
      :class="[
        'mb-8 xl:mb-0',
        { 'xl:pr-2': index == 0, 'xl:pl-2': index == newsItems.length - 1 },
      ]"
    >
      <news-item :item="item" />
    </div>
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
