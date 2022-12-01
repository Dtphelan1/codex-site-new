<template>
  <div id="commApp" class="flex flex-col justify-between lg:flex-row">
    <div class="pb-4">
      <h2 tabindex="2" class="satoshi-bold text-darkbrown uppercase font-16px">
        Steering Committee
      </h2>
      <div v-for="member in steeringMembers" :key="member">
        <p tabindex="2" class="pb-1 lg:pb-0">{{ member }}</p>
      </div>
    </div>
    <div>
      <h2 tabindex="2" class="satoshi-bold text-darkbrown uppercase font-16px">
        Operating Committee
      </h2>
      <div
        v-for="member in operatingMembers.slice(0, operatingMembers.length / 2)"
        :key="member"
      >
        <p tabindex="2" class="pb-1 lg:pb-0">{{ member }}</p>
      </div>
    </div>
    <div class="pr-0 lg:pr-16">
      <div
        v-for="member in operatingMembers.slice(
          operatingMembers.length / 2,
          operatingMembers.length
        )"
        :key="member"
      >
        <p tabindex="2" class="pb-1 lg:pb-0">{{ member }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    steeringMembers: {
      type: Array,
      required: true,
    },
    operatingMembers: {
      type: Array,
      required: true,
    },
  },
}
</script>
