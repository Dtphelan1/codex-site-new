<template>
  <div
    id="newsCarousel"
    class="carousel carousel-dark slide relative lg:hidden"
    data-bs-ride="carousel"
    data-bs-interval="false"
  >
    <div class="carousel-inner relative w-full overflow-hidden">
      <div
        v-for="(item, index) in newsItems"
        :key="index"
        :class="[
          'carousel-item relative float-left w-full',
          { active: index == 0 },
        ]"
      >
        <div
          class="flex flex-col px-2 justify-center sm:px-16 md:px-32 lg:px-4 xl:px-16 lg:grid lg:grid-cols-3 lg:gap-x-4 xl:gap-x-6"
        >
          <div
            :class="[
              'mb-8 xl:mb-0',
              {
                'xl:pr-2': index == 0,
                'xl:pl-2': index == newsItems.length - 1,
              },
            ]"
          >
            <news-item :item="item" />
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#newsCarousel"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon prev-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#newsCarousel"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon next-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
    <div
      class="carousel-indicators indicator-container absolute right-0 left-0 flex justify-center p-0 mb-4"
    >
      <button
        v-for="(item, index) in newsItems"
        :key="index"
        type="button"
        data-bs-target="#newsCarousel"
        :data-bs-slide-to="index"
        :class="['round-indicator', { active: index == 0 }]"
        aria-current="true"
        :aria-label="'News Story ' + (index + 1)"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: { newsItems: { type: Array, required: true } },
}
</script>
