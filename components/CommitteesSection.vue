<template>
  <VueFragment>
    <steering :members="committeeMembers['steering']" />
    <operating :members="committeeMembers['operating']" />
  </VueFragment>
</template>
<script>
const committeeMembers = {
  steering: [
    'Dr. Steven Bratt, PhD (MITRE)',
    'Dr. Charles Jaffee, MD, PhD (HL7)',
  ],
  operating: [
    'Alliance for Clinical Trials in Oncology',
    'American Association of Physicists in Medicine (AAPM)',
    'American Cancer Society - Cancer Action Network (ACS CAN)',
    'American Society of Clinical Oncology',
    'American Society for Radiation Oncology (ASTRO)',
    'Amgen',
    'Canadian Organization of Medical Physicists (COMP)',
    'Centers for Disease Control and Prevention (CDC)',
    'Center for International Blood and Marrow Transplant Research (CIBMTR)',
    'Clinical Data Interchange Standards Consortium (CDISC)',
    'Evernorth',
    'Food and Drug Administration (FDA)',
    'Health Level Seven (HL7)',
    'Learning Health Community',
    'Michigan Cancer Surveillance Program',
    'MITRE',
    'NRG Oncology',
    'Ontada',
    'Pfizer',
    'Society for Imaging Informatics in Medicine',
    'Syntropy',
    'Telligen',
    'Tempus',
    'TrialJectory',
    'UnitedHealthcare',
    'University of Nebraska Medical Center',
    'Varian',
  ],
}
export default {
  data() {
    return {
      committeeMembers,
    }
  },
}
</script>
