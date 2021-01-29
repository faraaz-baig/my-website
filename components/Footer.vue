<template>
    <c-box d="flex" :justify-content="['space-between', 'space-between', 'space-between', 'space-between']" :align-items="['center', 'center', 'center', 'flex-end']" :font-size="['mxs', 'mxs', 'xs', 'sm']" p="6" color="#5A5A5A" :flex-direction="['column', 'column', 'column', 'row']">
        <c-box>
            <c-text font-weight="700" :text-align="['center', 'center', 'center', 'left']">Have a great idea to share?  Reach me at </c-text>
            <c-box :py="['2', '2', '2', '3']">
                <c-link as="a" href="mailto: me@faraazbaig.com" pr="4" :_hover="{ color: 'green.500', textDecoration: 'none'}">Email</c-link>
                <c-link as="a" target="_blank" href="https://www.twitter.com/faraazofficial" pr="4" :_hover="{ color: 'green.500', textDecoration: 'none'}">Twitter</c-link>
                <c-link as="a" target="_blank" href="https://www.instagram.com/faraazofficial/" pr="4" :_hover="{ color: 'green.500', textDecoration: 'none'}">Instagram</c-link>
                <c-link as="a" target="_blank" href="https://www.linkedin.com/in/faraazbaig/" pr="4" :_hover="{ color: 'green.500', textDecoration: 'none'}">Linkedin</c-link>
                <c-link as="a" target="_blank" href="https://github.com/faraaz-baig" :_hover="{ color: 'green.500', textDecoration: 'none'}">Github</c-link>
            </c-box>
        </c-box>
        <c-box d="flex" :font-size="['xxxs', 'xxxs', 'xxs', 'xs']" :py="['4', '4', '4', '3']">
            <c-box d="flex" mr="5" >
                <c-text>Designed in</c-text>
                <c-link href="https://www.figma.com/" target="_blank" ><c-image :width="['8px', '8px', '8px', '10px']" ml="2" :src="require('assets/figma.svg')"/></c-link>
            </c-box>
            <c-box d="flex" mr="5" >
                <c-text>Built with</c-text>
                <c-link href="https://www.nuxtjs.org" target="_blank" ><c-image :width="['15px', '15px', '15px', '20px']" ml="1" :src="require('assets/nuxt.svg')"/></c-link>
            </c-box>
            <c-box d="flex" mr="5" align-items="center">
                <c-text>Deployed using</c-text>
                <c-link href="https://www.vercel.com" target="_blank" ><c-image :width="['35px', '35px', '35px', '40px']" ml="1" :src="require('assets/vercel.svg')"/></c-link>
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