<template>
  <div
    class="h-auto md:h-full px-8 pt-8 md:pt-28 lg:pt-64 pb-6 bg-darkgrey text-white flex flex-col !justify-center md:flex-nowrap md:flex-row md:gap-8 lg:gap-16 xl:gap-32"
  >
    <div
      class="flex flex-col justify-center items-center md:justify-start md:items-start md:w-1/2 xl:w-1/4"
    >
      <div class="self-start">
        <h2 class="satoshi-black font-bold contact-heading pb-2">
          Let's Connect!
        </h2>
      </div>
      <div class="flex justify-center py-8 max-w-sm md:hidden">
        <img
          class="max-w-l"
          alt="Email and letter illustration"
          src="~/assets/img/letter.png"
        />
      </div>
      <div class="w-full">
        <p class="py-2 font-normal">
          Learn more about our current domains, use cases and how to engage with
          the Codex community. Attend an event, become a member, participate in
          a use case, partner on an initiative, directly support the CodeX
          mission.
        </p>
        <p class="py-4 font-normal">
          Get in touch! Email us at
          <a class="underline" href="mailto:codeX@hl7.org">CodeX@hl7.org</a>
          or fill out the contact form.
        </p>
      </div>
    </div>
    <div class="w-full md:w-1/2 mt-6 md:mt-0 xl:w-1/3">
      <form id="contactForm" ref="form" @submit="submitContactForm">
        <div
          class="flex flex-col w-full sm:flex-row sm:items-center sm:gap-8 md:gap-0 md:flex-col xl:flex-row xl:gap-6 mb-6"
        >
          <div class="mb-2 sm:w-1/2 md:w-full">
            <label class="block mt-4 mb-2 font-bold xl:mt-0">Name</label>
            <input
              type="text"
              name="from_name"
              required
              class="appearance-none border-2 border-white rounded w-full py-2 px-4 text-gray-700 focus:text-gray-700 focus:bg-white"
            />
          </div>
          <div class="mb-2 sm:w-1/2 md:w-full">
            <label class="block mt-4 mb-2 font-bold xl:mt-0">Email</label>
            <input
              type="email"
              name="reply_to"
              required
              class="appearance-none border-2 border-white rounded w-full py-2 px-4 text-gray-700 focus:text-gray-700 focus:bg-white"
            />
          </div>
        </div>
        <div class="mb-6 font-satoshi-regular text-gray-700 font-normal">
          <label class="block my-2 font-bold text-white"
            >Topic of Interest</label
          >
          <select
            name="topic"
            required
            class="form-select appearance-none block w-full px-4 py-2 text-base bg-white bg-clip-padding bg-no-repeat border border-2 border-solid border-white rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
          >
            <option class="" selected value="General Inquiry">
              Select topic of interest
            </option>
            <option class="" value="General Inquiry">General Inquiry</option>
            <option class="" value="Media Inquiry">Media Inquiry</option>
            <option class="" value="Supporting CodeX">Supporting CodeX</option>
            <option class="" value="Membership">Membership</option>
            <option class="" value="Partnership and Collaborations">
              Partnership and Collaborations
            </option>
            <option class="" value="Participating as a site">
              Participating as a Site
            </option>
            <option class="" value="Use Cases">Use Cases</option>
            <option class="" value="Events">Events</option>
          </select>
        </div>

        <div class="mb-9">
          <label class="block my-2 font-bold">Message</label>
          <textarea
            name="message"
            required
            class="appearance-none border-2 border-white rounded w-full py-2 px-4 text-gray-700 md:h-28 h-36 focus:text-gray-700 focus:bg-white"
          ></textarea>
        </div>
        <div class="flex flex-col lg:flex-row">
          <div class="mb-6 lg:mr-8">
            <input
              id="contact-submit"
              type="submit"
              :value="submitLoading ? 'Submitting...' : 'Submit'"
              class="bg-darkbrown w-full sm:w-36 h-11 satoshi-bold rounded cursor-pointer disabled:bg-darkgrey disabled:border disabled:border-white"
              :class="{ 'cursor-not-allowed': submitLoading }"
              :disabled="submitLoading"
            />
          </div>
          <div
            v-show="submitSuccess"
            id="contact-submit-success"
            class="success text-center rounded mt-2 lg:mt-0 mb-6 p-2"
          >
            Thank you for your feedback!
          </div>
          <div
            v-show="submitError"
            id="contact-submit-error"
            class="error text-center rounded mt-2 lg:mt-0 mb-6 p-2"
          >
            Sorry, there was an error, please try again later.
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { sendForm } from '@emailjs/browser'

export default {
  layout: 'DefaultGrey',
  data() {
    return {
      submitLoading: false,
      submitError: false,
      submitSuccess: false,
      EMAILJS_SERVICE_ID: 'service_vhw7slg',
      EMAILJS_TEMPLATE_ID: 'template_q4j4dpi',
      EMAILJS_PUBLIC_KEY: 'Ogb0ZaVWt1cujLVK1',
    }
  },
  methods: {
    submitContactForm(e) {
      e.preventDefault()
      // Reinitialize relevant state parameters
      this.submitError = false
      this.submitSuccess = false
      this.submitLoading = true
      sendForm(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        this.$refs.form,
        this.EMAILJS_PUBLIC_KEY
      ).then(
        (result) => {
          this.submitLoading = false
          this.submitSuccess = true
          // eslint-disable-next-line no-console
          console.log('SUCCESS!', result.text)
        },
        (error) => {
          this.submitLoading = false
          this.submitError = true
          // eslint-disable-next-line no-console
          console.log('FAILED...', error.text)
        }
      )
    },
  },
}
</script>
