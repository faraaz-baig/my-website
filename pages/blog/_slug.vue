<template>
    <c-box :height="['', '', '', '' ]" d="flex" flex-direction="column" justify-content="space-between">
    <c-box :height="['110px', '110px', '110px', '110px' ]" display="block"></c-box>
    <c-box>
        <c-text font-size="3xl" mb="1rem" px="4rem" text-align="center" font-weight="700">{{ article.title }}</c-text>
        <c-box width="200px" mx="auto" opacity="0.6">
            <c-list font-size="xs" d="flex" justify-content="space-between">
                <c-list-item><c-list-icon icon="calendar-week"/>{{ article.date }}</c-list-item>
                <c-list-item ><c-list-icon icon="clock"/>{{ article.read }}</c-list-item>
            </c-list>
        </c-box>
        <c-box d="flex" mt="1rem" justify-content="center">
            <c-button as="nuxt-link" to="/blog" left-icon="arrow-left">Go Back</c-button>
        </c-box>
    </c-box>
    <c-box :font-size="['sm', 'sm', 'md', 'l' ]" my="4rem" px="3rem">
        <nuxt-content :document="article"/>
    </c-box>
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
  CButton
} from '@chakra-ui/vue'
    
    export default {
         name: 'blog',
  components: {
    CImage,
    CBox,
    CText,
    CLink,
    CList,
    CListItem,
    CButton
  },
       async asyncData({ $content, params }) {
           const article = await $content('blog', params.slug).fetch()
           console.log(article)
           return {
               article
           }
       }
    }
</script>

<style scoped>

</style>