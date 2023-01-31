<template>
  <div>
    <SeoHead
        title="About Blue Emoji by Tanya Mau"
        description="Test"/>

    <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article
            class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <h2>Story Behind Blue Emoji</h2>

          <p>The original Blue Emoji was created for fun by aspiring graphic designer Tanya Mau back in 2009, under the
            original name "Very Emotional Emoticons." The first pack of 40 emoticons was uploaded on the DeviantArt on
            <a href="https://www.deviantart.com/lazymau/art/Very-Emotional-Emoticons-144461621" target="_blank">November
              2009</a> and a second pack of an additional 40 emojis was uploaded in <a
                href="https://www.deviantart.com/lazymau/art/Very-emotional-emoticons-2-209003358" target="_blank">May
              2011</a></p>

          <p>
            It gained some popularity and received numerous requests for custom emojis, commercial licenses, and
            original source files. So in 2014, it was decided to launch a small web shop called EmoticonsHD, to make it
            easier to deal with the requests.
          </p>

          <p>Later on, the requests decreased over time and the shop was deactivated. However, in 2021, the Blue Emoji
            went viral again and became a meme. Tanya found out about it in <a
                href="https://twitter.com/lazymau/status/1616543332368547841?s=20&t=r0yt2l1WFB0KHbR-M8tg1A"
                target="_blank">Twitter on January 2023</a>, which was a surprise. It was decided to create this web
            page, where all the Blue Emoji are gathered in one place, higher definition emoticons are added, and new
            faces can be created in the future by its original author.</p>
          <figure><img src="~/assets/images/about_image.png" alt="Blue Emoji, Author Tanya Mau">
            <figcaption></figcaption>
          </figure>

          <h2>Author</h2>
          <p>Tanya is passionate Visual Designer based in Riga, Latvia. With 15+ years of experience worked in roles
            with the title and responsibilities of Creative Art Director, UX/UI Designer, Illustrator, Animation Artist,
            and have a background in Product Design for SaaS products. She is currently working on
            graphic/design-oriented products such as <a href="https://palettemaker.com"
                                                        target="_blank">palettemaker.com</a>, <a
                href="https://pfpmaker.com" target="_blank">pfpmaker.com</a>, and <a
                href="https://apps.apple.com/ba/app/mirror-my-emoji-sticker-maker/id1199126741" target="_blank">Mirror
              AI</a></p>

          <p>
            <a href="https://www.instagram.com/lazymau/"
               class="pr-5 inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
              Instagram
            </a>

            <a href="https://lazymau.com/"
               class="pr-5 inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
              Website
            </a>

            <a href="https://twitter.com/lazymau"
               class="pr-5 inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
              Twitter
            </a>

          </p>

          <h2>License</h2>
          <p>Our emoticons are free to use for personal projects and non-commercial social media posts, memes etc. If
            you use emoji in a project that generates revenue, you must attribute by including a statement such as
            'Emoji by bluemoji.io' Commercial use of emoticons without proper attribution is prohibited. For any
            specific cases please contact us.</p>

          <p>
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
               class="pr-5 inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
              Creative Commons BY 4.0
            </a>
          </p>

        </article>
      </div>
    </main>
  </div>
</template>

<script>
import SeoHead from "~/components/seo/Head";

export default {
  components: {
    SeoHead
  }
}
</script>