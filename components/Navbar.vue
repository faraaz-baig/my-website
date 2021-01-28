<template>
    <c-box as="section">
        <c-image width="80px" :src="require('assets/faraazbaig.svg')" />
        <c-box>
            <c-icon-button
             icon="moon"
             aria-label="dark mode toggle"
            />
            <c-button
             aria-label="menu"
            > <c-image  width="12px" :src="require('assets/menu.svg')"/></c-button>
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