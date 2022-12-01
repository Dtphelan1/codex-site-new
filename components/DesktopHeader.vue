<template>
  <div class="header-container absolute inset-0 z-10">
    <div class="flex">
      <NuxtLink class="flex" to="/">
        <img
          class="logo"
          alt="CodeX Logo"
          :src="require(`~/assets/img/logo-${logoColor}.svg`)"
        />
        <img
          class="code-logo self-end"
          src="~/assets/img/code-logo-white.png"
        />
      </NuxtLink>
      <div class="flex flex-row gap-8 ml-auto text-white items-center">
        <div>
          <NuxtLink to="/">Home</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/#news">News</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/uses">Use Cases</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/community">Community</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/story">Our Story</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    logoColor: { type: String, required: true },
  },
}
</script>
