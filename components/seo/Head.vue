<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="desc"/>
    <Link rel="canonical" :href="canonical"/>
  </Head>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  },

  computed: {
    canonical() {
      return window.location.href.replace(window.location.hash, '');
    }
  }
}
</script>