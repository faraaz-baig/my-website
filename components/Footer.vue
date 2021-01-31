<template>
    <c-box d="flex" :justify-content="['space-between', 'space-between', 'space-between', 'space-between']" :align-items="['center', 'center', 'center', 'flex-end']" :font-size="['mxs', 'mxs', 'xs', 'sm']" p="6" :flex-direction="['column', 'column', 'column', 'row']">
        <c-box>
            <c-text font-weight="500" :font-size="['xs', 'xs', 'xs', 'sm']" :text-align="['center', 'center', 'center', 'left']" opacity="0.8">Have a great idea to share?  Reach me at </c-text>
            <c-box :py="['2', '2', '2', '3']" d="flex" :font-size="['xxs', 'xs', 'xs', 'sm']">
                <c-link as="a" opacity="0.6" href="mailto: me@faraazbaig.com" pr="4" :_hover="{ color: 'green.500', textDecoration: 'none', opacity: '1'}">Email</c-link>
                <c-link as="a" opacity="0.6" target="_blank" href="https://www.twitter.com/faraazofficial" pr="4" :_hover="{ color: 'green.500', textDecoration: 'none', opacity: '1'}">Twitter</c-link>
                <c-link as="a" opacity="0.6" target="_blank" href="https://www.instagram.com/faraazofficial/" pr="4" :_hover="{ color: 'green.500', textDecoration: 'none', opacity: '1'}">Instagram</c-link>
                <c-link as="a" opacity="0.6" target="_blank" href="https://www.linkedin.com/in/faraazbaig/" pr="4" :_hover="{ color: 'green.500', textDecoration: 'none', opacity: '1'}">Linkedin</c-link>
                <c-link as="a" opacity="0.6" target="_blank" href="https://github.com/faraaz-baig" :_hover="{ color: 'green.500', textDecoration: 'none', opacity: '1'}">Github</c-link>
            </c-box>
        </c-box>
        <c-box d="flex" :font-size="['7.5px', 'xxxs', 'xxs', 'xs']" :py="['4', '4', '4', '3']">
            <c-box d="flex" mr="5" >
                <c-text opacity="0.6" >Designed in</c-text>
                <c-link href="https://www.figma.com/" target="_blank" ><c-image :width="['7px', '8px', '8px', '10px']" ml="2" :src="require('assets/figma.svg')"/></c-link>
            </c-box>
            <c-box d="flex" mr="5" >
                <c-text opacity="0.6" >Built with</c-text>
                <c-link href="https://www.nuxtjs.org" target="_blank" ><c-image :width="['14px', '15px', '15px', '20px']" ml="1" :src="require('assets/nuxt.svg')"/></c-link>
            </c-box>
            <c-box d="flex" >
                <c-text opacity="0.6">Deployed using</c-text>
                <c-link href="https://www.vercel.com" align-self="center" target="_blank" ml="1" ><svg width="40px" viewBox="0 0 97 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M48.3869 6.25917C44.6039 6.25917 41.8716 9.0758 41.8716 13.2915C41.8716 17.5073 44.9433 20.3239 48.7263 20.3239C51.0221 20.3239 53.0266 19.293 54.2876 17.5625L51.6687 15.832C50.9735 16.6973 49.9226 17.1943 48.7425 17.1943C47.0936 17.1943 45.7031 16.2186 45.1857 14.6538H54.805C54.8859 14.212 54.9182 13.7702 54.9182 13.2915C54.9019 9.05738 52.1861 6.25917 48.3869 6.25917ZM45.1374 11.9108C45.5739 10.346 46.7377 9.37034 48.3869 9.37034C50.0358 9.37034 51.1999 10.346 51.6364 11.9108H45.1374ZM85.3276 6.25917C81.5446 6.25917 78.8125 9.0758 78.8125 13.2915C78.8125 17.5073 81.8842 20.3239 85.6672 20.3239C87.9627 20.3239 89.9675 19.293 91.2285 17.5625L88.6096 15.832C87.9144 16.6973 86.8635 17.1943 85.6834 17.1943C84.0343 17.1943 82.6441 16.2186 82.1267 14.6538H91.7459C91.8266 14.212 91.8591 13.7702 91.8591 13.2915C91.8591 9.05738 89.1268 6.25917 85.3276 6.25917ZM82.0944 11.9108C82.5309 10.346 83.6949 9.37034 85.3439 9.37034C86.9928 9.37034 88.1568 10.346 88.5934 11.9108H82.0944ZM68.7084 13.2915C68.7084 15.6295 70.0503 17.1943 72.1357 17.1943C73.5422 17.1943 74.6091 16.4579 75.1588 15.2798L77.794 17.0102C76.7108 19.0721 74.6577 20.3239 72.1357 20.3239C68.3365 20.3239 65.6204 17.5073 65.6204 13.2915C65.6204 9.0758 68.3528 6.25917 72.1357 6.25917C74.6577 6.25917 76.6948 7.51102 77.794 9.57285L75.1588 11.3033C74.6091 10.1067 73.5585 9.38877 72.1357 9.38877C70.0503 9.37034 68.7084 10.9352 68.7084 13.2915ZM97 1.95139V19.9189H93.9123V1.95139H97ZM12.6747 0L25.3493 25H0L12.6747 0ZM44.3775 1.95139L34.8715 20.7105L25.3656 1.95139H28.9384L34.8877 13.6781L40.837 1.95139H44.3775ZM64.5858 6.64577V10.4381C64.2462 10.3276 63.8746 10.254 63.4866 10.254C61.4981 10.254 60.0591 11.8188 60.0591 14.1568V19.9373H56.9713V6.64577H60.0591V10.2356C60.0591 8.24737 62.0799 6.64577 64.5858 6.64577Z" fill=""/>
                                                                        </svg>
                </c-link>
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
  name: 'Foot',
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