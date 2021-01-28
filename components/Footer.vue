<template>
    <c-box d="flex" justify-content="space-between" align-items="flex-end" font-size="sm" p="6" color="#5A5A5A">
        <c-box>
            <c-text font-weight="700">Have a great idea to share?  Reach me at </c-text>
            <c-box pt="3">
                <c-link as="a" href="mailto: me@faraazbaig.com" pr="4" :_hover="{ color: 'green.500', textDecoration: 'none', outline: 'none'}">Email</c-link>
                <c-link as="a" target="_blank" href="https://www.twitter.com/faraazoffical" pr="4" :_hover="{ color: 'green.500', textDecoration: 'none', outline: 'none'}">Twitter</c-link>
                <c-link as="a" target="_blank" href="https://www.instagram.com/faraazoffical" pr="4" :_hover="{ color: 'green.500', textDecoration: 'none', outline: 'none'}">Instagram</c-link>
                <c-link as="a" target="_blank" href="https://www.linkedin.com/in/faraazbaig/" pr="4" :_hover="{ color: 'green.500', textDecoration: 'none', outline: 'none'}">Linkedin</c-link>
                <c-link as="a" target="_blank" href="https://github.com/faraaz-baig" pr="4" :_hover="{ color: 'green.500', textDecoration: 'none', outline: 'none'}">Github</c-link>
            </c-box>
        </c-box>
        <c-box d="flex" font-size="xs">
            <c-box d="flex" mr="5" align-items="end">
                <c-text>Designed in</c-text>
                <c-image ml="1" :src="require('assets/figma.svg')"/>
            </c-box>
            <c-box d="flex" mr="5" align-items="flex-end">
                <c-text>Built with</c-text>
                <c-image ml="1" pb="1" :src="require('assets/nuxt.svg')"/>
            </c-box>
            <c-box d="flex" align-items="center">
                <c-text>Deployed using</c-text>
                <c-image ml="1" :src="require('assets/vercel.svg')"/>
            </c-box>
        </c-box>
    </c-box>
</template>

<script>
    import {
  CImage,
  CBox,
  CText,
  CLink
} from '@chakra-ui/vue'

export default {
  name: 'navbar',
  components: {
    CImage,
    CBox,
    CText,
    CLink
  },
  data () {
    return {
      
    }
  },
  computed: {

  },
  methods: {
    
  }
}
</script>

<style>

</style>