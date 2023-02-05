<template>
  <div>
    <!-- HERO -->
    <section
        class="py-8 hero bg-[url('~/assets/images/hero.png')] bg-cover bg-center bg-no-repeat bg-white dark:bg-gray-900">
      <div
          class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="text-nunitoblack max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none xxs:text-2xl xs:text-4xl sm:text-5xl md:text-5xl xl:text-6xl text-white">
            Blue Emoji - very emotional emoji & smileys</h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-gray-100">high quality
            blue
            emoji & smileys for messengers, apps, games and social networks from the original author</p>

          <NuxtLink
              to="/about"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-900 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            About
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
          </NuxtLink>

        </div>
        <div style="max-width:540px; max-height:405px;" class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
              class=""
              width="540"
              height="405"
              src="~/assets/images/mockups.png"
              alt="mockup"
              loading="lazy"/>
        </div>
      </div>
    </section>

    <!-- ICON_LIST -->
    <aside aria-label="Related articles" class="py-8 lg:py-24 bg-white dark:bg-gray-900">
      <div class="px-4 mx-auto max-w-screen-xl">

        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Collection of 87 blue
            crazy faces</h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-lg dark:text-gray-400"></p>
          <div class="flex items-center justify-center">

            <ul class="flex flex-wrap items-center text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:text-white">

              <li id="Blue" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-primary-600 rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-primary-700 focus:text-gray-50">
                  <template v-if="category === 'Blue'">
                    <img src="~/assets/images/tick.svg" loading="lazy"/>
                  </template>
                </button>
              </li>

              <li id="Violet" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-purple-500 rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-purple-600 focus:text-gray-50">
                  <template v-if="category === 'Violet'">
                    <img src="~/assets/images/tick.svg" loading="lazy"/>
                  </template>
                </button>
              </li>
              <li id="Yellow" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-yellow-300 rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-yellow-300 focus:text-gray-50">
                  <template v-if="category === 'Yellow'">
                    <img src="~/assets/images/tick.svg" loading="lazy"/>
                  </template>
                </button>
              </li>

              <li id="Red" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#b10101] rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-green-600 focus:text-gray-50">
                  <template v-if="category === 'Red'">
                    <img src="~/assets/images/tick.svg" loading="lazy"/>
                  </template>
                </button>
              </li>
              <li id="Pink" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#db8eb6] rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-green-600 focus:text-gray-50">
                  <template v-if="category === 'Pink'">
                    <img src="~/assets/images/tick.svg" loading="lazy"/>
                  </template>
                </button>
              </li>
              <li id="Teal" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#1ba5be] rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-green-600 focus:text-gray-50">
                  <template v-if="category === 'Teal'">
                    <img src="~/assets/images/tick.svg" loading="lazy"/>
                  </template>
                </button>
              </li>

              <li id="Green" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#83C431] rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-green-600 focus:text-gray-50">
                  <template v-if="category === 'Green'">
                    <img src="~/assets/images/tick.svg" loading="lazy"/>
                  </template>
                </button>
              </li>
              <li id="White" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-100 rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-grey-50 focus:text-gray-900">
                  <template v-if="category === 'White'">
                    <img src="~/assets/images/tick.svg" loading="lazy"/>
                  </template>
                </button>
              </li>
              <li id="Black" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-900 rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-gray-900 focus:text-gray-50">
                  <template v-if="category === 'Black'">
                    <img src="~/assets/images/tick.svg" loading="lazy"/>
                  </template>
                </button>
              </li>
            </ul>
          </div>
        </div>


        <div class="grid gap-12 grid-cols-2 xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
             style="min-height:5000px;">

          <article v-for="(emoji, index) in emojis" :key="index" class="max-w-xs">

            <div v-if="!emoji.loaded" class="relative bg-gray-500 bg-opacity-10 col-span-1">
              <div class="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
                <img
                    src="~/assets/images/loader.svg"
                    class="aspect-square"/>
              </div>
            </div>

            <NuxtLink
                :to="getUrl(emoji)">
              <img
                  :src="emoji.sizes.thumb"
                  @load="emoji.loaded = true"
                  class="aspect-square w-full"
                  :class="{'hidden' : !emoji.loaded}"/>
            </NuxtLink>

            <h2 class="text-center mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
              {{ emoji.title }}
              <span v-if="showBadge(emoji)"
                    class="bg-[#72C431] text-gray-50 text-xs font-bold mr-2 px-2 py-1 rounded dark:bg-green-900 dark:text-green-300">NEW</span>
            </h2>
          </article>

        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
useHead({
  title: 'Blue Emoji or Joobi - Free Smiley Download',
  meta: [
    {name: 'description', content: 'Test'}
  ],
  link: [
    {rel: 'canonical', href: 'https://bluemoji.io/'}
  ]
})
</script>

<script>
import * as emojisJson from "~/public/bluemoji.json";

export default {
  data() {
    return {
      category: 'Blue',
      emojis: [],
      allEmojis: emojisJson.default,
      loadingSrc: 'loader.svg',
      badgeIds: ['81', '82', '83', '84', '85', '86', '87'],
    }
  },

  methods: {
    select(e) {
      this.category = e.currentTarget.id;

      if (this.category !== 'Blue') {
        this.updateUrl('#' + this.category);
      } else {

        this.updateUrl('');
      }
      this.loadEmojis();
    },
    updateUrl(newUrl) {
      this.$router.push(newUrl);
    },
    showBadge(emoji) {
      return this.badgeIds.includes(emoji.id)
    },
    loadEmojis() {
      this.emojis = this.allEmojis
          .map(emoji => {
            return {
              id: emoji.src,
              hurl: emoji.hurl,
              sizes: {
                thumb: '/emoji/' + this.category + '/256/' + emoji.src + '.png',
                full: '/emoji/' + this.category + '/' + emoji.src + '.png',
              },
              title: emoji.title,
              desc: emoji.desc,
              tags: emoji.tags,
              loaded: false
            }
          });
    },
    getUrl(item) {
      let url = '/emoji/' + item.hurl;

      if (this.category !== 'Blue') {
        url += '#' + this.category;
      }

      return url;
    }
  },
  mounted() {
    this.category = this.$route.hash ? this.$route.hash.replace('#', '') : 'Blue';

    this.loadEmojis();
  }
}
</script>