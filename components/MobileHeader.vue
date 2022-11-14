<template>
  <div :class="bgClass">
    <div class="flex place-items-center mobile-header">
      <a class="flex" href="index">
        <img :src="'img/logo-' + logoColor + '.svg'" class="logo" />
        <img :src="'img/code-logo-' + logoColor + '.png'" class="code-logo" />
      </a>
      <div
        id="open-menu-button-div"
        onclick="openmenu();"
        class="open-menu-button-div ml-auto"
      >
        <img class="open-menu-button" :src="`img/menu-${textColor}.svg`" />
      </div>
      <div
        id="close-menu-button-div"
        onclick="closemenu();"
        class="close-menu-button-div ml-auto hidden"
      >
        <img class="close-menu-button" :src="`img/close-${textColor}.svg`" />
      </div>
    </div>
    <div id="mobile-menu" :class="`mobile-menu hidden text-${textColor}`">
      <div class="pb-2">
        <a href="index">Home</a>
      </div>
      <div class="pb-2">
        <a href="index#news">News</a>
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
    logoColor: { type: String, required: true },
    textColor: { type: String, required: true },
    bgClass: { type: String, required: true },
  },
}
</script>
