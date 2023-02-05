<template>
  <div>
    <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900" style="min-height:520px; padding-top:100px">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <h2>Contact me</h2>

          <p>If you have any questions, suggestions or just to want to say hi - send my a message through typeform

            <a href="https://he1w6hl3kgg.typeform.com/to/iWnX11e3" target="_blank" class="pr-5 inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
              here
            </a>

          </p>

        </article>
      </div>
    </main>
  </div>
</template>

<script setup>
const route = useRoute();

useHead({
  title: 'Contact Tanya Mau',
  meta: [
    {name: 'description', content: 'Test'}
  ],
  link: [
    {rel: 'canonical', href: 'https://bluemoji.io' + route.fullPath.replace(route.hash, '')}
  ]
})
</script>