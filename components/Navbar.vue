<template>
    <c-box as="section" d="flex" justify-content="space-between" align-items="center" py="6" px="6">
        <c-box>
          <nuxt-link to="/"><c-image width="90px" :src="require('assets/faraazbaig.svg')" /></nuxt-link>
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
                    <c-menu-item font-weight="600" px="4" py="2" as="a" href="https://anchor.fm/impactact" target="_blank">Podcast <c-badge mx="2" py="1" variant="subtle" variant-color="green" font-size="7px">new episodes coming soon</c-badge> </c-menu-item>
                    <c-menu-item font-weight="600" px="4" py="2" as="nuxt-link" to="/blog">Blog</c-menu-item>
                    <c-menu-item font-weight="600" px="4" py="2" as="nuxt-link" to="/about">About</c-menu-item>
                </c-menu-list>

            </c-menu>
            
        </c-box>
     
    </c-box>
</template>

<script>
    import {
  CImage,
  CButton,
  CMenu,
  CMenuButton,
  CMenuList,
  CMenuItem,
  CBadge,
} from '@chakra-ui/vue'

export default {
  name: 'navbar',
  components: {
    CImage,
    CButton,
    CMenu,
    CMenuButton,
    CMenuList,
    CMenuItem,
    CBadge,
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
.nuxt-link-active {
  font-weight: 700;
}
</style>