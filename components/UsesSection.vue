<template>
  <div class="bg-white uses-list">
    <div
      class="flex flex-col place-content-center use-container lgx:p-0 lg:flex-row"
    >
      <div
        class="lgx:flex flex-row justify-center items-baseline mr-0 lg:mr-20 bg-darkred text-white lg:bg-white lg:text-darkred py-10 lg:py-0"
      >
        <div
          tabindex="2"
          class="use-num satoshi-bold font-bold lgx:leading-none mr-5 w-fit lg:mr-0 lg:w-32"
        >
          {{ execution.length }}
        </div>
        <div tabindex="2" class="use-num-desc">In Execution</div>
      </div>
      <div tabindex="-1" class="hidden lg:flex flex-col items-stretch">
        <img width="63" src="~/assets/img/diamond1.svg" />
        <div class="use-line use-line-1 border-darkred"></div>
      </div>
      <div class="use-list use-list-execute pr-14 pt-10 lg:pr-0 lg:pt-0">
        <UsesList :uses="execution" image="diamond1.svg" />
      </div>
    </div>
    <div
      class="flex flex-col place-content-center use-container mt-10 lg:mt-0 lgx:p-0 lg:flex-row"
    >
      <div
        class="lgx:flex flex-row justify-center items-center mr-0 lg:mr-20 bg-gold text-white lg:bg-white lg:text-gold py-10 lg:py-0"
      >
        <div
          tabindex="2"
          class="use-num satoshi-bold font-bold lgx:leading-none mr-5 w-fit lg:mr-0 lg:w-32"
        >
          {{ planning.length }}
        </div>
        <div tabindex="2" class="use-num-desc">In Planning</div>
      </div>
      <div tabindex="-1" class="hidden lg:flex flex-col items-stretch">
        <img width="43" src="~/assets/img/diamond2.svg" />
        <div class="use-line border-gold"></div>
      </div>
      <div class="use-list use-list-planning pr-14 pt-10 lg:pr-0 lg:pt-0">
        <UsesList :uses="planning" image="diamond2.svg" />
      </div>
    </div>
    <div
      class="flex flex-col place-content-center use-container mt-10 lg:mt-0 lgx:p-0 lg:flex-row"
    >
      <div
        class="lgx:flex flex-row justify-center items-center mr-0 lg:mr-20 bg-medgrey text-white lg:bg-white lg:text-medgrey py-10 lg:py-0"
      >
        <div
          tabindex="2"
          class="use-num satoshi-bold font-bold lgx:leading-none mr-5 w-fit lg:mr-0 lg:w-32"
        >
          {{ discovery.length }}
        </div>
        <div tabindex="2" class="use-num-desc">In Discovery</div>
      </div>
      <div tabindex="-1" class="hidden lg:flex flex-col items-stretch">
        <img width="33" src="~/assets/img/diamond3.svg" />
        <div class="use-line border-medgrey"></div>
      </div>
      <div class="use-list use-list-discovery pr-14 pt-10 lg:pr-0 lg:pt-0">
        <UsesList :uses="discovery" image="diamond3.svg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    discovery: {
      type: Array,
      required: true,
    },
    execution: {
      type: Array,
      required: true,
    },
    planning: {
      type: Array,
      required: true,
    },
  },
}
</script>
