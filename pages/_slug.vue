<template>
    <c-box :min-height="['', '', '', '100vh' ]" d="flex" flex-direction="column" justify-content="space-between">
    <c-box :height="['110px', '110px', '110px', '110px' ]" display="block"></c-box>
    <c-box>
        <c-text :font-size="['md', 'l', 'xl', '3xl' ]" mb="1rem" px="4rem" text-align="center" font-weight="700">{{ article.title }}</c-text>
        <c-box width="200px" mx="auto" opacity="0.6" >
            <c-list font-size="xs" d="flex" justify-content="space-between">
                <c-list-item><c-list-icon icon="calendar-week"/>{{ article.date }}</c-list-item>
                <c-list-item ><c-list-icon icon="clock"/>{{ article.read }}</c-list-item>
            </c-list>
        </c-box>
        <c-box d="flex" mt="1rem" justify-content="center">
            <c-button size="sm" as="nuxt-link" to="/blog" left-icon="arrow-left">Go Back</c-button>
        </c-box>
    </c-box>
    <c-text :font-size="['sm', 'sm', 'md', 'l' ]" my="4rem" px="3rem"><nuxt-content :document="article"/></c-text>
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
    async asyncData({ $content, params }) {
        const article = await $content('blog', params.slug).fetch();
        return {
            article
        }
    },

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
    
}
</script>

<style scoped>

</style>