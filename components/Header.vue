<template>
  <div>
    <DesktopHeader :logo-color="logoColor" class="hidden md:block" />
    <MobileHeader
      :logo-color="mobileLogoColor"
      :text-color="mobileTextColor"
      :bg-class="mobileClass"
      class="block md:hidden"
    />
  </div>
</template>
<script>
export default {
  props: {
    logoColor: {
      type: String,
      required: true,
    },
    mobileTextColor: {
      type: String,
      required: true,
    },
    mobileLogoColor: {
      type: String,
      required: true,
    },
    mobileClass: {
      type: String,
      required: true,
    },
  },
}
</script>
