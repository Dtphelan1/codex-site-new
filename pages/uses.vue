<template>
  <div class="main mb-auto">
    <div class="use-header flex justify-center items-center">
      <div class="text-white text-center md:pt-10">
        <h2 tabindex="2" class="satoshi-black font-black use-headline-text">
          Use Cases
        </h2>
        <div
          tabindex="2"
          style="max-width: 865px"
          class="font-normal use-headline-subheader-text px-12 lg:px-0 pt-3.5 lg:pt-5"
        >
          CodeX provides a framework for community-driven use case development
          and demonstration, piloted in-the-field by the stakeholders expected
          to benefit in the future.
        </div>
      </div>
    </div>
    <div
      class="flex flex-col lg:flex-row bg-backgroundgrey justify-center items-center use-explain-container"
    >
      <div
        tabindex="2"
        class="use-explain satoshi-bold font-bold py-8 px-10 lg:p-0"
      >
        Each CodeX Use Case progresses through three stages of development.
      </div>
      <img tabindex="2" class="lgx:hidden" src="~/assets/img/use-steps.svg" />
      <img
        tabindex="2"
        width="380px"
        class="pb-8 lg:hidden"
        src="~/assets/img/use-steps.svg"
      />
    </div>
    <UsesSection
      :execution="execution"
      :planning="planning"
      :discovery="discovery"
    />
  </div>
</template>
<script>
export default {
  layout: 'DefaultWhiteGradient',
  async asyncData({ $content }) {
    const execution = await $content('uses')
      .where({ slug: 'execution' })
      .fetch()
    const planning = await $content('uses').where({ slug: 'planning' }).fetch()
    const discovery = await $content('uses')
      .where({ slug: 'discovery' })
      .fetch()

    return {
      execution,
      planning,
      discovery,
    }
  },
}
</script>
