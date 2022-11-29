<template>
  <div :class="bgClass">
    <div class="flex place-items-center mobile-header">
      <a class="flex" href="/">
        <img
          :src="require(`~/assets/img/logo-${logoColor}.svg`)"
          class="logo"
        />
        <img
          :src="require(`~/assets/img/code-logo-${logoColor}.png`)"
          class="code-logo"
        />
      </a>
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
        @click="toggleMenu"
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
        <a href="/">Home</a>
      </div>
      <div class="pb-2">
        <a href="/#news">News</a>
      </div>
      <div class="pb-2">
        <a href="uses">Use Cases</a>
      </div>
      <div class="pb-2">
        <a href="community">Community</a>
      </div>
      <div class="pb-2">
        <a href="story">Our Story</a>
      </div>
      <div class="pb-2">
        <a href="contact">Contact</a>
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
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>
