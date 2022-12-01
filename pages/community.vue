<template>
  <div>
    <div
      class="community-header-block bg-darkgrey flex justify-center items-center px-4"
    >
      <div class="text-white text-center md:pt-10">
        <h2
          tabindex="2"
          class="community-page-headline satoshi-black font-bold lg:font-black"
        >
          Community
        </h2>
        <div
          tabindex="2"
          class="community-page-subheader max-w-xl font-normal satoshi-light"
        >
          Partnering clinicians, industry, patients, and philanthropy to create
          better data for health.
        </div>
      </div>
    </div>
    <div class="bg-white pb-8">
      <div class="text-center py-8 lg:px-16 px-10 font-18px">
        <p tabindex="2" class="satoshi-bold pb-4 lg:pb-2">
          We are driven by the vision of an equitable future enabled by
          open-source innovation, owned by patients, and empowered by the
          healthcare community.
        </p>
        We are dedicated to radical improvements in patient outcomes and
        supercharging the capability of care teams and researchers by
        harmonizing health data that is expert-validated, trusted, consistent,
        usable, and shareable.
      </div>
    </div>
    <div class="px-16 bg-white">
      <h1 tabindex="2" class="satoshi-black font-bold font-36px text-darkbrown">
        Leadership
      </h1>
      <LeadersSection :leaders="leaders" />
    </div>
    <div class="px-16 bg-white">
      <h1
        tabindex="2"
        class="pt-16 pb-7 satoshi-black font-bold font-36px text-darkbrown"
      >
        Managing Committees
      </h1>
      <CommitteeMembers
        :steering-members="steeringMembers"
        :operating-members="operatingMembers"
      />
    </div>
    <div class="px-16 pt-20 bg-white">
      <h1 tabindex="2" class="satoshi-black font-bold font-36px text-darkbrown">
        Community of Practice
      </h1>
      <p tabindex="2" class="pt-2.5 w-full lg:w-3/4">
        The
        <span class="underline"
          ><a
            target="_blank"
            href="https://confluence.hl7.org/display/COD/mCODE+Community+of+Practice#:~:text=CodeX%20Community%20of%20Practice%20(CoP,and%20other%20health%20information%20systems."
            >Community of Practice (CoP)</a
          ></span
        >
        aims to improve cancer care and research by gathering health systems to
        develop best practices for implementing mCODE and use-case-based
        extensions into production EHRs and other systems. There is no cost for
        participation in the CoP's monthly calls.
      </p>
      <div class="flex lg:flex-row flex-col pt-2.5">
        <div>
          <a
            tabindex="2"
            class="flex underline mt-2"
            target="_blank"
            href="https://confluence.hl7.org/display/COD/mCODE+Community+of+Practice"
            >Sign Up Here <img class="ml-2" src="~/assets/img/arrow.svg"
          /></a>
        </div>
        <div>
          <a
            tabindex="2"
            class="lg:ml-8 underline flex mt-2"
            target="_blank"
            href="https://confluence.hl7.org/display/COD/CodeX+Calendar"
            >Our Events <img class="ml-2" src="~/assets/img/arrow.svg"
          /></a>
        </div>
      </div>
    </div>
    <div class="pl-16 pr-8 pt-6 bg-white">
      <div class="flex flex-row flex-wrap gap-x-4 justify-between lg:gap-x-0">
        <div class="pt-9 pb-5 w-1/4 lg:w-1/3 lg:flex lg:gap-x-8">
          <div class="flex w-16 lg:w-20 justify-end">
            <img
              title="Health Systems icon of hospital building"
              alt="Health Systems icon of hospital building"
              class="h-16 lg:h-20"
              src="~/assets/img/healthSystems.png"
            />
          </div>
          <div class="mt-3 lg:mt-0">
            <h1 tabindex="2" class="community-cop-number satoshi-bold">55</h1>
            <h3 tabindex="2" class="community-cop-numb-metric">
              Health Systems
            </h3>
          </div>
        </div>
        <div class="pt-9 pb-5 w-1/4 lg:w-1/3 lg:flex lg:gap-x-8">
          <div class="flex w-16 lg:w-20 justify-end">
            <img
              title="Payers icon health shield"
              alt="Payers icon health shield"
              class="h-16 lg:h-20"
              src="~/assets/img/payers.png"
            />
          </div>
          <div class="mt-3 lg:mt-0">
            <h1 tabindex="2" class="community-cop-number satoshi-bold">7</h1>
            <h3 tabindex="2" class="community-cop-numb-metric">Payers</h3>
          </div>
        </div>
        <div class="pt-9 pb-5 w-1/4 lg:w-1/3 lg:flex lg:gap-x-8">
          <div class="flex w-16 lg:w-20 justify-end">
            <img
              title="pharma icon of pharmacy building"
              alt="pharma icon of pharmacy building"
              class="h-16 lg:h-20"
              src="~/assets/img/pharma.png"
            />
          </div>
          <div class="mt-3 lg:mt-0">
            <h1 tabindex="2" class="community-cop-number satoshi-bold">10</h1>
            <h3 tabindex="2" class="community-cop-numb-metric">Pharma</h3>
          </div>
        </div>
        <div class="pt-9 pb-5 w-1/4 lg:w-1/3 lg:flex lg:gap-x-8">
          <div class="flex w-16 lg:w-20 justify-end">
            <img
              title="EHR and Tech Companies Icon of person with electronic device"
              alt="EHR and Tech Companies Icon of person with electronic device"
              class="h-16 lg:h-20"
              src="~/assets/img/ehrsAndTechCompanies.png"
            />
          </div>
          <div class="mt-3 lg:mt-0">
            <h1 tabindex="2" class="community-cop-number satoshi-bold">85</h1>
            <h3 tabindex="2" class="community-cop-numb-metric">
              EHRs & Tech Companies
            </h3>
          </div>
        </div>
        <div class="pt-9 pb-5 w-1/4 lg:w-1/3 lg:flex lg:gap-x-8">
          <div class="flex w-16 lg:w-20 justify-end">
            <img
              title="Medical Societies and Consortia icon of building"
              alt="Medical Societies and Consortia icon of building"
              class="h-16 lg:h-20"
              src="~/assets/img/medicalSocAndConsortia.png"
            />
          </div>
          <div class="mt-3 lg:mt-0">
            <h1 tabindex="2" class="community-cop-number satoshi-bold">12</h1>
            <h3 tabindex="2" class="community-cop-numb-metric">
              Medical Societies & Consortia
            </h3>
          </div>
        </div>
        <div class="pt-9 pb-5 w-1/4 lg:w-1/3 lg:flex lg:gap-x-8">
          <div class="flex w-16 lg:w-20 justify-end">
            <img
              title="Government Agencies icon of federal building"
              alt="Government Agencies icon of federal building"
              class="h-16 lg:h-20"
              src="~/assets/img/governmentAgencies.png"
            />
          </div>
          <div class="mt-3 lg:mt-0">
            <h1 tabindex="2" class="community-cop-number satoshi-bold">14</h1>
            <h3 tabindex="2" class="community-cop-numb-metric">
              Government Agencies
            </h3>
          </div>
        </div>
        <div class="pt-9 pb-5 w-1/4 lg:w-1/3 lg:flex lg:gap-x-8">
          <div class="flex w-16 lg:w-20 justify-end">
            <img
              title="Research Organizations Icon of microscope"
              alt="Research Organizations Icon of microscope"
              class="h-16 lg:h-20"
              src="~/assets/img/researchOrganizations.png"
            />
          </div>
          <div class="mt-3 lg:mt-0">
            <h1 tabindex="2" class="community-cop-number satoshi-bold">12</h1>
            <h3 tabindex="2" class="community-cop-numb-metric">
              Research Organizations
            </h3>
          </div>
        </div>
        <div class="pt-9 pb-5 w-1/4 lg:w-1/3 lg:flex lg:gap-x-8">
          <div class="flex w-16 lg:w-20 justify-end">
            <img
              title="Non-profit and foundations icon of people gathered together"
              alt="Non-profit and foundations icon of people gathered together"
              class="h-16 lg:h-20"
              src="~/assets/img/nonProfAndFoundations.png"
            />
          </div>
          <div class="mt-3 lg:mt-0">
            <h1 tabindex="2" class="community-cop-number satoshi-bold">7</h1>
            <h3 tabindex="2" class="community-cop-numb-metric">
              Non-Profits & Foundations
            </h3>
          </div>
        </div>
        <div class="pt-9 pb-5 w-1/4 lg:w-1/3 lg:flex lg:gap-x-8">
          <div class="flex w-16 lg:w-20 justify-end">
            <img
              title="Patient Advocacy Organizations icon of megaphone"
              alt="Patient Advocacy Organizations icon of megaphone"
              class="h-16 lg:h-20"
              src="~/assets/img/patientAdvocacyOrgs.png"
            />
          </div>
          <div class="mt-3 lg:mt-0">
            <h1 tabindex="2" class="community-cop-number satoshi-bold">2</h1>
            <h3 tabindex="2" class="community-cop-numb-metric">
              Patient Advocacy Organizations
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="px-16 py-20 bg-white">
      <h1 tabindex="2" class="satoshi-black font-bold font-36px text-darkbrown">
        Membership
      </h1>
      <p tabindex="2" class="py-2 w-full lg:w-3/4">
        Paying, government, and sponsored CodeX Members are recognized as
        leaders through CodeX decision-making, thought leadership, conference
        key notes, and more.
      </p>
      <p>
        <a tabindex="2" class="flex underline" href="contact"
          >Contact Us <img class="ml-2" src="~/assets/img/arrow.svg"
        /></a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'DefaultGrey',
  ssr: false, // Disable Server Side rendering
  async asyncData({ $content, params }) {
    const leaders = await $content('leaders').fetch()

    const steeringMembersObjs = await $content('committeeMembers')
      .only('name')
      .sortBy('name')
      .where({ slug: 'steering' })
      .fetch()
    const steeringMembers = steeringMembersObjs.map(
      (memberObj) => memberObj.name
    )
    const operatingMembersObjs = await $content('committeeMembers')
      .only('name')
      .sortBy('name')
      .where({ slug: 'operating' })
      .fetch()
    const operatingMembers = operatingMembersObjs.map(
      (memberObj) => memberObj.name
    )
    return {
      leaders,
      steeringMembers,
      operatingMembers,
    }
  },
}
</script>
