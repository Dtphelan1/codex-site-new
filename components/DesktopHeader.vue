<template>
  <div class="header-container absolute inset-0 z-10">
    <div class="flex">
      <a class="flex" href="index">
        <img
          class="logo"
          alt="CodeX Logo"
          :src="require(`~/assets/img/logo-${logoColor}.svg`)"
        />
        <img
          class="code-logo self-end"
          src="~/assets/img/code-logo-white.png"
        />
      </a>
      <div class="flex flex-row gap-8 ml-auto text-white items-center">
        <div
          :class="[
            'flex items-center',
            {
              'underline decoration-solid underline-offset-8':
                underlineLink == 'index',
            },
          ]"
        >
          <a tabindex="1" href="index">Home</a>
        </div>
        <div class="flex items-center">
          <a tabindex="1" href="index#news">News</a>
        </div>
        <div
          :class="[
            'flex items-center',
            {
              'underline decoration-solid underline-offset-8':
                underlineLink == 'uses',
            },
          ]"
        >
          <a tabindex="1" href="uses">Use Cases</a>
        </div>
        <div
          :class="[
            'flex items-center',
            {
              'underline decoration-solid underline-offset-8':
                underlineLink == 'community',
            },
          ]"
        >
          <a tabindex="1" href="community">Community</a>
        </div>
        <div
          :class="[
            'flex items-center',
            {
              'underline decoration-solid underline-offset-8':
                underlineLink == 'story',
            },
          ]"
        >
          <a tabindex="1" href="story">Our Story</a>
        </div>
        <div
          :class="[
            'flex items-center',
            {
              'underline decoration-solid underline-offset-8':
                underlineLink == 'contact',
            },
          ]"
        >
          <a tabindex="1" href="contact">Contact</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    logoColor: { type: String, required: true },
    underlineLink: { type: String, required: true },
  },
}
</script>
