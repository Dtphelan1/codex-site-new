<template>
  <div class="pb-4">
    <h2 tabindex="2" class="satoshi-bold text-darkbrown uppercase font-16px">
      Steering Committee
    </h2>
    <div v-for="member in members" :key="member">
      <p tabindex="2" class="pb-1 lg:pb-0">{{ member }}</p>
    </div>
  </div>
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
