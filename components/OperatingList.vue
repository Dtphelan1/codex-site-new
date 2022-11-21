<template>
  <VueFragment>
    <div>
      <h2 tabindex="2" class="satoshi-bold text-darkbrown uppercase font-16px">
        Operating Committee
      </h2>
      <div v-for="member in members.slice(0, members.length / 2)" :key="member">
        <p tabindex="2" class="pb-1 lg:pb-0">{{ member }}</p>
      </div>
    </div>
    <div class="pr-0 lg:pr-16">
      <div
        v-for="member in members.slice(members.length / 2, members.length)"
        :key="member"
      >
        <p tabindex="2" class="pb-1 lg:pb-0">{{ member }}</p>
      </div>
    </div>
  </VueFragment>
</template>

<script>
export default {
  props: {
    members: {
      type: Array,
      required: true,
    },
  },
}
</script>
