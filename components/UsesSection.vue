<template>
  <div class="bg-white uses-list">
    <div
      class="flex flex-col place-content-center use-container lgx:p-0 lg:flex-row"
    >
      <div
        class="lgx:flex flex-row justify-center items-center mr-0 lg:mr-20 bg-darkred text-white lg:bg-white lg:text-darkred py-10 lg:py-0"
      >
        <div
          tabindex="2"
          class="use-num satoshi-bold font-bold lgx:leading-none mr-5 w-fit lg:mr-0 lg:w-32"
        >
          {{ useItems.execution.length }}
        </div>
        <div tabindex="2" class="use-num-desc self-end">In Execution</div>
      </div>
      <div tabindex="-1" class="hidden lg:flex flex-col items-stretch">
        <img width="63" src="~/assets/img/diamond1.svg" />
        <div class="use-line use-line-1 border-darkred"></div>
      </div>
      <div class="use-list use-list-execute pr-14 pt-10 lg:pr-0 lg:pt-0">
        <UsesList
          :uses="useItems.execution"
          image="~/assets/img/diamond1.svg"
        />
      </div>
    </div>
    <div
      class="flex flex-col place-content-center use-container mt-10 lg:mt-0 lgx:p-0 lg:flex-row"
    >
      <div
        class="lgx:flex flex-row justify-center items-center mr-0 lg:mr-20 bg-gold text-white lg:bg-white lg:text-gold py-10 lg:py-0"
      >
        <div
          tabindex="2"
          class="use-num satoshi-bold font-bold lgx:leading-none mr-5 w-fit lg:mr-0 lg:w-32"
        >
          {{ useItems.planning.length }}
        </div>
        <div tabindex="2" class="use-num-desc self-end">In Planning</div>
      </div>
      <div tabindex="-1" class="hidden lg:flex flex-col items-stretch">
        <img width="43" src="~/assets/img/diamond2.svg" />
        <div class="use-line border-gold"></div>
      </div>
      <div class="use-list use-list-planning pr-14 pt-10 lg:pr-0 lg:pt-0">
        <UsesList :uses="useItems.planning" image="~/assets/img/diamond2.svg" />
      </div>
    </div>
    <div
      class="flex flex-col place-content-center use-container mt-10 lg:mt-0 lgx:p-0 lg:flex-row"
    >
      <div
        class="lgx:flex flex-row justify-center items-center mr-0 lg:mr-20 bg-medgrey text-white lg:bg-white lg:text-medgrey py-10 lg:py-0"
      >
        <div
          tabindex="2"
          class="use-num satoshi-bold font-bold lgx:leading-none mr-5 w-fit lg:mr-0 lg:w-32"
        >
          {{ useItems.discovery.length }}
        </div>
        <div tabindex="2" class="use-num-desc self-end">In Discovery</div>
      </div>
      <div tabindex="-1" class="hidden lg:flex flex-col items-stretch">
        <img width="33" src="~/assets/img/diamond3.svg" />
        <div class="use-line border-medgrey"></div>
      </div>
      <div class="use-list use-list-discovery pr-14 pt-10 lg:pr-0 lg:pt-0">
        <UsesList
          :uses="useItems.discovery"
          image="~/assets/img/diamond3.svg"
        />
      </div>
    </div>
  </div>
</template>
<script>
const useItems = {
  execution: [
    {
      title: 'Cancer Registry Reporting',
      description:
        'Enable reporting of mCODE-based cancer data from cancer center health center EHRs to state and private registries that are aggregating data for different reasons, substantially reducing duplication and burden while increasing reporting speed and accuracy.',
      url: 'https://confluence.hl7.org/display/COD/Cancer+Registry+Reporting',
      newDomain: false,
    },
    {
      title: 'EHR Endpoints for Clinical Trials (ICAREdata)',
      description:
        'Collect research-quality mCODE-based data from EHRs to increase the value of real-world data for clinical trials, and reduce and potentially eliminate manual and/or duplicate data entry into case report forms.',
      url: 'https://confluence.hl7.org/display/COD/EHR+Endpoints+for+Cancer+Clinical+Trials',
      newDomain: false,
    },
    {
      title: 'Integrated Trial Matching for Cancer Patients and Providers',
      description:
        'Leverage mCODE-based data standards and open APIs that enable interoperable, scalable, and accessible clinical trial matching services to improve the ability of patients to find clinical trials for which they may be eligible.',
      url: 'https://confluence.hl7.org/pages/viewpage.action?pageId=66938394',
      newDomain: false,
    },
    {
      title: 'mCODE++ Extraction',
      description:
        'Develop software to enable existing EHRs and other systems to share cancer patient data conformant to the mCODE FHIR Implementation Guides to support a variety of use cases. ',
      url: 'https://confluence.hl7.org/pages/viewpage.action?pageId=76164453',
      newDomain: false,
    },
    {
      title: 'Radiation Treatment Therapy Data for Cancer',
      description:
        'Leverage mCODE and extensions to enable sharing of critical radiation therapy treatment data for care coordination or data reuse (research, quality measurement, payer-required reporting).',
      url: 'https://confluence.hl7.org/display/COD/Radiation+Therapy+Treatment+Data+for+Cancer',
      newDomain: false,
    },
  ],
  planning: [
    {
      title: 'Prior Authorization in Oncology',
      description:
        'Facilitate sharing of mCODE-based clinical data between providers and payers to reduce burden and speed authorization or requests for more information.',
      url: 'https://confluence.hl7.org/display/COD/Prior+Authorization+in+Oncology',
      newDomain: false,
    },
    {
      title: 'Risk Evaluation and Mitigation Strategies',
      description:
        'Create integrated, automated, efficient, and effective REMS programs by leveraging open data standards. Create the data infrastructure to enable REMS integration into the current workflow and data sharing across REMS stakeholders, reducing undue burden. ',
      url: 'https://confluence.hl7.org/display/COD/Risk+Evaluation+and+Mitigation+Strategies+%28REMS%29+Integration',
      newDomain: false,
    },
  ],
  discovery: [
    {
      title: 'CardX Hypertension Management',
      description:
        'Design and build an integrated standard that enables interoperable, scalable, and accessible hypertension management, both at home and in the clinic, so that blood pressure data can easily be shared among home blood pressure measurement devices, patient data managers, and health systems. ',
      url: 'https://confluence.hl7.org/display/COD/CardX+-+Hypertension+Management',
      newDomain: true,
    },
    {
      title: 'Genomics Data Exchange',
      description:
        'Design and build an integrated standard that enables interoperable, scalable, and accessible genomics data that can easily be shared among laboratories, EHR Systems, and/or genomics repositories. ',
      url: 'https://confluence.hl7.org/display/COD/GenomeX+-+Genomics+Data+Exchange',
      newDomain: true,
    },
    {
      title: 'Genomics Operations',
      description:
        'Enable access to complex genomic data through APIs so that developers can more easily develop and populate data for a range of genomic applications. ',
      url: 'https://confluence.hl7.org/display/COD/GenomeX+-+Genomics+Operations',
      newDomain: true,
    },
    {
      title: 'Quality Measures',
      description:
        'Create a solution that demonstrates the ability to author and evaluate digital quality measures using the FHIR data model and mCODE, where applicable, for value-based programs and clinical quality improvement in the oncology domain.',
      url: 'https://confluence.hl7.org/display/COD/Quality+Measures',
      newDomain: false,
    },
  ],
}
export default {
  data() {
    return {
      useItems,
    }
  },
}
</script>
