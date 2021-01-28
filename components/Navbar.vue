<template>
    <c-box as="section" d="flex" justify-content="space-between" align-items="center" py="6" px="6">
        <c-box>
            <c-image width="90px" :src="require('assets/faraazbaig.svg')" />
        </c-box>
        
        <c-box>
            <c-icon-button
             icon="moon"
             aria-label="dark mode toggle"
             bg="green.200"
             :_hover="{ bg: 'green.100'}"
             :_active="{ bg: 'green.100'}"
            />
            <c-menu>
                <c-menu-button
             aria-label="menu"
             ml="2"
             variant="solid"
             bg="green.200"
             :_hover="{ bg: 'green.100'}"
             :_active="{ bg: 'green.100'}"
            > <c-image  width="12px" :src="require('assets/menu.svg')"/></c-menu-button>
                <c-menu-list>
                    <c-menu-item as="nuxt-link" to="/">Home</c-menu-item>
                    <c-menu-item as="a" href="https://anchor.fm/impactact" target="_blank">Podcast</c-menu-item>
                    <c-menu-item as="nuxt-link" to="/blog">Blog</c-menu-item>
                    <c-menu-item as="nuxt-link" to="/about">About</c-menu-item>
                </c-menu-list>

            </c-menu>
            
        </c-box>
     
    </c-box>
</template>

<script>
    import {
  CImage,
  CButton
} from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CImage,
    CButton
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

<style scoped>

</style>