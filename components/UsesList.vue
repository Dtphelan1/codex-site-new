<template>
  <div>
    <div v-for="(use, index) in uses" :key="use.description">
      <div :class="{ 'mb-4 lg:mb-0': index == 0 }">
        <span
          v-if="use.newDomain"
          tabindex="2"
          class="use-explain-badge whitespace-nowrap lg:hidden"
          >NEW DOMAIN</span
        >
      </div>
      <div
        :class="[
          'flex flex-row items-start',
          {
            'pb-4': index == 0,
            'py-4': index > 0 && index != uses.length - 1,
            'pt-4': index != 0 && index == uses.length - 1,
          },
        ]"
      >
        <img
          width="22"
          class="mx-6 mt-1 lg:hidden"
          :src="require(`~/assets/img/${image}`)"
        />
        <div>
          <div>
            <h3
              tabindex="2"
              class="font-20px inline-block satoshi-bold font-bold underline"
            >
              <a target="_blank" :href="use.url">{{ use.title }}</a>
            </h3>
            <span
              v-if="use.newDomain"
              tabindex="2"
              class="use-explain-badge whitespace-nowrap hidden lg:inline"
              >NEW DOMAIN</span
            >
          </div>
          <div tabindex="2" class="font-16px leading-6 mt-1">
            {{ use.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    uses: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
