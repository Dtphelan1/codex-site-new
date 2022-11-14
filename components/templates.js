const usesApp = Vue.createApp()

usesApp.component('UseItemList', {
  props: { uses: Array, image: String },
  template: `
      <template v-for="(use, index) in uses">
        <div :class="{'mb-4 lg:mb-0': index==0}"><span v-if="use.newDomain" tabindex="2" class="use-explain-badge whitespace-nowrap lg:hidden">NEW DOMAIN</span></div>
        <div :class="['flex flex-row items-start', {'pb-4': index==0, 'py-4': (index>0 && index!=(uses.length-1)), 'pt-4': (index!=0 && index==(uses.length-1))}]">
          <img width="22" class="mx-6 mt-1 lg:hidden" :src="image" />
          <div>
            <div>
              <h3 tabindex="2" class="font-20px inline-block satoshi-bold font-bold underline"><a target="_blank" :href="use.url">{{use.title}}</a></h3>
              <span tabindex="2" v-if="use.newDomain" tabindex="2" class="use-explain-badge whitespace-nowrap hidden lg:inline">NEW DOMAIN</span>
            </div>
            <div tabindex="2" class="font-16px leading-6 mt-1">{{use.description}}</div>
          </div>
        </div>
      </template>
    `,
})

usesApp.component('Uses', {
  data() {
    return {
      useItems,
    }
  },
  template: `
    <div class="bg-white uses-list">
      <div class="flex flex-col place-content-center use-container lgx:p-0 lg:flex-row">
        <div class="lgx:flex flex-row justify-center items-center use-num-container lgx:m-0 bg-darkred text-white lg:bg-white lg:text-darkred py-10 lg:py-0">
          <div tabindex="2" class="use-num satoshi-bold font-bold lgx:leading-none mr-5 w-fit lg:mr-0 lg:w-32">{{useItems.execution.length}}</div>
          <div tabindex="2" class="use-num-desc self-end">In Execution</div>
        </div>
        <div tabindex="-1" class="hidden lg:flex flex-col items-stretch">
          <img width="63" src="img/diamond1.svg" />
          <div class="use-line use-line-1 border-darkred"></div>
        </div>
        <div class="use-list use-list-execute pr-14 pt-10 lg:pr-0 lg:pt-0">
          <use-item-list :uses='useItems.execution' image='img/diamond1.svg' />
        </div>
      </div>
      <div class="flex flex-col place-content-center use-container mt-10 lg:mt-0 lgx:p-0 lg:flex-row">
        <div class="lgx:flex flex-row justify-center items-center use-num-container lgx:m-0 bg-gold text-white lg:bg-white lg:text-gold py-10 lg:py-0">
          <div tabindex="2" class="use-num satoshi-bold font-bold lgx:leading-none mr-5 w-fit lg:mr-0 lg:w-32">{{useItems.planning.length}}</div>
          <div tabindex="2" class="use-num-desc self-end">In Planning</div>
        </div>
        <div tabindex="-1" class="hidden lg:flex flex-col items-stretch">
          <img width="43" src="img/diamond2.svg" />
          <div class="use-line border-gold"></div>
        </div>
        <div class="use-list use-list-planning pr-14 pt-10 lg:pr-0 lg:pt-0">
          <use-item-list :uses='useItems.planning' image='img/diamond2.svg' />
        </div>
      </div>
      <div class="flex flex-col place-content-center use-container mt-10 lg:mt-0 lgx:p-0 lg:flex-row">
        <div class="lgx:flex flex-row justify-center items-center use-num-container lgx:m-0 bg-medgrey text-white lg:bg-white lg:text-medgrey py-10 lg:py-0">
          <div tabindex="2" class="use-num satoshi-bold font-bold lgx:leading-none mr-5 w-fit lg:mr-0 lg:w-32">{{useItems.discovery.length}}</div>
          <div tabindex="2" class="use-num-desc self-end">In Discovery</div>
        </div>
        <div tabindex="-1" class="hidden lg:flex flex-col items-stretch">
          <img width="33" src="img/diamond3.svg" />
          <div class="use-line border-medgrey"></div>
        </div>
        <div class="use-list use-list-discovery pr-14 pt-10 lg:pr-0 lg:pt-0">
          <use-item-list :uses='useItems.discovery' image='img/diamond3.svg' />
        </div>
      </div>
    </div>
  `,
})

const leaderApp = Vue.createApp()

leaderApp.component('Leaders', {
  data() {
    return {
      leaders,
    }
  },
  template: `
    <ul v-for="leader in leaders" class="w-full pb-4 flex flex-col">
      <img :title="leader['image-alt']" :alt="leader['image-alt']" class="pb-2.5" :src="'img/'+leader['image']">
      <a tabindex="2" class="satoshi-bold underline" target="_blank" :href="leader['link']">{{leader['name']}}</a>
      <h3 tabindex="2" class="font-medium text-medgrey">{{leader['title']}}</h3>
    </ul>
   `,
})

const commApp = Vue.createApp()

commApp.component('Steering', {
  props: { members: Array },
  template: `
   <div class="pb-4">
      <h2 tabindex="2" class="satoshi-bold text-darkbrown uppercase font-16px">Steering Committee</h2>
      <div v-for="member in members">
        <p tabindex="2" class="pb-1 lg:pb-0">{{member}}</p>
      </div>
    </div>
  `,
})

commApp.component('Operating', {
  props: { members: Array },
  template: `
    <div>
      <h2 tabindex="2" class="satoshi-bold text-darkbrown uppercase font-16px">Operating Committee</h2>
      <div v-for="member in members.slice(0, (( members.length)/2))">
        <p tabindex="2" class="pb-1 lg:pb-0">{{member}}</p>
      </div>
    </div>
    <div class="pr-0 lg:pr-16 ">
       <div v-for="member in members.slice((( members.length)/2),  members.length)">
        <p tabindex="2" class="pb-1 lg:pb-0">{{member}}</p>
      </div>
    </div>
  `,
})

commApp.component('Committees', {
  data() {
    return {
      commMembers,
    }
  },
  template: `
      <steering :members="commMembers['steering']"/>
      <operating :members="commMembers['operating']" />
      `,
})
