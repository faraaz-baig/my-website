<template>
  <c-box min-height="100vh" d="flex" flex-direction="column" justify-content="space-between">
    <c-box :height="['110px', '110px', '110px', '110px' ]" display="block"></c-box>
    <c-box d="flex" mt="3rem" align-items="center" flex-direction="column" text-align="center">
      <c-text :font-size="['l', '2xl', '2xl', '3xl']" font-weight="700">Welcome to my Notebook 📒</c-text>
      <c-text mt="4" :font-size="['md', 'l', 'xl', 'xl']" :width="['18rem', '24rem', '33rem', '33rem']" font-weight="500">I Usually write about things that wander around my head. People find it interesting to read.</c-text>
    </c-box>
    <c-grid px="2rem" w="100%" :template-columns="['repeat(1, 1fr)', 'repeat(1, 2fr)', 'repeat(1, 3fr)', 'repeat(2, 4fr)']" justify-content="center" gap="8" mt="5rem">
      <c-box as="nuxt-link" :to="{ name: 'slug', params: { slug: article.slug } }" v-for="article in articles" :key="article.id" d="flex" flex-direction="column" justify-content="space-between" mx="auto" :width="['100%', '420px', '550px', '450px']" border-radius="20px" p="1.5rem" color="black" bg="green.300">
        <c-text :font-size="['sm', 'l', 'l', 'xl']" mb="2rem" font-weight="700">{{ article.title }}</c-text>
        <c-list d="flex" justify-content="space-between" :font-size="['xxs', 'xs', 'xs', 'sm']" opacity="0.6">
          <c-list-item><c-list-icon icon="calendar-week"/>{{ article.date }}</c-list-item>
          <c-list-item ><c-list-icon icon="clock"/>{{ article.read }}</c-list-item>
        </c-list>
      </c-box>
    </c-grid>
    
    <c-box height="110px" display="block"></c-box>
    <Footer />
  </c-box>
    
    
    
</template>

<script>
    import {
  CImage,
  CBox,
  CText,
  CLink,
  CList,
  CListItem,
  CGrid
} from '@chakra-ui/vue'

export default {
  components: {
    CImage,
    CBox,
    CText,
    CLink,
    CList,
    CListItem,
    CGrid
  },
  async asyncData({ $content, params }) {
    const articles = await $content('blog', params.slug).fetch();
    return {
      articles
    }
  },

    data() {
      return {
        description: 'Welcome to my blog. I write about entrepreneurship, coding, technology, my experiences, productivity hacks, mindset, spirituality and my opinions',
        name: 'Blog',
      }
    },
    
  head() {
    return {
        meta: [{
            hid: 'description',
            name: 'description',
            content: this.description}, 
            {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: `Faraaz Baig | ${this.name}`}, 
            {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: `Faraaz Baig | ${this.name}`}, 
            {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: this.description}, 
            {
            hid: 'og:title',
            name: 'og:title',
            content: `Faraaz Baig | ${this.name}`}, 
            {
            hid: 'og:description',
            name: 'og:description',
            content: this.description}]
    }
  }
}
</script>

<style scoped>

</style>