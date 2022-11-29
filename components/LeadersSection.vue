<template>
  <VueFragment>
    <ul
      v-for="leader in leaders"
      :key="leader['title']"
      class="w-full pb-4 flex flex-col"
    >
      <img
        :title="leader['image-alt']"
        :alt="leader['image-alt']"
        class="pb-2.5"
        :src="require(`~/assets/img/${leader['image']}`)"
      />
      <a
        tabindex="2"
        class="satoshi-bold underline"
        target="_blank"
        :href="leader['link']"
        >{{ leader['name'] }}</a
      >
      <h3 tabindex="2" class="font-medium text-medgrey">
        {{ leader['title'] }}
      </h3>
    </ul>
  </VueFragment>
</template>
<script>
// const leaders = []
export default {
  props: {
    leaders: {
      type: Array,
      required: true,
    },
  },
}
</script>
