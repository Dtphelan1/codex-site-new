<template>
  <div class="footer grid text-white font-16px pt-8 lg:py-8">
    <div class="flex flex-col lg:flex-row justify-self-end mr-16 lg:mr-0">
      <div class="py-2 lg:py-0 lg:px-3">
        <a tabindex="3" href="/">Home</a>
      </div>
      <div class="py-2 lg:py-0 lg:px-3">
        <a tabindex="3" href="/#news">News</a>
      </div>
      <div class="py-2 lg:py-0 lg:px-3">
        <a tabindex="3" href="uses">Use Cases</a>
      </div>
      <div class="py-2 lg:py-0 lg:px-3">
        <a tabindex="3" href="community">Community</a>
      </div>
      <div class="py-2 lg:py-0 lg:px-3">
        <a tabindex="3" href="story">Our Story</a>
      </div>
      <div class="py-2 lg:py-0 lg:px-3">
        <a tabindex="3" href="contact">Contact</a>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row ml-8 lg:ml-0">
      <div class="p-2 lg:py-0 lg:px-3">
        <a
          tabindex="3"
          target="_blank"
          href="https://www.linkedin.com/company/codex-common-oncology-data-elements-extensions/?trk=public_profile_topcard-current-company"
          class="flex flex-row underline"
          ><img
            width="20"
            class="mr-2"
            src="~/assets/img/linkin.svg"
          />Linkedin</a
        >
      </div>
      <div class="p-2 lg:py-0 lg:px-3">
        <a
          tabindex="3"
          target="_blank"
          href="https://confluence.hl7.org/display/COD/CodeX+Home"
          class="flex flex-row underline"
          ><img
            width="20"
            class="mr-2"
            src="~/assets/img/confluence.svg"
          />Confluence</a
        >
      </div>
    </div>
    <div
      class="flex justify-center col-span-2 lg:col-span-1 satoshi-bold font-black font-16px my-12 lg:my-0 lg:order-first"
    >
      Copyright ⓒ CodeX™ | FHIR | HL7 Accelerator
    </div>
  </div>
</template>
