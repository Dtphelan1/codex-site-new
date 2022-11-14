const headerApp = Vue.createApp();

headerApp.component('mobile-header', {
	template:
	`
        <div :class="bgClass">
			<div class="flex place-items-center mobile-header">
				<a class="flex" href="index">
				<img :src="'img/logo-'+logoColor+'.svg'" class="logo" />
				<img :src="'img/code-logo-'+logoColor+'.png'" class="code-logo" />
				</a>
				<div id="open-menu-button-div" onclick="openmenu();" class="open-menu-button-div ml-auto">
					<img class="open-menu-button" :src="'img/menu-'+textColor+'.svg'" />
				</div>
				<div id="close-menu-button-div" onclick="closemenu();" class="close-menu-button-div ml-auto hidden">
					<img class="close-menu-button" :src="'img/close-'+textColor+'.svg'" />
				</div>
			</div>
			<div id="mobile-menu" :class="'mobile-menu hidden text-'+textColor">
				<div class="pb-2">
					<a href="index">Home</a>
				</div>
				<div class="pb-2">
					<a href="index#news">News</a>
				</div>
				<div class="pb-2">
					<a href="uses">Use Cases</a>
				</div>
				<div class="pb-2">
					<a href="community">Community</a>
				</div>
				<div class="pb-2">
					<a href="story">Our Story</a>
				</div>
				<div class="pb-2">
					<a href="contact">Contact</a>
				</div>
			</div>
		</div>
    `,
	props: {logoColor: String, textColor: String, bgClass: String}
});

headerApp.component('desktop-header', {
	template:
	`
		<div class="header-container absolute inset-0 z-10">
			<div class="flex">
				<a class="flex" href="index">
				<img class="logo" alt="CodeX Logo" :src="'img/logo-'+logoColor+'.svg'" />
				<img class="code-logo self-end" src="img/code-logo-white.png" />
				</a>
				<div class="flex flex-row gap-8 ml-auto text-white items-center">
					<div :class="['flex items-center',{ 'underline decoration-solid underline-offset-8' : underlineLink=='index'}]">
						<a tabindex="1" href="index">Home</a>
					</div>
					<div class="flex items-center">
						<a tabindex="1" href="index#news">News</a>
					</div>
					<div :class="['flex items-center',{ 'underline decoration-solid underline-offset-8' : underlineLink=='uses'}]">
						<a tabindex="1" href="uses">Use Cases</a>
					</div>
					<div :class="['flex items-center',{ 'underline decoration-solid underline-offset-8' : underlineLink=='community'}]">
						<a tabindex="1" href="community">Community</a>
					</div>
					<div :class="['flex items-center',{ 'underline decoration-solid underline-offset-8' : underlineLink=='story'}]">
						<a tabindex="1" href="story">Our Story</a>
					</div>
					<div :class="['flex items-center',{ 'underline decoration-solid underline-offset-8' : underlineLink=='contact'}]">
						<a tabindex="1" href="contact">Contact</a>
					</div>
				</div>
			</div>
		</div>
	`,
	props: {logoColor: String, underlineLink: String}
});

headerApp.component('headers', {
	template:
	`
		<desktop-header :logo-color="logoColor" :underline-link="underlineLink" />
		<mobile-header :logo-color="mobileLogoColor" :text-color="mobileTextColor" :bg-class="mobileClass"/>
	`,
	props: {logoColor: String, mobileTextColor: String, mobileLogoColor: String, mobileClass: String, underlineLink: String}
});

const footerApp = Vue.createApp();

footerApp.component('footers', {
	template:
	`
		<div class="footer grid text-white font-16px pt-8 lg:py-8 ">
			<div class="flex flex-col lg:flex-row justify-self-end mr-16 lg:mr-0">
				<div class="py-2 lg:py-0 lg:px-3">
					<a tabindex="3" href="index">Home</a>
				</div>
				<div class="py-2 lg:py-0 lg:px-3">
					<a tabindex="3" href="index#news">News</a>
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
					<a tabindex="3" target="_blank" href="https://www.linkedin.com/company/codex-common-oncology-data-elements-extensions/?trk=public_profile_topcard-current-company" class="flex flex-row underline"><img width="20" class="mr-2" src="img/linkin.svg"/>Linkedin</a>
				</div>
				<div class="p-2 lg:py-0 lg:px-3">
					<a tabindex="3" target="_blank" href="https://confluence.hl7.org/display/COD/CodeX+Home" class="flex flex-row underline"><img width="20" class="mr-2" src="img/confluence.svg"/>Confluence</a>
				</div>
			</div>
			<div class="flex justify-center col-span-2 lg:col-span-1 satoshi-bold font-black font-16px my-12 lg:my-0 lg:order-first">
				Copyright ⓒ CodeX™ | FHIR | HL7 Accelerator
			</div>
		</div>
	`
});

const newsApp = Vue.createApp();

newsApp.component('news-item', {
    template:
    `
        <div class="bg-backgroundgrey border-t-4 border-lightbrown news-card">
            <h1 tabindex="1" class="satoshi-bold font-black font-16px underline"><a target='_blank' :href="item.link">{{item.title}}</a></h1>
            <h2 tabindex="1" :class="'flex py-2 font-bold text-newsgrey sm:text-[16px] ' + textSize">{{item.source}} <img class="px-2" src="img/diamond-bullet.svg"/> {{item.date}}</h2>
            <p tabindex="1">{{item.summary}}</p>
        </div>
    `,
    props: {item: Object},
    computed: {
        textSize() {
          return ((this.item.source + this.item.date).length > 27 ? 'text-[10px]' : 'text-[12px]')
        }
    }
});

newsApp.component('desktop-news', {
    template:
     `
        <div class="flex flex-col px-2 justify-center sm:px-16 md:px-32 lg:px-4 xl:px-16 lg:grid lg:grid-cols-3 lg:gap-x-4 xl:gap-x-6 hidden lg:block">
            <div v-for="(item, index) in newsItems" :class="['mb-8 xl:mb-0', { 'xl:pr-2': index==0, 'xl:pl-2': index==(newsItems.length-1) }]">
                <news-item :item="item" / >
            </div>
        </div>
    `,
    props: {newsItems: Array}
});

newsApp.component('mobile-news', {
    template:
    `
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
    props: {'newsItems': Array}
});

newsApp.component('news', {
    template:
    `
        <div class="news-container p-10 pb-16 flex flex-col">
            <div class="flex flex-col lg:flex-row justify-center items-center">
                <h1 tabindex="1" id="news" class="satoshi-black font-black font-36px pb-5 place-self-center">News & Updates</h1>
                <div tabindex="1" class="pb-5 pl-6"><a tabindex="1" class="underline" target="_blank" href="https://confluence.hl7.org/display/COD/CodeX+Home?desktop=true&macroName=confiform-entry-register#CodeXHome-News">Read More</a><img class="inline ml-2" src="img/arrow.svg"/></div>
            </div>
            <mobile-news  :news-items="newsItems" />
            <desktop-news :news-items="newsItems" />
        </div>
    `,
    data() {
      return {
          newsItems: newsItems
      }
    }
});

const usesApp = Vue.createApp();

usesApp.component('use-item-list', {
	template:
		`
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
	props: {uses: Array, image: String}
});

usesApp.component('uses', {
	template:
	`
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
		data() {
			return {
				useItems: useItems
			}
		}
});

const leaderApp = Vue.createApp();

leaderApp.component('leaders', {
	template:
	`
		<ul v-for="leader in leaders" class="w-full pb-4 flex flex-col">
			<img :title="leader['image-alt']" :alt="leader['image-alt']" class="pb-2.5" :src="'img/'+leader['image']">
			<a tabindex="2" class="satoshi-bold underline" target="_blank" :href="leader['link']">{{leader['name']}}</a>
			<h3 tabindex="2" class="font-medium text-medgrey">{{leader['title']}}</h3>
		</ul>
	 `,
	data() {
		return {
			leaders: leaders
		}
	}
});

const commApp = Vue.createApp();

commApp.component('steering', {
	template:
	`
		<div class="pb-4">
			<h2 tabindex="2" class="satoshi-bold text-darkbrown uppercase font-16px">Steering Committee</h2>
			<div v-for="member in members">
				<p tabindex="2" class="pb-1 lg:pb-0">{{member}}</p>
			</div>
		</div>
	`,
	props: {members: Array}
});

commApp.component('operating', {
	template:
	`
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
	props: {members: Array}
});

commApp.component('committees', {
	template:
			`
			<steering :members="commMembers['steering']"/>
			<operating :members="commMembers['operating']" />
			`,
	data() {
		return {
			commMembers: commMembers
		}
	}
});
