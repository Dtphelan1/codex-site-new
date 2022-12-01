<template>
  <VueSlickCarousel
    class="lg:!hidden"
    :arrows="true"
    :dots="true"
    :adaptive-height="true"
    :slides-to-show="1"
    :slides-to-scroll="1"
  >
    <div v-for="(item, index) in newsItems" :key="index" class="px-8">
      <NewsItem :item="item" />
    </div>
    <template #prevArrow>
      <div :style="{ backgroundImage: `url(${prev})` }"></div>
    </template>
    <template #nextArrow>
      <div :style="{ backgroundImage: `url(${next})` }"></div>
    </template>
  </VueSlickCarousel>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import next from 'assets/img/NextIcon.svg'
import prev from 'assets/img/PrevIcon.svg'

export default {
  components: { VueSlickCarousel },

  props: {
    newsItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      next,
      prev,
    }
  },
}
</script>
<style scoped>
/* Override next and prev styles */
.slick-arrow {
  background-position: unset !important;
  background-size: unset !important;
  background-repeat: no-repeat;
  display: inline-block;
  width: 2rem;
  height: 2rem;
}
.slick-next::before {
  content: none;
}
.slick-prev::before {
  content: none;
}
</style>
