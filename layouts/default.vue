<template>
    <c-theme-provider>
      <c-color-mode-provider #default="{ colorMode }">
        <c-box width="100%" v-bind="mainStyles[colorMode]">
          <c-box
          user-select="none" 
          font-family="Spartan"
          maxWidth="1140px"
          transition="all 200ms ease-in"
          mx="auto">
          <c-reset />
          <Navbar />
          <Nuxt />
          </c-box>

        </c-box>  
        
      </c-color-mode-provider>
    </c-theme-provider>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox
} from '@chakra-ui/vue'

export default {
  name: 'Faraaz',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox
  },
  data () {
    return {
      mainStyles: {
        dark: {
          bg: 'darkBlue.800',
          color: 'whiteAlpha.900',
        },
        light: {
          bg: 'whiteAlpha.900',
          color: 'darkBlue.800'
        }
      },
    }
  },
}
</script>

<style>
  html, body {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
</style>
