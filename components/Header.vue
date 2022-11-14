<template>
  <div>
    <desktop-header :logo-color="logoColor" :underline-link="underlineLink" />
    <mobile-header
      :logo-color="mobileLogoColor"
      :text-color="mobileTextColor"
      :bg-class="mobileClass"
    />
  </div>
</template>
<script>
export default {
  props: {
    logoColor: { type: String, required: true },
    mobileTextColor: { type: String, required: true },
    mobileLogoColor: { type: String, required: true },
    mobileClass: { type: String, required: true },
    underlineLink: { type: String, required: true },
  },
}
</script>
