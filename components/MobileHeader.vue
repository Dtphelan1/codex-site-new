<template>
  <div :class="bgClass">
    <div class="flex place-items-center mobile-header">
      <NuxtLink class="flex" to="/">
        <img
          :src="require(`~/assets/img/logo-${logoColor}.svg`)"
          class="logo"
        />
        <img
          :src="require(`~/assets/img/code-logo-${logoColor}.png`)"
          class="code-logo"
        />
      </NuxtLink>
      <div
        v-show="!menuOpen"
        id="open-menu-button-div"
        class="open-menu-button-div ml-auto cursor-pointer"
        @click="toggleMenu"
      >
        <img
          class="open-menu-button"
          :src="require(`~/assets/img/menu-${textColor}.svg`)"
        />
      </div>
      <div
        v-show="menuOpen"
        id="close-menu-button-div"
        class="close-menu-button-div ml-auto cursor-pointer"
      >
        <img
          class="close-menu-button"
          :src="require(`~/assets/img/close-${textColor}.svg`)"
        />
      </div>
    </div>
    <div
      v-show="menuOpen"
      id="mobile-menu"
      :class="`mobile-menu text-${textColor}`"
    >
      <div class="pb-2">
        <NuxtLink to="/">Home</NuxtLink>
      </div>
      <div class="pb-2">
        <NuxtLink to="/#news">News</NuxtLink>
      </div>
      <div class="pb-2">
        <NuxtLink to="/uses">Use Cases</NuxtLink>
      </div>
      <div class="pb-2">
        <NuxtLink to="/community">Community</NuxtLink>
      </div>
      <div class="pb-2">
        <NuxtLink to="/story">Our Story</NuxtLink>
      </div>
      <div class="pb-2">
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    logoColor: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
    bgClass: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      menuOpen: false,
    }
  },
  watch: {
    $route() {
      if (this.menuOpen) {
        this.toggleMenu()
      }
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>
