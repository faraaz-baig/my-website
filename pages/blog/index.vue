<template>
  <c-box :height="['', '', '', '100vh' ]" d="flex" flex-direction="column" justify-content="space-between">
    <c-box :height="['110px', '110px', '110px', '110px' ]" display="block"></c-box>
    <c-box d="flex" mt="3rem" align-items="center" flex-direction="column" text-align="center">
      <c-text :font-size="['xl', 'xl', '2xl', '3xl']" font-weight="700">Welcome to my Notebook 📒</c-text>
      <c-text mt="4" :width="['20rem', '20rem', '30rem', '30rem']" font-weight="500">I Usually write about things that wander around my head. People find it interesting to read.</c-text>
    </c-box>
    <c-grid px="2rem" w="100%" :template-columns="['repeat(1, 4fr)', 'repeat(1, 2fr)', 'repeat(1, 3fr)', 'repeat(2, 4fr)']" gap="8" mt="5rem">
      <c-box d="flex" flex-direction="column" justify-content="space-between" mx="auto" :width="['350px', '420px', '550px', '450px']" border-radius="20px" p="1.5rem" color="black" bg="green.300">
        <c-text :font-size="['md', 'l', 'l', 'l']" mb="2rem" font-weight="700">Customer Research Management: The New CRM</c-text>
        <c-list d="flex" justify-content="space-between" :font-size="['xs', 'xs', 'sm', 'sm']" opacity="0.6">
          <c-list-item><c-list-icon icon="calendar-week"/> Aug 2020</c-list-item>
          <c-list-item ><c-list-icon icon="clock"/> 8 min read</c-list-item>
        </c-list>
      </c-box>
      <c-box d="flex" flex-direction="column" justify-content="space-between" mx="auto" :width="['350px', '420px', '550px', '450px']" border-radius="20px" p="1.5rem" color="black" bg="green.300">
        <c-text :font-size="['md', 'l', 'l', 'l']" mb="2rem" font-weight="700">Customer Research Management: The New CRM</c-text>
        <c-list d="flex" justify-content="space-between" :font-size="['xs', 'xs', 'sm', 'sm']" opacity="0.6">
          <c-list-item><c-list-icon icon="calendar-week"/> Aug 2020</c-list-item>
          <c-list-item ><c-list-icon icon="clock"/> 8 min read</c-list-item>
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
  name: 'blog',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CImage,
    CBox,
    CText,
    CLink,
    CList,
    CListItem,
    CGrid
  },
}
</script>

<style scoped>

</style>