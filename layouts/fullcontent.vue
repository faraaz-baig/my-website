<template>
    <c-theme-provider>
      <c-color-mode-provider #default="{ colorMode }">
        <c-box width="100%" v-bind="mainStyles[colorMode]">
          <c-box
          user-select="none" 
          v-bind="mainStyles[colorMode]"
          font-family="Spartan"
          maxWidth="1140px" 
          mx="auto" d="flex" flex-direction="column" justify-content="space-between" align-items="space-between">
          <c-reset />
          <Navbarfull />
          <Nuxt />
          <Footer  />
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
  name: 'default layout',
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
      }
    }
  }
}
</script>

<style>
  html, body {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
</style>
