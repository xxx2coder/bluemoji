<template>
  <div>
    <SeoHead
        :title="emoji?.title"
        :description="emoji?.desc"/>

    <section class="bg-white dark:bg-gray-900">
      <div
          class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-6 ">

        <div class="sm:pb-10 xs:pb-10">
          <img class="mb-4 w-full lg:mb-0 rounded-lg aspect-square" :src="emoji?.sizes?.full" width="512" height="512"
               alt="feature image">
          <div class="flex items-center justify-center">

            <ul class="flex flex-wrap items-center text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:text-white">

              <li id="Blue" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-primary-600 rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-primary-700 focus:text-gray-50">
                  <template v-if="category === 'Blue'">
                    <img src="~/assets/images/tick.svg"/>
                  </template>
                </button>
              </li>

              <li id="Violet" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-purple-500 rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-purple-600 focus:text-gray-50">
                  <template v-if="category === 'Violet'">
                    <img src="~/assets/images/tick.svg"/>
                  </template>
                </button>
              </li>

              <li id="Yellow" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-yellow-300 rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-yellow-300 focus:text-gray-50">
                  <template v-if="category === 'Yellow'">
                    <img src="~/assets/images/tick.svg"/>
                  </template>
                </button>
              </li>
              <li id="Red" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#b10101] rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-green-600 focus:text-gray-50">
                  <template v-if="category === 'Red'">
                    <img src="~/assets/images/tick.svg"/>
                  </template>
                </button>
              </li>
              <li id="Pink" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#db8eb6] rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-green-600 focus:text-gray-50">
                  <template v-if="category === 'Pink'">
                    <img src="~/assets/images/tick.svg"/>
                  </template>
                </button>
              </li>
              <li id="Teal" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#1ba5be] rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-green-600 focus:text-gray-50">
                  <template v-if="category === 'Teal'">
                    <img src="~/assets/images/tick.svg"/>
                  </template>
                </button>
              </li>

              <li id="Green" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#83C431] rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-green-600 focus:text-gray-50">
                  <template v-if="category === 'Green'">
                    <img src="~/assets/images/tick.svg"/>
                  </template>
                </button>
              </li>

              <li id="White" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-100 rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-grey-50 focus:text-gray-900">
                  <template v-if="category === 'White'">
                    <img src="~/assets/images/tick.svg"/>
                  </template>
                </button>
              </li>

              <li id="Black" @click="select($event)" class="">
                <button type="button"
                        class="w-14 h-14 flex items-center justify-center mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-900 rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:bg-gray-900 focus:text-gray-50">
                  <template v-if="category === 'Black'">
                    <img src="~/assets/images/tick.svg"/>
                  </template>
                </button>
              </li>

            </ul>
          </div>
        </div>
        <div class="text-gray-500 dark:text-gray-400 sm:text-lg">
          <span
              v-if="showBadge(emoji)"
              class="bg-[#72C431] text-gray-50 text-xs font-bold mt-0.5 px-3 py-1.5 rounded dark:bg-green-900 dark:text-green-300">
            NEW
          </span>

          <h1 class="mt-2 items-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            {{ emoji?.title }} Blue Emoji
          </h1>
          <p class="mb-8 font-light lg:text-xl">
            {{ emoji?.desc }}
          </p>

          <div class="py-8 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
            <div class="flex">
              <div
                  class="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM5 7C5.26522 7 5.51957 6.89464 5.70711 6.70711C5.89464 6.51957 6 6.26522 6 6C6 5.73478 5.89464 5.48043 5.70711 5.29289C5.51957 5.10536 5.26522 5 5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6C4 6.26522 4.10536 6.51957 4.29289 6.70711C4.48043 6.89464 4.73478 7 5 7ZM12 6C12 6.26522 11.8946 6.51957 11.7071 6.70711C11.5196 6.89464 11.2652 7 11 7C10.7348 7 10.4804 6.89464 10.2929 6.70711C10.1054 6.51957 10 6.26522 10 6C10 5.73478 10.1054 5.48043 10.2929 5.29289C10.4804 5.10536 10.7348 5 11 5C11.2652 5 11.5196 5.10536 11.7071 5.29289C11.8946 5.48043 12 5.73478 12 6ZM11.536 11.535C11.6288 11.4421 11.7025 11.3318 11.7527 11.2104C11.8029 11.0891 11.8287 10.959 11.8287 10.8276C11.8287 10.6963 11.8027 10.5662 11.7524 10.4449C11.7021 10.3236 11.6284 10.2133 11.5355 10.1205C11.4426 10.0277 11.3323 9.95402 11.2109 9.9038C11.0896 9.85358 10.9595 9.82775 10.8281 9.8278C10.6968 9.82784 10.5667 9.85376 10.4454 9.90407C10.3241 9.95438 10.2138 10.0281 10.121 10.121C9.55842 10.6834 8.79549 10.9994 8 10.9994C7.20451 10.9994 6.44158 10.6834 5.879 10.121C5.69149 9.93336 5.43712 9.82789 5.17185 9.8278C4.90658 9.8277 4.65214 9.93299 4.4645 10.1205C4.27686 10.308 4.17139 10.5624 4.1713 10.8276C4.1712 11.0929 4.27649 11.3474 4.464 11.535C4.92831 11.9994 5.47956 12.3678 6.08628 12.6192C6.69299 12.8706 7.34328 12.9999 8 12.9999C8.65672 12.9999 9.30701 12.8706 9.91372 12.6192C10.5204 12.3678 11.0717 11.9994 11.536 11.535Z"
                      fill="#1C64F2"/>
                </svg>
              </div>
              <div>
                <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Blue Emoji Pack</h3>
                <p class="mb-2 font-light text-gray-500 dark:text-gray-400">Fun and wicked blue faces with exaggerated
                  and unique emotions that can help you express your difficult feelings in the cruel world where no one
                  understands you.</p>
                <NuxtLink
                    to="/"
                    class="inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-600">
                  Show all
                  <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <div class="flex pt-8">
              <div
                  class="flex justify-center items-center mr-4 w-8 h-8 bg-purple-100 rounded-full bg-orange-100 shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.8333 16.6667H4.16667C3.72464 16.6667 3.30072 16.4911 2.98816 16.1786C2.67559 15.866 2.5 15.4421 2.5 15V5.00004C2.5 4.55801 2.67559 4.13409 2.98816 3.82153C3.30072 3.50897 3.72464 3.33337 4.16667 3.33337H12.5C12.942 3.33337 13.366 3.50897 13.6785 3.82153C13.9911 4.13409 14.1667 4.55801 14.1667 5.00004V5.83337M15.8333 16.6667C15.3913 16.6667 14.9674 16.4911 14.6548 16.1786C14.3423 15.866 14.1667 15.4421 14.1667 15V5.83337M15.8333 16.6667C16.2754 16.6667 16.6993 16.4911 17.0118 16.1786C17.3244 15.866 17.5 15.4421 17.5 15V7.50004C17.5 7.05801 17.3244 6.63409 17.0118 6.32153C16.6993 6.00897 16.2754 5.83337 15.8333 5.83337H14.1667M10.8333 3.33337H7.5M5.83333 13.3334H10.8333M5.83333 6.66671H10.8333V10H5.83333V6.66671Z"
                      stroke="#FF8A4C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </div>
              <div>
                <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">License</h3>
                <p class="mb-2 font-light text-gray-500 dark:text-gray-400">Our emoji pack is licensed under CC BY 4.0,
                  which means you can freely share, use, and build upon it as long as it is personal or entertaining
                  content without commercial purpose, such as social media blog post or meme. You can use our emojis in
                  commercial projects, as long as you give credit. Just include “Design by bluemoji.io”. You can’t use
                  emoji in logo, trademark, or service mark, as well as in native apps, web apps, or games, or
                  redistribute item as stock or template. Please check the specific terms of the license for more
                  information</p>
                <a
                    href="https://creativecommons.org/licenses/by/4.0/"
                    target="_blank"
                    class="inline-flex items-center text-orange-400 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-600">
                  Learn more
                  <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p class="text-sm">Tags: {{ category }}, {{ emoji?.tags }}</p>
        </div>
      </div>
    </section>

    <!-- ICON_LIST -->
    <aside aria-label="Related articles" class="py-8 lg:py-24 bg-white dark:bg-gray-900">
      <div class="px-4 mx-auto max-w-screen-xl">

        <div class="grid gap-12 grid-cols-2 xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">

          <article v-for="(item, index) in emojis" :key="index" class="max-w-xs">

            <div v-if="!item.loaded" class="relative bg-gray-500 bg-opacity-10 col-span-1">
              <div class="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
                <img src="~/assets/images/loader.svg" class="aspect-square"/>
              </div>
            </div>

            <NuxtLink
                :to="'/emoji/' + item.hurl + '#' + category">
              <img :src="item.sizes.thumb"
                   @load="onUpdateEmojiInList(item)"
                   class="aspect-square w-full"
                   :class="{'hidden' : !item.loaded}"/>
            </NuxtLink>

            <h2 class="text-center mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
              {{ item.title }}
            </h2>
          </article>

        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import SeoHead from "~/components/seo/Head";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  components: {
    SeoHead
  },

  data() {
    return {
      loadingSrc: 'loader.svg',
      badgeIds: ['81', '82', '83', '84', '85', '86', '87']
    }
  },
  computed: {
    ...mapGetters(['category', 'emoji', 'emojis']),
    hurl() {
      return this.$route.params.slug;
    }
  },

  methods: {
    ...mapActions(['toggleCategory', 'loadEmoji', 'loadEmojis']),
    ...mapMutations(['updateEmojiInList', 'clearEmoji']),

    shuffleJson(json) {
      for (let i = json.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [json[i], json[j]] = [json[j], json[i]];
      }
      return json;
    },
    select: function (event) {
      let category = event.currentTarget.id;

      this.toggleCategory(category);
      this.loadEmoji(this.hurl);
      this.updateUrl('/emoji/' + this.hurl + '#' + category);
    },
    updateUrl(newUrl) {
      this.$router.push(newUrl);
    },
    showBadge(emoji) {
      return this.badgeIds.includes(emoji)
    },
    onUpdateEmojiInList(emoji) {
      emoji.loaded = true;

      this.updateEmojiInList(emoji);
    }
  },

  created() {
    this.loadEmojis();
    this.loadEmoji(this.hurl);
  },

  unmounted() {
    this.clearEmoji();
  }
}
</script>