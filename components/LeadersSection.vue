<template>
  <VueFragment>
    <ul
      v-for="leader in leaders"
      :key="leader['title']"
      class="w-full pb-4 flex flex-col"
    >
      <img
        :title="leader['image-alt']"
        :alt="leader['image-alt']"
        class="pb-2.5"
        :src="'img/' + leader['image']"
      />
      <a
        tabindex="2"
        class="satoshi-bold underline"
        target="_blank"
        :href="leader['link']"
        >{{ leader['name'] }}</a
      >
      <h3 tabindex="2" class="font-medium text-medgrey">
        {{ leader['title'] }}
      </h3>
    </ul>
  </VueFragment>
</template>
<script>
const leaders = [
  {
    name: 'Dr. Steven Bratt, PhD',
    title: 'Program Manager',
    image: 'steveBratt.svg',
    'image-alt': 'Headshot of Dr. Steven Bratt',
    link: 'https://confluence.hl7.org/display/~steve_bratt',
  },
  {
    name: 'Dr. Su Chen, MD',
    title: 'Clinical Director',
    image: 'suChen.svg',
    'image-alt': 'Headshot of Dr. Su Chen',
    link: 'https://confluence.hl7.org/display/~suchen',
  },
  {
    name: 'Dr. Michele Galioto, DNP, RN, CNS',
    title: 'Deputy Director',
    image: 'micheleGalioto.png',
    'image-alt': 'Headshot of Dr. Michele Galioto',
    link: 'https://confluence.hl7.org/display/~mgalioto',
  },
  {
    name: 'Dr. Liz (Newlin) Canzone, PhD',
    title: 'Director of Operations',
    image: 'liz-crop.png',
    'image-alt': 'Headshot of Liz Canzone',
    link: 'https://confluence.hl7.org/display/~ecanzone',
  },
]
export default {
  data() {
    return {
      leaders,
    }
  },
}
</script>
