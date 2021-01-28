<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="Spartan"
        maxWidth="1140px" 
        h="100vh" 
        mx="auto">
          <CReset />
          <Navbar />
          <Nuxt />
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox
} from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox
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
