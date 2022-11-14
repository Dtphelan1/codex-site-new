const newsApp = Vue.createApp()

newsApp.component('NewsItem', {
  props: { item: Object },
  computed: {
    textSize() {
      return (this.item.source + this.item.date).length > 27
        ? 'text-[10px]'
        : 'text-[12px]'
    },
  },
  template: `
        <div class="bg-backgroundgrey border-t-4 border-lightbrown news-card">
            <h1 tabindex="1" class="satoshi-bold font-black font-16px underline"><a target='_blank' :href="item.link">{{item.title}}</a></h1>
            <h2 tabindex="1" :class="'flex py-2 font-bold text-newsgrey sm:text-[16px] ' + textSize">{{item.source}} <img class="px-2" src="img/diamond-bullet.svg"/> {{item.date}}</h2>
            <p tabindex="1">{{item.summary}}</p>
        </div>
    `,
})

newsApp.component('DesktopNews', {
  props: { newsItems: Array },
  template: `
        <div class="flex flex-col px-2 justify-center sm:px-16 md:px-32 lg:px-4 xl:px-16 lg:grid lg:grid-cols-3 lg:gap-x-4 xl:gap-x-6 hidden lg:block">
            <div v-for="(item, index) in newsItems" :class="['mb-8 xl:mb-0', { 'xl:pr-2': index==0, 'xl:pl-2': index==(newsItems.length-1) }]">
                <news-item :item="item" / >
            </div>
        </div>
    `,
})

newsApp.component('MobileNews', {
  props: { newsItems: Array },
  template: `
        <div id="newsCarousel" class="carousel carousel-dark slide relative lg:hidden" data-bs-ride="carousel" data-bs-interval="false">
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div v-for="(item, index) in newsItems" :class="['carousel-item relative float-left w-full', {'active': index==0}]">
                        <div class="flex flex-col px-2 justify-center sm:px-16 md:px-32 lg:px-4 xl:px-16 lg:grid lg:grid-cols-3 lg:gap-x-4 xl:gap-x-6">
                            <div :class="['mb-8 xl:mb-0', { 'xl:pr-2': index==0, 'xl:pl-2': index==(newsItems.length-1) }]" >
                                <news-item :item="item" />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#newsCarousel"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#newsCarousel"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                <div class="carousel-indicators indicator-container absolute right-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        v-for="(item, index) in newsItems"
                        type="button"
                        data-bs-target="#newsCarousel"
                        :data-bs-slide-to="index"
                        :class="['round-indicator', {'active': index==0}]"
                        aria-current="true"
                        :aria-label="'News Story '+ (index+1)"
                    />
                </div>
            </div>
    `,
})

newsApp.component('News', {
  data() {
    return {
      newsItems,
    }
  },
  template: `
        <div class="news-container p-10 pb-16 flex flex-col">
            <div class="flex flex-col lg:flex-row justify-center items-center">
                <h1 tabindex="1" id="news" class="satoshi-black font-black font-36px pb-5 place-self-center">News & Updates</h1>
                <div tabindex="1" class="pb-5 pl-6"><a tabindex="1" class="underline" target="_blank" href="https://confluence.hl7.org/display/COD/CodeX+Home?desktop=true&macroName=confiform-entry-register#CodeXHome-News">Read More</a><img class="inline ml-2" src="img/arrow.svg"/></div>
            </div>
            <mobile-news  :news-items="newsItems" />
            <desktop-news :news-items="newsItems" />
        </div>
    `,
})

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
